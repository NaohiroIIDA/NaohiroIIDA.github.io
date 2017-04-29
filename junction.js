

var milkcocoa = new MilkCocoa('applej226hj6o.mlkcca.com');
var StatusStore = milkcocoa.dataStore('junction');

function command_send1(btnNo){

  
  if (btnNo == 1){
   StatusStore.send({ v : 1});
  }

  if (btnNo == 2){
   
   StatusStore.send({ v : 2});
  }

  if (btnNo == 3){
   
   StatusStore.send({ v : 3});
  }
   if (btnNo == 4){
   
   StatusStore.send({ v : 4});
  }  
  
}
