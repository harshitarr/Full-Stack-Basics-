const {format} = require('date-fns')
const {v4 : uuid} = require('uuid')

console.log(format(new Date(),'ddMMyyyy\tHHH:mm:ss'))
console.log(uuid ())

