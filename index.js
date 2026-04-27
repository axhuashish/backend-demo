const express = require("express");
const app = express();

// PORT (Render automatically set karega)
const PORT = process.env.PORT || 3000;

// ENV variable (IMPORTANT)
const SECRET = process.env.JWT_SECRET || "defaultsecret";

// Home route
app.get("/", (req, res) => {
  res.send("Hello, Backend is Working!");
});

// Secret route
app.get("/secret", (req, res) => {
  res.send("Secret is: " + SECRET);
});

// Server start
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});