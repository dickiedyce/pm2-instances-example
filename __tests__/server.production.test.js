const request = require("supertest");
const express = require("express");
process.env.NODE_ENV = "production";
require("dotenv-flow").config({ override: true });



const app = express();
app.get("/", (req, res) => {
  res.json({
    environment: process.env.NODE_ENV,
    port: process.env.PORT,
    adminUser: process.env.ADMIN_USER
  });
});

test("loads correct .env for production", async () => {
  const response = await request(app).get("/");
  expect(response.body.environment).toBe("production");
  expect(response.body.port).toBe("3003");
  expect(response.body.adminUser).toBe("prod-admin");
});
