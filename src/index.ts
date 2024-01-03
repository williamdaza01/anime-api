import express from "express";
import router from "./router/Anime/anime.router";

const app = express();
const port = 3020;

app.use("/anime", router);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
