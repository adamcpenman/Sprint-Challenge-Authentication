/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
  const token  = req.headers.authorization
  console.log( authorization, "authZ")

  if ( token ) {
    const secret = process.env.JWT_SECRET || "Some secrets were meant to be told";
    jwt.verify( token, secret, function (err, decodeToken) {
      if (err) {
        res.status(401).json({ message: "Invalid Token, you shall not pass!"})
      } else {
        req.token = decodeToken
        next()
      }
    })
  } else {
    res.status(400).json({ message: "Try again!"})
  }

}

// module.exports = {
//   authenticate
// }

// module.exports = (req, res, next) => {
//   res.status(401).json({ you: 'shall not pass!' });
// };
