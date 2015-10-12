
var milkcocoa = new MilkCocoa("leadida6ji33.mlkcca.com");
var pkStatusStore = milkcocoa.dataStore('pk/status');


function kakunin(btnNo){

  
  if (btnNo == 1){
   pkStatusStore.push({ 'status' : 'push1!' });
  }

  if (btnNo == 2){
   pkStatusStore.push({ 'status' : 'push2!' });
  }



  
  
}