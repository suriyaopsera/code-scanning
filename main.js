// This is a test file 1
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb'
});

function vulnerableQuery(userInput) {
    const query = `SELECT * FROM users WHERE username = '${userInput}'`; // Vulnerable to SQL Injection
    connection.query(query, (err, results) => {
        if (err) throw err;
        console.log(results);
    });
}

// Example Usage
vulnerableQuery("admin' OR '1'='1");


function executeUserInput(userInput) {
    eval(userInput); // Dangerous: Allows arbitrary code execution
}

// Example Usage
executeUserInput("console.log('Hacked!');");


const fs = require('fs');
const path = require('path');

function readFile(userInput) {
    const filePath = path.join(__dirname, userInput); // No sanitization of input
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File Content:', data);
    });
}

// Example Usage
readFile('../secret.txt'); // Directory traversal vulnerability


const apiKey = '12345-SECRET-API-KEY'; // Hardcoded sensitive information

function authenticate() {
    console.log(`Authenticating with API key: ${apiKey}`); // Shouldn't expose secrets
}

// Example Usage
authenticate();

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const userInput = req.query.name; // Unsanitized input
    res.send(`<h1>Welcome, ${userInput}</h1>`); // Vulnerable to XSS
});

// Example Usage
// Visit: http://localhost:3000/?name=<script>alert('XSS');</script>
app.listen(3000, () => console.log('App running on http://localhost:3000'));


function generateWeakToken() {
    return Math.random().toString(36).substring(2); // Not cryptographically secure
}

// Example Usage
console.log("Weak Token:", generateWeakToken());


const vm = require('vm');

function unsafeDeserialize(serializedData) {
    const sandbox = {};
    vm.createContext(sandbox);
    const script = new vm.Script(serializedData); // Dangerous: Executes untrusted data
    script.runInContext(sandbox);
}

// Example Usage
unsafeDeserialize("process.exit()"); // Malicious input
