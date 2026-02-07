function newPrice(currentPrice, discount) {
    // Your code here
    if( typeof currentPrice !== "number" && typeof discount !== "number"){
        return Invalid;
    }
    if (discount < 0 || discount > 100){
        return Invalid;
    }
    let finalPrice = currentPrice - discount*currentPrice/100;
    return finalPrice.tofixed(3)
}
