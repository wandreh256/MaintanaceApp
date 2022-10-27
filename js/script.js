const form  = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const companyId = document.getElementById("company-id");
const password = document.getElementById("password");
const password2 = document.getElementById('password');


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
});

  function checkInputs() {
     const usernameValue = username.value.trim();
     const emailValue = email.value.trim();
     const companyIdValue = companyId.value.trim();
     const passwordValue = password.value.trim();
     const password2Value = password2.value.trim();
         
    if (usernameValue === "") {
       setErrorFor(username, "Username cannot be empty");

    } else {
      setSuccess(username);
    }
  }
  
    function setErrorFor(input, message){
       const formControl = input.parentElement;
       const small = formControl.querySelector('small');

    
       small.innerText = message;
       formControl.className = 'form-control error';
    }
     
    function setSuccess(input) {
      const formControl = input.parentElement;
      formControl.className = "form-control success";
    }