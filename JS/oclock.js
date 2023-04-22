const currentTime = () => {
    const el = document.querySelector(".oclock");
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let day = date.getDay();

    hh = hh < 10 ? `0${hh}` : hh;
    mm = mm < 10 ? `0${mm}` : mm;
    ss = ss < 10 ? `0${ss}` : ss;
    day = day < 10 ? `0${day}` : day;

    let time = `${day}:${hh}:${mm}:${ss}`;
    el.innerText = time;
};
currentTime();
setInterval(currentTime,1000);