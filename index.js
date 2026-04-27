const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, Backend is Working!");
});

// 🔥 Test route (optional but useful)
app.get("/test", (req, res) => {
  res.send("CI/CD is working 🚀");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});