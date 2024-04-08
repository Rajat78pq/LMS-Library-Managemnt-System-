import client from "../Database/dbConfig";
import { Request,Response } from "express";

const AddBook =async(req:Request,res:Response)=>{
    const {Registration,Branch,RollNo,BookName,Author,Date} = req.body;
    
    try {
        const result = await client.query(`INSERT INTO public."Book"(
            "Registration", "Branch", "RollNo", "BookName", "Author", "Date")
            VALUES ($1, $2, $3, $4, $5, $6)`,[Registration,Branch,RollNo,BookName,Author,Date]);
            res.json({succes:true, Message:"Data has been Insert"})
    } catch (error) {
        console.log(`error from book ${error}`)
    }
}

export default AddBook;