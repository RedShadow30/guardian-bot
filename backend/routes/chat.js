const express = require('express');
const router = express.Router();
const Ollama = require('ollama')

router.post('/', async(req, res) => {
    console.log('Made it into the Chat');

    // Pick out the message received
    console.log(req.body.data.message);

    // Pass message to LLM
    // const response = await Ollama.chat({
    //     model: 'llama3.2',
    //     messages: req.body.data.message,
    // })

    // console.log(response);
    

    // Return the agent response
    res.json({success: true});
})

module.exports = router;