

var milkcocoa = new MilkCocoa('applej226hj6o.mlkcca.com');

function command_send1(btnNo){

  
  if (btnNo == 1){
    milkcocoa.dataStore('junction').push({ v : 1});
  }

  if (btnNo == 2){
   
    milkcocoa.dataStore('junction').push({ v : 1});
  }

  if (btnNo == 3){
   
    milkcocoa.dataStore('junction').send({ v : 1});
  }
   if (btnNo == 4){
   
    milkcocoa.dataStore('junction').send({ v : 1});
  }  
  
}
