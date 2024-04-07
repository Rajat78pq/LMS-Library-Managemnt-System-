import client from "../Database/dbConfig";
import { Express,Request,Response } from "express";


const UpdateEmail =async(req:Request, res:Response)=>{
    const Id = 1;
    const {Password} = req.body;
    try{
        await client.query(`UPDATE public."Admin"
        SET "Password"=$1
        WHERE "Id" = $2`, [Password, Id]);
        res.json({success:true, message:"Password Reset"})
    }catch(err){
        console.error(`my Error is ${err}`);
    }
}

export default UpdateEmail;