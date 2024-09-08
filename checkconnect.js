const axios = require("axios");
const express = require("express");
const router = express.Router();
require("dotenv").config();

console.log(process.env.API_KEY.slice(0, 2) + process.env.API_KEY.slice(-2));
try {
  axios.get(
    `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`,
    (req, res) => {
      console.log(res);
    }
  );
  console.log(process.env.API_KEY.slice(0, 2) + process.env.API_KEY.slice(-2));
} catch (error) {
  console.log(
    error + process.env.API_KEY.slice(0, 2) + process.env.API_KEY.slice(-2)
  );
}

module.exports = router;
