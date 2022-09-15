(function() {
    let loginForm = document.getElementById('loginForm');    
    let wrongCredentialsError = document.getElementById('loginError');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const {email: {value:email }, password: {value:password }} = this.elements;

        if (userManager.validateCredentials(email, password)) {
            location.hash = '#homePage';
            activeUser.email = email;
            let currentUser = activeUser.giveMeTheUserWhenLogin()
            localStorage.setItem('activeUser', JSON.stringify(currentUser))
        } else {
            wrongCredentialsError.style.display = 'block';
            setTimeout(() => {
                wrongCredentialsError.style.display = 'none';
            }, 2000);
        };
    });
})()







