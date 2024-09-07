const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
//aggiunto dotenv per una migliore sicurezza dei link e delle password
require('dotenv').config;

const app =express();
const port = 3000;


app.use(express.json());
app.use(cors());

app.use('')

//searchuser
//register
//login
app.post("/login", (req,res)=>{
    const body = req.body;
    
})



app.listen(port, '0.0.0.0', ()=>{
    console.log(`AFMS in ascolto: ${port}`);
})