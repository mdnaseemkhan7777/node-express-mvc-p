const mysql = require("mysql");
require("dotenv").config()
const con = mysql.createConnection({
    host : process.env.DB_HOST,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ,
    database: process.env.DB_NAME,
});

con.connect((err)=>{
if(err){
    // console.log("connection error");
    console.log(err)
}
})

module.exports = con;
