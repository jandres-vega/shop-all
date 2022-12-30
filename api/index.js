const {Router} = require('express');
const express = require('express');

const app = express();
const router = Router()

app.get('/', (req, res) =>{
    res.send("Hola mundo");
});

app.listen(3001, async () => {
    console.log("listening on 3000")
})

