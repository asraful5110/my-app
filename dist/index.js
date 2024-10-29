"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// external imports
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
// middlewares imports
var notFoundError_1 = __importDefault(require("./middlewares/notFoundError"));
var defaultError_1 = __importDefault(require("./middlewares/defaultError"));
// internal imports
var users_1 = __importDefault(require("./routes/users"));
var login_1 = __importDefault(require("./routes/login"));
var checkLogin_1 = require("./middlewares/checkLogin");
// create application
var app = (0, express_1.default)();
// data parse
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// dotenv config
dotenv_1.default.config();
// application port
var port = process.env.PORT || '4000';
// databse connection
var database_url = process.env.DATABASE_URL || '';
mongoose_1.default.connect(database_url)
    .then(function () {
    console.log("Database has been connected");
})
    .catch(function (err) {
    throw new Error(err);
});
// routing setup
// users routes
app.use('/users', users_1.default);
app.use('/login', login_1.default);
app.get('/', checkLogin_1.checkLogin, function (req, res) {
    res.json(req.user);
});
// default error handler
app.use(notFoundError_1.default);
app.use(defaultError_1.default);
// create a expess sever
app.listen(port, function () { return console.log("Server is running on http://localhost:".concat(port)); });
