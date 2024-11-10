const cartItems = [
  { id: 1, name: "Product 1", price: 29.99, quantity: 1 },
  { id: 2, name: "Product 2", price: 49.99, quantity: 1 },
  { id: 3, name: "Product 3", price: 19.99, quantity: 1 },
];

function updateCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = ""; // Clear existing items
  let totalCost = 0;

  cartItems.forEach((item) => {
    totalCost += item.price * item.quantity;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
            <div>
                <div class="product-name">${item.name}</div>
                <div class="product-price">$${item.price.toFixed(2)}</div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-button" onclick="changeQuantity(${
                  item.id
                }, -1)">-</button>
                <input type="number" class="quantity-input" value="${
                  item.quantity
                }" min="0" readonly />
                <button class="quantity-button" onclick="changeQuantity(${
                  item.id
                }, 1)">+</button>
            </div>
        `;

    cartItemsContainer.appendChild(cartItem);
  });

  document.getElementById("total-cost").innerText = `$${totalCost.toFixed(2)}`;
}

function changeQuantity(id, delta) {
  const item = cartItems.find((item) => item.id === id);
  if (item) {
    item.quantity += delta;

    // Prevent quantity from going below 0
    if (item.quantity < 0) {
      item.quantity = 0;
    }

    updateCart(); // Update the cart display
  }
}

// Initial call to display the cart items
updateCart();
