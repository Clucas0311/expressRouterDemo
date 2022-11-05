const express = require("express");
const app = express();

let { pokemon } = require("./db");

const path = require("path");
const morgan = require("morgan");
// Middleware
// Morgan is used to give us helpful logging messages
app.use(morgan("dev"));

// We can't just read and send data back and forth
// We need to configure our express application to parse incoming json
// This allows us to pass json back and forth
app.use(express.json());
// Used to serve static files from our public folder
app.use(express.static(path.join(__dirname, "public")));

// Custom Middleware
app.use((req, res, next) => {
  console.log("I'm a random middleware and I run everytime");
  next();
});

app.use("/pokemon", (req, res, next) => {
  console.log("Gotta catch em' all");
  next();
});

app.get("/", (req, res) => {
  console.log("Here");
  res.send("<h1>Hello World</h1>");
});

app.get("/pokemon", (req, res) => {
  res.send(pokemon);
});

app.post("/pokemon", (req, res) => {
  console.log(req.body);
  pokemon.push(req.body);
  res.send("Pokemon Added");
});

app.get("/pokemon/:id", (req, res) => {
  console.log(req);
  const { id } = req.params;
  console.log("id", id);
  console.log("pokemon", pokemon);
  const singlePokemon = pokemon.find((poke) => poke.id === +id);
  console.log("single pokemon", singlePokemon);
  res.send(singlePokemon);
});

app.delete("/pokemon/:id", (req, res) => {
  // read the id off the params object
  const { id } = req.params;
  const filteredPokemon = pokemon.filter((poke) => poke.id !== id);
  pokemon = filteredPokemon;
  res.send(pokemon);
});

const PORT = 1337;
app.listen(PORT, () => console.log(`I am listening on ${PORT}`));
