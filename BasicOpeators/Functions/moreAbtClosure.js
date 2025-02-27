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
h()
f()