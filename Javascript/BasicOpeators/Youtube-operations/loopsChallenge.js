const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]


const tips = []
const totals = []
let sum = 0

for(let i = 0 ; i<bills.length ; i++)
{
   
    tips[i] = calcTip(bills[i])
    totals[i] = bills[i]+tips[i];
    console.log(totals[i])
    sum = sum + totals[i]
}
console.log(`The sum is ${sum}`);
console.log(`The avg is ${sum/10}`)
