window.addEventListener('DOMContentLoaded', () => {
    const addButtons = document.querySelectorAll(".add-button");
    const removeButtons = document.querySelectorAll(".remove-button");
    const countSpans = document.querySelectorAll(".count");
    const price = document.querySelectorAll(".initial-price");
    const totalPrice = document.querySelectorAll(".totalPrice");
    const totalCountCart = document.getElementById("totalCountCart");
    const totalPriceCart = document.getElementById("totalPriceCart");
    const productNames = document.querySelectorAll(".product-name");

    let products = [];

    let counts = Array.from({ length: addButtons.length }, () => 0);

    addButtons.forEach((addButton, index) => {
        addButton.addEventListener("click", () => {
            counts[index]++;
            updateItem(index);
        });

        removeButtons[index].addEventListener("click", () => {
            if (counts[index] > 0) {
                counts[index]--;
                updateItem(index);
            }
        });
    });

    function updateItem(index) {
        countSpans[index].textContent = `Total items: ${counts[index]}`;
        const itemTotalPrice = counts[index] * parseFloat(price[index].textContent);
        totalPrice[index].textContent = `Total price: €${itemTotalPrice.toFixed(2)}`;

        if (counts[index] === 0) {
            removeButtons[index].style.display = "none";
        } else {
            removeButtons[index].style.display = "block";
        }

        updateTotal();
    }

    function updateTotal() {
        let totalPricesSum = 0;
        let totalCount = counts.reduce((acc, current) => acc + current, 0);

        totalPrice.forEach((totalPriceElement, index) => {
            totalPricesSum += counts[index] * parseFloat(price[index].textContent);
        });

        localStorage.setItem('totalPricesSum', totalPricesSum);
        localStorage.setItem('totalCount', totalCount);

        totalCountCart.textContent = `Total items: ${totalCount}`;
        totalPriceCart.textContent = `Total Price: €${totalPricesSum.toFixed(2)}`;

        products = [];
        for (let i = 0; i < countSpans.length; i++) {
            const product = {
                productName: productNames[i].textContent,
                count: parseInt(counts[i]),
                price: parseFloat(price[i].textContent),
                totalPrice: counts[i] * parseFloat(price[i].textContent)
            };
            products.push(product);
        }

        localStorage.setItem('productsData', JSON.stringify(products));
    }
});

const switchTheme = document.getElementById("darkmode");
switchTheme.addEventListener("click", () => {
    document.body.classList.toggle("bg-dark");
});
