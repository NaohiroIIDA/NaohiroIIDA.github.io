
var milkcocoa = new MilkCocoa('applej226hj6o.mlkcca.com');
var StatusStore = milkcocoa.dataStore('junction');


function command_send(btnNo){

  
  if (btnNo == 1){
   StatusStore.send({ 'cmd' : 'R/' });
  }

  if (btnNo == 2){
   StatusStore.send({ 'cmd' : 's/' });
  }

  if (btnNo == 3){
   StatusStore.send({ 'cmd' : 'q/' });
  }
   if (btnNo == 4){
   StatusStore.send({ 'cmd' : 'P180/' });
  }  
  
}
