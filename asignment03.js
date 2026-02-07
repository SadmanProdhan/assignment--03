//problem-01 --------------------------------------------------------------------------//

function newPrice(currentPrice, discount) {
    // Your code here
    if( typeof currentPrice !== "number" || typeof discount !== "number"){
        return "Invalid";
    }
    if (discount < 0 || discount > 100){
        return "Invalid";
    }
    let finalPrice = currentPrice - discount*currentPrice/100;
    return finalPrice.toFixed(3);
}

//problem-02----------------------------------------------------------------//
function validOtp(otp) {
    // Your code here

    if(typeof(otp) !== "string" ){
        return "Invalid";
    }
    else if(otp.length !== 8 || !otp.startsWith("ph-") ){
        return false;
    }
    return true;
}
//problem-03-------------------------------------//

function finalScore(omr) {
    //write your code here

  

    if(typeof omr !== "object" || omr.right + omr.wrong + omr.skip !==100 ){
        return "Invalid";
    }
    else{let totalScore = omr.right - omr.wrong*0.5;
    return Math.round(totalScore)}
}

//
