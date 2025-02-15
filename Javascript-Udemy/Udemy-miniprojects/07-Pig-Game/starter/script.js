const score0E1 = document.querySelector('#score--0')
const score1E1 = document.getElementById('score--1') // both are same--- funtions similarly-- just look at how the fromat changes 
const diceE1 = document.querySelector('.dice')
const btnnew = document.querySelector('.btn--new')
const btnroll = document.querySelector('.btn--roll')
const btnhold = document.querySelector('.btn--hold')
const current0 = document.getElementById('current--0')
const current1 = document.getElementById('current--1')




score0E1.textContent = 0
score1E1.textContent = 0
diceE1.classList.add('hidden') //initially there should be no 
currentscore = 0 // we are defining it out because if we define them inside the addEventlistener then each time when u click on the roll button it will be resetted to 0

btnroll.addEventListener('click',function(){

    const dice = Math.trunc(Math.random()*6)+1
    diceE1.src=`dice-${dice}.png`
    diceE1.classList.remove('hidden')


    if(dice!==1)
    {
       currentscore+=dice   
       current0.textContent = currentscore
    }

    else
    {

    }

x})