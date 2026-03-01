const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/:varName', (req, res) => {
    console.log(req.params.varName);
    console.log(req.body);
    res.status(200).send("hello");
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});


//use node, nodemon and postman to use this server and perform url and body parameter requests