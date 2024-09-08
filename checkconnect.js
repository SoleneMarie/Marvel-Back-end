const axios = require("axios");
const express = require("express");
const router = express.Router();
require("dotenv").config();

axios
  .get(
    `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`
  )
  .then((res) => {
    console.log("response", JSON.stringify(res.data));
  })
  .catch((error) => {
    console.log("error", Object.keys(error), JSON.stringify(error));
  });

console.log(process.env.API_KEY.slice(0, 2) + process.env.API_KEY.slice(-2));

module.exports = router;
