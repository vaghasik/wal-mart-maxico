'use strict';

const mockDBCalls = require('../database/index.js');

//Modified by Kajal
const healthCheckHandler = async (request, response) => {
    let data = await mockDBCalls.getHealth();
    data = [...new Set(data.flat(Infinity))]
    //console.log(data)
    return response.status(200).send(JSON.stringify(data));
};

module.exports = (app) => {
    app.get('/healthcheck', healthCheckHandler);
};
