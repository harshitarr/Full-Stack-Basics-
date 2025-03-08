const runOnce = function(){

    console.log('this will run once')
};

runOnce()

(function(){
    console.log('this will run once')
    const isPrivate = 23
})()


{
    const isPrivate = 23
    var notPrivate = 46
}


console.log(notPrivate)