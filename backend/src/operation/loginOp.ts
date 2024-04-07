import client from "../Database/dbConfig";
import { Express,Request,Response } from "express";


const LoginOperation = async (req: Request, res: Response) => {
    const { Email, Password } = req.body;
    try {
      // Check if the email and password match a user in the database
      const result = await client.query(
        `SELECT * FROM public."Admin" WHERE "Email" = $1 AND "Password" = $2`,
        [Email, Password]
      );
      const user = result.rows[0];
  
      if (!user) {
        return res.json({ success: false, message: "Invalid Email or Password" });
      } else {
        res.json({success: true, message: "Successful Login"});
      }
    } catch (error) {
      console.error(`The error is ${error}`);
    }
  };
  

export default LoginOperation