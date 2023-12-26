setInterval(() => {
    const time = document.getElementById("time");
    const date = new Date();
    let hours = date.getHours();
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const dayNight = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    time.textContent = `${hours}:${minutes}:${seconds} ${dayNight}`;
});
