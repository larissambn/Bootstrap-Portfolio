document.addEventListener("DOMContentLoaded", function () {
    const products = JSON.parse(localStorage.getItem('productsData'));
    const productsContainer = document.getElementById('productsContainer');
    const totalCountProductsCart = document.getElementById("totalCountProductsCart");
    const totalValueProductsCart = document.getElementById("totalValueProductsCart");

     // Retrieve values from local storage
     const totalPricesSum= localStorage.getItem('totalPricesSum');
     const totalCount = localStorage.getItem('totalCount');

     // Check if values exist in local storage before updating the elements
     if (totalPricesSum !== null && totalCount !== null) {
         totalValueProductsCart.textContent = `Total Price : ${totalPricesSum}`;
         totalCountProductsCart.textContent = `Total items: ${totalCount}`;
     } else {
         // Handle case when values are not found in local storage
         console.log('Values not found in local storage');
     }

    if (products) {
        const productList = document.createElement('div');

        products.forEach(product => {
            // Check if the count is 0 or null for each product
            if (product.count === null || product.count === 0) {
                // pass
                // This skips adding the product details to the list
            } else {
                // create div element
                const listItem = document.createElement('div');
                
                // write products details on web page
                listItem.innerHTML = 
                `<div>
                <p>Product: ${product.productName}</p>
                <p> Number of items: ${product.count}</p>
                <p> Price: € ${product.price}</p>
                <p> Total Price: € ${product.totalPrice}</p>
                </div>
                </br>`;

                //appendChild: This method is used on the productsContainer element, adding the productList as a child within
                // the productsContainer. In this context, productList with its updated product details is inserted into the productsContainer
                productList.appendChild(listItem);
            }
        });

        productsContainer.appendChild(productList);
    }

const switchTheme = document.getElementById("darkmode");
switchTheme.addEventListener("click", () => {
    document.body.classList.toggle("bg-dark");

});    
});
