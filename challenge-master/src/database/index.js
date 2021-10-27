'use strict';
const _ = require('lodash');
const db = require('./db.js');
// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};
// start --- by Kajal 
const getHealth = () => {
    const dataAccessMethod = () => _.map(db.itemsOfUserByUsername, healthInfo => healthInfo)
    return mockDBCall(dataAccessMethod);
};
// end --- by Kajal
const getListOfAgesOfUsersWith = (item) => {
    const data = db.itemsOfUserByUsername;
    const dataAccessMethod = () => {
        // fill me in :)
        let userArray = [];
        for(let key in data){
            data[key].includes(item) ? userArray.push(key) : ""
        }
        //_.filter(db.itemsOfUserByUsername, item) //Changed by Kajal
        return userArray;
    }
    return mockDBCall(dataAccessMethod);
};

module.exports = {
    getUsers,
    getHealth, //by Kajal
    getListOfAgesOfUsersWith
};