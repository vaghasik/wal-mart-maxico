'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const registerRoutes = require('./routes');
const cors = require('cors');

app.use(cors()); // Use this after the variable declaration
app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.json());
// server config
const port = process.env.PORT || 3000;

// register routes
registerRoutes(app);

// create server start method
const start = () => {
    return new Promise((resolve, reject) => {
        // start the server
        app.listen(port, () => {
            console.log(`Connected to Port ${port}`);
            resolve()
        });
    }).catch((error) => {
        console.log(`failed to start server => ${error.message}`)
    });
}

module.exports = start;