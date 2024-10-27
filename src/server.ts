import express from "express";
import db from "./config/db";
import router from "./router";
import cors, { CorsOptions } from "cors";

async function connectDB() {
  try {
    await db.authenticate();
    await db.sync({ alter: true }); // Esto permite a Sequelize modificar las tablas existentes
    console.log("Todo ok la DB");
  } catch (error) {
    console.log(error);
  }
}
connectDB();

const server = express();

const corsOption: CorsOptions = {
  origin: function (origin, callback) {
    if (origin === process.env.FRONTEND_URL) {
      callback(null, true);
    } else {
      callback(new Error("Error en cors capo"));
    }
  },
};

server.use(cors(corsOption));

server.use(express.json());
server.use("/api/fratelli", router);

export default server;
