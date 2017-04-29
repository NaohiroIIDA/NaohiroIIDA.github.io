var express = require('express');
 
// milkcocoa /////////////////////////////////
var MilkCocoa = require("../../node_modules/milkcocoa/index.js");
// testid.mlkcca.comの部分は先ほど把握しておいた今回使いたいアプリIDに合わせましょう
var milkcocoa = new MilkCocoa('applej226hj6o.mlkcca.com');
// dataStore作成
var sampleDataStore = milkcocoa.dataStore("junction");
// onでデータストアのpushイベントを監視します
sampleDataStore.on("push", function(datum) {
  console.log(datum);
});
//////////////////////////////////////////////
 
var app = express();
 
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
 
app.get('/', function(request, response) {
  response.send('Hello World!');
});
 
// /pushを叩くとMilkcocoaへデータストアに新しいデータを追加します
app.get('/push', function(request, response) {
  response.send('ds.push');
 
  sampleDataStore.push({ v : 0 });
});
app.get('/push2', function(request, response) {
  response.send('ds.push');
 
  sampleDataStore.push({ v : 255 });
});
 
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});