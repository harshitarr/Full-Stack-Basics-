let number = Math.trunc(Math.random()*20)+1
console.log(number)

let score = 20
console.log(score)

let highscore = 0
document.querySelector('.check').addEventListener('click',function()
{
    console.log(document.querySelector('.guess').value)
    guess =Number( document.querySelector('.guess').value)
if(!guess)
{
   document.querySelector('.message').textContent = "Omg There is none !"
}

else if(guess === number)
{
    document.querySelector('.message').textContent = "Gotcha !"

    document.querySelector('body').style.backgroundColor="#60b347"

    document.querySelector('.number').textContent = guess

    if(score> highscore)
    {
        highscore = score
        document.querySelector('.highscore').textContent = highscore
    }
}

else if(guess !== number)
{
    if(score>1)
    {
        document.querySelector('.message').textContent = guess>number ? 'too high' : 'too low'
        score = score - 1
        document.querySelector('.score').textContent = score
    }
    else
    {
     document.querySelector('.message').textContent = "Game Over"
    }
    
}

})



document.querySelector('.again').addEventListener('click' , function()
{
     score = 20
     number = Math.trunc(Math.random()*20)+1
     console.log(number)

    
    document.querySelector('.number').textContent = '?'
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.guess').value = ''
    document.querySelector('.message').textContent = 'Start Guessing...'
    document.querySelector('.score').textContent = score;
    

})