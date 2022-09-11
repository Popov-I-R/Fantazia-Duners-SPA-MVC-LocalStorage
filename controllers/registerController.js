
//passwords fields
let password = document.getElementById('regPassword');
let confirmPassword = document.getElementById('confirmRegPassword');
// username & email fields
let regUsername = document.getElementById('regUsername');
let regEmail = document.getElementById("regEmail")
// errors
let passMismatchError = document.getElementById('passMismatchError');
let userExistError = document.getElementById("userExistError");
//btns and form
let registerBtn = document.getElementById('registerBtn');
let registerForm = document.getElementById("registerForm");


// Създай потребител 
registerForm.addEventListener("submit",function(e){
    e.preventDefault()
    const {username: {value:username},email: {value:email}, password: {value:password}} = this.elements;
    if(userManager.addUser(username, email, password)) {
        location.hash = "#login-container"
    } else {
        userExistError.style.display="block"
    }
})



// Валидиране 
registerForm.addEventListener('input', validateForm);
function validateForm() {
    const regUsernameValue = regUsername.value;
    const passwordValue = password.value;
    const confirmPassValue = confirmPassword.value;
    const emailValue = regEmail.value

    if (regUsernameValue && passwordValue && confirmPassValue && emailValue) {
        registerBtn.removeAttribute('disabled');
    } else {
        registerBtn.setAttribute('disabled', true);
    }

    if (passwordValue && confirmPassValue && passwordValue !== confirmPassValue) {
        passMismatchError.style.display = 'block';
        registerBtn.setAttribute('disabled', true);
    } else {
        passMismatchError.style.display = 'none';
    }
}
