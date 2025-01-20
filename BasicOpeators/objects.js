const harshi={
    firstname : 'harshi',
    lastname : 'ravi',
    age : 19,
    job : 'student',
    friends : ['harsh','pree','niki'],
    calage : function(){
        return  2024 - this.age
    }
};

// dot

console.log(harshi.firstname)

// bracket

console.log(harshi['age'])

const nameKey = 'name'
console.log(harshi['first'+ nameKey])
console.log(harshi['last'+ nameKey])

//const inter = prompt('what do you want to know?')

/*if(harshi[inter])
{
    console.log(harshi[inter])
}
else
{
    console.log("try again")
}*/

harshi.location = 'tgode'
harshi['pet'] = 'dog'
console.log(harshi)

console.log(`My name is ${harshi.firstname} and i have ${harshi.friends.length} and among that my best friend is ${harshi.friends[0]}`)

console.log(harshi.calage())
