const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;
const SECRET = process.env.JWT_SECRET || "defaultsecret";

app.get("/", (req, res) => {
  res.send("Backend is running with env variables");
});

app.get("/secret", (req, res) => {
  res.send("Secret is: " + SECRET);
});

app.get("/test", (req, res) => {
  res.send("CI/CD is working");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
