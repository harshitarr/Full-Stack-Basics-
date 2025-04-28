const fs = require('fs')


if (fs.existsSync('./NewDir'))
{
    fs.rmdir('./NewDir',(err)=>
    {
        if (err) throw err
        console.log("file removed")
    })
}


if(!fs.existsSync('./NewDir')){
    fs.mkdir('./NewDir',(err)=>{
        if (err) throw err
        console.log("directory created")

    })
}