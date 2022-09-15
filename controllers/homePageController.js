let printHomePage = (function() {
    return function printHomePage (allDuners,container) {
        container.innerHTML = "";
        for (let i = 0; i < allDuners.length; i++) { 
            let duner = allDuners[i];
            let div = document.createElement("div");
            let img = document.createElement("img");
            let productDescription = document.createElement("div")
            let productName = document.createElement("h3");
            let productWeight = document.createElement("h3");
            let productCategory = document.createElement("h3");
            let productPrice = document.createElement("h5");
            let cardInputAndButton = document.createElement("div");
            let quantityInput = document.createElement("input");
            let addToCartButton = document.createElement("button");

            div.classList.add("card");

            img.src = duner.image;
            img.alt = `product image ${i}`;
            img.classList.add("images");
            img.setAttribute("id", "productsHome");

            productDescription.classList.add("product-description");

            productName.innerHTML = duner.name;
            productName.classList.add("productName");

            productWeight.innerHTML = `Тегло: ${duner.weight} гр.`;
            productWeight.classList.add("productWeight");

            productCategory.innerHTML = ` Категория: ${duner.category}` ;
            productCategory.classList.add("productCategory");

            productPrice.innerHTML = ` Цена: ${duner.price.toFixed(2)}`;
            productPrice.classList.add("productPrice");
            productDescription.append(productName,productWeight,productCategory,productPrice);

            cardInputAndButton.classList.add("card-input-and-Button");

            quantityInput.classList.add("card-field");
            quantityInput.setAttribute("required", "");
            quantityInput.setAttribute("type", "number");
            quantityInput.setAttribute("min", "1");
            quantityInput.setAttribute("minlength", "1");
            quantityInput.setAttribute("value", "1");

            addToCartButton.classList.add("addToCartButton");
            addToCartButton.classList.add("card-field");
            addToCartButton.innerText = "Add to cart ";
            addToCartButton.addEventListener("click", function () {
            
                let preferedQuantity = +quantityInput.value;
                if (preferedQuantity > 0 && preferedQuantity !== undefined && 
                    preferedQuantity !== NaN && preferedQuantity !== null) {
                    quantityInput.value = 1;
                
                    user.addToCart(duner, preferedQuantity);
                    showCounter();
                    router.handleHashChange();
                } else {
                        quantityInput.classList.add("error");
                        setTimeout(blink, 1000);
                        function blink(){
                            quantityInput.removeAttribute("class", "error");
                            quantityInput.classList.add("class","card-field");
                            quantityInput.value = 1;
                        }
                }   
            });
                cardInputAndButton.append(quantityInput, addToCartButton);
                div.append(img, productDescription, cardInputAndButton);
                container.append(div);   
        }
    }
})()
    
   