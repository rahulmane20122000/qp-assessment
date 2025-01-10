"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = exports.createUserValidator = void 0;
const express_validator_1 = require("express-validator");
const validate_1 = require("../../utility/validate");
exports.createUserValidator = [
    (0, express_validator_1.body)('name').isString().notEmpty().withMessage('Name is required!'),
    (0, express_validator_1.body)('role').isString().notEmpty().withMessage('Role is required!'),
    (0, express_validator_1.body)('email').isEmail().withMessage('Email is required!'),
    validate_1.validate
];
exports.loginValidator = [
    (0, express_validator_1.body)('username').isString().notEmpty().withMessage('Username is required!'),
    (0, express_validator_1.body)('password').isString().notEmpty().withMessage('Password is required!'),
    validate_1.validate
];
//# sourceMappingURL=auth.validators.js.map