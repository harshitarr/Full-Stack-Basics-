const friends = ['harsh','pree','niki']
console.log(friends)

const fri = new Array('leela','vija','kili')
console.log(fri)

console.log(fri[0])

console.log(fri.length)
console.log(fri[fri.length-1])

// editing the array
fri[0]='jay'
console.log(fri)



//basic problem in array

const years = function(birthyear)
{
    return 2024 - birthyear
}

const fri = [2020 , 2024 , 1991 , 1996]

const result = [years(fri[1]),years(fri[2]),years(fri[fri.length-1])]
console.log(result)
