import client from "../Database/dbConfig";
import { Express,Request,Response } from "express";
import nodemailer from 'nodemailer';

const ForgetOperation =async(req:Request, res:Response)=>{
    const {Email} = req.body;
    try{
        const result = await client.query(`SELECT * FROM public."Admin" WHERE "Email" = $1`, [Email]);
         const user = result.rows[0];
        //  console.log(user);

         if(!user){
             res.status(401).json({success:false,message:"Invalid Email or Password"});
        }else{

            const transporter = nodemailer.createTransport({
                service:'gmail' ,
                host: 'smpt.gmail.com',
                port: 587,
                secure: false,
                auth: {
                    user: 'bloggerrejo@gmail.com',
                    pass: 'lfnp bhmo qkwt mhzh'
                }
            });

            const message = {
                from: {
                    name: 'Library Management System Msg',
                    address: 'bloggerrejo@gmail.com'
                },
                to: 'rajatkumarjena767@gmail.com',
                subject: `forget Password`,
                text: 'http://localhost:5173/changePassword',
                html: "<b>http://localhost:5173/changePassword</b>",
            };

            transporter.sendMail(message).then(()=>{
                res.json({success:true, message:"SuccessFull Login"})
            }).catch(error =>{
                console.log(`its email error : ${error}`);
            })

        }
    }catch(err){
        console.error(`my Error is : ${err}`);
    }
};

export default ForgetOperation