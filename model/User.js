
class User {
  constructor(username,email,password) {
    this.cart = []
    this.orders = [];
    
    this.username = username;
    this.email = email;
    this.password = password;
  }

  addToCart(product, quantity) {
    
    let getIndex = this.cart.indexOf(product);
    if (getIndex === -1) {
      product.quantity = +quantity;
      if (this.cart.indexOf(product) === -1) {
        this.cart.push(product);
        
      }
    } else {
      product.quantity += +quantity;
    }
  }


  removeFromCart(product) {
    let getIndex = this.cart.indexOf(product);
    this.cart.splice(getIndex, 1);
  }

  makeOrder(date, name, phone, address, productsNameAndCount, totalPrice) {
    
    let order = {};
    order.date = date;
    order.name = name;
    order.phone = phone;
    order.address = address;
    order.productsNameAndCount = productsNameAndCount;
    order.totalPrice = totalPrice;
    this.orders.unshift(order);

    // // // Изваждам си масива с потребители
    // let users = JSON.parse(localStorage.getItem("users"));
    // //намирам кой е логнатия потребител
    // let loggedUser = users.find((e) => e.email == user.email)

    // // //намирам кой е логнатия потребител
    // // // console.log(loggedUser); 
    
    // loggedUser.orders.push(JSON.stringify(order))
    
    // localStorage.setItem("users",JSON.stringify(users))

  }
}



class ActiveUser extends User {

  constructor(username,email,password) {
    super(username,email,password)
  }
  makeOrder(date, name, phone, address, productsNameAndCount, totalPrice) {
    
    let order = {};
    order.date = date;
    order.name = name;
    order.phone = phone;
    order.address = address;
    order.productsNameAndCount = productsNameAndCount;
    order.totalPrice = totalPrice;
    this.orders.unshift(order);


    // 1. Създавам activeUser в localStorage // После може да го преместя да става при login 
    localStorage.setItem('activeUser', JSON.stringify(this)); // this ми е актив user-a тук 

    // 2. взимам всички users 
    let users = JSON.parse(localStorage.getItem("users")); 
            // тук трябва да сравня дали мейла на актив юзъра го има в юзерс 
                      // Ако го има - бутни orders в него с unshift
   
    let extractedUser = users.find((e) => e.email == this.email) //2. Изваждам ot users, които са в localStorage, user-a който ми трябва, намирайки го по мейл 
    console.log(extractedUser);
    // 3. Изпращам този order в extract-натия юзър 
    
    extractedUser.orders.unshift(order) 

    localStorage.setItem("users",JSON.stringify(users))

   
    // extractedUser.orders.unshift(JSON.stringify(order)) 

    // localStorage.setItem("users",JSON.stringify(users)) 


    //4 После да направя при logout да се маха целия ключ activeUser

    /*
    P . S Не опаковам JSON правилно - трябва да има едно ниво отгоре за да мога после да експортна валиден JSON 
  */


  }

  showOrdersHistory(){

    // Вземи юзерите
    let users = JSON.parse(localStorage.getItem("users"))
    //Намери в кой потребител сме 
    let extractedUser = users.find((e) => e.email == this.email)
    // Вземи историята (orders) на този потребител
    //
    // console.log(extractedUser);
    let extractedUserOrdHistory = [...extractedUser.orders]
    console.log(extractedUserOrdHistory);
    return extractedUserOrdHistory
    //
    //
    


  }


}









let userManager = (function(){ 
class UserManager {
    
  constructor() {
    this.users = [];
    if (localStorage.getItem("users")) {
      this.users = JSON.parse(localStorage.getItem("users"))
    }

      //                  deserialization
      // let storedUsers = JSON.parse(localStorage.getItem('users'));
      
  }

  validateCredentials(email, password) {
      return this.users.some(user => user.email == email && 
                                     user.password == password 
      );
  }

  addUser(username, email, password) {
      if(!this.checkForExistingUser(username)) {
          this.users.push(new User(username, email, password));
          //                            serialization of the users
          localStorage.setItem('users', JSON.stringify(this.users));

          return true;
      }
      return false;
  }

  checkForExistingUser(username) {
      return this.users.some(user => user.username === username);
  }

  userLoggedIn(email){
    
      let users = JSON.parse(localStorage.getItem("users"));
      //намирам кой е логнатия потребител
      let loggedUser = users.find((user) => user.email == email);
      
      return loggedUser

  }

  


}


return new UserManager();

})()