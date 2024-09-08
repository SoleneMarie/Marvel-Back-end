const axios = require("axios");
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/comics", async (req, res) => {
  let title = "";
  let limit = 100;
  let page = 1;
  try {
    if (req.query.title) {
      title = req.query.title;
    } else {
      title = "";
    }
    if (req.query.limit) {
      limit = req.query.limit;
    }
    if (req.query.page) {
      page = req.query.page;
    }
    let skip = limit * (page - 1);

    const data = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}&title=${title}&limit=${limit}&skip=${skip}`
    );

    res.status(200).json(data.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
