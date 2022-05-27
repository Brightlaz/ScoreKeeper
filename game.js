const pOne = {
    score: 0,
    button: document.querySelector('#pl1b'),
    display: document.querySelector('#pl1')
}

const pTwo = {
    score: 0,
    button: document.querySelector('#pl2b'),
    display: document.querySelector('#pl2')
}

const reset = document.querySelector('#reset')
const play = document.querySelector('#range')


let w = 3;
isGameOver = false;

play.addEventListener('change', function() {
    w = parseInt(this.value);
    reset1()
})


function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === w) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

pOne.button.addEventListener('click', function() {
    updateScores(pOne, pTwo)
})

pTwo.button.addEventListener('click', function() {
    updateScores(pTwo, pOne)
})

reset.addEventListener('click', reset1);

function reset1() {
    isGameOver = false;
    for (let p of [pOne, pTwo]) {
        p.score = 0;
        p.display.textContent = 0;
        p.button.disabled = false;
        p.display.classList.remove('has-text-success', 'has-text-danger')
    }
}

const color = () => {
    p1.classList.add('winner')
    p2.classList.remove('loser')
}