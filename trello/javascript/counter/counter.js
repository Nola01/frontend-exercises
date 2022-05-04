const number = document.getElementById('counter-input');
const setTo = document.getElementById('set-input');
const step = document.getElementById('step-input');

const start = document.querySelector('.setup-start');
const pause = document.querySelector('.setup-pause');
const reset = document.querySelector('.setup-reset');
const countUp = document.querySelector('.count-up');
const countDown = document.querySelector('.count-down');
const setButton =  document.querySelector('.set-button');

let count = 0;
let isPause = false;
let isCountUp = true;
let isCountDown = false;
let counter;

start.addEventListener('click', () => {
    counter = setInterval(() => {
        //console.log('start + ', step.value)
        if (isCountUp) {
            count += parseInt(step.value)
        } else if (isCountDown) {
            count -= parseInt(step.value)
        } else {
            count = 0;
        }
        //console.log(count);
        number.value = count;
    }, 1000);
    
})

pause.addEventListener('click', () => {
    //console.log('pause')
    if (isPause) {
        isPause = false;
    } else {
        isPause = true;
        clearInterval(counter);
    }
})

reset.addEventListener('click', () => {
    //console.log('reset')
    count = 0;
    number.value = count;
})

countUp.addEventListener('click', () => {
    //console.log('+1')
    if (isCountUp) {
        isCountUp = false;
        isCountDown = true;
    } else {
        isCountUp = true;
        isCountDown = false;
    }
})

countDown.addEventListener('click', () => {
    //console.log('-1')
    if (isCountDown) {
        isCountDown = false;
        isCountUp = true;
    } else {
        isCountDown = true;
        isCountUp = false;
    }
})

setButton.addEventListener('click', () => {
    //console.log('set');
    count = parseInt(setTo.value);
    number.value = count;
    setTo.value = '';
})



