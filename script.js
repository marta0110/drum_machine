let boom = document.querySelector(".boom");
let boomS = document.querySelector(".boomS");

let clap = document.querySelector(".clap");
let clapS = document.querySelector(".clapS");

let HiHat = document.querySelector(".HiHat");
let HiHatS = document.querySelector(".HiHatS");

let kick = document.querySelector(".kick");
let kickS = document.querySelector(".kickS");

let openHat = document.querySelector(".openHat");
let openHatS = document.querySelector(".openHatS");

let ride = document.querySelector(".ride");
let rideS = document.querySelector(".rideS");

let snare = document.querySelector(".snare");
let snareS = document.querySelector(".snareS");

let tink = document.querySelector(".tink");
let tinkS = document.querySelector(".tinkS");

let tom = document.querySelector(".tom");
let tomS = document.querySelector(".tomS");

let title = document.querySelector(".h");

title.addEventListener("mouseover", titleStart);
console.log("start");

function titleStart(){
    title.classList.add("titleAnimation");
    console.log("animation");
}


window.addEventListener("keydown", fingerUp);
function fingerUp(evt){
console.log("work!");
 switch(evt.key) {
         
        case "a":
        console.log("a works");
         boomS.currentTime=0;
        boomS.play();
         
        
         kickS.pause();
         clapS.pause();
         HiHatS.pause();
         openHatS.pause();
         rideS.pause();
         snareS.pause();
         tinkS.pause();
         tomS.pause();
         
         boom.classList.add("Hover");
         boomS.addEventListener("ended", function(){
             boom.classList.remove("Hover");
         });
       
          break;
         
        case "z":
        console.log("z works");
         kickS.currentTime=0;
         
         boomS.pause();
         clapS.pause();
         HiHatS.pause();
         openHatS.pause();
         rideS.pause();
         snareS.pause();
         tinkS.pause();
         tomS.pause();
         
        kickS.play();
         kick.classList.add("Hover");
         kickS.addEventListener("ended", function(){
             kick.classList.remove("Hover");});
             
          break;
         
         
         case "s":
        console.log("s works");
        clapS.play();
         clapS.currentTime=0;
         
         boomS.pause();
         kickS.pause();
         HiHatS.pause();
         openHatS.pause();
         rideS.pause();
         snareS.pause();
         tinkS.pause();
         tomS.pause();
         
         
         clap.classList.add("Hover");
             clapS.addEventListener("ended", function(){
             clap.classList.remove("Hover");});
         
          break;
         
         
          case "d":
        console.log("D works");
        HiHatS.play();
         HiHatS.currentTime=0;
         
         
         boomS.pause();
         kickS.pause();
         clapS.pause();
         openHatS.pause();
         rideS.pause();
         snareS.pause();
         tinkS.pause();
         tomS.pause();
         HiHat.classList.add("Hover");
                 HiHatS.addEventListener("ended", function(){
            HiHat.classList.remove("Hover");});
         
          break;
         
          case "x":
        console.log("x works");
        openHatS.play();
         openHatS.currentTime=0;
         
         
         boomS.pause();
         kickS.pause();
         clapS.pause();
         HiHatS.pause();
         rideS.pause();
         snareS.pause();
         tinkS.pause();
         tomS.pause();
         
         openHat.classList.add("Hover");
        openHatS.addEventListener("ended", function(){
            openHat.classList.remove("Hover");});
          break;
         
          case "c":
        console.log("c works");
         rideS.play();
         rideS.currentTime=0;
         
        
         boomS.pause();
         kickS.pause();
         clapS.pause();
         HiHatS.pause();
         openHatS.pause();
         snareS.pause();
         tinkS.pause();
         tomS.pause();
         
         ride.classList.add("Hover");
            rideS.addEventListener("ended", function(){
             ride.classList.remove("Hover");});
         
          break;
         
           case "q":
        console.log("q works");
         snareS.play();
         snareS.currentTime=0;
         
       
         boomS.pause();
         kickS.pause();
         clapS.pause();
         HiHatS.pause();
         openHatS.pause();
         rideS.pause();
         tinkS.pause();
         tomS.pause();
         
        snare.classList.add("Hover");
         snareS.addEventListener("ended", function(){
             snare.classList.remove("Hover");});
          break;
         
         case "w":
        console.log("w works");
       tinkS.play();
        tinkS.currentTime=0;
         
        
         boomS.pause();
         kickS.pause();
         clapS.pause();
         HiHatS.pause();
         openHatS.pause();
         rideS.pause();
         snareS.pause();
         tomS.pause();
         
         tink.classList.add("Hover");
         tinkS.addEventListener("ended", function(){
             tink.classList.remove("Hover");});
          break;
         
         case "e":
        console.log("e works");
       tomS.play();
        tomS.currentTime=0;
         
         
         boomS.pause();
         kickS.pause();
         clapS.pause();
         HiHatS.pause();
         openHatS.pause();
         rideS.pause();
         snareS.pause();
         tinkS.pause();
         
         tom.classList.add("Hover");
         tomS.addEventListener("ended", function(){
             tom.classList.remove("Hover");});
          break;
         
         
               } 
    }  
    
    


boom.addEventListener("click", boomPlay);

function boomPlay() {
    boom.classList.add("Hover");
    console.log('boomPlay');
    boomS.play();

}

    
kick.addEventListener("click", kickPlay);

function kickPlay() {
    kick.classList.add("Hover");
    console.log('kickPlay');
    kickS.play();
}


clap.addEventListener("click", clapPlay);

function clapPlay() {
    clap.classList.add("Hover");
    console.log('clapPlay');
    clapS.play();
}


HiHat.addEventListener("click", HiHatPlay);

function HiHatPlay() {
    HiHat.classList.add("Hover");
    console.log('clapPlay');
    HiHatS.play();
}

openHat.addEventListener("click", OpenHatPlay);

function OpenHatPlay() {
   openHat.classList.add("Hover");
    console.log('OpenHatPlay');
    openHatS.play();
}

ride.addEventListener("click", ridePlay);

function ridePlay() {
    ride.classList.add("Hover");
    console.log('RidePlay');
    rideS.play();
}

snare.addEventListener("click", snarePlay);

function snarePlay() {
    snare.classList.add("Hover");
    console.log('snarePlay');
    snareS.play();
}

tink.addEventListener("click", tinkPlay);

function tinkPlay() {
    tink.classList.add("Hover");
    console.log('tinkPlay');
    tinkS.play();
}

tom.addEventListener("click", tomPlay);

function tomPlay() {
    tom.classList.add("Hover");
    console.log('tomPlay');
    tomS.play();
}