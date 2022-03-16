let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  process.stdout.write('.');
  if (key === '\u0003') {
    process.exit();
  } else if (key === "w") {
    connection.write("Move: up")
    connection.write("Say: Movin down")
  } else if (key === "a") {
    connection.write("Move: left")
    connection.write("Say: Movin right")
  } else if (key === "s") {
    connection.write("Move: down")
    connection.write("Say: Movin up")
  } else if (key === "d") {
    connection.write("Move: right")
    connection.write("Say: Movin left")
  }
};

module.exports = setupInput;