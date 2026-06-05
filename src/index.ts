import user from "./routes/user"
import express from "express";
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("welcome to chat app api");
});

app.use("/user",user);
app.listen(3000,()=>{
    console.log("server started");
    console.log("server running : http://localhost:3000/");
});