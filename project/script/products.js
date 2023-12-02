function displayProducts() {
  let isLoggedIn = false;
  if (localStorage.getItem('currentUser')) {
    isLoggedIn = true;
  }

  const productsElements = document.getElementById('products');
  let basketProducts = JSON.parse(localStorage.getItem('basketProducts')) || [];

  let content = '';

  for (let product of products) {
    let isAlreadyInBasket = basketProducts.includes(product.id);

    content += `
        <div class="card">
            <img src="${product.image}" alt="${product.title}" style="width:100%">
            <div>
                <h1>${product.title}</h1>
                <p class="price">${product.price} ₸</p>
                <p class="description">${product.description}</p>
                <button ${isAlreadyInBasket || !isLoggedIn ? 'disabled' : ''} onclick="addToBasket(${product.id})">Добавить в корзину</button>
            </div>
        </div>
        `;
  }

  productsElements.innerHTML = content;
}

function addToBasket(id) {
  let basketProducts = JSON.parse(localStorage.getItem('basketProducts')) || [];
  basketProducts.push(id);
  localStorage.setItem('basketProducts', JSON.stringify(basketProducts));
  displayProducts();
}

displayProducts();
