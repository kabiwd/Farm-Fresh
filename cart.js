document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const clearCartButton = document.getElementById('clear-cart');
  const checkoutButton = document.getElementById('checkout');

  function displayCartItems() {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cartItemsContainer.innerHTML = '';

      if (cart.length === 0) {
          cartItemsContainer.innerHTML = '<p>Your cart is empty!</p>';
          return;
      }

      cart.forEach(item => {
          const cartItem = document.createElement('div');
          cartItem.classList.add('cart-item');
          cartItem.innerHTML = `
              <img src="${item.image}" alt="${item.name}">
              <h3>${item.name}</h3>
              <p>${item.price}</p>
          `;
          cartItemsContainer.appendChild(cartItem);
      });
  }

  clearCartButton.addEventListener('click', () => {
      localStorage.removeItem('cart');
      displayCartItems();
  });

  checkoutButton.addEventListener('click', () => {
    window.location.href = 'confirmation.html';
});


  displayCartItems();
});
