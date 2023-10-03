// depostit money

document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositField=document.getElementById('deposit-field');
    // get the entered amount
    const newDepositAmountString=depositField.value;
    //but it is in the string form so need to convert it into float
    const newDepositAmount=parseFloat(newDepositAmountString);
    depositField.value=''
    if(isNaN( newDepositAmount)){
       alert('Please provide a valid Amount');
       return ;
   }
    // add the amount in the deposit section
    const depositTotalElement=document.getElementById('deposit-amount-total');
    //set the deposit amount in deposit section
    const previousDepositTotalString=depositTotalElement.innerText;
    const previousDepositTotal=parseFloat(previousDepositTotalString);
    //depositTotalElement.innerText=newDepositAmount;
 
    // add pre and new amound
    const currentDepositTotal=newDepositAmount+previousDepositTotal;
    depositTotalElement.innerText=currentDepositTotal;
 
    // balance increase
    const balance=document.getElementById('balance-amount-total');
    const balanceAmountString=balance.innerText;
    const balanceAmount=parseFloat(balanceAmountString);
 
    const currentBalance=balanceAmount+newDepositAmount;
    balance.innerText=currentBalance;
 //    clear the deposit input field after push the btn
 
    
    
 })