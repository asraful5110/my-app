"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var signupController_1 = require("../controllers/signupController");
var route = express_1.default.Router();
route.get('/', signupController_1.signup);
route.post('/adduser', signupController_1.userDetails);
exports.default = route;
