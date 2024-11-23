const express = require('express');
const mongoose = require('mongoose');
const registerProfile = require('./routes/registerProfile');
const registerUser = require('./routes/registerUser');
const auth = require('./routes/auth');
const profile = require('./routes/profile');
const chat = require('./routes/chat');

// Create instance of express module to represent our app
const app = express();
app.use(express.json());
  
// Establish connection to MongoDB 
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER}.gihqc.mongodb.net/`, {dbName: `${process.env.DB_NAME}`})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDB...'));

app.use('/api/registerProfile', registerProfile);
app.use('/api/registerUser', registerUser); 
app.use('/api/auth', auth); 
app.use('/api/profile', profile);
app.use('/api/chat', chat);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}...`);
});
