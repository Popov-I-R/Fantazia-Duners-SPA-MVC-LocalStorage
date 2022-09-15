let printTotalPriceAndSubmitButton = (function(sum,container,table) {
    
    return function printTotalPriceAndSubmitButton(sum,container,table){
        let totalPriceAndSubmit = document.createElement("div");
        let totalPriceContainer = document.createElement("div");
        let totalPrice = document.createElement("h2");
        let submitButtonContainer = document.createElement("div");
        let submitButton = document.createElement("button");

        totalPriceAndSubmit.classList.add("total-and-submit-container");
        totalPrice.innerText = `Крайна цена: ${sum.toFixed(2)} лв.`;
        totalPriceContainer.appendChild(totalPrice);
        
        submitButton.setAttribute("type","submit");
        submitButton.innerText = `Направи поръчка`;
        submitButton.addEventListener("click", function(){
            let checkQuantity = 0;
            user.cart.forEach(e => checkQuantity+= e.quantity);
            
            if (checkQuantity < 1) {
                let test = document.getElementById("cart-quantity-input");
                test.setAttribute("class", "error");
                setTimeout(blink, 1000);
                function blink(){
                    test.removeAttribute("error");
                }
            } else {
                location.hash = `#deliveryPage`;
                let currentUser = activeUser.giveMeTheUser()
                if (currentUser.phone) {
                    document.getElementById("phone").value = `${currentUser.phone}`
                }
                if (currentUser.address) {
                    document.getElementById("address").innerText = `${currentUser.address}`
                }
                if (currentUser.name) {
                    document.getElementById("name").value = `${currentUser.name}`
                } 
            }
        })

        submitButtonContainer.append(submitButton);
        totalPriceAndSubmit.append(totalPriceContainer,submitButtonContainer);
        container.appendChild(totalPriceAndSubmit);

        table.addEventListener("input", function(){
            showCounter();
            totalPrice.innerText = sum ;
        })
    }
})()
