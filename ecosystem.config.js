module.exports = {
  apps: [
    {
      name: "myapp-dev",
      script: "server.js",
      env: { NODE_ENV: "development" }
    },
    {
      name: "myapp-test",
      script: "server.js",
      env: { NODE_ENV: "test" }
    },
    {
      name: "myapp-prod",
      script: "server.js",
      env: { NODE_ENV: "production" }
    }
  ]
};
