"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userConstants = void 0;
const response_handler_1 = require("../../utility/response-handler");
exports.userConstants = {
    NOT_FOUND: new response_handler_1.MessageHandler(404, 'user not found!'),
    USER_ADDED: new response_handler_1.MessageHandler(201, 'user added!'),
    USER_UPDATED: new response_handler_1.MessageHandler(200, 'user updated!'),
    PASSWORD_CHANGED: new response_handler_1.MessageHandler(200, 'password changed!'),
    USER_DELETED: new response_handler_1.MessageHandler(200, 'user deleted!'),
    UNIQUE_EMAIL: new response_handler_1.MessageHandler(406, 'email should be unique!')
};
//# sourceMappingURL=user.constants.js.map