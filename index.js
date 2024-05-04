const client = require("./connection.js");
const express = require("express");
// require("dotenv").config();


const app = express();




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