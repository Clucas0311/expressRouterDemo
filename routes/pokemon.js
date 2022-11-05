const express = require("express");
const router = express.Router();
let { pokemon } = require("../db");
//const router = require("express").Router()

// next grab all the pokemon routes and place them in here
// next thing I want to do is we are no longer in app, when we're in these modules I need to change the name to router

// GET /api/pokemon
router.get("/", (req, res) => {
  res.send(pokemon);
});

// POST /api/pokemon
router.post("/", (req, res) => {
  console.log(req.body);
  pokemon.push(req.body);
  res.send("Pokemon Added");
});

// GET /api/pokemon/:id
router.get("/:id", (req, res) => {
  console.log(req);
  const { id } = req.params;
  console.log("id", id);
  console.log("pokemon", pokemon);
  const singlePokemon = pokemon.find((poke) => poke.id === +id);
  console.log("single pokemon", singlePokemon);
  res.send(singlePokemon);
});

// DELETE /api/pokemon/:id
router.delete("/:id", (req, res) => {
  // read the id off the params object
  const { id } = req.params;
  const filteredPokemon = pokemon.filter((poke) => poke.id !== id);
  pokemon = filteredPokemon;
  res.send(pokemon);
});

module.exports = router;
