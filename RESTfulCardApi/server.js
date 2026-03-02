const express = require('express');
const cards = require('./cards.js');
const port = 3000;
const app = express();

app.use(express.json());
//get routes
//welcome msg
app.get('/', (req,res)=>{
	res.status(200).json({message:"Welcome to RESTapi for card collection"});
});
//get all cards
app.get('/cards', (req,res)=>{
	res.json({message:"Displaying all cards",cards});
});
//get a specific card
app.get('/cards/:id', (req,res)=>{
	const cardID = req.params.id;
	const foundCard = cards.find((CardObj)=>CardObj.id == cardID);
	if(foundCard){
		res.status(200).json({message:`Displaying card with id ${cardID}`,foundCard});
	}
	else{
		res.status(404).json({message:`Card doesnt exist with id ${cardID} `});
	}
});
//post routes
//post a new card
app.post('/cards', (req,res)=>{
	const newCard = req.body;
	if(!newCard){rs.status(400).json({message:`cards cant be empty!`})}
	else{
		newCard.id = Date.now();
		cards.push(newCard);
		res.status(201).json({message:`new card created`,newCard});
		
	}
});
app.listen(port,()=>{
	console.log("server is live on http://localhost:3000/");
});
