const clock = document.querySelector("#clock")

const getNowTime = () => {
    const date = new Date()
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getMinutes()).padStart(2, "0");
    
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
} 

setInterval(getNowTime, 1000);