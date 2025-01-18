const birthyear = birthday => 2023 - birthday
console.log(birthyear(1991))

const retiermentage = birthyear => {
    const age = 2024 - birthyear
    const retirement = 61 - age
    return retirement
}

console.log(retiermentage(2005))