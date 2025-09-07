# pm2-instances-example

A minimal Node.js + Express application demonstrating **multi-environment configuration** using [`dotenv-flow`](https://www.npmjs.com/package/dotenv-flow) and **process management with PM2**. Includes **environment-isolated Jest tests** for development, test, and production.

---

## Features

* Multi-environment configuration with `.env.development`, `.env.test`, `.env.production`
* Minimal Express server exposing environment info
* PM2 ecosystem for running multiple instances concurrently
* Jest + Supertest tests for each environment in isolation
* Cross-platform ready

---

## Project Structure

```
myapp/
├─ __tests__/
│  ├─ server.development.test.js
│  ├─ server.test.test.js
│  └─ server.production.test.js
├─ node_modules/
├─ .env
├─ .env.development
├─ .env.development.local (optional for local overrides in development only )
├─ .env.test
├─ .env.production
├─ ecosystem.config.js
├─ package.json
└─ server.js
```

---

## Environment Configuration

Create `.env` files for shared and environment-specific variables:

* `.env` – default fallback values
* `.env.development` – development environment
* `.env.test` – test environment
* `.env.production` – production environment

Example `.env.development`:

```env
PORT=3001
ADMIN_USER=dev-admin
ADMIN_PW=dev1234
```

> `dotenv-flow` automatically loads the correct `.env.*` file based on `NODE_ENV`.

If you need local overrides for development, create `.env.development.local` (this file is ignored by git).

```env
BINGO=are you from around these parts?

```

---

## Running the Server

### Development

```bash
yarn dev
```

### Production

```bash
yarn start
```

### PM2

Start different environments with PM2:

```bash
yarn pm2:dev
yarn pm2:test
yarn pm2:prod
```

Control PM2 processes:

```bash
yarn pm2:restart
yarn pm2:stop
yarn pm2:delete
yarn pm2:logs
```

---

## Running Tests

Tests are split by environment for isolation.

```bash
yarn test
```

* `__tests__/server.development.test.js` → development
* `__tests__/server.test.test.js` → test
* `__tests__/server.production.test.js` → production

Each test file sets `process.env.NODE_ENV` **before loading `dotenv-flow`**, ensuring the correct environment is loaded.

> **Important:** Do **not** set `NODE_ENV=test` globally when running all tests, otherwise production tests will fail.

---

## Example Request

```bash
curl http://localhost:3001/
```

Response:

```json
{
  "environment": "development",
  "port": "3001",
  "adminUser": "dev-admin"
}
```

---

## Dependencies

* [express](https://www.npmjs.com/package/express) – web framework
* [dotenv-flow](https://www.npmjs.com/package/dotenv-flow) – multi-environment configuration
* [jest](https://www.npmjs.com/package/jest) – testing
* [supertest](https://www.npmjs.com/package/supertest) – HTTP assertions for tests
* [pm2](https://www.npmjs.com/package/pm2) – process manager

---

## License

MIT

---

This README explains the multi-environment setup, why production tests may fail if `NODE_ENV` is forced globally, and how to run the app and tests reliably.
