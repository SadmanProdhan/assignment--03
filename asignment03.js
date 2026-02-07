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

//problem-04 -------------------------------------//

function gonoVote(array) {
    //write your code here
    let countHA = 0;
    let countNA = 0;
    if( !Array.isArray(array) || array === "" ){
        return "Invalid"
    }
    for (let i = 0; i < array.length; i++){
        if( array[i] === 'ha'){
            countHA++;
        }
        else if( array[i] === 'na'){
            countNA++;
        }
    }
    if( countHA > countNA){
        return true;
    }
    else if( countNA > countHA){
        return false;
    }
    else if( countHA == countNA ){
        return "equal"
    }
}

//-------------------------------------------------------------------------------
