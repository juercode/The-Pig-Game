'use strict';
// Loja ka 9 elemente qe duhen te funksionojne.

//1. Butoni i New Game i cili ben te mundur kthimin e te gjitha
// vlerave ne gjendjen fillestare te tyre.

//2. Imazhet me zarat qe do te shfaqen sipas cdo rasti qe do te
// gjenerohet automatikisht nga variabli qe do krijohet dhe do lidhet me imazhet.

//3. Butoni roll dice do te bej te mundur qe kur te klikohet te gjeneroj nje
// vlere nga variabli random dhe po ashtu te bej shfaqjen tek imazhi(zaret).

//4. Butoni hold do te mbledhi piket current te userit qe do te jete aktiv.

//5. Fusha e current score do te mbledhi te gjitha piket qe do te gjenerohen
// nga variabli random dhe do te zerohet vetem ne raste kur eshte nr 1.

//6.Piket do te mblidhen sipas lojtarit ne fjale nga current score dhe ne rast
// se do te jene 100 pike do te kemi nje fitues.

// 7. Divizioni do te ndyrshoje ngjyre per rastin qe do te kete 100 pike.

// Selektojme elementet.

const scoreOne = document.querySelector('#score--0');
const scoreTwo = document.querySelector('#score--1');
const rollDice = document.querySelector('.btn--roll');
const imageDice = document.querySelector('.dice');
const currentScoreOne = document.getElementById('current--0');
const currentScoreTwo = document.getElementById('current--1');
const hold = document.querySelector('.btn--hold');
const firstDiv = document.querySelector('.player--0');
const secondDiv = document.querySelector('.player--1');
const newGame = document.querySelector('.btn--new');
const playerNje = prompt('Vendosni emrin lojtari numer 1');
const playerDy = prompt('Vendos emrin lojtari numer 2')

document.querySelector('#name--0').textContent = playerNje;
document.querySelector('#name--1').textContent = playerDy;

const switchPlayer = function() {
    document.getElementById(`current--${active}`).textContent = 0;
    totalScore = 0;
    active = active === 0 ? 1 : 0;
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
}

let active = 0;
let points = [0,0];
let playing = true;

scoreOne.textContent = 0;
scoreTwo.textContent = 0;
let totalScore = 0;

document.querySelector('.dice').classList.add('hidden');

rollDice.addEventListener('click', function() {

    if (playing) {
        const shuffleButton = Math.trunc(Math.random()*6)+1;
        document.querySelector('.dice').classList.remove('hidden');
        imageDice.src = `dice-${shuffleButton}.png`;
    
        if (shuffleButton !== 1) {
            totalScore += shuffleButton;
            document.getElementById(`current--${active}`).textContent = totalScore;
        }
        else {
            switchPlayer();
        }
    }
    
})

hold.addEventListener('click', function() {
    if (playing) {
        points[`${active}`] += totalScore;
        document.querySelector(`#score--${active}`).textContent = points[`${active}`];
        totalScore = 0;
        document.querySelector(`#current--${active}`).textContent = 0;
        
    
        if (points[`${active}`] >= 20) {
            document.querySelector(`.player--${active}`).classList.add('player--winner');
            playing = false;
            
        }
        else {
            switchPlayer();
        }
        
    }
})

newGame.addEventListener('click', function() {
    document.querySelector(`.player--${active}`).classList.remove('player--winner');
    playing = true;
    points = [0,0];
    totalScore = 0;
    active = 0;
    scoreOne.textContent = 0;
    scoreTwo.textContent = 0;
})
