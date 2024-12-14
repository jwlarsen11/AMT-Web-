const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const db = new sqlite3.Database('./DB.db');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/SQL1.html');
});

// Intentionally vulnerable route for SQL injection demonstration
app.post('/check-user', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`; // Vulnerable to SQL injection
    console.log("Executing query:", query);  // Debug log to show the query being executed

    db.exec(query, (err) => {
        if (err) {
            console.error("Error executing the query:", err);  // Debug log for errors
            res.json({ message: "Error querying the database." });
            return;
        }
        db.get(`SELECT * FROM users WHERE username = '${username}' AND password = '${password}';`, (err, row) => {
            if (err) {
                console.error("Error querying the database:", err);
                res.json({ message: "Error querying the database." });
                return;
            }
            if (row) {
                res.json({ message: `Login successful.` });
            } else {
                res.json({ message: `Login Failed` });
            }
        });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
