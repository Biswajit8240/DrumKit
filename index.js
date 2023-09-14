var NumberOfDrums = document.querySelectorAll(".drum").length;

function keys(value){
  switch (value) {
    case "w":
      var audio = new Audio('tom-0.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('tom-1.mp3');
      audio.play();
      break;
    case "s":
      var audio = new Audio('tom-2.mp3');
      audio.play();
      break;
    case "d":
      var audio = new Audio('tom-3.mp3');
      audio.play();
      break;
    case "j":
      var audio = new Audio('tom-4.mp3');
      audio.play();
      break;
    case "k":
      var audio = new Audio('tom-5.mp3');
      audio.play();
      break;
    case "l":
      var audio = new Audio('tom-6.mp3');
      audio.play();
      break;
    default:

  }

}

for (var i = 0; i < NumberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var ButtonInnerHtml = this.innerHTML;
    keys(ButtonInnerHtml);
     keyAnimation(ButtonInnerHtml);
  });
}
document.addEventListener("keypress",function(event){
  keys(event.key);
   keyAnimation(event.key);
})
function keyAnimation(currentKey){
  var activeKey= document.querySelector("."+ currentKey);
  activeKey.classList.add("pressed");
setTimeout(function(){
  activeKey.classList.remove("pressed");
} ,100);
}
