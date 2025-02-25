const saraage = 16
if(saraage >= 18)
{
    console.log("Sara is ready to get the lisense")
}

else{
    console.log("Sara need to wait for " + (18-saraage) +" more year to get the lisense")
}

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if(BMIMark > BMIJohn)
{
    console.log("Mark's BMI " + BMIMark + " higher than John's BMI" +BMIJohn)
}

else
{
  console.log("John's BMI " + BMIJohn + " higher than  Marks's BMI" +BMIMark)   
}

/* Write your code below. Good luck! 🙂 */

