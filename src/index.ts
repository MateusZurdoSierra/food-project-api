import express from "express";
import mongoose from "mongoose";

import { router } from "./router";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Conectado ao mongo");

    const app = express();

    app.use(express.json());
    app.use(router);

    app.listen(3001, () => {
      console.log("🔥 The server is online BROW");
    });
  })
  .catch(() => {
    console.log("Erro ao conectar ao mongodb");
  });
