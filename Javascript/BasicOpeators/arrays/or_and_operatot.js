console.log(3||'jonas')
console.log(''|| 'jonas')
console.log(true||0)
console.log(undefined||null)
console.log(undefined || 0 || ''|| 'hello'||23||null);


console.log('--And ---')
console.log(0 && 'johnas')
console.log(7 && 'johnas')
console.log('hello' && 23 && null && 'johans')

//or operator will return the first truely value of all the operands or simple the last value if all of them are falsey
// and operator will return the first falsy value or the last value if all of them are true
// or - default values
// and - execute code in the second operand if the first one is true
