const path = require('path')
const fspromises = require('fs').promises

const fileOps = async() =>{

    try{

        const data = await fspromises.readFile(path.join(__dirname,'start.txt'),'utf8')
        console.log(data)

        await fspromises.writeFile(path.join(__dirname,'end3.txt'),'i hope everything is fine')
        console.log("done writing")
    }

    catch(err){
        
        console.error(err)
    }
}

fileOps()