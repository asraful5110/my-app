"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var loginController_1 = require("../controllers/loginController");
var login_1 = require("../middlewares/login");
var route = (0, express_1.Router)();
route.post('/', login_1.login, loginController_1.loginController);
exports.default = route;
