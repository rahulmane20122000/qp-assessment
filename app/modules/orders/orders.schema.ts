import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config";
import { userModel } from "../users/user.schema";
import { groceryItemsModel } from "../grocery/grocery.schema";

export const userOrdersModel = sequelize.define(
    "user_orders",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        item_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM,
            values: ["pending", "shipped", "delivered"],
            defaultValue: "pending",
        },
        payment_status: {
            type: DataTypes.ENUM,
            values: ["pending", "failed", "success"],
            defaultValue: "pending",
        },
    },
    {
        timestamps: true,
    }
);

userModel.hasMany(userOrdersModel, { foreignKey: "user_id" });
userOrdersModel.belongsTo(userModel, { foreignKey: "user_id" });

groceryItemsModel.hasMany(userOrdersModel, { foreignKey: "item_id" });
userOrdersModel.belongsTo(groceryItemsModel, { foreignKey: "item_id" });
