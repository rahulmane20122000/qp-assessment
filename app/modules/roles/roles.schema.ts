
import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config";

export const rolesModel = sequelize.define('roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    roleName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: true });