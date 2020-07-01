const net = require('net');
const { stderr, stdin } = require('process');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.148',
    // host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', (server) => {
    console.log("Successfully connected to game");
    // console.log(server)
    conn.write("Name: KM");
    
    // stdin.on('data', function (data) {

    // });    
  })
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
}

module.exports = {connect};