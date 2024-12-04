import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { OllamaEmbeddings, ChatOllama } from "@langchain/ollama";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { PromptTemplate } from "@langchain/core/prompts";

export const loadAndSplitTheDocs = async() => {
    console.log('Loading and splitting docs.');
    
    // Load all PDFs
    const directoryLoader = new DirectoryLoader("./data", {".pdf": (path) => new PDFLoader(path)});
    const docs = await directoryLoader.load();

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
        Instruction: Answer the question using only the context provided below. If the context does not contain information relevant to the question, acknowledge this and avoid making assumptions.
        For questions related to phone numbers, refer ONLY to the "Phone Numbers Directory" section below, IGNORE other phone numbers mentioned in the context.
        
        ---
        Context:
        {context}
        ---

        Phone Numbers Directory:
        - UNT Police: 940-565-3000
        - UNT Anonymous Report: 940-369-TIPS
        - TCU Police: 817-257-7777

        ---

        Guidelines for Answering:

        1. Relevance Check:
        - If the question is unrelated to the provided context or cannot be answered based on it, respond with:
            - "Sorry, I cannot answer this based on the provided context."
        - Use semantic understanding to identify and prioritize relevant sections in the context.

        2. Campus-Specific Guidance:
        - Associate information with the correct campus. For example, if the question specifies "UNT," use UNT-related context only. 
        - If the campus is not mentioned, provide a general answer but indicate which campus's guidelines are being referenced.

        3. Handling Abstract Questions:
        - Identify the key theme or scenario in the user's query (e.g., stalking = personal safety, harassment).
        - Use semantic matching to locate the most relevant part of the context. If uncertain, provide general safety advice derived from the context, specifying the campus.

        Example:
        - Question: "What should I do if someone is stalking me?"
            Response: "For UNT, report the incident by clicking the SOS button on GuardianBot. Call 911 for immediate help. Document the time, location, and identifying information of the stalker."

        4. Handling Procedural Questions:
        - For questions asking for actions or procedures, provide a numbered list of steps directly from the context.
        - Always begin procedural answers with: "Report the issue using GuardianBot."

        5. Handling Mismatched Context:
        - If retrieved context is unrelated, clarify: "The retrieved information does not address the question. Please specify or reframe your query."

        6. Content Filtering:
        - Avoid assumptions or general knowledge not found in the context.
        - Ignore unrelated details from other campuses unless explicitly asked.

        7. Response Format:
        - For fact-based queries: Provide a concise answer.
        - For abstract or procedural questions: Use a step-by-step format.
        - Always specify the campus or indicate if context is general.

        ---

        Examples:

        Scenario 1:
        - Question: "What should I do if someone is stalking me?"
            Response: 
            - Report the stalking by clicking the SOS button on GuardianBot.
            - Call 911 for immediate help.
            - Document details like time, location, and identifying information.
            (Derived from UNT guidelines.)

        Scenario 2:
        - Question: "What should I do if I see a car accident?"
            Response:
            - Report the accident using GuardianBot and call 911.
            - Check for injuries and provide assistance if safe.
            - Follow any additional steps mentioned in the context.
            (Derived from TCU guidelines.)

        Scenario 3 (Unrelated Context):
        - Question: "How do I prepare for a fire drill?"
            Response: "Sorry, I cannot answer this based on the provided context."

        ---

        Evaluation Criteria:
        - Responses must be directly relevant.
        - Fully based on the provided context.
        - Free from assumptions or irrelevant details.

        Question: {question}
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