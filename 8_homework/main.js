let itemsList = document.getElementById('itemsList');
let priceElement = document.getElementById('price');

let milk = {
  name: "Milk",
  price: 0.99,
  quantity: 0
};

let bread = {
  name: "Bread",
  price: 0.49,
  quantity: 0
};


function renderProduct(product) {
  let productElement = document.createElement("div");
  let text = product.name + ' price: ' + product.price + '€ ';
  productElement.textContent = text;

  let inputElement = document.createElement('input');
  inputElement.type = 'number';
  inputElement.placeholder = 'Quantity';
  inputElement.onchange = function() {
    product.quantity = parseInt(inputElement.value);
    console.log('the value of', product.name, 'has changed to', product.quantity);
    renderTotalPrice();
  }
  productElement.appendChild(inputElement);
  itemsList.appendChild(productElement);
}

function renderTotalPrice() {
  let price = 0;
  price += getTotalProductPrice(milk);
  price += getTotalProductPrice(bread);
  priceElement.textContent = price.toFixed(2);
}

function getTotalProductPrice(product) {
  return product.price * product.quantity;
}

renderProduct(milk);
renderProduct(bread);
