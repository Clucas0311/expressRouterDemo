const express = require("express");
const router = express.Router();

// ROUTES
const pokemonRouter = require("./pokemon");
router.use("/pokemon", pokemonRouter);

const pokebagRouter = require("./pokebag");
router.use("/pokebag", pokebagRouter);

module.exports = router;
