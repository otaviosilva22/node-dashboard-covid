const express = require ("express");
const cors = require('cors');

const CovidApiController = require('./controller/covidApiController'); 
const MessagesController = require('./controller/messagesController');

//start server
const server = express ();

//use to json request and response
server.use(express.json());

//cors
server.use(cors());
server.options('*', cors());



//object covidApiController
const covidApiController = new CovidApiController();
const messagesController = new MessagesController();

server.use(express.urlencoded({ extended: true }));

server.get('/', covidApiController.casos_full);
server.post('/writeTempFile', messagesController.writeFile);

//running server...
server.listen(3333, ()=>{
    console.log("Server is running!");
})