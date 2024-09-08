const express = require("express");
const app = express();
const axios = require("axios");
app.use(express.json());
require("dotenv").config();
const cors = require("cors");
app.use(cors());

const characters = require("./Routes/characters");
app.use(characters);
const characterid = require("./Routes/characterid");
app.use(characterid);
const comics = require("./Routes/comics");
app.use(comics);
const comicid = require("./Routes/comicid");
app.use(comicid);
const comicsCharacid = require("./Routes/comics-characterid");
app.use(comicsCharacid);
const favorites = require("./Routes/favorites");
app.use(favorites);
const checkConnect = require("./checkconnect");
app.use(checkConnect);

app.all("*", (req, res) => {
  res.status(200).json({ message: "This route does not exist 🥸" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started", process.env);
});
