"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
const base_schema_1 = require("../../utility/base.schema");
exports.userSchema = new base_schema_1.BaseSchema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true
    },
    track: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
});
exports.userModel = (0, mongoose_1.model)('user', exports.userSchema);
//# sourceMappingURL=user.schema.js.map