let printOrderHistory = (function() {
        
    return function printOrderHistory(orders, container) {
        let orderHistory = document.createElement("div")
        let orderHistoryTitle = document.createElement("h1")
        let table = document.createElement("table");
        let tableRow = document.createElement("tr");

        orderHistory.classList.add("order-history");
        orderHistoryTitle.innerText = "История на поръчките";
        orderHistory.appendChild(orderHistoryTitle);

        let thDate = document.createElement("th");
        let thAddress = document.createElement("th");
        let thProducts = document.createElement("th");
        let thProductsFinalPrice = document.createElement("th");

        thDate.innerText = `Дата`;
        thAddress.innerText = `Адрес`;
        thProducts.innerText = `Продукти`;
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
                let addressContainer = document.createElement("td");
                let productsContainer = document.createElement("td");
                let totalPriceContainer = document.createElement("td");

                dateContainer.innerText = order.date;
                addressContainer.innerText = order.address;
                productsContainer.innerText = `${order.productsNameAndCount}`;
                totalPriceContainer.innerText = `${order.totalPrice.toFixed(2)} лв.`;

                tableRow.append(dateContainer,addressContainer,productsContainer,totalPriceContainer);
                table.appendChild(tableRow);
            }
        }
    }
})()


