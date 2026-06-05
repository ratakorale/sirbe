import { response, Router } from "express";
import db from "../db";
import { RowDataPacket } from "mysql2";

const router = Router();

router.post("/login", (req, res) => {

    const { mobile, password } = req.body;

    db.query("SELECT * FROM user WHERE user.mobile = '" + mobile + "' AND user.password = '" + password + "' ", (err, result: RowDataPacket[]) => {

        if (!err) {

            if (result.length == 1) {
                res.status(200).send({ isSuccess: true, user: result[0] })
            } else {
                res.status(401).send({ msg:"invalid creditials" })
            }

        } else {
            console.error(err.message);
            res.status(500).send(err.message);
        }

    });

});


router.post("/signup", (req, res) => {
    const{fname,lname,mobile,password} = req.body

    db.query("SELECT * FROM user WHERE user.mobile = '"+mobile+"'", (err, result: RowDataPacket[]) => {
         if (!err) {
            if(result.length ==1){
                response.status(409).send({msg:"mobile numer already existed"})
            }else{
                db.query("INSERT INTO user (mobile,fname,lname,password) Values('"+mobile+"','"+fname+"','"+lname+"','"+password+"')",
                    (inserterror)=>{{
                        if(!inserterror){
                            response.status(201).send({msg:"User Registered"})
                        }else{
                            response.status(500).send({msg:"error occured while registering"})
                        }
                }})
            }
         }else{
            response.status(500).send({msg:"something went wrong"})
         }
    })

    res.send("signup");
});
export default router;