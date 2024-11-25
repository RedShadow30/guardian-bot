import express from "express";
import { generateOutput, generatePrompt, loadAndSplitTheDocs, vectorSaveAndSearch} from "./rag.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/rag', async(req, res) => {
    console.log('RAG reached.');
    // Receive user's question from request
    const question = req.body.data.message;
    console.log('Question received: ' + question);

    const splits = await loadAndSplitTheDocs();
    const searches = await vectorSaveAndSearch(splits, question);
    const prompt = await generatePrompt(searches, question);
    const result = await generateOutput(prompt);

    // Format the content to send
    console.log('Sent the message.');
    console.log('Agent message: ' + result.content);
    
    
    res.json({
        message: "Content generated successfully.",
        data: {
            content: result.content,
        },
    });
});

app.listen(3002, () => {
    console.log(`API running on http://localhost:3002`);
})