import express from "express";
import db from "./config/db";
import router from "./router";

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

server.use(express.json());
server.use("/api/fratelli", router);


export default server;
