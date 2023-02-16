function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    console.log(pin,typeof pin)
    console.log(pinString,typeof pinString);
    return 0;
}
function generatePin(){
    const random = Math.round(Math.random()*100000);
    return random;
}
