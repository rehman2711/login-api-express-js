// 5
// Routes used directly for API like middleware like app.use("half_api_url", route_from_router)
const express = require("express");

// Route imported to use
const loginRoutes = require("./routes/login-route");

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello User");
});

// PORT
const PORT = process.env.PORT || 3000;

// Starting the Express Server
app.listen(PORT, () => {
  console.log("Server is Started");
});

// Routes
app.use("/api/v2", loginRoutes);

module.exports = app;
