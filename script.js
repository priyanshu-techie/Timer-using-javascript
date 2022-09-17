const mins = document.getElementById("min");
const secs = document.getElementById("sec");
const hrs = document.getElementById("hrs");
// function for second buttons
document.getElementById("upbtnS").onclick = () => {
    if (secs.value == 59)
        secs.value = 0;
    else { secs.value = Number(document.getElementById("sec").value) + 1; }
}
document.getElementById("downbtnS").onclick = () => {
    if (secs.value == 0)
        secs.value = 59;
    else { secs.value = Number(secs.value) - 1; }
}
//functioon for minute buttons
document.getElementById("upbtnM").onclick = () => {
    if (document.getElementById("min").value == 59)
        document.getElementById("min").value = 0;
    else { document.getElementById("min").value = Number(document.getElementById("min").value) + 1; }
}
document.getElementById("downbtnM").onclick = () => {
    if (document.getElementById("min").value == 0)
        document.getElementById("min").value = 59;
    else { document.getElementById("min").value = Number(document.getElementById("min").value) - 1; }
}
//functioon for hour buttons
document.getElementById("upbtnH").onclick = () => {
    if (document.getElementById("hrs").value == 23)
        document.getElementById("hrs").value = 0;
    else { document.getElementById("hrs").value = Number(document.getElementById("hrs").value) + 1; }
}
document.getElementById("downbtnH").onclick = () => {
    if (document.getElementById("hrs").value == 0)
        document.getElementById("hrs").value = 23;
    else { document.getElementById("hrs").value = Number(document.getElementById("hrs").value) - 1; }
}


//reset button
const reset = document.getElementById("reset");
reset.onclick = () => {
    secs.value = 0;
    mins.value = 0;
    hrs.value = 0;
}



const ans = document.getElementById("timebox");
const musicsrc = document.querySelector("#thesrc");


document.getElementById("start").onclick = () => {
    if (secs.value == 0 && mins.value == 0 && hrs.value == 0)
        return;
    // this is to remove the start button on start
    const e = document.getElementById("start");
    e.classList.toggle("invisible");
    //...
    // finding the value in miliseconds
    const secVal = Number(document.getElementById("sec").value);
    const minVal = Number(document.getElementById("min").value);
    const hrsVal = Number(document.getElementById("hrs").value);

    const milisec = secVal * 1000 + minVal * 60 * 1000 + hrsVal * 3600 * 1000;
    // setting the end time miliseconds
    let currTime = new Date().getTime();
    let setTimeMili = currTime + milisec;
    // interval to find the curent time every interval and then finding the leftover seconds minutes and hours , and printing it .
    // there is a problem in this , it is one second inaccurate , solve it later.
    const x = setInterval(() => {
        let nowTime = new Date().getTime();
        let difference = setTimeMili - nowTime;
        let Hourss = Math.floor((difference / 1000) / 3600);
        let Minutes = Math.floor(((difference / 1000) % 3600) / 60);
        let Secondss = Math.floor(((difference / 1000) % 3600) % 60);
        ans.innerHTML = `${Hourss}:${Minutes}:${Secondss}`;
        if (Secondss == 0 && Hourss == 0 && Minutes == 0) {
            clearInterval(x);
            e.classList.remove("invisible");
            musicsrc.play();

        }
    }, 25)
}


   