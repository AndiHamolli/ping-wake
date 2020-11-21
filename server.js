const express = require('express')
const app = express()
const {get_req} = require("./ping");

app.get('/', (req, res) => {
    get_req("https://quintessential-sandy-salamander.glitch.me/git")
    .then(data => res.json(data))
    .catch(err => res.json({err:true}));
    
})

app.listen(process.env.PORT || 3000, () => {
})
