"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var usersControllers_1 = require("../controllers/usersControllers");
var userValidation_1 = require("../middlewares/userValidation");
var route = express_1.default.Router();
route.post('/adduser', userValidation_1.validation, userValidation_1.validationRes, usersControllers_1.addUser);
exports.default = route;
