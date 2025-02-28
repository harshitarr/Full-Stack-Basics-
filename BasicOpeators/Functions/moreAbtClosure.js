let f

const g = function(){

    const a = 23
    
    f = function(){

        console.log(a * 2)
    }

}

const h = function()
{
    const b = 22

    f = function(){

        console.log( b * 2)
    }
}

g()
f()
console.dir(f)

// reassigning f value
h()
f()
console.dir(f)


const boardPassengers = function(n , wait){

    const perGroup = n/3

    setTimeout(function(){

        console.log(`we are now boarding all ${n} passenger`)

        console.log(`there are 3 groups , each with ${perGroup} passengers`)
    }, wait*1000)

    console.log(`Will start boarding in ${wait} seconds`)
}

boardPassengers(180,3)