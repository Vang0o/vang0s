function getTime() {
    const curTime = new Date();
    const hours = curTime.getHours().toString().padStart(2, '0');
    const minutes = curTime.getMinutes().toString().padStart(2, '0');
    const seconds = curTime.getSeconds().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById("currentTime").textContent = formattedTime;
}

getTime(); //initial call to display time immediately
setInterval(getTime, 1000); //makes it update every second
