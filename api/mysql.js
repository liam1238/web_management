const mysql = require('mysql2');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())

// create the connection to database
const connection = mysql.createConnection({
  host: 'bamba.cs.colman.ac.il',
  user: 'cs115',
  password: 'Move@115',
  database: 'MusiMatch',
});

let db_users = null;
let db_posts = null;

// Route to get all posts
app.get("/api/get", (req,res)=>{
  connection.query("SELECT * FROM Posts", (err,result)=>{
      if(err) { console.log(err) } 
      // console.log(result);
      res.send(result)
      });  
  });
  

// // get all posts
// connection.query(
//   'SELECT * FROM `Posts`',
//   function(err, results, fields) {
//     db_posts = results;
//     console.log("all the posts: ",db_posts); // results contains rows returned by server
//     // console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

// // get all users
// connection.query(
//   'SELECT * FROM `Users`',
//   function(err, results) {
//     db_users = results;
//     console.log("all users: ", db_users);
//   }
// );