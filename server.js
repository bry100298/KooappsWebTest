const express = require('express');
const phpExpress = require('php-express')();
const sqlite3 = require('sqlite3');

const app = express();

// Set up the PHP server
app.engine('php', phpExpress.engine);
app.set('views', './'); // The root directory of your project
app.set('view engine', 'php');

app.all(/.+\.php$/, phpExpress.router);

// Serve static files from both the client and server directories
app.use(express.static('.'));
app.use(express.static('client'));

// Handle routes to the React application
app.get('/', (req, res) => {
  res.sendFile('client/public/index.html', { root: './' });
});

// Connect to SQLite database
const db = new sqlite3.Database('./api/mydatabase.db', (err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
  } else {
    console.log('Connected to the database.');
  }
});

// Start the server
const port = 8000; // Choose any available port
app.listen(port, () => {
  console.log(`Node.js server is running at http://localhost:${port}`);
});
