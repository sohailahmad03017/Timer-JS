var getHours, getMinutes;
var startButton = document.getElementById("startButton")

var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

function start(){
    startButton.setAttribute("disabled","disabled");
    getHours = document.getElementById("getHours").value;
    console.log(getHours);
    
    getMinutes = document.getElementById("getMinutes").value;
    console.log(getMinutes); 

    hours.innerHTML = getHours;
    minutes.innerHTML = getMinutes;
    seconds.innerHTML = 59;

    setInterval(timer, 1000)
    
}

function timer(){
    seconds.innerHTML = seconds.innerHTML - 1; 
    if(seconds.innerHTML == 00){
        seconds.innerHTML = 59;
        minutes.innerHTML = minutes.innerHTML - 1;
        if(minutes.innerHTML == 00){
            minutes.innerHTML = 59;
            hours = hours - 1;
        }
    }

}



