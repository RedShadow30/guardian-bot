import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { OllamaEmbeddings, ChatOllama } from "@langchain/ollama";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { PromptTemplate } from "@langchain/core/prompts";

export const loadAndSplitTheDocs = async() => {
    console.log('Loading and splitting docs.');
    
    // Load uploaded file data
    const loader = new PDFLoader('./emergency_handbook.pdf');
    const docs = await loader.load();

    // Split document to save on Vector DB
    const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 500,
        chunkOverlap: 20,
    });
    const allSplits = await textSplitter.splitDocuments(docs);
    return allSplits;
};

export const vectorSaveAndSearch = async(splits, question) => {
    console.log('Saving embeddings in DB.');
    
    const embeddings = new OllamaEmbeddings();
    
    // Use LangChain's in-memory vector to store splitted text data
    const vectorStore = await MemoryVectorStore.fromDocuments(
        splits,
        embeddings
    );

    // Search for similarity based on user's question
    const searches = await vectorStore.similaritySearch(question);
    return searches;
};

export const generatePrompt = async(searches, question) => {
    console.log('Creating prompt.');

    let context = "";

    // Combine the handbook page's content to create prompt
    searches.forEach((search) => {
        context = context + "\n\n" + search.pageContent;
    });

    // Create the prompt to send to the LLM
    const prompt = PromptTemplate.fromTemplate(`
        Instruction: Answer the question using only the context provided below. Do not include any information that is not explicitly mentioned or directly inferable from the context.
        ---
        Context:
        {context}
        ---
        Guidelines for Answering:

        Relevance Check:

        If the question is unrelated to the context or cannot be answered using the given content, respond with:
        "Sorry, I cannot answer this."
        Answering Questions:

        Simple Questions:
        For fact-based questions (e.g., "What is the campus police phone number?"), provide a clear and direct answer derived solely from the context.
        Example: "The campus police phone number is 940-565-3000."
        Step-Based Questions:
        If the question asks for actions or procedures, provide a step-by-step list.
        Begin the response by instructing the user to report the issue using GuardianBot.
        Ensure every step is directly related to the context.
        Content Filtering:

        Do not include general knowledge, assumptions, or irrelevant details.
        Example Scenarios:
        Scenario 1:
        Question: "What should I do if someone is stalking me?"
        Response:

        Report the stalking by clicking the SOS button on GuardianBot.
        Call 911 if immediate help is required.
        Document details like time, location, and any identifying information.
        Scenario 2:
        Question: "What should I do if I see a car accident?"
        Response:

        Report the accident using GuardianBot and call 911.
        Check for injuries and provide assistance if safe.
        Follow any additional steps mentioned in the context.
        Evaluation Criteria:

        Always ensure that the response is:
        Directly relevant to the question.
        Fully based on the provided context.
        Free from extraneous or unrelated information.
        Structure of Responses:

        Use numbered steps for procedural answers.
        For simple fact-based queries, return a single direct answer.
        Answer the question: {question}
    `);

    // Specify the variables that are used in the prompt
    const formattedPrompt = await prompt.format({
        context: context,
        question: question,
    });
    return formattedPrompt;
};

export const generateOutput = async(prompt) => {
    console.log('Generating output.');
    
    // Create a ollama instance and replace model with Llama3.2
    const ollamaLLM = new ChatOllama({
        baseUrl: "http://localhost:11434",
        model: "llama3.2"
    });

    // Invoke prompt into ollama
    const response = await ollamaLLM.invoke(prompt);
    return response;
}