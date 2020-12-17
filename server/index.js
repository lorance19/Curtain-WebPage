const express = require('express');
const app = express();

const mysql = require('mysql');

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'Coolboy1998!',
    database: 'thitser'
})

db.connect(function(err){
    if(err)
    return console.error('error: ' + err.message);
    console.log("connected.");
})

app.get('/', (req,res)=>{
    const sqlQuery = "INSERT INTO customer_info (customer_name, customer_phone, customer_email) VALUES ('mmpa' , '381339', 'mmpa19@gmail.com');";
    db.query(sqlQuery , (err, result)=>{
        res.send("inserted")
    });
});


app.listen(3001, ()=> {
    console.log("runnig on port 3001")
});