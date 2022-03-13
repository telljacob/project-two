document.getElementById("startWork").onclick = function() {
    isEnabled = true;
    timer();
}

document.getElementById("stopWork").onclick = function() {
    isEnabled = false;
}

document.getElementById("resetWork").onclick = function() {
    isEnabled = false;
    id = document.getElementById("timerCountdown");
    id.innerHTML = "00h:00m:00s";
}
// Import value from input
function timer() {    
    const inputValue = document.getElementById("inputWork").value;
    let counter = inputValue * 60;
    var startcounter = 0;
    setInterval( function(){
        if (isEnabled) {
        counter--;
            startcounter++;
        
            let hours = Math.floor((counter % (60 * 60 * 24)) / (60 * 60));
            let minutes = Math.floor((counter % (60 * 60)) / (60));
            let seconds = Math.floor((counter % 60));
        
            if( counter >= 0 ){
                id = document.getElementById("timerCountdown");
                id.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
            }
        
            if( counter === 1 ){
                id.innerHTML = "WORK COMPLETE";
            }
        
            let percentTimer = document.getElementById("percentCountdown");
            percentTimer.innerHTML = "Session " + Math.round((startcounter/counter)*100) + "% Completed";
        }
    }, 1000);
}

function reset() {
    let resetTimer = document.getElementById("timerCountdown").value;
    resetTimer.innerHTML = "00h:00m:00s";
    let inputValue = document.getElementById("inputWork").value;
    inputValue.innerHTML = "00h:00m:00s";
    intputWork.innerHTML = "00h:00m:00s";
}