document.addEventListener('DOMContentLoaded', function () {
    const buyButtons = document.querySelectorAll('.buy-button');
    const cartItems = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('total');
    let total = 0;

    buyButtons.forEach(button => {
        button.addEventListener('click', function () {
            const product = button.parentElement;
            const productId = product.dataset.id;
            const productName = product.querySelector('h2').innerText;
            const productPrice = parseFloat(product.querySelector('p').innerText.replace('$', ''));

            total += productPrice;

            const cartItem = document.createElement('li');
            cartItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
            cartItems.appendChild(cartItem);

            totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
        });
    });

    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', function () {
        alert(`Thank you for your purchase! Your total is $${total.toFixed(2)}`);
        cartItems.innerHTML = '';
        total = 0;
        totalDisplay.textContent = 'Total: $0';
    });
});
