
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneValueAmount = getInputPhoneFieldValueById(true);
    getPhonePrice(newPhoneValueAmount);
    calculatePhonetotalAmountById();
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
   const newPhoneValueAmount = getInputPhoneFieldValueById(false);
    getPhonePrice(newPhoneValueAmount);
    calculatePhonetotalAmountById();
})