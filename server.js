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

app.get('/tip/:total/:tipPercentage', (req, res) => {
   const total = parseFloat(req.params.total);
   const tipPercentage = parseFloat(req.params.tipPercentage);

   if (tipPercentage < 0 || tipPercentage > 100) {
       res.send(`<h1>The percentage must be between 0.0 and 100.0</h1>`)
   } else {
       const tipAmount = tipPercentage * total / 100.;
       res.send(`<h1>Your tip: $${Number(tipAmount).toFixed(2)}`)
   }
})

app.get('/magic', (req, res) => {
   res.send (`<h1>Magic Eight Ball</h1>`)
})

app.get('/magic/:question', (req, res) => {

   const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", 
   "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];

   randPos = Math.floor(Math.random() * responses.length)
   const question = req.params.question;
   const answer =  responses[randPos];

   res.send (` <h1>${question}?<h1>
   <h2>Magic Eight Ball says: ${answer}</h2>`)
})


// New <----- dont need this
// Delete 
// Update 
// Create
// Edit <------- dont need this
// Show
// always add this after the last route
app.listen(PORT, () => console.log('hello i am listening on Port: ', PORT))


