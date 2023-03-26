var mysql = require('mysql');
var express = require('express');
const cors = require('cors');

let port = 3001;
const app = express();
app.use(express.json());

app.use(cors());

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

console.log(nickname, password);

//prende i dati dal front end e controlla che esistano gli utenti nel database
  con.query(
    "SELECT * FROM utenti WHERE nickname = ? AND password = ?",[nickname, password],
    (err, result)=>{
      if(err){
        res.send({err: err})
      }
      if(result.length > 0){
        res.send(result)
      }else {
        res.send({message: "Password/Username sbagliati!"})
      }
    }
  )

//manda la risposta ai vari client, cosi da poter accedere o meno in base alla risposta del server
})

app.listen(port, () => {

    console.log("ascolto porta " +port)
  
  })