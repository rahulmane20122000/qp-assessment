"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSchema = void 0;
const mongoose_1 = require("mongoose");
class BaseSchema extends mongoose_1.Schema {
    constructor(structure, options) {
        super(Object.assign(Object.assign({}, structure), { createdBy: {
                type: String,
            }, updatedBy: {
                type: String
            }, isDeleted: {
                type: Boolean,
                default: false,
            } }), Object.assign({ timestamps: true }, options));
    }
}
exports.BaseSchema = BaseSchema;
//# sourceMappingURL=base.schema.js.map