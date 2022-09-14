
class User {
  constructor(username,email,password,name,address,phone) {
    this.cart = [];
    this.orders = [];
    this.username = username;
    this.email = email;
    this.password = password;
    this.name = name;
    this.address = address;
    this.phone = phone;
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
