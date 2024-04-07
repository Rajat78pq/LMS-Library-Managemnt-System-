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
const AddBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Registration, Branch, RollNo, BookName, Author, Date } = req.body;
    try {
        const result = yield dbConfig_1.default.query(`INSERT INTO public."Book"(
            "Registration", "Branch", "RollNo", "BookName", "Author", "Date")
            VALUES ($1, $2, $3, $4, $5, $6)`, [Registration, Branch, RollNo, BookName, Author, Date]);
        res.json({ Message: "Data has been Insert" });
    }
    catch (error) {
        console.log(`error from book ${error}`);
    }
});
exports.default = AddBook;
