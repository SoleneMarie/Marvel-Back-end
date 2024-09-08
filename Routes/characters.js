const axios = require("axios");
const express = require("express");
const router = express.Router();
require("dotenv").config();

let name = "";
let limit = 100;
let page = 1;

router.get("/characters", async (req, res) => {
  try {
    if (req.query.name) {
      name = req.query.name;
    } else {
      name = "";
    }
    if (req.query.limit) {
      limit = req.query.limit;
    }

    if (req.query.page) {
      page = req.query.page;
    }

    let skip = limit * (page - 1);

    const data = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}&name=${name}&limit=${limit}&skip=${skip}`
    );

    res.status(200).json(data.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
