
var x = document.querySelector('#luck');
x.style.baground = 'yellow';
console.log(x);



function changeColor(color) { 
  var color = prompt('Add the color for background');
  document.body.style.background = color; 
} 

var y = document.querySelector('h1');
y.style.background = "yellow";
console.log(y);


function myMusic(){
  var audio = new Audio('C:\Users\miuntila\music\Saw SoundTrack.mp3');
  audio.play
  }

function dodoFunction() {
    var num = Math.floor(Math.random()*10);
      var x, result, span;
      x = document.getElementById("dod").value;
      span = (num !=x) ? "Ne ugadal!!!!" : "Crasava!!!!";
      document.getElementById("demo1").innerHTML = span;
      result = (num != x) ?  '<img src = "https://diez.md/wp-content/uploads/2018/09/pppp-826x465.jpg">'  : '<img src = "https://memegenerator.net/img/instances/46614898.jpg">' 
      document.getElementById("demo2").innerHTML = result ;
    }
