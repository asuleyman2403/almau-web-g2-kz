function displayBasketProducts() {
  const productsElements = document.getElementById('basket');
  let basketProducts = JSON.parse(localStorage.getItem('basketProducts')) || [];

  let content = '';

  if (!basketProducts.length) {
    content = '<div class="no-data">У нас пустая корзина</div>';
  } else {
    const filteredProducts = [];
    for (let product of products) {
      let isAlreadyInBasket = basketProducts.includes(product.id);
      if (isAlreadyInBasket) {
        filteredProducts.push(product);
      }
    }

    for (let product of filteredProducts) {
      content += `
                <div class="card">
                    <img src="${product.image}" alt="${product.title}" style="width:100%">
                    <div>
                        <h1>${product.title}</h1>
                        <p class="price">${product.price} ₸</p>
                        <p class="description">${product.description}</p>
                        <button class="remove" onclick="removeFromBasket(${product.id})">Удалить</button>
                    </div>
                </div>
                `;
    }
  }

  productsElements.innerHTML = content;
}

function removeFromBasket(id) {
  let basketProducts = JSON.parse(localStorage.getItem('basketProducts')) || [];
  const newItems = [];
  for (let productId of basketProducts) {
    if (productId !== id) {
      newItems.push(productId);
    }
  }
  localStorage.setItem('basketProducts', JSON.stringify(newItems));
  displayBasketProducts();
}

displayBasketProducts();
