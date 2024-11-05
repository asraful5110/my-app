"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
// dotenv configure
dotenv_1.default.config();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 4000;
app.get('/', function (req, res) {
    res.cookie('abc', 'hello');
    res.status(200).send("Hello bangladesh");
});
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
