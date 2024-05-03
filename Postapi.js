const client = require('./connection.js');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 1351;

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.post('/category', (req, res) => {
    const user = req.body;
    console.log(user);

    const postQuery = `INSERT INTO categories(category_id, category_name, description)
                       VALUES ($1, $2, $3)`;

    const values = [user.category_id, user.category_name, user.description];

    client.query(postQuery, values, (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log('Category added successfully');
            res.status(200).json({ message: 'Category added successfully' });
        }
        client.end; // Close the database connection
    });
});

// Connect to the database
client.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
    } else {
        console.log('Connected to database');
    }
});
