
    // let emptyCard = document.getElementsByClassName("empty-cart");

    let registrationAndLogin = document.getElementById("registrationAndLogin")
    let registationPage = document.getElementById("registerPage")
    let loginPage = document.getElementById("loginPage")
    
    
    
    let activeUser = new ActiveUser() //////////////// za active useraaaaa - Не трий 
    let user = new User();
    let manager = new MainManager()  
    
    for (let i = 0; i < data.length; i++) {
        let obj = data[i] 
        let duner = new Duner(
            obj.image,
            obj.name,
            obj.weight,
            obj.category,
            obj.price,
        )
        manager.add(duner) 
    }
    
// tests start 
    if (localStorage.getItem("activeUser")) {
        console.log(localStorage.getItem("activeUser"));
    } else {
        console.log(localStorage.getItem("activeUser"));
    }

    
    let header = document.getElementById("header")   
    let logoutButton = document.getElementById("logoutButton")
    logoutButton.addEventListener("click", function(){
        header.removeAttribute("style")
        header.classList.add("hidden-nav")

        localStorage.removeItem("activeUser")
    })



    let onHashChange = function () {
        let hash = location.hash.slice(1)


        //ako localSt nqma users - registrationPage 
        //ako localSt ima users, no nqma activeUser  - trqbva da moje da hodi samo do stranici za login i registraciq 
        // ako localSt ima users i activeUser - moje da hodi navsqkude 

        if(localStorage.getItem("users") == null || localStorage.getItem("activeUser") == null) {
            if (hash === "registerPage" || hash === "loginPage" || hash === "") {
                switch (hash) {
                    case "registerPage":
                        homePage.style.display= "none";
                        cartPage.style.display= "none";
                        deliveryPage.style.display= "none";
                        orderCompletePage.style.display = "none"
                        errorPage.style.display="none"
                        loginPage.style.display="none"
                        header.classList.add("hidden-nav")
                        registationPage.style.display = "flex"
                        loginPage.style.display = "none";
                        registrationAndLogin.style.display = "block";
                        break;
                    case "loginPage":
                        homePage.style.display= "none";
                        cartPage.style.display= "none";
                        deliveryPage.style.display= "none"
                        orderCompletePage.style.display = "none"
                        errorPage.style.display="none"
                        header.classList.add("hidden-nav")
                        loginPage.style.display = "flex";
                        registationPage.style.display = "none";  
                        registrationAndLogin.style.display = "block" ;                         
                        break; 
                    case "":
                        homePage.style.display= "none";
                        cartPage.style.display= "none";
                        deliveryPage.style.display= "none"
                        orderCompletePage.style.display = "none"
                        errorPage.style.display="none"
                        header.classList.add("hidden-nav")
                        loginPage.style.display = "flex";
                        registationPage.style.display = "none";  
                        registrationAndLogin.style.display = "block" ;                         
                        break; 
                    default:
                        homePage.style.display= "none";
                        cartPage.style.display= "none";
                        deliveryPage.style.display= "none"
                        orderCompletePage.style.display = "none"
                        errorPage.style.display="none"
                        header.classList.add("hidden-nav")
                        loginPage.style.display = "flex";
                        registationPage.style.display = "none";  
                        registrationAndLogin.style.display = "block" ;                         
                        break; 
                }
            } else {
                header.style.display="none"
                homePage.style.display= "none";
                cartPage.style.display= "none";
                deliveryPage.style.display= "none";
                orderCompletePage.style.display = "none"
                errorPage.style.display="block";
                loginPage.style.display = "none";
                registationPage.style.display = "none";
                location.hash = "#errorPage"
                registrationAndLogin.style.display = "none";
            }
           
        }
        else if(localStorage.getItem("users") && localStorage.getItem("activeUser")) {
              if (hash === "" || hash === "homePage" || hash ===  "cartPage" || 
                hash === "deliveryPage" || hash ===  "orderCompletePage" || hash === "loginPage" || hash === "registerPage") {
                    switch (hash) {
                        case "homePage":
                            homePage.style.display= "block";
                            cartPage.style.display= "none";
                            deliveryPage.style.display= "none";
                            orderCompletePage.style.display="none"
                            errorPage.style.display="none"
                            header.style.display="block"
                            loginPage.style.display = "none";
                            registationPage.style.display = "none";
                            registrationAndLogin.style.display = "none"
                            
                            break;
                        case "cartPage":
                                homePage.style.display= "none";
                                cartPage.style.display= "block";
                                deliveryPage.style.display= "none";
                                orderCompletePage.style.display = "none";
                                errorPage.style.display="none"
                                header.style.display="block"
                                loginPage.style.display = "none";
                                registationPage.style.display = "none";
                                registrationAndLogin.style.display = "none"
                                
                                printCartPage(user.cart, cartPage)
                            break;
                        case "deliveryPage":
                                homePage.style.display= "none";
                                cartPage.style.display= "none";
                                deliveryPage.style.display= "block";
                                orderCompletePage.style.display = "none";
                                errorPage.style.display="none"
                                header.style.display="block"
                                loginPage.style.display = "none";
                                registationPage.style.display = "none";
                                registrationAndLogin.style.display = "none"
                               
                            break;
                        case "orderCompletePage":
                            homePage.style.display= "none";
                            cartPage.style.display= "none";
                            deliveryPage.style.display= "none";
                            orderCompletePage.style.display = "block"
                            errorPage.style.display="none"
                            header.style.display="block"
                            loginPage.style.display = "none";
                            registationPage.style.display = "none";
                            registrationAndLogin.style.display = "none"
                           
                            break;
                        case "errorPage":
                            homePage.style.display= "none";
                            cartPage.style.display= "none";
                            deliveryPage.style.display= "none";
                            orderCompletePage.style.display = "none"
                            errorPage.style.display="block"
                            header.style.display="block"
                            loginPage.style.display = "none";
                            registationPage.style.display = "none";
                            registrationAndLogin.style.display = "none"
                            
                            break;
                        case "registerPage":
                            homePage.style.display= "none";
                            cartPage.style.display= "none";
                            deliveryPage.style.display= "none";
                            orderCompletePage.style.display = "none"
                            errorPage.style.display="none"
                            loginPage.style.display="none"
                            header.classList.add("hidden-nav")
                            registationPage.style.display = "flex"
                            loginPage.style.display = "none";
                            registrationAndLogin.style.display = "block";
                            break;
                        case "loginPage":
                            homePage.style.display= "none";
                            cartPage.style.display= "none";
                            deliveryPage.style.display= "none"
                            orderCompletePage.style.display = "none"
                            errorPage.style.display="none"
                            header.classList.add("hidden-nav")
                            loginPage.style.display = "flex";
                            registationPage.style.display = "none";  
                            registrationAndLogin.style.display = "block" ;                         
                            break;   
                        default:
                            homePage.style.display= "block";
                            cartPage.style.display= "none";
                            deliveryPage.style.display= "none"
                            orderCompletePage.style.display = "none"
                            errorPage.style.display="none"
                            // header.classList.add("hidden-nav")
                            loginPage.style.display = "none";
                            registationPage.style.display = "none";  
                            registrationAndLogin.style.display = "none" ;                          
                            break;
                    }
            } else {
                header.style.display="none"
                homePage.style.display= "none";
                cartPage.style.display= "none";
                deliveryPage.style.display= "none";
                orderCompletePage.style.display = "none"
                errorPage.style.display="block";
                loginPage.style.display = "none";
                registationPage.style.display = "none";
                location.hash = "#errorPage"
                registrationAndLogin.style.display = "none";
            }
        }
        // ako localSt ima potrebitel activeUser potrebitelq moje da hodi do vs stranici 
        //ako localSt nqma potrebitel, no ima users 

    
            // if (hash === "" || hash === "homePage" || hash ===  "cartPage" || 
            //     hash === "deliveryPage" || hash ===  "orderCompletePage" || hash === "loginPage" || hash === "registerPage") {
            //         switch (hash) {
            //             case "homePage":
            //                 homePage.style.display= "block";
            //                 cartPage.style.display= "none";
            //                 deliveryPage.style.display= "none";
            //                 orderCompletePage.style.display="none"
            //                 errorPage.style.display="none"
            //                 header.style.display="block"
            //                 loginPage.style.display = "none";
            //                 registationPage.style.display = "none";
            //                 registrationAndLogin.style.display = "none"
                            
            //                 break;
            //             case "cartPage":
            //                     homePage.style.display= "none";
            //                     cartPage.style.display= "block";
            //                     deliveryPage.style.display= "none";
            //                     orderCompletePage.style.display = "none";
            //                     errorPage.style.display="none"
            //                     header.style.display="block"
            //                     loginPage.style.display = "none";
            //                     registationPage.style.display = "none";
            //                     registrationAndLogin.style.display = "none"
                                
            //                     printCartPage(user.cart, cartPage)
            //                 break;
            //             case "deliveryPage":
            //                     homePage.style.display= "none";
            //                     cartPage.style.display= "none";
            //                     deliveryPage.style.display= "block";
            //                     orderCompletePage.style.display = "none";
            //                     errorPage.style.display="none"
            //                     header.style.display="block"
            //                     loginPage.style.display = "none";
            //                     registationPage.style.display = "none";
            //                     registrationAndLogin.style.display = "none"
                               
            //                 break;
            //             case "orderCompletePage":
            //                 homePage.style.display= "none";
            //                 cartPage.style.display= "none";
            //                 deliveryPage.style.display= "none";
            //                 orderCompletePage.style.display = "block"
            //                 errorPage.style.display="none"
            //                 header.style.display="block"
            //                 loginPage.style.display = "none";
            //                 registationPage.style.display = "none";
            //                 registrationAndLogin.style.display = "none"
                           
            //                 break;
            //             case "errorPage":
            //                 homePage.style.display= "none";
            //                 cartPage.style.display= "none";
            //                 deliveryPage.style.display= "none";
            //                 orderCompletePage.style.display = "none"
            //                 errorPage.style.display="block"
            //                 header.style.display="block"
            //                 loginPage.style.display = "none";
            //                 registationPage.style.display = "none";
            //                 registrationAndLogin.style.display = "none"
                            
            //                 break;
            //             case "registerPage":
            //                 homePage.style.display= "none";
            //                 cartPage.style.display= "none";
            //                 deliveryPage.style.display= "none";
            //                 orderCompletePage.style.display = "none"
            //                 errorPage.style.display="none"
            //                 loginPage.style.display="none"
            //                 header.classList.add("hidden-nav")
            //                 registationPage.style.display = "flex"
            //                 loginPage.style.display = "none";
            //                 registrationAndLogin.style.display = "block";
            //                 break;
            //             case "loginPage":
            //                 homePage.style.display= "none";
            //                 cartPage.style.display= "none";
            //                 deliveryPage.style.display= "none"
            //                 orderCompletePage.style.display = "none"
            //                 errorPage.style.display="none"
            //                 header.classList.add("hidden-nav")
            //                 loginPage.style.display = "flex";
            //                 registationPage.style.display = "none";  
            //                 registrationAndLogin.style.display = "block" ;                         
            //                 break;   
            //             default:
            //                 homePage.style.display= "none";
            //                 cartPage.style.display= "none";
            //                 deliveryPage.style.display= "none"
            //                 orderCompletePage.style.display = "none"
            //                 errorPage.style.display="none"
            //                 header.classList.add("hidden-nav")
            //                 loginPage.style.display = "flex";
            //                 registationPage.style.display = "none";  
            //                 registrationAndLogin.style.display = "block" ;                          
            //                 break;
            //         }
            // } else {
            //     header.style.display="none"
            //     homePage.style.display= "none";
            //     cartPage.style.display= "none";
            //     deliveryPage.style.display= "none";
            //     orderCompletePage.style.display = "none"
            //     errorPage.style.display="block";
            //     loginPage.style.display = "none";
            //     registationPage.style.display = "none";
            //     location.hash = "#errorPage"
            //     registrationAndLogin.style.display = "none";
            // }
    }
    
    window.addEventListener("hashchange", onHashChange)
    window.addEventListener("load", onHashChange)
    
    function printHomePage (allDuners,container) {
        container.innerHTML = ""
        for (let i = 0; i < allDuners.length; i++) { 
            let duner = allDuners[i] 
    
             let div = document.createElement("div");
             div.classList.add("card")
    
             let img = document.createElement("img");
             img.src = duner.image
             img.alt = `product image ${i}`
             img.classList.add("images")
             img.setAttribute("id", "productsHome")
    
             let productDescription = document.createElement("div")
             productDescription.classList.add("product-description")
    
             let productName = document.createElement("h3");
             productName.innerHTML = duner.name
             productName.classList.add("productName")
    
             let productWeight = document.createElement("h3");
             productWeight.innerHTML = `Тегло: ${duner.weight} гр.`
             productWeight.classList.add("productWeight")
    
             let productCategory = document.createElement("h3");
             productCategory.innerHTML = ` Категория: ${duner.category}` 
             productCategory.classList.add("productCategory")
    
             let productPrice = document.createElement("h5");
             productPrice.innerHTML = ` Цена: ${duner.price.toFixed(2)}`
             productPrice.classList.add("productPrice")      
             productDescription.append(productName,productWeight,productCategory,productPrice)
    
            let cardInputAndButton = document.createElement("div")
            cardInputAndButton.classList.add("card-input-and-Button")
    
             let quantityInput = document.createElement("input")
             quantityInput.classList.add("card-field")
             quantityInput.setAttribute("required", "")
             quantityInput.setAttribute("type", "number")
             quantityInput.setAttribute("min", "1")
             quantityInput.setAttribute("minlength", "1")
            
             quantityInput.setAttribute("value", "1")
    
    
             let addToCartButton = document.createElement("button");
             addToCartButton.classList.add("addToCartButton");
             addToCartButton.classList.add("card-field");
             addToCartButton.innerText = "Add to cart ";
    
            addToCartButton.addEventListener("click", function () {
               
                let preferedQuantity = +quantityInput.value 
                if (preferedQuantity !== 0 && preferedQuantity !== undefined && preferedQuantity !== NaN && preferedQuantity !== null) {
                    quantityInput.value = 1
                
                    user.addToCart(duner, preferedQuantity);
                      showCounter()
                        onHashChange();
                } else {
                        quantityInput.classList.add("error")
                        setTimeout(blink, 1000);
                        function blink(){
                            quantityInput.removeAttribute("class", "error");
                            quantityInput.classList.add("class","card-field")
                            quantityInput.value = 1
                        } 
                }   
            });
                cardInputAndButton.append(quantityInput, addToCartButton);
                div.append(img, productDescription, cardInputAndButton);
                container.append(div);   
        }
    
    }
    
    printHomePage(manager.allDuners,homeResults)
    
    // let addedProducts = document.getElementById("added-products")
    
    function printOrderHistory(orders, container) {
        let orderHistory = document.createElement("div")
        orderHistory.classList.add("order-history")
    
        let orderHistoryTitle = document.createElement("h1")
        orderHistoryTitle.innerText = "История на поръчките"
        orderHistory.appendChild(orderHistoryTitle)
    
        let table = document.createElement("table");
        let tableRow = document.createElement("tr");
    
        let thDate = document.createElement("th");
        thDate.innerText = `Дата`;
    
        let thAddress = document.createElement("th");
        thAddress.innerText = `Адрес`;
    
        let thProducts = document.createElement("th");
        thProducts.innerText = `Продукти`;
    
        let thProductsFinalPrice = document.createElement("th");
        thProductsFinalPrice.innerText = `Крайна цена`;
    
        tableRow.append(thDate,thAddress,thProducts,thProductsFinalPrice);
        table.appendChild(tableRow);
        orderHistory.appendChild(table);
        container.append(orderHistory);
    

        if (orders.length > 0) {
            for (let i = 0; i < orders.length; i++) {
                let order = orders[i]
    
                let tableRow = document.createElement("tr");
    
                let dateContainer = document.createElement("td");
                dateContainer.innerText = order.date
    
                let addressContainer = document.createElement("td")
                addressContainer.innerText = order.address
    
                let productsContainer = document.createElement("td")
                productsContainer.innerText = `${order.productsNameAndCount}`
    
                let totalPriceContainer = document.createElement("td")
                totalPriceContainer.innerText = `${order.totalPrice.toFixed(2)} лв.`
    
                tableRow.append(dateContainer,addressContainer,productsContainer,totalPriceContainer)
                table.appendChild(tableRow)
            }
        }
    }
    
    function printCartPage(producs,container) {
        
        let  currentUserOrderHistory = activeUser.showOrdersHistory() // To get the current user orders history
        if (user.cart.length < 1) {
            totalProducts = 0;
            container. innerHTML = "";
    
            function printIfCartEmpty() {
                let emptyCart = document.createElement("div");
                emptyCart.classList.add("empty-cart");
                let noProducts = document.createElement("h1");
                noProducts.innerText = "Нямате добавени продукти в количката";
                emptyCart.appendChild(noProducts);
                container.append(emptyCart)
            }

            printIfCartEmpty()
            printOrderHistory(currentUserOrderHistory,container)

        } else {
            container.innerHTML = ""
    
                let table = document.createElement("table");
                let tableRow = document.createElement("tr");
    
                let thProductName = document.createElement("th");
                thProductName.innerText = `Име на продукт`;
            
                let thProductPrice = document.createElement("th");
                thProductPrice.innerText = `Единична цена`;
            
                let thProductWeight = document.createElement("th");
                thProductWeight.innerText = `Количество`;
            
                let thProductFinalPrice = document.createElement("th");
                thProductFinalPrice.innerText = `Крайна цена`;
            
                let thDeleteProduct = document.createElement("th");
                thDeleteProduct.innerText = `Премахни продукт`;

                tableRow.append(thProductName,thProductPrice,thProductWeight,thProductFinalPrice,thDeleteProduct);
                table.appendChild(tableRow);
                container.append(table);
    
            let sum = 0;
            for (let i = 0; i < user.cart.length; i++) {
                let product = user.cart[i];
    
                let tr = document.createElement("tr") ;       
        
                let productName = document.createElement("td");
                productName.innerText = `${i+1}. ${product.name}`;
        
                let productPrice = document.createElement("td")
                productPrice.innerText = `${product.price.toFixed(2)} лв.`;
        
                let quantity = document.createElement("td");
                let quantityInput = document.createElement("input");
                quantityInput.setAttribute("type", "number");
                quantityInput.setAttribute("id", "cart-quantity-input");
                quantityInput.setAttribute("min", "1");
                quantityInput.value = product.quantity;
                quantity.appendChild(quantityInput);
    
                quantityInput.addEventListener("input", function(event){
                    product.quantity = +event.target.value;
                    productPriceTotal.innerText = `${Number(event.target.value * product.price).toFixed(2)} лв.`;
                });
        
                let productPriceTotal = document.createElement("td");
                let productTotal = Number(product.price * product.quantity);
                product.totalPrice = productTotal;
                productPriceTotal.innerText = `${productTotal.toFixed(2)} лв.`;
                
                sum+= productTotal;
        
                let deleteContainer = document.createElement("td");
                let deleteProductButton = document.createElement("button");
                deleteProductButton.classList.add("deleteProductButton");
                deleteProductButton.innerText = `Премахни`;
                deleteContainer.appendChild(deleteProductButton);
    
                deleteProductButton.addEventListener("click",function () {
                    user.removeFromCart(product);
                    onHashChange();
                    showCounter();
                })
                tr.append(productName,productPrice,quantity,productPriceTotal,deleteContainer)
                table.append(tr);   
            }
            
            printTotalPriceAndSubmitButton();

            
            printOrderHistory(currentUserOrderHistory,container);
    
            function printTotalPriceAndSubmitButton(){
    
                let totalPriceAndSubmit = document.createElement("div");
                totalPriceAndSubmit.classList.add("total-and-submit-container");
            
                let totalPriceContainer = document.createElement("div");
                let totalPrice = document.createElement("h2");
                totalPrice.innerText = `Крайна цена: ${sum.toFixed(2)} лв.`;
                totalPriceContainer.appendChild(totalPrice);
            
                let submitButtonContainer = document.createElement("div");
                let submitButton = document.createElement("button");
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
                            onHashChange();
                        }
                    } else {
                        location.hash = `#deliveryPage`
                        let testUser = activeUser.giveMeTheUser()
                       
                        if (testUser.phone) {
                            document.getElementById("phone").value = `${testUser.phone}`
                        }
                        if (testUser.address !== undefined) {
                            document.getElementById("address").innerText = `${testUser.address}`
                        }
                        if (testUser.name) {
                            document.getElementById("name").value = `${testUser.name}`
                        }
                        
                        
                    }
                })
    
                submitButtonContainer.append(submitButton);
                totalPriceAndSubmit.append(totalPriceContainer,submitButtonContainer);
                container.appendChild(totalPriceAndSubmit);
    
                table.addEventListener("input", function(){
                    showCounter();
                    totalPrice.innerText = sum ;
                    onHashChange();
                })
            }
        }
    }

    