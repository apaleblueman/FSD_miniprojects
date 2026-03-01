const express = require('express');
const cards = require('./cards.js');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
//welcome get
app.get('/' ,(req,res) =>{
  res.status(200).json({message:"Welcome to Card Collection RESTful API"});
});
//get route
app.get('/cards' ,(req,res) =>{
	res.status(200).json({message:"Current deck",cards});
});

//get a specific card 
app.get('/cards/:id' ,(req,res) =>{
  const cardid = req.params.id;
  const requestedCard = cards.find((carObj)=>carObj.id == cardid);
  if(!requestedCard){res.status(404).json({message:"unknow card id"})}
  else{res.status(200).json(requestedCard)}
});
//post route
app.post('/cards/' ,(req,res) =>{
  const cardToAdd = req.body;
  if(!cardToAdd){
    res.status(400).json({message:"empty data not allowed"});
  }
  cards.push(cardToAdd)
	res.status(201).json({message:`Added following new card to current deck`,cardToAdd});
});
//

// Start the server
app.listen(PORT, () => {
  console.log(`🃏 Card API running at http://localhost:${PORT}`);
});
