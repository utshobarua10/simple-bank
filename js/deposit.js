document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositField= document.getElementById('depositAmount');
    const currentDepositField = document.getElementById('currentDeposit');
    const currentBalanceField = document.getElementById('currentBalance');
    
    const currentBalanceValue = parseFloat(currentBalanceField.innerText);
    
    const depositValue = parseFloat(depositField.value);
    const currentDepositValue = parseFloat(currentDepositField.innerText);
    
    currentDepositField.innerText = depositValue + currentDepositValue;
    
    
    currentBalanceField.innerText = currentBalanceValue + depositValue

    depositField.value = "";

   

})