const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
//get route
app.get('/users', (req, res) => {
	res.json({message: 'Returning all users'});	
});
//post route
app.post('/users',(req, res)=>{
	const newuser = req.body;
	res.json({message: `new user created:`, user:newuser});
});
//put route
app.put('/users/:id', (req, res) => {
	const userID = req.params.id;
	const updatedUser = req.body;
	res.json({message:`updated user with id ${userID}`,updatedUser});
});
//delete route
app.delete('/users/:id', (req, res)=>{
	const userID = req.params.id;
	res.json({message:`deleted user with id ${userID}`});
})
//start the server
app.listen(PORT, ()=>{
	console.log(`Server is runnning on http://localhost:${PORT}`);
});


