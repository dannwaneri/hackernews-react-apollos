const express = require('express')

const app = express()

const port = process.env || 3000;


app.get('/',(req,res) => {
    res.send(`Hell0 world`)
})



app.listen(port,()=> console.log(`express is listening on port ${port}`))


