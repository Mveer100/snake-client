const net = require("net");
const { IP, PORT } = require('./constants')

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.setEncoding("utf8");
  //sends name to server to display
  conn.on("connect", (connect) => {
    console.log("Successfully connected to the game server")
    conn.write("Name: MAV")
  })
  conn.on("data", (data) => {console.log(data)})
  return conn;
};

module.exports = connect;
//setInterval(() => {
//  conn.write("Move: up")
//}, );