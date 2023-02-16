function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 5) {
        return pinString;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const random = Math.round(Math.random() * 100000);
    return random;
}
document.getElementById('genate-pin').addEventListener('click', function () {
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
    const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
          const digits = previousTypedNumber.split('');
          digits.pop();
          const joinDigits = digits.join("");
          typedNumberField.value=joinDigits;
          
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value=newTypedNumber;
    }
})