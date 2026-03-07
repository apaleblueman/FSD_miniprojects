const express = require('express');
const crypto = require('crypto');
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
        const validSuits = ['hearts', 'diamonds', 'clubs', 'spades'];
        const requestedSuit = req.query.suit.toLowerCase();
        
        if (!validSuits.includes(requestedSuit)) {
            return res.status(400).json({ 
                message: `Invalid suit: ${req.query.suit}. Valid suits: ${validSuits.join(', ')}` 
            });
        }
        
        const result = cards.filter((cardObj) => 
            cardObj.suit.toLowerCase() === requestedSuit
        );
        res.json({message:`Displaying all cards with ${req.query.suit}`, "cards":result});    
    } else {
        res.json({message:"Displaying all cards", cards});
    }
});
//get a specific card
app.get('/cards/:id', (req,res)=>{
	const cardID = req.params.id;
	const foundCard = cards.find((CardObj)=>CardObj.id === cardID);
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
    if(!newCard || Object.keys(newCard).length === 0){
        return res.status(400).json({message:`Card data cannot be empty!`});
    }
    
    // Check required fields
    const requiredFields = ['name', 'suit', 'value', 'quantity', 'condition'];
    const missingFields = requiredFields.filter(field => !newCard[field]);
    
    if(missingFields.length > 0){
        return res.status(400).json({
            message: `Missing required fields: ${missingFields.join(', ')}`
        });
    }
    
    newCard.id = crypto.randomUUID();
    cards.push(newCard);
    res.status(201).json({message:`New card created`, newCard});
});
//delete routes
//delete a specific card
app.delete('/cards/:id', (req,res) =>{
	const cardIDToDelete = req.params.id;
	const cardIndexToDelete = cards.findIndex((cardObj)=>cardObj.id === cardIDToDelete);
	if(cardIndexToDelete < 0 ){
		return res.status(404).json({message:`card with id ${cardIDToDelete} doesnot exist!`});
	}
	cards.splice(cardIndexToDelete, 1);
	res.status(200).json({message:`card with id ${cardIDToDelete} deleted!`});
});
//update routes using put 
//put routes
app.put('/cards/:id', (req,res)=>{
	const cardIDToUpdate = req.params.id;
	const cardToUpdate = cards.find((cardObj)=>cardObj.id === cardIDToUpdate);
	if(!cardToUpdate ){
		return res.status(404).json({message:`card with id ${cardIDToUpdate} doesnot exist!`});
	}
	else if(!req.body||!req.body.name||!req.body.suit||!req.body.value||!req.body.quantity||!req.body.condition){
		return res.status(400).json({message:`Card details must not be empty`});
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
//put route for replacement of first card with second
app.put('/cards/', (req,res)=>{
	const { firstCard, secondCard } = req.body;

	if(!firstCard || !secondCard){
		return res.status(400).json({ message: "Both firstCard and secondCard are required" });
	}
	const cardToReplace = cards.find((cardObj)=>{
		   return cardObj.name === firstCard.name &&
           cardObj.suit === firstCard.suit &&
           cardObj.value === firstCard.value &&
           cardObj.quantity === firstCard.quantity &&
           cardObj.condition === firstCard.condition;
	});
	if (!cardToReplace) {
    	return res.status(404).json({ message: "First card not found in collection" });
	}
	const index = cards.findIndex(card => card.id === cardToReplace.id);
	secondCard.id = crypto.randomUUID();
	cards.splice(index, 1, secondCard);
	res.status(200).json({
		message: "First card replaced with second card",
		removed: cardToReplace,
		added: secondCard
	});
});

//start server
app.listen(port,()=>{
	console.log("server is live on http://localhost:3000/");
});
