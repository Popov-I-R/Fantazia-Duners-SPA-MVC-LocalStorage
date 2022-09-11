    
    
    let loginForm = document.getElementById('loginForm');    
    let wrongCredentialsError = document.getElementById('loginError');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const {email: {value:email }, password: {value:password }} = this.elements;

        
        
        if (userManager.validateCredentials(email, password)) {
            console.log(`test ${email}`);

            location.hash = '#homePage';
        } else {
            console.log(`error`);
            wrongCredentialsError.style.display = 'block';
        };

        this.reset();

    });