var character = document.getElementById("character");
var block = document.getElementById("block");
function jump() {
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate")
    }, 750);
}
//score function
function score() {
    var score = 0

    var playerScore = setInterval(
        function () {
            document.getElementById("timer").innerHTML = "Score" + score;
            score++
            //  }, 37);
            //        }
            //get values
            //setInterval(function(){
            //debugger;
            if (parseInt(score) < 500) {
                block.style.animation = 'block 3.0s infinite linear';
            } else if (parseInt(score) < 750) {
                block.style.animation = 'block 2.5s infinite linear';
            } else if (parseInt(score) < 1000) {
                block.style.animation = 'block 2s infinite linear';
            } else if (parseInt(score) < 1250) {
                block.style.animation = 'block 1.5s infinite linear';
            } else if (parseInt(score) < 1500) {
                block.style.animation = 'block 1s infinite linear';
            } else if (parseInt(score) < 3000) {
                block.style.animation = 'block .5s infinite linear';
            }
            var characterTop =
                parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
            //console.log(characterTop);
            var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
            //check if values overlap
            if (blockLeft > 60 && blockLeft < 110 && characterTop < -175) {
                console.log("DOM SAYS: Quit Losing Loser!")
                console.log(score);
                clearInterval(playerScore);
                alert("Your new score is " + score)
                return document.getElementById("timer").innerHTML = "High Score" + score;
            }
        }, 10);
}
//remove start button on start

