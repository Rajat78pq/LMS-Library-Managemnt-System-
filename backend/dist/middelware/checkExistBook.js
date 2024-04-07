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
const CheckExistBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { Registration, Branch, RollNo, BookName, Author, Date } = req.body;
    try {
        const result = yield dbConfig_1.default.query(`SELECT * FROM public."Book" WHERE "Registration"=$1 AND "Branch"=$2 AND "RollNo"=$3 AND "BookName"=$4 AND "Author"=$5 AND "Date"=$6`, [Registration, Branch, RollNo, BookName, Author, Date]);
        const user = result.rows[0];
        if (user) {
            res.json({ message: "User Allready Exist" });
        }
        else {
            next();
        }
    }
    catch (error) {
        console.log(`Error from Book testing ${error}`);
    }
});
exports.default = CheckExistBook;
