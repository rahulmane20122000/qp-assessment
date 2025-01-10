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
const user_repo_1 = __importDefault(require("./user.repo"));
const user_constants_1 = require("./user.constants");
const password_1 = require("../../utility/password");
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield user_repo_1.default.getAll();
    }
    catch (error) {
        throw user_constants_1.userConstants.NOT_FOUND;
    }
});
const getUser = (credentials) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_repo_1.default.getByField({ username: credentials.username });
        const isMatched = yield (0, password_1.comparePassword)(credentials.password, (user === null || user === void 0 ? void 0 : user.password) || '');
        console.log(isMatched);
        if (user && isMatched)
            return user;
        throw user_constants_1.userConstants.NOT_FOUND;
    }
    catch (error) {
        throw user_constants_1.userConstants.NOT_FOUND;
    }
});
const getUserByMail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_repo_1.default.getByField({ email });
        if (user)
            return user;
        throw user_constants_1.userConstants.NOT_FOUND;
    }
    catch (error) {
        throw user_constants_1.userConstants.NOT_FOUND;
    }
});
const createUser = (userDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_repo_1.default.create(userDetails);
        return user_constants_1.userConstants.USER_ADDED;
    }
    catch (error) {
        throw user_constants_1.userConstants.UNIQUE_EMAIL;
    }
});
const updateUser = (id, updatedUserDetails) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_repo_1.default.update(id, updatedUserDetails);
        return user_constants_1.userConstants.USER_UPDATED;
    }
    catch (error) {
        throw user_constants_1.userConstants.NOT_FOUND;
    }
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield user_repo_1.default.deleteOne(id);
        return user_constants_1.userConstants.USER_DELETED;
    }
    catch (error) {
        throw user_constants_1.userConstants.NOT_FOUND;
    }
});
const updatePassword = (id, newPassword, oldPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_repo_1.default.getByField({ id });
        let isMatched = true;
        if (oldPassword)
            isMatched = yield (0, password_1.comparePassword)(oldPassword, (user === null || user === void 0 ? void 0 : user.password) || '');
        if (isMatched && user) {
            yield user_repo_1.default.updatePassword(id, newPassword);
            return user_constants_1.userConstants.PASSWORD_CHANGED;
        }
    }
    catch (error) {
        throw user_constants_1.userConstants.NOT_FOUND;
    }
});
exports.default = {
    getAllUsers,
    getUser,
    getUserByMail,
    createUser,
    deleteUser,
    updateUser,
    updatePassword
};
//# sourceMappingURL=user.service.js.map