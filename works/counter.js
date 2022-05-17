let count = 0

function countShow() {
    const countElement = document.querySelector('#count')
    countElement.innerText = '回数: ' + count
}


const countUp = () => {
    count++
    countShow()
}

const countClear = () => {
    count = 0
    countShow()
}

let time = 0.00
function timeUp() {
    time += 0.01
    const timeElement = document.querySelector('#time')
    timeElement.innerText = time
}

const timeStart = () => {
    setInterval(timeUp, 10);
}

