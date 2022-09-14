

    let loginForm = document.getElementById('loginForm');    
    let wrongCredentialsError = document.getElementById('loginError');
    let currentUser;
    

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const {email: {value:email }, password: {value:password }} = this.elements;

        if (userManager.validateCredentials(email, password)) {

            location.hash = '#homePage';
            activeUser.email = email;
            currentUser = activeUser.giveMeTheUserWhenLogin()
            localStorage.setItem('activeUser', JSON.stringify(currentUser))
            
        } else {
            console.log(`error`);
            wrongCredentialsError.style.display = 'block';
        };

    });


