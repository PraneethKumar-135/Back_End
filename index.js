// const client = require("./connection.js");
const express = require("express");


const app = express();
const { Client } = require("pg");
require("dotenv").config();



const client = new Client({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    port: process.env.PORT,
    password: process.env.PASSWORD,
});



port = process.env.PORT || 1351;
app.listen(port, () => { console.log(`Port Running on ${port} `); });


// Just Get


app.get('/categories', (req, res) => {
    client.query(`Select * from categories`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result.rows);
        }
    });
client.end;
});






// Get BY ID
// app.get(`/categories/:id`, (req, res) => {
//     client.query(`Select * from categories where category_id = ${req.params.id}`, (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result.rows);
//         }
//     });
//     client.end;
// });



client.connect();