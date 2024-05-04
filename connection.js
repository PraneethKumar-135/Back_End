const { Client } = require("pg");
require("dotenv").config();



const client = new Client({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
});


module.exports = client;