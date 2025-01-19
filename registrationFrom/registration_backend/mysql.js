 'use strict'
const mysql = require('mysql2');

// create database config
const config= {
    host: 'localhost',
    password:'test',
    user:'root',
    database:'myapp'
}


const getDB = ()=>{
    try {
        // Connect with DB
      const dbObject =   mysql.createConnection(config);
      dbObject.connect((err) => {

        if(!err)
            console.log('Database is connected!');
        else
            console.log('Database not connected! : '+ JSON.stringify(err, undefined,2));
        });
        return dbObject;
    } catch (error) {
        console.log("Error at db connect --",error);
    }
}

module.exports = getDB
