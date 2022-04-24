let origin = document.getElementsByClassName('header-div-point-origin')[0];
origin.textContent = 'welcome to my game so guess number between 0 to 10';
let time = document.getElementsByClassName('header-div-time')[0];
setInterval(() => {
    time.innerHTML = new Date().getHours() + ':';
    time.innerHTML += new Date().getMinutes() + ':';
    time.innerHTML += new Date().getSeconds();
}, 1000);

let input = document.getElementsByClassName('main-input')[0];
let submit = document.getElementsByClassName('main-button')[0];
let result = document.getElementsByClassName('main-result')[0];
let guessed = document.getElementsByClassName('main-guessed')[0];
let counter = document.getElementsByClassName('main-counter')[0];
let win = document.getElementsByClassName('main-condition-win')[0];
let lose = document.getElementsByClassName('main-condition-lose')[0];
tryAgain = document.getElementsByClassName('footer-finish')[0];
var wincount = 0;
var losecount = 0;
let five = 5;
submit.addEventListener('click', function() {
    for (var i = 0; i <= 5; i++) break; {
        counter.innerHTML = 'you have ' + Number(i + five) + ' chance';
        if (input.value == '') {
            input.placeholder = 'no input';
        } else if (input.value == 'e') {
            input.placeholder = 'invalid input';
        } else {
            var random = getRandomNumberBetween(0, 10);
            if (input.value == random) {
                result.innerHTML = 'you won !';
                wincount++;
                win.innerHTML = 'turn won ' + Number(wincount);
            } else {
                result.innerHTML = 'you lost !' + '<br>';
                losecount++;
                lose.innerHTML = 'turn lose ' + Number(losecount);
            }
            result.innerHTML += ' ' + 'the number was: ' + random;
        }
        if (input.value == '') {
            guessed.innerHTML = 'nothing guessed !';
            result.innerHTML = 'no guessed';
        } else if (input.value == 'e') {
            guessed.innerHTML = 'dont input characters';
        } else {
            guessed.innerHTML = 'you guessed : ' + input.value;
            counter.innerHTML = 0;
            counter.innerHTML = 'you have ' + Number(i + five - 1) + ' chance';
            five--;
            input.value = '';
            input.placeholder = '';
            if (five == 0) {
                input.readOnly = true;
                input.placeholder = 'finished';
                submit.disabled = true;
                if (losecount > wincount) {
                    alert('you lost')
                } else if (losecount == wincount) {
                    alert('draw')
                } else {
                    alert('you won')
                }
            }
        }

    }
})
tryAgain.addEventListener('click', function() {
    window.location.reload();
})

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
