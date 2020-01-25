const request = require("supertest")
const db = require("../database/dbConfig")
const server = require("../api/server")

beforeEach(async () => {
  await db.seed.run()
})

describe("auth router", () => {
  test("register a new user", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "harry", password: "testing1" })
    expect(res.status).toBe(201)
  })
    test("register a new user", async () => {
    const res = await request(server)
      .post("/api/auth/register")
      .send({ username: "harry", password: "testing1" })
    expect(res.body.username).toBe("harry")
  })
})