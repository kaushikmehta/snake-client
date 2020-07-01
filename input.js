const { stdin } = require('process');
const { IP, localIP, PORT, bindings } = require('./constants');

// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = () => {
  stdin.on("data", key => {
    if (key === '\u0003') {
      process.exit();
    }
    else if (bindings[key] !== undefined) {
      connection.write(bindings[key]);
    } 
  
    
    
    // else if (key === 'a') {
    // } else if (key === 'w') {
    //   connection.write("Move: up");
    // } else if (key === 'a') {
    //   connection.write("Move: left");
    // } else if (key === 's') {
    //   connection.write("Move: down");
    // } else if (key === 'd') {
    //   connection.write("Move: right");
    // } else if (key === 'l') {
    //   connection.write("Say: Nobody touch my food!");
    // } else if (key === 'p') {
    //   connection.write("Say: East Rulessss!");
    // }

   
  })
  }
  handleUserInput();

  return stdin;
}




// handleUserInput();


module.exports = { setupInput };