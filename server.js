const express = require('express');

// Constants and Variabels
const app = express();
const port = 3000;

// Middleware

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})


// Template Engine

// 404

// Start Webserver
app.listen(port, () => {
    console.log('Web server running on http://localhost:${port}')
})