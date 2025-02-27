document.addEventListener('DOMContentLoaded', () => {
  const viewButtons = document.querySelectorAll('.view-product');
  const productDetails = document.querySelector('.product-details');
  const closeButton = document.querySelector('.product-details .close');
  const orderNowButton = document.querySelector('.product-details .order-now');
  const addToCartButton = document.querySelector('.product-details .add-to-cart');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  viewButtons.forEach(button => {
      button.addEventListener('click', function() {
          const productElement = this.closest('.product');
          const productName = productElement.querySelector('h3').textContent;
          const productPrice = productElement.querySelector('p').textContent;
          const productImage = productElement.querySelector('img').src;

          // Update modal content
          productDetails.querySelector('h3').textContent = productName;
          productDetails.querySelector('p').textContent = productPrice;
          productDetails.querySelector('img').src = productImage;

          // Display the modal
          productDetails.style.display = 'flex';
      });
  });

  closeButton.addEventListener('click', () => {
      productDetails.style.display = 'none';
  });

  // Handle Order Now button functionality
  orderNowButton.addEventListener('click', () => {
      alert('Order placed!');
      productDetails.style.display = 'none';
  });

  // Handle Add to Cart button functionality
  addToCartButton.addEventListener('click', () => {
      const productName = productDetails.querySelector('h3').textContent;
      const productPrice = productDetails.querySelector('p').textContent;
      const productImage = productDetails.querySelector('img').src;
      const quantity = document.getElementById('quantity').value;
      const farmer = document.getElementById('farmer').value;

      const cartItem = {
          name: productName,
          price: productPrice,
          image: productImage,
          quantity: quantity,
          farmer: farmer
      };

      cart.push(cartItem);
      localStorage.setItem('cart', JSON.stringify(cart));

      alert('Added to cart!');
      productDetails.style.display = 'none';
  });

  // Handle View Cart button functionality
  document.getElementById('view-cart').addEventListener('click', () => {
      window.location.href = 'cart.html'; // Redirect to cart page
  });
});

function toggleView(view) {
  const productList = document.querySelector('.product-list');
  if (view === 'grid') {
      productList.classList.remove('list-view');
  } else if (view === 'list') {
      productList.classList.add('list-view');
  }
}

function filterProducts() {
  const searchQuery = document.querySelector('.search-filter input[type="text"]').value.toLowerCase();
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
      const productName = product.querySelector('h3').textContent.toLowerCase();
      if (productName.includes(searchQuery)) {
          product.style.display = 'block';
      } else {
          product.style.display = 'none';
      }
  });
}
