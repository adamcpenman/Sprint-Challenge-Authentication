exports.seed = async (knex) => {

    await knex('users').truncate()

    await knex('users').insert([
        { username: "harrypotter", password: "testing1" },
     
    ])
}