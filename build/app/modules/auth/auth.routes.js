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
exports.authRouter = void 0;
const express_1 = require("express");
const authorize_1 = require("../../utility/authorize");
const response_handler_1 = require("../../utility/response-handler");
const roles_constants_1 = require("../roles/roles.constants");
const auth_service_1 = __importDefault(require("./auth.service"));
const auth_validators_1 = require("./auth.validators");
exports.authRouter = (0, express_1.Router)();
exports.authRouter.post('/login', auth_validators_1.loginValidator, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield auth_service_1.default.login(req.body);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.authRouter.post('/create-user', (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN]), auth_validators_1.createUserValidator, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Response = yield auth_service_1.default.createUser(req.body);
        res.send(new response_handler_1.ResponseHandler(Response));
    }
    catch (error) {
        next(error);
    }
}));
exports.authRouter.put('/reset-password', (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN, roles_constants_1.ROLES.ACCOUNTANT, roles_constants_1.ROLES.CLERK]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { newPassword, oldPassword } = req.body;
        const response = yield auth_service_1.default.resetPassword(res.locals.user.id, newPassword, oldPassword);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.authRouter.put('/change-password/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = (0, authorize_1.verifyToken)(req.params.token);
        const response = yield auth_service_1.default.resetPassword(id, req.body.newPassword);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
exports.authRouter.post('/forgot-password', (0, authorize_1.permit)([roles_constants_1.ROLES.ADMIN, roles_constants_1.ROLES.ACCOUNTANT, roles_constants_1.ROLES.CLERK]), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield auth_service_1.default.forgotPassword(req.body.email);
        res.send(new response_handler_1.ResponseHandler(response));
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=auth.routes.js.map