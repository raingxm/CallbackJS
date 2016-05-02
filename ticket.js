function* ticketGenerator(){
    for(var i=0; true; i++){
        var reset = yield i;
        if(reset) {i = -1;}
    }
} 

var takeANumber = ticketGenerator(); 
console.log(takeANumber.next().value);
console.log(takeANumber.next().value);
console.log(takeANumber.next(true).value);
