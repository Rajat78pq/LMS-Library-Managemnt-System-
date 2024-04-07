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
const LoginOperation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Email, Password } = req.body;
    try {
        // Check if the email and password match a user in the database
        const result = yield dbConfig_1.default.query(`SELECT * FROM public."Admin" WHERE "Email" = $1 AND "Password" = $2`, [Email, Password]);
        const user = result.rows[0];
        if (!user) {
            return res.json({ success: false, message: "Invalid Email or Password" });
        }
        else {
            res.json({ success: true, message: "Successful Login" });
        }
    }
    catch (error) {
        console.error(`The error is ${error}`);
    }
});
exports.default = LoginOperation;
