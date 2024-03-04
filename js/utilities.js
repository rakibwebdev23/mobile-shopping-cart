function getInputPhoneFieldValueById(isIncrease){
    const inputPhoneField = document.getElementById('input-phone-field');
    const inputPhoneFieldString = inputPhoneField.value;
    const inputPhoneFieldValue = parseInt(inputPhoneFieldString);

    let newPhoneValue;
    if(isIncrease === true){
        newPhoneValue = inputPhoneFieldValue + 1;
    }
    else{
        newPhoneValue = inputPhoneFieldValue - 1;
    }
    inputPhoneField.value = newPhoneValue;

    return newPhoneValue;

}
function getPhonePrice(newPhoneValue){
    const phonePrice = newPhoneValue * 1219;
    const phonePriceField = document.getElementById('phone-price');
    phonePriceField.innerText = phonePrice;
}

// case field 

function getCaseFieldById(caseId){
    const caseField = document.getElementById('input-case-field');
    const caseFieldString = caseField.value;
    const previousInputCaseValue = parseInt(caseFieldString);

    let newCaseValue;
    if(caseId === true){
        newCaseValue = previousInputCaseValue + 1;
    }
    else{
        newCaseValue = previousInputCaseValue - 1;
    }

    caseField.value = newCaseValue;

    return newCaseValue;
}

function getCasePrice(newCaseValue){
    const totalCasePrice = newCaseValue * 59;
    const casePriceField = document.getElementById('case-price');
    casePriceField.innerText = totalCasePrice;
}

function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const phoneTotalElementString = phoneTotalElement.innerText;
    const phoneTotalAmount = parseInt(phoneTotalElementString);
    return phoneTotalAmount;
}

// subtotal calculation section
function setTextElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculatePhonetotalAmountById(){
    const curretPhonePrice = getTextElementValueById('phone-price');
    const currentCasePrice = getTextElementValueById('case-price');
    const totalCurrentPrice = curretPhonePrice + currentCasePrice;
    setTextElementValueById('sub-total', totalCurrentPrice);
    const taxAmountString = (totalCurrentPrice * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);
    const finalPrice = totalCurrentPrice + taxAmount;
    setTextElementValueById('final-price', finalPrice);

}