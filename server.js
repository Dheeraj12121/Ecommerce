const express = require('express');

//rest object
const app = express()

// rest api
app.get('/',(res, req) =>{
    res.send({
        message:"welcome to ecommer app"
    })
})


// Port
const PORT = 8080
