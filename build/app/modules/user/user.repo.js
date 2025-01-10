"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("./user.schema");
const getByField = (field) => user_schema_1.userModel.findOne(Object.assign(Object.assign({}, field), { isDeleted: false }));
const getAll = () => user_schema_1.userModel.find();
const create = (user) => user_schema_1.userModel.create(Object.assign({}, user));
const update = (id, user) => user_schema_1.userModel.updateOne({ _id: id, isDeleted: false }, { $set: Object.assign({}, user) });
const deleteOne = (id) => user_schema_1.userModel.updateOne({ _id: id, isDeleted: false }, { $set: { isDeleted: true } });
const updatePassword = (id, newPassword) => user_schema_1.userModel.updateOne({ _id: id }, { $set: { password: newPassword } });
exports.default = {
    getAll,
    getByField,
    create,
    update,
    deleteOne,
    updatePassword
};
//# sourceMappingURL=user.repo.js.map