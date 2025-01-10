"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
// const { POSTGRES_CONNECTION_STRING } = process.env;
// export const sequelize = new Sequelize(POSTGRES_CONNECTION_STRING as string);
exports.sequelize = new sequelize_1.Sequelize('postgres://postgres:admin@localhost:5432/postgres');
//# sourceMappingURL=sequelize.js.map