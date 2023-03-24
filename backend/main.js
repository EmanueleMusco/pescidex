var mysql = require('mysql');
var express = require('express');

let port = 3001;
const app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pescidex"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post('/login', (req, res) =>{
const nickname = req.body.nickname
const password = req.body.password

//prende i dati dal front end e controlla che esistano gli utenti nel database

//manda la risposta ai vari client, cosi da poter accedere o meno in base alla risposta del server
})

app.listen(port, () => {

    console.log("ascolto porta " +port)
  
  })