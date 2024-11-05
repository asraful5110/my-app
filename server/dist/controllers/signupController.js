"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDetails = exports.signup = void 0;
var users_1 = require("../models/users");
function signup(req, res) {
    res.send("this is signup page ");
}
exports.signup = signup;
function userDetails(req, res) {
    var data = req.body;
    var authorization = req.headers.authorization;
    console.log(authorization);
    var addUser = new users_1.users(data);
    addUser.save()
        .then(function (data) {
        res.status(200).json({ msg: 'Success' });
    })
        .catch(function (err) {
        res.status(401).json({ error: err.message });
    });
}
exports.userDetails = userDetails;
