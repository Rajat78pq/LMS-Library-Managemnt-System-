"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const loginOp_1 = __importDefault(require("./operation/loginOp"));
const forgetOp_1 = __importDefault(require("./operation/forgetOp"));
const updateEmail_1 = __importDefault(require("./operation/updateEmail"));
const _jwtPassToken_1 = __importDefault(require("./ middelware/ jwtPassToken"));
const AddBook_1 = __importDefault(require("./BookOperation/AddBook"));
const checkExistBook_1 = __importDefault(require("./ middelware/checkExistBook"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 2000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.listen(PORT, () => {
    console.log(`App is runing on port http://localhost:${PORT} `);
});
app.get('/hello', (req, res) => {
    res.send("Hello Future");
});
app.post('/login', _jwtPassToken_1.default, loginOp_1.default);
app.post('/forget', forgetOp_1.default);
app.put('/update', updateEmail_1.default);
//Book Operation
app.post('/add-book', checkExistBook_1.default, AddBook_1.default);
const corsOptions = {
    origin: 'http://localhost:5173',
};
app.use((0, cors_1.default)(corsOptions));
// app.delete('/login/:id',async(req, res)=>{
//     const id = parseInt(req.params.id);
//     try{
//         await client.query(`DELETE FROM public."Admin"
//         WHERE id = $1`, [id]);
//         res.send("delete data");
//     }catch(err){
//         console.error(`my error is ${err}`);
//     }
// })
