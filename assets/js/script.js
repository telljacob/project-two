isEnabled = true;
timerGoing = false;

var inputValue = document.getElementById("inputWork").value;
var start = document.getElementById("startWork");
var stop = document.getElementById("stopWork");
var id = document.getElementById("timerCountdown");

start.addEventListener('click', function() {
    if (isEnabled) {
        if (timerGoing) {
            isEnabled = true;
        }
        else {
            inputValue = document.getElementById("inputWork").value;
            timer();
        }
    }
    else {
        isEnabled = true;
    }
});

stop.addEventListener('click', function() {
    isEnabled = false;
});

// Function for the active timer. Controlled by the timerGoing boolean
function timer() {
    timerGoing = true;
    let counter = inputValue * 60;
    var startcounter = 0;
    setInterval( function(){
        if (isEnabled) {
        counter--;
            startcounter++;
            console.log(counter);
        
            let hours = Math.floor((counter % (60 * 60 * 24)) / (60 * 60));
            let minutes = Math.floor((counter % (60 * 60)) / (60));
            let seconds = Math.floor((counter % 60));
        
            if( counter >= 0 ){
                id.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
            }
        
            if( counter === 1 ){
                id.innerHTML = "WORK COMPLETE";
            }
        }
    }, 1000);
};