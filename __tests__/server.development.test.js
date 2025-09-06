const request = require("supertest");
const express = require("express");
const path = require("path");

// Load environment variables for development
process.env.NODE_ENV = "development";
require("dotenv-flow").config({ override: true });

const app = express();
app.get("/", (req, res) => {
  res.json({
    environment: process.env.NODE_ENV,
    port: process.env.PORT,
    adminUser: process.env.ADMIN_USER
  });
});

test("loads correct .env for development", async () => {
  const response = await request(app).get("/");
  expect(response.body.environment).toBe("development");
  expect(response.body.port).toBe("3001");
  expect(response.body.adminUser).toBe("dev-admin");
});

