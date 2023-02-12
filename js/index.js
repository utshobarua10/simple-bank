const submit = document.getElementById('submit');
submit.addEventListener('click',function(){
    const email = document.getElementById('email').value;
    const pass= document.getElementById('pass').value;
    // console.log(email,pass)
    // Not recommended way, just used for practise purpose.
    if(email == "simplebank@gmail.com" && pass == "simplebank"){
        console.log('Identified');
        window.location.href = 'bank.html'
    }
    else{
        console.log('Not Identified');
    }

})