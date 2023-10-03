// ____________work with login form_______________
document.getElementById('submit-btn').addEventListener('click',function(){
    // get email value
    const emailField=document.getElementById('user-email');
    const email=emailField.value;
    // get password value
    const passwordField=document.getElementById('user-password');
    const password=passwordField.value;
    // condition to get into the login form
    if(email==='metashfiq01791@gmail.com' && password==='taifvaii'){
        window.location.href='bank.html';
    }
    else{
        alert('vul marso..abar maro tik kore');
    }
})