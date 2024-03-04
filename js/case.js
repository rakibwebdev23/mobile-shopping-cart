

document.getElementById('case-btn-plus').addEventListener('click', function(){
    const newCaseValue = getCaseFieldById(true);
    getCasePrice(newCaseValue);
    calculatePhonetotalAmountById();
})
document.getElementById('case-btn-minus').addEventListener('click', function(){
   const newCaseValue = getCaseFieldById(false);
   getCasePrice(newCaseValue);
   calculatePhonetotalAmountById();
})