let showCounter = (function() {
    let counterHeader = document.getElementById('countProducts');
    let totalProducts = 0;
    
    return function showCounter() {
        let products = totalProducts;
        user.cart.forEach(e => products+= e.quantity);
        counterHeader.innerHTML = products;
    
        if (products == 0) {
            counterHeader.classList.remove("test-showed");
            counterHeader.classList.add("test-hidden");
            router.handleHashChange()
        } else {
            counterHeader.innerHTML = products;
            counterHeader.classList.remove("test-hidden");
            counterHeader.classList.add("test-showed");
            router.handleHashChange()
        }
    }
})()





