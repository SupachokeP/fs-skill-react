const server = require("http").createServer();

const io = require("socket.io")(server);

server.listeners(8080, function (err) {
  if (err) throw err;
  console.log("server listen port 8080");
});
