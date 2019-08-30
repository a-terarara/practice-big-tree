const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

// MEMO: 演習用にロジック順序は順不同
const night = require("./routes/night/get");
app.get("/night", (req, res) => night(req, res));

const timer = require("./routes/timer/get");
app.get("/timer/:hour", (req, res) => timer(req, res));

app.listen(port, () => console.log(`localhost:${port}`));
