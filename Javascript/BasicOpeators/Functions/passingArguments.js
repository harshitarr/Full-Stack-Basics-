const flight = 'LH234'
const johnas = {
    name : 'john',
    passport : 23453256
}

const checkin = function(flightnum , passenger){
    flightnum = 'LH999'
    passenger.name = 'Mr.'+passenger.name

    if(passenger.passport === 23453256)
    {
        alert('checked in')
    }

    else{
        alert('wrong passenger')
    }
}

checkin(flight,johnas)
console.log(flight)
console.log(johnas)