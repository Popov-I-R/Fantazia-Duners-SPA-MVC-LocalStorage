class User {
  constructor(username,email,password) {
    this.cart = [];
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

}


return new UserManager();

})()