const avg = (input1,input2,input3) =>
{
    const total_avg = (input1 + input2 + input3)/3
    return total_avg
}

const finals = function(dol , kol)
{
    if (dol>kol)
    {
        console.log(`Dolphins win (${dol} vs. ${kol})`)
    }
    
    else if(kol>dol)
    {
        console.log(`Koalas win (${kol} vs. ${dol})`)
    }
    else if(kol === dol)
    {
        console.log("No team wins..")
    }
    else
    {
        console.log("You are wrong")
    }
    
}

const avgcheck = function()
{
    const avgDolphins = avg(44 ,23 , 71)
    const avgKoalas = avg(65 , 54 , 49)
    
    const finalScore = finals(avgDolphins,avgKoalas)
    
}
avgcheck()




