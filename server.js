// require all my modules
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

// create my variables
const app = express();
const PORT = process.env.PORT || 3000;

// define my database and middleware
mongoose.connect(process.env.MONGO_URI, {
   useUnifiedTopology: true,
   useNewUrlParser: true,
   useCreateIndex: true,
   useFindAndModify: true
})
mongoose.connection.once('connected', () => console.log('Connected to Mongo Life is Good'))

// list my routes
// INDUCES
// INDEX
app.get('/', (req, res) => {
   res.send(`<h1>Hello World</h1>`)
})

app.get('/greeting', (req, res) => {
   res.send(`<h1>Hello Stranger</h1>`)
})

app.get('/greeting/:name', (req, res) => {
   res.send(`<h1>Hello ${req.params.name}</h1>`)
})
// New <----- dont need this
// Delete 
// Update 
// Create
// Edit <------- dont need this
// Show
// always add this after the last route
app.listen(PORT, () => console.log('hello i am listening on Port: ', PORT))


