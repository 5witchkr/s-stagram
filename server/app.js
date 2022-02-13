"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.static('build')); //build파일 접근 허용
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/build/index.html'); //__dirname은 루트경로알려주는것?
});
app.listen(3000, () => {
    console.log('server is running...');
});