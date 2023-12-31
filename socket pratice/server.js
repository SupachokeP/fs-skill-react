const server = require("http").createServer();

const io = require("socket.io")(server);

io.on("connection", function (socket) {
  socket.on("emit", function () {
    console.log("receive data");
  });
});
server.listen(8080, function (err) {
  if (err) throw err;
  console.log("server listen port 8080");
});
