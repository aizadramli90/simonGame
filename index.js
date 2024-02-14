//alert("Game file linked!");

//create an array of coloured button so it is easier to be used later
let buttonColours = [
    "red",
    "blue",
    "green",
    "yellow"
];

//game pattern of random generated array
let gamePattern = [];


let randomChosenColour;

let level = 0;



function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    //console.log(randomNumber);

    randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    //console.log(gamePattern);
    /* $("#"+randomChosenColour).stop().css("background-color", "#FFFF9C")
    .animate({ backgroundColor: "#FFFFFF"}, 1500); */
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour); //call the playSound function
    //console.log(randomChosenColour);
    level++;
    $('#level-title').text(`Level = ${level}`);



};

let userClickedPattern = [];
let userChosenColour;
console.log(userClickedPattern);


for (let i = 0; i < buttonColours.length; i++) {
    $("#"+buttonColours[i]).click(function(){
        userChosenColour = buttonColours[i];
        userClickedPattern.push(userChosenColour);
        //console.log(userChosenColour);
        //console.log(userClickedPattern);
        //return userClickedPattern;
        playSound(userChosenColour); //call the play sound whenever the button is clicked.
        animatePress(buttonColours[i]);
        checkAnswer(userClickedPattern.length-1);

       /*  setTimeout(function() {
            nextSequence();
        }, 1000);
 */


       /*  for (let j=0; j<gamePattern.length; j++){
            if (gamePattern[j] === userClickedPattern[j]) {
                console.log("success");
            } else {
                console.log("wrong");
            }
        } */
    });


    
};
//play sounds function
function playSound (name) {

    let audio = new Audio ("sounds/"+ name + ".mp3");
    audio.play();
/*     switch (name) {
        case "red":
            audio = new Audio ('./sounds/red.mp3');
            audio.play();
            break;

        case "blue":
            audio = new Audio ('./sounds/blue.mp3');
            audio.play();
            break;

        case "green":
            audio = new Audio ('./sounds/green.mp3');
            audio.play();
            break;

        case "yellow":
            audio = new Audio ('./sounds/yellow.mp3');
            audio.play();
            break;
        
    
        default:
            break;
    } */
};

function animatePress (currentColour) {
    $("."+currentColour).addClass("pressed");
    setTimeout(function(){
        $("."+currentColour).removeClass("pressed");
    }, 100);
};

$(document).ready(function(){ //to make sure the website is fully loaded
    $(document).keydown(function(event){ //detecting any keydown
        if (level === 0) {
            nextSequence();
        } 
        
    });

})




function checkAnswer(currentLevel) {
  
        if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
            console.log("success");
            if (userClickedPattern.length === gamePattern.length) {
                setTimeout(function(){
                    nextSequence();
                }, 1000);
                userClickedPattern=[];
            }
        } else {
            console.log("wrong");
        };
        
    
}











