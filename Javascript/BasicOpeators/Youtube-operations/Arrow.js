const birthyear = birthday => 2023 - birthday
console.log(birthyear(1991))

const retiermentage = birthyear => {
    const age = 2024 - birthyear
    const retirement = 61 - age
    return retirement
}  

console.log(retiermentage(2005))

const retirementand_birth = (birthyear,name) =>
{
   const age = 2023 - birthyear
   const retire = 61 - age
   return `My name is ${name} and my year is ${retire}`
}

console.log(retirementand_birth(1991 , 'john'))