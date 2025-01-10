import { Sequelize } from "sequelize";
import {config} from 'dotenv'

config();

const { DBUSER, PASSWORD, HOST, DBPORT, DATABASE, DIALECT } = process.env;

export const sequelize = new Sequelize(
  DATABASE as string,
  DBUSER as string,
  PASSWORD as string,
  {
    host: HOST,
    port: Number(DBPORT),
    dialect: (DIALECT as any) || "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

