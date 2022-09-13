

    let loginForm = document.getElementById('loginForm');    
    let wrongCredentialsError = document.getElementById('loginError');
    let testThreeUser;
    

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const {email: {value:email }, password: {value:password }} = this.elements;

        
        if (userManager.validateCredentials(email, password)) {
            
            location.hash = '#homePage';

          
            // console.log(myUser);

            activeUser.email = email
            testThreeUser = activeUser.giveMeTheUserWhenLogin()
            localStorage.setItem('active2', JSON.stringify(testThreeUser))


            // userManager.userLoggedIn(email)
            // // Изваждам си масива с потребители
            // var users = JSON.parse(localStorage.getItem("users"));

            // //намирам кой е логнатия потребител
            // let loggedUser = users.find((user) => user.email == email)
            // // console.log(loggedUser); 
            


            // loggedUser.cart.push(`test`)
            // localStorage.setItem("users",JSON.stringify(users))
            
        } else {
            console.log(`error`);
            wrongCredentialsError.style.display = 'block';
        };

        // this.reset(); Заради този ресет е undefined mail-a при похвата с преизползването в makeOrders -> Да го фиксна така, че да работи и с него!


    });


