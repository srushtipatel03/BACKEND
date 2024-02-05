function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    var meridiem = (hours < 12 ? "AM" : "PM");
  
    hours = (hours > 12 ? hours - 12 : hours);
    hours = (hours === 0 ? 12 : hours);
  
    var clockElement = document.getElementById("clock");
  
    clockElement.innerHTML = hours + ":" + minutes + ":" + seconds + " " + meridiem;
  }
  
  setInterval(updateClock, 1000);
  