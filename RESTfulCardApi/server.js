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
//get all cards or all cards with a suit
app.get('/cards', (req,res)=>{
	if(req.query.suit){
		const result = cards.filter((cardObj) => cardObj.suit.toLowerCase() === req.query.suit.toLowerCase());
		res.json({message:`Displaying all cards with ${req.query.suit}`, "cards":result});	
	}
	else{
		res.json({message:"Displaying all cards",cards});
	}

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
	if(!newCard){res.status(400).json({message:`cards cant be empty!`})}
	else{
		newCard.id = crypto.randomUUID();
		cards.push(newCard);
		res.status(201).json({message:`new card created`,newCard});
	}
});
//delete routes
//delete a specific card
app.delete('/cards/:id', (req,res) =>{
	const cardIDToDelete = req.params.id;
	const cardIndexToDelete = cards.findIndex((cardObj)=>cardObj.id == cardIDToDelete);
	if(cardIndexToDelete < 0 || !(cardIndexToDelete)){
		res.status(404).json({message:`card with id ${cardIDToDelete} doesnot exist!`});
	}
	cards.splice(cardIndexToDelete, 1);
	res.status(200).json({message:`card with id ${cardIDToDelete} deleted!`});
});
//update routes using put and patch
//put routes
app.put('/cards/:id', (req,res)=>{
	const cardIDToUpdate = req.params.id;
	const cardToUpdate = cards.find((cardObj)=>cardObj.id == cardIDToUpdate);
	if(!cardToUpdate ){
		res.status(404).json({message:`card with id ${cardIDToUpdate} doesnot exist!`});
	}
	else if(!req.body||!req.body.name||!req.body.suit||!req.body.value||!req.body.quantity||!req.body.condition){
		res.status(400).json({message:`Card details must not be empty`});
	}
	else{
		cardToUpdate.name = req.body.name;
		cardToUpdate.suit = req.body.suit;
		cardToUpdate.value = req.body.value;
		cardToUpdate.quantity = req.body.quantity;
		cardToUpdate.condition= req.body.condition;
		cardToUpdate.id = cardIDToUpdate;
		res.status(200).json({message:`updated card `,cardToUpdate});
	}
});

//start server
app.listen(port,()=>{
	console.log("server is live on http://localhost:3000/");
});
