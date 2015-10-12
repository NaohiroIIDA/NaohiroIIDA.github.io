
var milkcocoa = new MilkCocoa("blueifne577j.mlkcca.com");
var pkStatusStore = milkcocoa.dataStore('PK');


function kakunin(btnNo){

  
  if (btnNo == 1){
   pkStatusStore.send({ 'status' : 'push1!' });
  }

  if (btnNo == 2){
   pkStatusStore.send({ 'status' : 'push2!' });
  }



  
  
}