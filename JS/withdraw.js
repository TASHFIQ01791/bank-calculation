// money withdraw
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdraw-field');
    // new withdraw amount
    const newWithdrawAmountString=withdrawField.value;
    // set the value in withdraw
    const  newWithdrawAmount=parseFloat(newWithdrawAmountString);
    // with draw this amount from total balance

    withdrawField.value='';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid Amount');
        return ;
    }

    const withdrawTotal=document.getElementById('withdraw-amount-total');

    // ei 4 ta step eksathe korte hobe

    const previousWithdrawAmountString=withdrawTotal.innerText;
    const previousWithdraw=parseFloat(previousWithdrawAmountString);
  

    // change the value of total Balance--> reduce the value

    // decrease balance

    const balance=document.getElementById('balance-amount-total');
    const balanceAmountString=balance.innerText;
    const balanceAmount=parseFloat(balanceAmountString);

    const currentBalance=balanceAmount-newWithdrawAmount;

    if(balanceAmount>=newWithdrawAmount){
        balance.innerText=currentBalance;
        const currentWithdrawTotal=previousWithdraw+ newWithdrawAmount;
        withdrawTotal.innerText=currentWithdrawTotal;
    }
    else{
        //currentWithdrawTotal=previousWithdraw;
        alert('Not enough money');
        return;
    }

  


    
    
    
})