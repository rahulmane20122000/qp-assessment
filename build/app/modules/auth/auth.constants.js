"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authConstants = void 0;
const response_handler_1 = require("../../utility/response-handler");
exports.authConstants = {
    LOGIN: new response_handler_1.MessageHandler(200, 'User Logged In!!!'),
    LOGOUT: new response_handler_1.MessageHandler(200, 'User Logout!!!'),
    INVALID_DETAILS: new response_handler_1.MessageHandler(401, 'Invalid Credentials!!!'),
    PASSWORD_UPDATED: new response_handler_1.MessageHandler(200, 'Password Updated!!!'),
    INVALID_PASSWORD: new response_handler_1.MessageHandler(401, 'Please Enter a Valid password!!!'),
    INVALID_EMAIL: new response_handler_1.MessageHandler(401, 'Please Enter a Valid MailId!!!'),
    PASSWORD_LINK: new response_handler_1.MessageHandler(200, 'Password Link Has Been Sent To Registered Mail !!!'),
    FAILED: new response_handler_1.MessageHandler(400, "Failed To Process Request!!!"),
    USER_CREATED: new response_handler_1.MessageHandler(200, "user created!!!")
};
//# sourceMappingURL=auth.constants.js.map