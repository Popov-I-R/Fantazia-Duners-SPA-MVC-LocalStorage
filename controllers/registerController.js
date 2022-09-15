(function() {
    let password = document.getElementById('regPassword');
    let confirmPassword = document.getElementById('confirmRegPassword');
    let regUsername = document.getElementById('regUsername');
    let regEmail = document.getElementById("regEmail");
    let passMismatchError = document.getElementById('passMismatchError');
    let userExistError = document.getElementById("userExistError");
    let registerBtn = document.getElementById('registerBtn');
    let registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit",function(e){
        e.preventDefault();
        const {username: {value:username},email: {value:email}, password: {value:password}} = this.elements;
        if(userManager.addUser(username, email, password)) {
            location.hash = "#loginPage";
        } else {
            userExistError.style.display="block";
        }
    });

    registerForm.addEventListener('input', validateForm);
    function validateForm() {
        const regUsernameValue = regUsername.value;
        const passwordValue = password.value;
        const confirmPassValue = confirmPassword.value;
        const emailValue = regEmail.value;

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
})()


