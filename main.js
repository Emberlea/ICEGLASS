canvas=document.getElementById("mc");
ctx=canvas.getContext("2d");

var back_img="CarvsJet.gif";

var can_img="https://clipground.com/images/racetrack-number-1-clipart-20.png";

var racecar1_img="free-race-car-clipart-27.png";
var car1_height=100;
var car1_width=150;
var car1_x=10;
var car1_y=10;

var racecar2_img="free-race-car-clipart-27.png";
var car2_height=100;
var car2_width=150;
var car2_x=10;
var car2_y=200;

function done(){
    backoff_img = new Image();
    backoff_img.onload = first;
    backoff_img.src = back_img;

    carone= new Image();
    carone.onload = second;
    carone.src = racecar1_img;

    cartwo= new Image();
    cartwo.onload = third;
    cartwo.src = racecar2_img;
}

function first(){
    ctx.drawImage(back_img,0,0,canvas.width,canvas.height);
}
function second(){
    ctx.drawImage(carone,car1_x,car1_y,car1_width,car1_height);
}
function third(){
    ctx.drawImage(cartwo,car2_x,car2_y,car2_width,car2_height);
}
 window.addEventListener("keydown",kp);
 function kp(e){
     if(keydown=="38"){
         Up();
         console.log("uparrowkey");
     }
     if(keydown=="40"){
         Down();
         console.log("downarrowkey");
     }
     if(keydown=="37"){
         left()
         console.log("leftarrowkey");
     }
     if(keydown=="39"){
         Right()
         console.log("rightarrowkey");
     }
     if(keydown=="87"){
         W();
         console.log("w")
     }
     if(keydown=="65"){
         A();
         console.log("a");
     }
     if(keydown=="83"){
         S();
         console.log("s");
     }
     if(keydown=="68"){
         D();
         console.log("d");
     }
 }