let activeUser = (function() {
  class ActiveUser extends User {
    constructor(username,email,password,name,address) {
      super(username,email,password,name,address)
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

      let users = JSON.parse(localStorage.getItem("users")); 
      let extractedUser = users.find((e) => e.email == this.email)  
      extractedUser.name = order.name ; 
      extractedUser.address = order.address; 
      extractedUser.phone = order.phone; 
      extractedUser.orders.unshift(order);
      localStorage.setItem("users",JSON.stringify(users));

      let activeUser = JSON.parse(localStorage.getItem("activeUser"));
      activeUser.orders.unshift(order);
      localStorage.setItem("activeUser",JSON.stringify(activeUser));
    }

    showOrdersHistory(){
      let activeUser = JSON.parse(localStorage.getItem("activeUser"));
      let activeUserOrders = activeUser.orders;
      return activeUserOrders;
    }

    giveMeTheUserWhenLogin(){
      let users = JSON.parse(localStorage.getItem("users"));
      let extractedUser = users.find((e) => e.email == this.email);
      return extractedUser;
    }

    giveMeTheUser(){
      let user = JSON.parse(localStorage.getItem("activeUser"));
      return user;
    }

    removeActiveUserOnLogout(){
      localStorage.removeItem("activeUser");
    }
  }
return new ActiveUser()
})()





