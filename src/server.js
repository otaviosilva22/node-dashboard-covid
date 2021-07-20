const express = require ("express");
const cors = require('cors');

const CovidApiController = require('./controller/covidApiController'); 


//start server
const server = express ();

//use to json request and response
server.use(express.json());

//cors
server.use(cors());
server.options('*', cors());

//object covidApiController
const covidApiController = new CovidApiController();

server.get('/', covidApiController.casos_full);


//running server...
server.listen(3333, ()=>{
    console.log("Server is running!");
})