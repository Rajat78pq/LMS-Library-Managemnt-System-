import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = "ThisisRajat";

const GenerateToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { Email, Password } = req.body;
        const token = jwt.sign({ Email: Email, Password: Password }, SECRET_KEY, { expiresIn: '1h' });
        res.clearCookie('jwtToken');
        res.cookie("jwtToken", token, {
           httpOnly: true,
           maxAge: 3600000,
           domain:'localhost',
           path:'http://localhost:5173/succes'
          });
        next();
    } catch (error) {
        console.log(error);
        next(error); // Pass the error to the error handling middleware
    }
}

export default GenerateToken;
