// APRIL14A.JS
// fix this code so that the counter in orange() causes an escape from function lemon at the right time
var LogicalFlag = false;
var globalCounter = 0;

function lemon(){
    if (globalCounter >6) {
        console.log("trace msg A: ", globalCounter)
        exit();
    }
    while (!LogicalFlag){
        orange();
    } 
}

function orange(){
    var counter = 0;
    for ( ; counter < 3 ; counter++){
        console.log(counter);
        globalCounter++;
    }
}

var L = lemon();
console.log(L);
console.log("fini");
