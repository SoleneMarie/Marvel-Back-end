const axios = require("axios");
const express = require("express");
const router = express.Router();
require("dotenv").config();

axios.get(
  `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`,
  (req, res) => {
    console.log(res);
    console.log(JSON.stringify(req));
  }
);
console.log(process.env.API_KEY.slice(0, 2) + process.env.API_KEY.slice(-2));

module.exports = router;
