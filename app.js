// app.js
var MilkCocoa = require('milkcocoa');
var milkcocoa = new MilkCocoa("blueifne577j.mlkcca.com");
var ds = milkcocoa.dataStore("PK");

var SerialPort = require("serialport").SerialPort;

var port = "/dev/ttyACM0";
//var port = "/dev/ttyMFD2";
var sp = new SerialPort(port, {
  baudrate:19200,
  dataBits:8,
  parity:'none',
  stopBits:1,
  flowControl:false
});

ds.on('send',function(cmd){
  console.log(cmd.value.cmd);
  sp.write(cmd.value.cmd);
});
