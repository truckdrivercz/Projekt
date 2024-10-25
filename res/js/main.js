const firstStone = document.getElementById("stone0");
const secondStone = document.getElementById("stone1");
const thirdStone = document.getElementById("stone2");
const fourthStone = document.getElementById("stone3");
const fifthStone = document.getElementById("stone4");

const start = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let stopStones;

start.onclick = () => {
    stopStones = setInterval(() => {
        for (let i = 0; i < 5; i++) {
            let stone = document.getElementById("stone" + i);
            let leftValue = Math.random() * 1500;
            stone.style.left = leftValue + "px";
        }
    }, 1000);
};

stopBtn.onclick = () => {
    clearInterval(stopStones);
};

resetBtn.onclick = () => {
    clearInterval(stopStones);

    firstStone.style.transition = "none";
    secondStone.style.transition = "none";
    thirdStone.style.transition = "none";
    fourthStone.style.transition = "none";
    fifthStone.style.transition = "none";

    firstStone.style.left = "500px";
    firstStone.style.top = "600px";

    secondStone.style.left = "1200px";
    secondStone.style.top = "500px";

    thirdStone.style.left = "750px";
    thirdStone.style.top = "400px";

    fourthStone.style.left = "500px";
    fourthStone.style.top = "300px";

    fifthStone.style.left = "850px";
    fifthStone.style.top = "200px";

    setTimeout(() => {
        firstStone.style.transition = "3s";
        secondStone.style.transition = "3s";
        thirdStone.style.transition = "3s";
        fourthStone.style.transition = "3s";
        fifthStone.style.transition = "3s";
    }, 0);
};