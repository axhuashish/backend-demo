const express = require("express");
const app = express();

<<<<<<< HEAD
// PORT from environment
const PORT = process.env.PORT || 3000;

// SECRET from environment
const SECRET = process.env.JWT_SECRET || "defaultsecret";

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running with env variables");
});

=======
// PORT (Render automatically set karega)
const PORT = process.env.PORT || 3000;

// ENV variable (IMPORTANT)
const SECRET = process.env.JWT_SECRET || "defaultsecret";

// Home route
app.get("/", (req, res) => {
  res.send("Hello, Backend is Working!");
});

// Secret route
>>>>>>> c7fffb56619a8622a78c0939a4781d016d3dbad8
app.get("/secret", (req, res) => {
  res.send("Secret is: " + SECRET);
});

<<<<<<< HEAD
=======
// CI/CD test route
app.get("/test", (req, res) => {
  res.send("CI/CD is working 🚀");
});

>>>>>>> c7fffb56619a8622a78c0939a4781d016d3dbad8
// Server start
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});