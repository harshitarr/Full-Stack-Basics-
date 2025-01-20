
const caltip = bills =>{
    return bills>=50 && bills<=300 ? bills * 0.15 : bills * 0.2
}

const bill = [125 , 555 , 44]
const tip =[caltip(bill[0]),caltip(bill[1]),caltip(bill[2])]
const total = [bill[0]+tip[0],bill[1]+tip[1],bill[2]+tip[2]]
console.log(bill,tip,total)