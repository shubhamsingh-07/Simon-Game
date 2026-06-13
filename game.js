var gamePattern = [];  
var userClickedPattern = [];          
 function playSound(userChosenColour){
        var input = new Audio("./sounds/" + userChosenColour + ".mp3");
        input.play();
    }   
    
    function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");       

    setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
    },100);
}

function checkAnswer(currentLevel){
        if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){   //CHECKING IF USER'S RECENT INPUT IS SAME OR NOT
            if(userClickedPattern.length === gamePattern.length){              //DOES USER IS FOLLOWING THE GAME SEQUENCE EXACTLY, BY USING ARRAY LENGTH
            userClickedPattern =[];                                            //USER'S ARRAY IS RESETTED EACH TIME TO ENSURE NO REPETITION OF VALUES HAPPENS
            setTimeout(function(){
                nextSequence();
            }
                , 800);                                                         //SHIFTING TO THE NEXT LEVEL, HOLDS SOME TIME 
            }
        }
        else{             
            //GAME LOSED! RESTART AGAIN!!                                                
            playSound("wrong");
            $("h1").text("Game Over, Press Any Key to Restart");
            $("body").addClass("game-over");
            started = false;                               
            level = 0;
            gamePattern = [];
            userClickedPattern = [];
        }
    }
var level = 0;
var started = false;

$(document).keypress( function (){                        //STARTING OF THE GAME
    if(!started){
        nextSequence();
        started = true;
    }    
}
);
    function nextSequence(){                               //RANDOM SEQUENCE GENERATION
    $("body").removeClass("game-over");
     level++;
     $("h1").text("Level " + (level));

    var randomNumber = Math.floor(Math.random()*4);
    var buttonColours = ["red", "blue", "green", "yellow"];

    var randomChosenColour = buttonColours[randomNumber];        
    gamePattern.push(randomChosenColour); 
    animatePress(randomChosenColour);                          
    playSound(randomChosenColour);
    }


                        
$(".btn").on("click", function clickHandler(){             //USER'S SEQUENCE GENERATION
    var userChosenColour = $(this).attr("id");             //GETTING THE USER INPUT
    userClickedPattern.push(userChosenColour);             //PUSHED
    animatePress(userChosenColour); 
    playSound(userChosenColour); 

    checkAnswer(userClickedPattern.length-1);              //GETTING ARGUMENT
    
    

}
);



