 let printCartPage = (function() {
    
   return function printCartPage(producs,container) {
        let  activeUserOrderHistory = activeUser.showOrdersHistory();
    
        if (user.cart.length < 1) {
            totalProducts = 0;
            container. innerHTML = "";
    
            function printIfCartEmpty() {
                let emptyCart = document.createElement("div");
                let noProducts = document.createElement("h1");
        
                emptyCart.classList.add("empty-cart");
                noProducts.innerText = "Нямате добавени продукти в количката";
                emptyCart.appendChild(noProducts);
                container.append(emptyCart);
            }
            printIfCartEmpty();
            printOrderHistory(activeUserOrderHistory,container);
    
        } else {
            container.innerHTML = "";
                let table = document.createElement("table");
                let tableRow = document.createElement("tr");
                let thProductName = document.createElement("th");
                let thProductPrice = document.createElement("th");
                let thProductWeight = document.createElement("th");
                let thProductFinalPrice = document.createElement("th");
                let thDeleteProduct = document.createElement("th");
    
                thProductName.innerText = `Име на продукт`;
                thProductPrice.innerText = `Единична цена`;
                thProductWeight.innerText = `Количество`;
                thProductFinalPrice.innerText = `Крайна цена`;
                thDeleteProduct.innerText = `Премахни продукт`;
    
                tableRow.append(thProductName,thProductPrice,thProductWeight,thProductFinalPrice,thDeleteProduct);
                table.appendChild(tableRow);
                container.append(table);
    
            let sum = 0;
            for (let i = 0; i < user.cart.length; i++) {
    
                let product = user.cart[i];
                let tr = document.createElement("tr") ;       
                let productName = document.createElement("td");
                let productPrice = document.createElement("td")
                let quantity = document.createElement("td");
                let quantityInput = document.createElement("input");
                let productPriceTotal = document.createElement("td");
                let productTotal = Number(product.price * product.quantity);
                let deleteContainer = document.createElement("td");
                let deleteProductButton = document.createElement("button");
    
                productName.innerText = `${i+1}. ${product.name}`;
                productPrice.innerText = `${product.price.toFixed(2)} лв.`;
        
                quantityInput.setAttribute("type", "number");
                quantityInput.setAttribute("id", "cart-quantity-input");
                quantityInput.setAttribute("min", "1");
                quantityInput.value = product.quantity;
                quantity.appendChild(quantityInput);
    
                quantityInput.addEventListener("input", function(event){
                    product.quantity = +event.target.value;
                    productPriceTotal.innerText = `${Number(event.target.value * product.price).toFixed(2)} лв.`;
                });
    
                product.totalPrice = productTotal;
                productPriceTotal.innerText = `${productTotal.toFixed(2)} лв.`;
    
                sum+= productTotal;
    
                deleteProductButton.classList.add("deleteProductButton");
                deleteProductButton.innerText = `Премахни`;
                deleteContainer.appendChild(deleteProductButton);
    
                deleteProductButton.addEventListener("click",function () {
                    user.removeFromCart(product);
                    showCounter();
                })
                tr.append(productName,productPrice,quantity,productPriceTotal,deleteContainer)
                table.append(tr);   
            }
            
            printTotalPriceAndSubmitButton(sum,container,table);
            printOrderHistory(activeUserOrderHistory,container);
        }
    }
})()

