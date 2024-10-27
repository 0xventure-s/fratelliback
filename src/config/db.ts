import { configDotenv } from "dotenv";
import { Sequelize } from "sequelize-typescript";
import MateriaPrima from "../models/MateriaPrima";
import InicioTrazabilidad from "../models/InicioTrazabilidad";
import Tostado from "../models/Tostado";
import Analisis from "../models/Analisis";
import Reposo from "../models/Reposo";
import Embalaje from "../models/Emabalaje";

configDotenv();

const db = new Sequelize(process.env.DATABASE_URL!, {
  models: [MateriaPrima, InicioTrazabilidad, Tostado, Analisis, Reposo,Embalaje],
});

export default db;
