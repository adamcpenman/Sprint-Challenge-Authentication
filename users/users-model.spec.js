const db = require("../database/dbConfig")
const Users = require('./users-model')

beforeEach(async () => {
    await db.seed.run()
})

describe('User Model', () => {
    test('find', async () => {
        const res = await Users.find()
        expect(res.length).toBeGreaterThan(0)
    })
    test("findbyId", async () => {
        const res = await Users.findById(1)
        expect(res.username).toBe("harrypotter")
    })
})