const server = require('./api/server.js');

const PORT = process.env.PORT || 3300;

if (!module.parent) {
server.listen(PORT, () => {
  console.log(`listening @ http://localhost:${3300}`);
})
}
