const net = require('net');
const { stderr, stdin } = require('process');
const { IP, localIP, PORT, bindings } = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    // host: localIP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', (server) => {
    console.log("Successfully connected to game");
    conn.write("Name: KM");
  
  })
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
}

module.exports = {connect};