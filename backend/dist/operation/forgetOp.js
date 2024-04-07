"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig_1 = __importDefault(require("../Database/dbConfig"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const ForgetOperation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Email } = req.body;
    try {
        const result = yield dbConfig_1.default.query(`SELECT * FROM public."Admin" WHERE "Email" = $1`, [Email]);
        const user = result.rows[0];
        //  console.log(user);
        if (!user) {
            res.status(401).json({ success: false, message: "Invalid Email or Password" });
        }
        else {
            const transporter = nodemailer_1.default.createTransport({
                service: 'gmail',
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
            transporter.sendMail(message).then(() => {
                res.json({ success: true, message: "SuccessFull Login" });
            }).catch(error => {
                console.log(`its email error : ${error}`);
            });
        }
    }
    catch (err) {
        console.error(`my Error is : ${err}`);
    }
});
exports.default = ForgetOperation;
