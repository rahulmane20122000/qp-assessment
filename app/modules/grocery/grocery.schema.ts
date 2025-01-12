import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config";

export const groceryItemsModel = sequelize.define(
    'grocery_items',
    {
     id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        grocery_name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        price : {
            type : DataTypes.DECIMAL,
            allowNull: false
        },
        available_quantity : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
        
    },
    {
        timestamps : true
    }
)