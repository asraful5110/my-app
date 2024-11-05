"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var usersSchemas = new mongoose_1.default.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (email) {
                // eslint-disable-next-line no-useless-escape
                var isValidEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/igm;
                return isValidEmail.test(email);
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            message: function (props) { return "".concat(props.value, " is not a valid email"); }
        }
    },
    gender: {
        type: String,
        enum: ["male", 'female', "not set"],
        default: "not set"
    },
    dateOfBirth: {
        type: Date,
        required: false,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        enum: ["user", "admin"],
        default: "user"
    }
}, {
    timestamps: true
});
exports.users = mongoose_1.default.model('User', usersSchemas);
