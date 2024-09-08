const axios = require("axios");
const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get("/character/:characterID", async (req, res) => {
  try {
    const id = req.params.characterID;
    console.log(id);
    const data = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${id}?apiKey=${process.env.API_KEY}`
    );
    res.status(200).json(data.data);
    /* return déjà la liste des comics */
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
