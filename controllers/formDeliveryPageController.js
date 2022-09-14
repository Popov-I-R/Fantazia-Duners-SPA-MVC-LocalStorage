let form = document.getElementById("form-delivery");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    

    if(user.cart.length <= 0) {
        location.hash = `#cartPage`
    } else {
        let date = new Date().toLocaleDateString();
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let address = document.getElementById("address").value
        let productsNameAndCount = [];
        let totalOrderPrice = 0;

        user.cart.forEach(e => totalOrderPrice += e.totalPrice);
        user.cart.forEach(e => productsNameAndCount.push(`${e.name} - ${e.quantity} бр.`));
        user.makeOrder(date,name,phone,address,productsNameAndCount,totalOrderPrice);

        activeUser.makeOrder(date,name,phone,address,productsNameAndCount,totalOrderPrice); 

        user.cart = [];
    
        showCounter();
        location.hash = `#orderCompletePage`;
        setTimeout(callCartPage, 2000);
        function callCartPage(){
            location.hash = `#cartPage`
        }
    }})