const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = "#";
    for (let i = 0; i < 6; i++) {
        const val = hex[Math.floor(Math.random() * 16)];
        color += val;
    }
    return color;
}

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

function changeColor(){
    document.querySelector('body').style.background = randomColor();
    num++;
}

let timer;
let bool = false;

startButton.addEventListener('click', function(){
    if(!bool){
        timer = setInterval(changeColor, 1000);
        bool = !bool;
    }
})

stopButton.addEventListener('click', function(){
    if(bool){
        clearInterval(timer);
        bool = !bool;
    }
})