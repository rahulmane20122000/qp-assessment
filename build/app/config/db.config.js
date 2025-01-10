"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const { DBUSER, PASSWORD, HOST, DBPORT, DATABASE, DIALECT } = process.env;
exports.sequelize = new sequelize_1.Sequelize(DATABASE, DBUSER, PASSWORD, {
    host: HOST,
    port: Number(DBPORT),
    dialect: DIALECT || "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});
//# sourceMappingURL=db.config.js.map