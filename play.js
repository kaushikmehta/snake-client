const {connect} = require('./client');
const { stdin } = require('process');
/**
 * Establishes connection with the game server
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  return stdin;
}


const handleUserInput = () => {
  stdin.on("data", key => {
    if (key === '\u0003') {
      process.exit();
    }
  })
}
setupInput();

handleUserInput();

console.log('Connecting ...');
connect();