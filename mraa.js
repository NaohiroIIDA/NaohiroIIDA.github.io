var mraa = require('mraa'); //require mraa
var MilkCocoa = require('milkcocoa');
var milkcocoa = new MilkCocoa("onifuspnxn.mlkcca.com");

//console.log('MRAA Version: ' + mraa.getVersion()); //write the mraa version to the console


var analogPin0 = new mraa.Aio(0); //setup access analog input Analog pin #0 (A0)
var analogPin1 = new mraa.Aio(1); //setup access analog input Analog pin #0 (A1)
var analogPin2 = new mraa.Aio(2); //setup access analog input Analog pin #0 (A1)
var analogPin3 = new mraa.Aio(3); //setup access analog input Analog pin #0 (A1)

var digitalPin2 = new mraa.Gpio(2);
digitalPin2.dir(mraa.DIR_OUT);

var state = true;

var digitalPin8 = new mraa.Gpio(8);
digitalPin8.dir(mraa.DIR_IN);


ds.on('send',function(data){
  console.log(data.value.cmd);
 // sp.write(cmd.value.cmd);
});


setInterval(function() {

  var an0 = analogPin0.read(); //read the value of the analog pin
  var an1 = analogPin1.read(); //read the value of the analog pin
  var an2 = analogPin2.read(); //read the value of the analog pin
  var an3 = analogPin3.read(); //read the value of the analog pin

  var di0 = digitalPin8.read();

  digitalPin2.write(state?1:0);
  state = !state;

  console.log(an0,an1,an2,an3,di0);

}, 1000);
