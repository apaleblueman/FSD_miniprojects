const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
   
    res.status(404).send("This msg was sent with 404 code hardcoded!");
});

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});
