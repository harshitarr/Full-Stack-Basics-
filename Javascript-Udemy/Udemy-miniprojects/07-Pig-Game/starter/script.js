const score0E1 = document.querySelector('#score--0');
const score1E1 = document.getElementById('score--1');
const diceE1 = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');


let scores, currentscore, activeplayer, playing;

const init = function () {
    scores = [0, 0];
    currentscore = 0;
    activeplayer = 0;
    playing = true;

    score0E1.textContent = 0;
    score1E1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;

    diceE1.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
};


init();

const switchplayer = function () {
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    currentscore = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};

btnroll.addEventListener('click', function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1;
        diceE1.src = `dice-${dice}.png`;
        diceE1.classList.remove('hidden');

        if (dice !== 1) {
            currentscore += dice;
            document.getElementById(`current--${activeplayer}`).textContent = currentscore;
        } else {
            switchplayer();
        }
    }
});

btnhold.addEventListener('click', function () {
    if (playing) {
        scores[activeplayer] += currentscore;
        document.getElementById(`score--${activeplayer}`).textContent = scores[activeplayer];

        if (scores[activeplayer] >= 100) {
            playing = false;
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
        } else {
            switchplayer();
        }
    }
});


btnnew.addEventListener('click', init);
