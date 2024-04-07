import {Request, Response, NextFunction} from 'express';
import client from '../Database/dbConfig';

const CheckExistBook =async (req:Request, res:Response, next:NextFunction)=>{

    const {Registration,Branch,RollNo,BookName,Author,Date} = req.body;

    try {
        const result = await client.query(`SELECT * FROM public."Book" WHERE "Registration"=$1 AND "Branch"=$2 AND "RollNo"=$3 AND "BookName"=$4 AND "Author"=$5 AND "Date"=$6`,[Registration,Branch,RollNo,BookName,Author,Date])
        const user = result.rows[0];

        if(user){
            res.json({message:"User Allready Exist"});
        }else{
            next();
        }
    } catch (error) {
        console.log(`Error from Book testing ${error}`);
    }

}

export default CheckExistBook;