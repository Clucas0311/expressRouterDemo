const express = require("express");
const app = express();

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

app.get("/", (req, res) => {
  console.log("Here");
  res.send("<h1>Hello World</h1>");
});

// ROUTES
// Do this first then move to index.js
// const pokemonRouter = require("./routes/pokemon");
// app.use(pokemonRouter);

// const pokebagRouter = require("./routes/pokebag");
// app.use(pokebagRouter);

app.use("/api", require("./routes"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke");
});

const PORT = 1337;
app.listen(PORT, () => console.log(`I am listening on ${PORT}`));
