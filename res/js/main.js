const firstStone = document.getElementById("stone0");
const secondStone = document.getElementById("stone1");
const thirdStone = document.getElementById("stone2");
const fourthStone = document.getElementById("stone3");
const fifthStone = document.getElementById("stone4");
const start = document.getElementById("start");
let Random;

start.onclick = () => {
    setInterval(() => {
        for (let i = 0; i < 5; i++)
        {
            Random = Math.random();
            let stone = document.getElementById("stone"+i);
            let timeValue = Random*1000;
            setTimeout(() => {
                Random = Math.random();
                let leftValue = Random*1000;
                stone.style.left = leftValue+"px";
            }, timeValue);
        }
    }, 2000);
}