const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: "50541",
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