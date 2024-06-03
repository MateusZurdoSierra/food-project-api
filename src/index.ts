import path from "node:path";
import express from "express";
import mongoose from "mongoose";

import { router } from "./router";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    console.log("Conectado ao MongoDB 🔥");

    const app = express();

    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    app.use(express.json());
    app.use(router);

    app.listen(3001, () => {
      console.log("🔥 The server is online BRO, vai BRAZIL 🇧🇷");
    });
  })
  .catch(() => {
    console.log("Erro ao conectar ao mongodb");
  });
