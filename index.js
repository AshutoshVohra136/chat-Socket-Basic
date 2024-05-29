const http = require("http");

const express = require("express");
const { Server } = require("socket.io");

const app = express();

const path = require("path");
const server = http.createServer(app);

// now creating a new instance of Server(IO). io will handle our sockets.

//
const io = new Server(server);

// we can say socket are just like cliennt or user

// eg u are a socket and server is also a socket.

io.on("connection", (socket) => {
  socket.on("user-message", (message) => io.emit("message", message));
});
app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  return res.sendFile("./public/index.html");
});
server.listen(9000, () => {
  console.log(`Server Running on Port 9000`);
});
