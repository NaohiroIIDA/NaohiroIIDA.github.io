
//var milkcocoa = new MilkCocoa("blueifne577j.mlkcca.com");
//var milkcocoa = new MilkCocoa("guitarifrvgosb.mlkcca.com");
var milkcocoa = new MilkCocoa("vueifrvtyb7.mlkcca.com");
var pkStatusStore = milkcocoa.dataStore('PK3');


function command_send1(btnNo){

  
  if (btnNo == 1){
   pkStatusStore.send({ 'cmd' : 'R/' });
  }

  if (btnNo == 2){
   pkStatusStore.send({ 'cmd' : 's/' });
  }

  if (btnNo == 3){
   pkStatusStore.send({ 'cmd' : 'q/' });
  }
   if (btnNo == 4){
   pkStatusStore.send({ 'cmd' : 'P180/' });
  }  
  
}

function command_send_pos(pos){

	var send_str  = "P" +  pos + "/";
  
   pkStatusStore.send({ 'cmd' : send_str });
  
}


function command_send_speed(spd){

	spd +=12;

	var send_str  = "S" +  spd + "/";
  
   pkStatusStore.send({ 'cmd' : send_str });
  
}