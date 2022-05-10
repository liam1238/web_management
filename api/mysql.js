const cors = require('cors');
const express = require('express');
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "bamba.cs.colman.ac.il",
  username: "cs115",
  password: "Agency@Cs99",
  database: 'MusiMatch',
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  app.use(cors());
  app.get('/', (req, res) => {
      res.send('hello')
  })
  app.get('/users', (req, res) => {
    connection.query("SELECT * FROM `Users`", (err, results, fields) => {
      if(err) throw err;
      res.send(results);
    });
  });
  
  app.listen(3001, (error) => {
    if (error) throw error;
    console.log(`App listening on port ${3001}!`)
  });