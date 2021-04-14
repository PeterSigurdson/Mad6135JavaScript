// APRIL14A.JS
counter version

    // APRIL14A.JS

    var globalCounter = 0;

    function lemon(){
        console.log("trace msg A: ", globalCounter)
    
        while (true){
            if (globalCounter >5) {
                    return;
                }
            orange();
        } 
    }

    function orange(){
        var counter = 0;
        for ( ; counter < 2 ; counter++){
            console.log(counter);
            globalCounter++;
        }
    }

    var L = lemon();
    // console.log(L);
    console.log("fini");
