const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const db = new sqlite3.Database('./users.db');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/check-user', (req, res) => {
    const username = req.body.username;
    db.get("SELECT * FROM users WHERE username = ?", [username], (err, row) => {
        if (err) {
            res.send("Error querying the database.");
            return;
        }
        if (row) {
            res.send(`User ${username} exists in the database.`);
        } else {
            res.send(`User ${username} does not exist in the database.`);
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
