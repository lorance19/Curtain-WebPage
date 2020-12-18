const express = require('express');
const app = express();
const bodyparser = require('body-parser')
const cors = require('cors')

app.use(bodyparser.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


const mysql = require('mysql');


const db = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'Coolboy1998!',
    database: 'thitser'
})


app.get('/api/get',(req,res)=> {
    const sqlselect  = 
    "SELECT * FROM thitser.customer_info";
    db.query(sqlselect ,(err, result)=>{
        res.send(result)
    });
})


db.connect(function(err){
    if(err)
    return console.error('error: ' + err.message);
    console.log("connected.");
})

app.post('/api/insert', (req,res)=>{

    const name = req.body.Name
    const phone = req.body.Phone
    const email = req.body.Email

    const sqlQuery = "INSERT INTO customer_info (customer_name, customer_phone, customer_email) VALUES (? , ?, ?);";
    db.query(sqlQuery ,[name, phone, email],(err, result)=>{
        res.send("Inserted")
    });
});


app.listen(3001, ()=> {
    console.log("runnig on port 3001")
});