const axios = require("axios");
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/character/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const data = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${id}?apiKey=${process.env.API_KEY}`
    );
    res.status(200).json(data.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/comic/:id", async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    let data = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${id}?apiKey=${process.env.API_KEY}`
    );
    res.status(200).json(data.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
