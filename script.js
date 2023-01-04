const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
let correct = 0;

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    checkInputs();
});


function checkInputs(){
    //get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    

    

    
    if (usernameValue === ''){
      
        setErrorFor(username, 'Username cannot be blank')
    } else {
      
        setSuccessFor(username)
        correct ++
    }

    if (emailValue === ''){
      
        setErrorFor(email, 'Email cannot be blank');
    }   else if (!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    }  else {
        setSuccessFor(email)
        correct ++
    }

    if (passwordValue === ''){
      
        setErrorFor(password, 'Password cannot be blank')
    } else {
      
        setSuccessFor(password)
        correct ++
    }

    if (password2Value === ''){
      
        setErrorFor(password2, 'Password check cannot be blank')
    } else if(password2Value !== passwordValue){
        setErrorFor(password2, 'Passwords do not match')

    }
    else {
      
        setSuccessFor(password2)
        correct ++
    }
    success(correct);

    
}




function success(success){
    if (success === 4){alert("The account was created successfully");}

}

    

    




function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    // add error message inside small
    small.innerText= message;

    //add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    //add success class
    formControl.className = 'form-control success'


}

	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}