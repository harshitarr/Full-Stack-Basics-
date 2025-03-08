const moves = [200 , 450 , -400 , 3000 , -650,-130,70,1300]

for(const move of moves){

    if(move > 0)
    {
        console.log(`your deposited amt is ${move}`)
    }
    else{
        console.log(`your withdrew ${move}`)
    }
}


console.log('-----------------')

moves.forEach(function(move){     // for the funtione here it is always in the format (move , index , arr)

    if(move > 0)
        {
            console.log(`your deposited amt is ${move}`)
        }
        else{
            console.log(`your withdrew ${move}`)
        }

})