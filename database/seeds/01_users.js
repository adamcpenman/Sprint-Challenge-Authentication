  
// const bcrypt = require("bcryptjs")
// const hash = async (password) => await bcrypt.hash(password, 12)

exports.seed = async (knex) => {

    await knex('users').truncate()

    await knex('users').insert([
        { username: "harrypotter",  password: "testing" },
         { username: "ronweasley", password: "testing1" },
     
    ])
}