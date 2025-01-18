
function fruitcutter(fruit)
{
    return fruit * 4
}

function fruitprocessor(apple , orange)
{
    const total_apple = fruitcutter(apple)
    const total_orange = fruitcutter(orange)
    const fruit_juice = `I totally mixed ${total_apple} no of apple and ${total_orange} no of ornage`
    return fruit_juice
}


console.log(fruitprocessor(3 , 4))