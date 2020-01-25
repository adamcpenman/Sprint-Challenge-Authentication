const router = require('express').Router();
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const Users = require("../users/users-model")

router.post('/register', (req, res) => {
    let user = req.body
    //hasing the password 2 ^ 10
    const hash = bcrypt.hashSync(user.password, 10)
    user.password = hash

    Users.add(user) 
        .then(saved => {
            res.status(201).json(saved)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


router.post('/login', (req, res) => {
  let { username, password } = req.body
  Users.findBy({ username })
    .first()
     .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = assignToken(user)

          res.status(200).json({
            token,
            message: `Welcome ${user.username}`
          })
        } else {
          res.status(401).json({ message: "You shall not pass"})
        }
      })
      .catch(err => {
        res.status(500).json(err)
      })
});

//creates and assign the token
function assignToken(user) {
    const payload = {
        username: user.username,
        password: user.password,
    }

    const secret = process.env.JWT_SECRET || "Some secrets were meant to be told";

    const options = {
        expiresIn: "1h"
    }

    return jwt.sign(payload, secret, options)
}

module.exports = router;
