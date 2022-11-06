const form  = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const companyId = document.getElementById("company-id");
const password = document.getElementById("password");
const password2 = document.getElementById('password2');

if(!!form) { 
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkInputs();
});
}

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
      if (emailValue === "") {
        setErrorFor(email, "Email cannot be empty");
      }  else {
        setSuccess(email);
      }
     if (companyIdValue === "") {
       setErrorFor(companyId, "company ID cannot be empty");
     } else {
       setSuccess(companyId);
     }
     if (passwordValue === "") {
       setErrorFor(password, "password cannot be empty");
     } else if (passwordValue.length < 8) {
       setErrorFor(password, "password be more than 8 characters");
     } else {
       setSuccess(password);
     }
     if (password2Value === "") {
       setErrorFor(password2, "password cannot be empty");
     } else if (password2Value.length < 8) {
       setErrorFor(password2, "password be more than 8 characters");
     } else if (passwordValue !== password2Value) {
       setErrorFor(password2, "Passwords should match");
     } else {
       setSuccess(password2);
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

    document.querySelectorAll(".shwMod").forEach(b => {
      b.addEventListener("click", function(e) {
        console.log("clicked")
        e.preventDefault();
        const modal = document.querySelector(".modal");
        if (!!modal)
          modal.classList.toggle("show")
      })
    })