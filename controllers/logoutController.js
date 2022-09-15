(function() {
    let header = document.getElementById("header");
    let logoutButton = document.getElementById("logoutButton");

    logoutButton.addEventListener("click", function(){
        header.removeAttribute("style");
        header.classList.add("hidden-nav");
        activeUser.removeActiveUserOnLogout();
        setTimeout(() => {
            window.location.reload()
        }, 30 );
    })
})()
