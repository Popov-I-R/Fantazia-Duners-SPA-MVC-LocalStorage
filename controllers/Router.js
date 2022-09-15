let router = (function() {
    class Router {
        handleHashChange(){
            let hash = location.hash.slice(1);
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
                            header.classList.add("hidden-nav");
                            registationPage.style.display = "flex";
                            loginPage.style.display = "none";
                            registrationAndLogin.style.display = "inline-block";
                            break;
                        case "loginPage":
                            homePage.style.display= "none";
                            cartPage.style.display= "none";
                            deliveryPage.style.display= "none"
                            orderCompletePage.style.display = "none"
                            errorPage.style.display="none";
                            header.classList.add("hidden-nav");
                            loginPage.style.display = "flex";
                            registationPage.style.display = "none";  
                            registrationAndLogin.style.display = "inline-block" ;                         
                            break; 
                        case "":
                            homePage.style.display= "none";
                            cartPage.style.display= "none";
                            deliveryPage.style.display= "none";
                            orderCompletePage.style.display = "none";
                            errorPage.style.display="none";
                            header.classList.add("hidden-nav");
                            loginPage.style.display = "flex";
                            registationPage.style.display = "none";  
                            registrationAndLogin.style.display = "inline-block" ;                         
                            break; 
                        default:
                            homePage.style.display= "none";
                            cartPage.style.display= "none";
                            deliveryPage.style.display= "none";
                            orderCompletePage.style.display = "none";
                            errorPage.style.display="none";
                            header.classList.add("hidden-nav");
                            loginPage.style.display = "flex";
                            registationPage.style.display = "none";  
                            registrationAndLogin.style.display = "inline-block" ;                         
                            break; 
                    }
                } else {
                    header.style.display="none";
                    homePage.style.display= "none";
                    cartPage.style.display= "none";
                    deliveryPage.style.display= "none";
                    orderCompletePage.style.display = "none";
                    errorPage.style.display="block";
                    loginPage.style.display = "none";
                    registationPage.style.display = "none";
                    location.hash = "#errorPage";
                    registrationAndLogin.style.display = "none";
                }
            }
            else if(localStorage.getItem("users") && localStorage.getItem("activeUser")) {
                  if (hash === "" || hash === "homePage" || hash ===  "cartPage" || 
                    hash === "deliveryPage" || hash ===  "orderCompletePage") {
                        switch (hash) {
                            case "homePage":
                                    homePage.style.display= "block";
                                    cartPage.style.display= "none";
                                    deliveryPage.style.display= "none";
                                    orderCompletePage.style.display="none"
                                    errorPage.style.display="none";
                                    header.style.display="block";
                                    registrationAndLogin.style.display = "none"
                                    printHomePage(manager.allDuners,homeResults);
                                break;
                            case "cartPage":
                                    homePage.style.display= "none";
                                    cartPage.style.display= "block";
                                    deliveryPage.style.display= "none";
                                    orderCompletePage.style.display = "none";
                                    errorPage.style.display="none";
                                    header.style.display="block";
                                    registrationAndLogin.style.display = "none";
                                    printCartPage(user.cart, cartPage);
                                break;
                            case "deliveryPage":
                                    homePage.style.display= "none";
                                    cartPage.style.display= "none";
                                    deliveryPage.style.display= "block";
                                    orderCompletePage.style.display = "none";
                                    errorPage.style.display="none";
                                    header.style.display="block";
                                    registrationAndLogin.style.display = "none";
                                   
                                break;
                            case "orderCompletePage":
                                    homePage.style.display= "none";
                                    cartPage.style.display= "none";
                                    deliveryPage.style.display= "none";
                                    orderCompletePage.style.display = "block"
                                    errorPage.style.display="none";
                                    header.style.display="block";
                                    registrationAndLogin.style.display = "none";
                                break;
                            case "errorPage":
                                    homePage.style.display= "none";
                                    cartPage.style.display= "none";
                                    deliveryPage.style.display= "none";
                                    orderCompletePage.style.display = "none"
                                    errorPage.style.display="block";
                                    header.style.display="block";
                                    registrationAndLogin.style.display = "none";
                                break;
                                case "":
                                    homePage.style.display= "none";
                                    cartPage.style.display= "none";
                                    deliveryPage.style.display= "none";
                                    orderCompletePage.style.display = "none";
                                    errorPage.style.display="none";
                                    header.classList.add("hidden-nav");
                                    loginPage.style.display = "flex";
                                    registationPage.style.display = "none";  
                                    registrationAndLogin.style.display = "inline-block" ;                         
                                    break; 
                            default:
                                homePage.style.display= "block";
                                cartPage.style.display= "none";
                                deliveryPage.style.display= "none";
                                orderCompletePage.style.display="none"
                                errorPage.style.display="none";
                                header.style.display="block";
                                registrationAndLogin.style.display = "none"
                                printHomePage(manager.allDuners,homeResults);                        
                                break;
                        }
                } else {
                    header.style.display="none";
                    homePage.style.display= "none";
                    cartPage.style.display= "none";
                    deliveryPage.style.display= "none";
                    orderCompletePage.style.display = "none";
                    errorPage.style.display="block";
                    loginPage.style.display = "none";
                    registationPage.style.display = "none";
                    location.hash = "#errorPage";
                    registrationAndLogin.style.display = "none";
                }
            }
        }
    }
    return new Router()
})()

