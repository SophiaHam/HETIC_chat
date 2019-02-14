/*
Imports
*/

// => Variable d'environnement
require('dotenv').config()

// => Créer des constantes pour importer les modules NPM
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');



/*
Configuration
*/

const server = express();
const port = process.env.PORT;



/*
Start
*/

//Lancer le serveur
server.listen(port, () => {
    console.log({server:`Server listening on port ${port}`});
})