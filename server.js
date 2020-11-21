const express = require('express')
const app = express()
const port = 3000
const {get_req} = require("./ping");

app.get('/', (req, res) => {
    get_req("https://quintessential-sandy-salamander.glitch.me/git");
    res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
