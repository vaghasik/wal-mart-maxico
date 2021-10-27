'use strict';
//const { result } = require('lodash');
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
    //const itemToLookup = 'carrot';
    const itemToLookup = request.query.name;
    const data = await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup);
    const user = await mockDBCalls.getUsers();
    const resultData = {};
    user.map(obj => {
        if(data.includes(obj.username)){
            resultData[obj.age] ? ++resultData[obj.age] : resultData[obj.age] = 1
        }
    })
    return response.status(200).send(JSON.stringify(resultData));
};

module.exports = (app) => {
    app.get('/users/age', getListOfAgesOfUsersWithHandler);
};
