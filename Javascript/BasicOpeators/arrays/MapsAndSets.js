const cur = new Map([
    ['USD','UNITED STATES'],
    ['EUR','EURO'],
    ['GBP','POUND STERLING']
])

cur.forEach(function(value,key, map){
    console.log(`${key}: ${value}`)
})


const curUnique = new Set(['Usd','gbp','usd','eur','eur'])
console.log(curUnique)

curUnique.forEach(function(value,key,map){
    console.log(`${key}:${value}`)
})
