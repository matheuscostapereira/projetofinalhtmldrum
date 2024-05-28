// adding event listeners to all buttons
var numOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i = 0; i < numOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        // Which button is triggered
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}


//keyboards detecting 
document.addEventListener("keypress", function(event){
    //which key is pressed
    // console.log(event);
    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key){
    switch (key) {
        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "k":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "j":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "a":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            comsole.log(key);
            break;
    }
}

// button animation

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    // timer animation (set timeout)
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
    
}