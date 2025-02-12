document.querySelector('.message').textContent = "Awesome buddy !"
const number = Math.trunc(Math.random()*20)+1
console.log(number)

let score = Number(document.querySelector('.score').textContent)
console.log(score)
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

    document.querySelector('body').style.backgroundColor="green"
}

else if(guess < number)
    {
        if(score > 0)
        {

      
        document.querySelector('.message').textContent = "Too Small"
        score = score - 1
        document.querySelector('.score').textContent = score
       }
       else
       {
        document.querySelector('.message').textContent = "Game Over"
       }
    }

    else if(guess > number)
        {
            if(score>0)
            {
            document.querySelector('.message').textContent = "Too Big"
            score = score - 1
            document.querySelector('.score').textContent = score
            }

            else{
                document.querySelector('.message').textContent = "Game Over"

            }
        }


})