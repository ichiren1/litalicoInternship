window.onload=function(){
    logDiv = document.getElementById("log");
}

var logDiv;
var log = function(){ 
    console.log(arguments);
    logDiv.innerHTML+="<left><img src='images/account.png' style='float:right'></left>";
    logDiv.innerHTML+="<div class='log'>"+arguments[0]+"<br></div>";
}
var socket = io.connect('http://localhost'); // 1

socket.on('connect', function() { // 2
  //log('connected');
  socket.emit('msg send', 'data'); // 3
  socket.on('msg push', function (msg) { // 7
    log(msg); // 8
    
  });
});

function ping(){
  var text = document.getElementById("text").value;
  socket.emit('msg send', text); // 3
}