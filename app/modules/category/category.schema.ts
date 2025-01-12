import { DataTypes } from "sequelize";
import { sequelize } from "../../config/db.config";

export const categoryModel = sequelize.define(
    'category',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        category_name : {
            type : DataTypes.STRING,
            allowNull: false
        },
        created_by : {
          type : DataTypes.STRING,
          allowNull : false
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        timestamps : true
    }
)