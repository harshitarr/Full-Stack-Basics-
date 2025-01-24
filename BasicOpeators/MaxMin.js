const temp = [100,567,345,678,675,456,789,3,44]

const maximum = function(temp)
{
    let max = temp[0]
    for(let i = 1;i<temp.length;i++)
    {
        if (temp[i]>max)
            max=temp[i]
    }

    return max
}

console.log(maximum(temp))