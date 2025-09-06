// Load environment variables depending on NODE_ENV
require("dotenv-flow").config();

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const adminUser = process.env.ADMIN_USER;
const env = process.env.NODE_ENV || "development";
const bingo = process.env.BINGO || "uh-oh!";

app.get("/", (req, res) => {
  res.json({
    message: "Minimal Express app demo",
    environment: env,
    port: port,
    adminUser: adminUser,
    bingo
  });
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port} [env=${env}]`);
});
