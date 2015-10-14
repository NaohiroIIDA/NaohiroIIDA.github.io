
var milkcocoa = new MilkCocoa("blueifne577j.mlkcca.com");
var pkStatusStore = milkcocoa.dataStore('PK');


function kakunin(btnNo){

  
  if (btnNo == 1){
   pkStatusStore.send({ 'cmd' : 'R/' });
  }

  if (btnNo == 2){
   pkStatusStore.send({ 'cmd' : 's/!' });
  }

  if (btnNo == 3){
   pkStatusStore.send({ 'cmd' : 'q/!' });
  }
   if (btnNo == 4){
   pkStatusStore.send({ 'cmd' : 'P180/!' });
  }



  
  
}