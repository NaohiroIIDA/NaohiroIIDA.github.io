
var milkcocoa = new MilkCocoa('applej226hj6o.mlkcca.com');
var StatusStore = milkcocoa.dataStore('junction');


function command_send(btnNo){

  
  if (btnNo == 1){
   StatusStore.send({ V : 0 });
  }

  if (btnNo == 2){
   StatusStore.send({ V : 1 });
  }

  if (btnNo == 3){   
    StatusStore.send({ V : 3 });

  }
   if (btnNo == 4){   
     StatusStore.send({ V : 4 });

  }  
  
}
