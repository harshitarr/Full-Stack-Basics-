import {readFile} from 'node:fs' ;

readFile('start.txt',(err,data)=> {
    if (err) throw err
    console.log(data.toString())
})


process.on('uncaughtException', err => {
    console.error('there was an uncaught errror : ${err}')
    process.exit(1)
})