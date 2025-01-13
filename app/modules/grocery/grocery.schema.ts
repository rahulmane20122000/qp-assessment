import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config";
import { categoryModel } from "../category/category.schema";

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
        },
        category_id : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        created_by : {
            type : DataTypes.STRING,
            allowNull : false
        }
        
    },
    {
        timestamps : true
    }
)

groceryItemsModel.belongsTo(categoryModel,{foreignKey : 'category_id'});

categoryModel.hasOne(groceryItemsModel);