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
const authorize_1 = require("../../utility/authorize");
const email_1 = require("../../utility/email");
const password_1 = require("../../utility/password");
const roles_service_1 = __importDefault(require("../roles/roles.service"));
const user_service_1 = __importDefault(require("../user/user.service"));
const auth_constants_1 = require("./auth.constants");
const login = (loginCredentials) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_service_1.default.getUser(loginCredentials);
        if (user) {
            const role = yield roles_service_1.default.getRole(user.role);
            const token = (0, authorize_1.createToken)({ id: user._id, name: user.name, role: user.role });
            return { role: role === null || role === void 0 ? void 0 : role.name, token: token };
        }
        throw auth_constants_1.authConstants.INVALID_DETAILS;
    }
    catch (error) {
        throw error;
        // throw authConstants.FAILED;
    }
});
const createUser = (userDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashedPassword = yield (0, password_1.createHash)(userDetails.password);
        const normalPassword = userDetails.password;
        userDetails.password = hashedPassword;
        const response = yield user_service_1.default.createUser(userDetails);
        yield (0, email_1.sendEmail)(userDetails.email, "ACCOUNT CREATED", `
            Hi, ${userDetails.name},
            Login Details,
            username:- ${userDetails.username},
            password:- ${normalPassword}
        `);
        return auth_constants_1.authConstants.USER_CREATED;
    }
    catch (error) {
        throw error;
        // throw authConstants.FAILED;
    }
});
const resetPassword = (userId, newPassword, oldPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        newPassword = yield (0, password_1.createHash)(newPassword);
        yield user_service_1.default.updatePassword(userId, newPassword, oldPassword);
        return auth_constants_1.authConstants.PASSWORD_UPDATED;
    }
    catch (error) {
        throw auth_constants_1.authConstants.INVALID_PASSWORD;
    }
});
const forgotPassword = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userDetails = yield user_service_1.default.getUserByMail(email);
        const token = (0, authorize_1.createToken)(userDetails._id.toString());
        const { URL } = process.env;
        const link = `${URL}/${token}`;
        yield (0, email_1.sendEmail)(userDetails.email, "FORGOT PASSWORD", `
        Hi, ${userDetails.name},
        Your password reset link is here ${link}
    `);
        return auth_constants_1.authConstants.PASSWORD_LINK;
    }
    catch (error) {
        console.log(error);
        throw auth_constants_1.authConstants.INVALID_EMAIL;
    }
});
exports.default = {
    login,
    createUser,
    resetPassword,
    forgotPassword
};
//# sourceMappingURL=auth.service.js.map