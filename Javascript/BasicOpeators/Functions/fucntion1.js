
const bookings = [];

const CreateBooking = function(flightNum , numPassengers =1 , price = 199){
    

    const booking = {

        flightNum,
        numPassengers , 
        price
    };

    console.log(booking);
   


};


CreateBooking('LH123')
CreateBooking('LH123',2,800)
CreateBooking('LH123',2)
CreateBooking('LH123',5)
CreateBooking('LH123',undefined,1000)