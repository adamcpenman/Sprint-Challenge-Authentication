const supertest = require("supertest")
const db = require("../database/dbConfig")
const server = require("../api/server")

  
const bcrypt = require("bcryptjs")
const hash = async (password) => await bcrypt.hash(password, 12)

beforeEach(async () => {
  await db.seed.run()
})

describe("auth router", () => {
  test("register a new user", async () => {
    const res = await supertest(server)
      .post("/api/auth/register")
      .send({ username: "harry", password: "testing1" })
    expect(res.status).toBe(201)
  })
    test("register a new user", async () => {
    const res = await supertest(server)
      .post("/api/auth/register")
      .send({ username: "harry", password: "testing1" })
    expect(res.body.username).toBe("harry")
  })

//   THIS TEST WILL NOT WORK
test("login user with correct password", async () => {
    const res = await supertest(server)
     .post("/api/auth/login")
      .send({ username: "harrypotter",  password: "testing1" })
        expect(res.status).toBe(200)
  })
   test("login in user incorrectly", async () => {
      const res = await supertest(server)
      .post("/api/auth/login")
      .send({ username: "harrypotter", password: "testing" })
      expect(res.status).toBe(401)
  })
})