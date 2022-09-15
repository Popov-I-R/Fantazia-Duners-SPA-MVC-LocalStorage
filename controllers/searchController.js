(function() {
    let searchField = document.getElementById("search");
    searchField.addEventListener("keyup", function(e){
        let text = e.target.value
        let filtered = manager.filter(text)
        printHomePage(filtered,homeResults)
    })
})()

