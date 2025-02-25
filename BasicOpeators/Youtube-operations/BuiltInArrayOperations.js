
// 1 - Push operation

const idiot = ['me','myself','mine']
idiot.push('us')
console.log(idiot)

// 2 - unshift

idiot.unshift('leo')
console.log(idiot)


// 3 - pop
idiot.pop()
const removed = idiot.pop()
console.log(removed)
console.log(idiot)


// 4 - shift
idiot.shift()
console.log(idiot)

// 5 - indexOf

console.log(idiot.indexOf('me'))

// 6 - include

console.log(idiot.includes('myself'))