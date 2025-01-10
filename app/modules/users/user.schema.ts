import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config";
import { rolesModel } from "../roles/roles.schema";
import { ROLES } from "../../constants/roles.constants";

export const userModel = sequelize.define(
    "users",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        roleId: {
            type: DataTypes.INTEGER,
            defaultValue: ROLES.USER,
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    { timestamps: true }
);

userModel.belongsTo(rolesModel, { foreignKey: "roleId" });
rolesModel.hasOne(userModel);
