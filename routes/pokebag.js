const express = require("express");
const router = express.Router();

const { pokebag } = require("../db");

// GET /api/pokebag
router.get("/", (req, res, next) => {
  try {
    res.send(pokebag);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
