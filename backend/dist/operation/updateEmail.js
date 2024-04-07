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
const UpdateEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const Id = 1;
    const { Password } = req.body;
    try {
        yield dbConfig_1.default.query(`UPDATE public."Admin"
        SET "Password"=$1
        WHERE "Id" = $2`, [Password, Id]);
        res.json({ success: true, message: "Password Reset" });
    }
    catch (err) {
        console.error(`my Error is ${err}`);
    }
});
exports.default = UpdateEmail;
