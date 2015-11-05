var milkcocoa = new MilkCocoa("onifuspnxn.mlkcca.com");
var pkStatusStore = milkcocoa.dataStore('robo');


function robo_cmd(pos){

	var send_str  = "P" +  pos + "/";
  var send_str2  = "S" +  pos + "/";

   pkStatusStore.send({ 'cmd' : send_str,'cmd2' : send_str2});
 //  pkStatusStore.send({ 'cmd2' : send_str2});
  
}
