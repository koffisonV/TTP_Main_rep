// DOM workshop
let timeRemaining = 5;
let currentTime = document.getElementById("timer");

function decreaseTimeRemaining() {
    if (timeRemaining > 0){
        timeRemaining--;
        console.log(timeRemaining);
        currentTime.innerText = timeRemaining;
    } else{
        currentTime.innerText = "Your time is up!";
    }
}
// Call the function
decreaseTimeRemaining();
setInterval(decreaseTimeRemaining, 2000);