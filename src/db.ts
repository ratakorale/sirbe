import mysql from "mysql2";
const db = mysql.createConnection({
    host :"localhost",
    user:"root",
    password:"7210",
    database:"chat-app"
});

db.connect((error)=>{
    if(!!error){
        console.log("successfully connected to database");
    }else{
        console.error("error occurd :  "+error);
    }
});
export default db;