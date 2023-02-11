const apiUrl = 'https://dummyjson.com/products';

// Function to retrieve the data from the API and display it in the cart
async function fetchData() {
  // Call the API using the Fetch API
  const response =  await fetch(apiUrl);
  const data = await (response.json());

  // Clear the existing cart items
  document.querySelector('.cart-items').innerHTML = '';

  // Loop through the data and add each item to the cart
  for (const item of data.products) {
    const cartItem = document.createElement('div');
    cartItem.innerHTML = `
      <div class="cart-item">

        <img src="${item.images[0]}" alt="${item.title} ">
        <div class="cart-item-info">

          <p class="brand"><span>Title:${item.title}</span><span> Brand:${item.brand}<span> </p>
          <p>$${item.price}</p>
          <p>Rating: ${item.rating}</p>
          <p>Stock: ${item.stock}</p>
          
        </div>
      </div>
    `;
    document.querySelector('.cart-items').appendChild(cartItem);
  }
}

// Call the function to retrieve and display the data when the page loads
fetchData();