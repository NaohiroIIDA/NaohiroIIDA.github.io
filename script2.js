
var milkcocoa = new MilkCocoa("blueifne577j.mlkcca.com");
var pkStatusStore = milkcocoa.dataStore('PK');


function kakunin(btnNo){

  
  if (btnNo == 1){
   pkStatusStore.push({ 'status' : 'push1!' });
  }

  if (btnNo == 2){
   pkStatusStore.push({ 'status' : 'push2!' });
  }



  
  
}