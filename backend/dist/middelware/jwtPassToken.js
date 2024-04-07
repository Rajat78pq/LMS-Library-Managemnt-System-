"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = "ThisisRajat";
const GenerateToken = (req, res, next) => {
    try {
        const { Email, Password } = req.body;
        const token = jsonwebtoken_1.default.sign({ Email: Email, Password: Password }, SECRET_KEY, { expiresIn: '1h' });
        res.clearCookie('jwtToken');
        res.cookie("jwtToken", token, {
            httpOnly: true,
            maxAge: 3600000,
            domain: 'localhost',
            path: 'http://localhost:5173/succes'
        });
        next();
    }
    catch (error) {
        console.log(error);
        next(error); // Pass the error to the error handling middleware
    }
};
exports.default = GenerateToken;
