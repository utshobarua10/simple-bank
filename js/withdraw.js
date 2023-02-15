document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField= document.getElementById('withdrawAmount');
    const currentWithdrawField = document.getElementById('currentWithdraw');
    const currentBalanceField = document.getElementById('currentBalance');
    
    const currentBalanceValue = parseFloat(currentBalanceField.innerText);
    
    const withdrawValue = parseFloat(withdrawField.value);
    const currentWithdrawValue = parseFloat(currentWithdrawField.innerText);
    
    currentWithdrawField.innerText = withdrawValue + currentWithdrawValue;
    
    
    currentBalanceField.innerText = currentBalanceValue - withdrawValue

    withdrawField.value = "";
   

})