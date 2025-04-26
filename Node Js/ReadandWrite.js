const fs = require('fs')
const path = require('path')

// read file---------------------------------------------------------------------------------------------------------

fs.readFile(path.join(__dirname,'start.txt'),'utf8',(err,data)=>{
    if (err) throw err
    console.log(data)
})

// write -----------------------------------------------------------------------------------------------------------

fs.writeFile(path.join(__dirname,'end.text'),'i guess this is not the end of learning in my era of living',(err,data)=>
{
    if (err) throw (err)
        console.log('write complete')
})

// append ------------------------------------------------------------------------------------------------------

fs.appendFile(path.join(__dirname,'end.text'),'.see i will back for sureeeeee 200% sure i will be back heheheh',(err,data)=>
{
    if (err) throw err
    console.log("append completed")
})

//---------------------------------------------------------------------------------------------------------------------
// sometime append vanthu write ku munnadi vanthurum because asynchronous way of executing

fs.writeFile(path.join(__dirname,'end.txt'),'i guess this is not the end of learning in my era of living',(err,data)=>
    {
        if (err) throw (err)
            console.log('write complete')
    
    
    // append 
    
    fs.appendFile(path.join(__dirname,'end.txt'),'\n\nsee i will back for sureeeeee',(err)=>
    {
        if (err) throw err
        console.log("append completed")
    })

})

//-------------------------------------------------------------------------------------------------------------------


fs.writeFile(path.join(__dirname,'end.txt'),'i guess this is not the end of learning in my era of living',(err,data)=>
    {
        if (err) throw (err)
            console.log('write complete')
    
    
    // append 
    
    fs.appendFile(path.join(__dirname,'end.txt'),'\n\nsee i will back for sureeeeee',(err)=>
    {
        if (err) throw err
        console.log("append completed")
    })

    // renaming the file

    fs.rename(path.join(__dirname,'end.txt'),path.join(__dirname,'end2.txt'),(err)=>{
        if (err) throw err
        console.log('done renameing')
    }
    )
})