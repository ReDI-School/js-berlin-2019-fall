let listElement = document.getElementById('itemList');

let milk = {
  name: "Milk",
  price: 0.99,
  description: "Yummy cow juice",
  amount: 5
};

let bread = {
  name: 'Bread',
  price: 0.49,
  description: "You also need butter, BRO",
  amount: 0
};

function render(product) {
  let productElement = document.createElement("div");
  productElement.textContent = product.name + ' ' + product.price + '€';
  listElement.appendChild(productElement);

  let inputElement = document.createElement('input');
  productElement.appendChild(inputElement);
  inputElement.type = 'number';
  inputElement.placeholder = 'Quantity';
  inputElement.onchange = function() {
    console.log('hey, it worked');
    console.log(product.name + ' is ' + inputElement.value);

    product.amount = parseInt(inputElement.value);
    renderTotalPrice();
  }
}

function renderTotalPrice() {
  let totalPrice = 0;
  totalPrice += milk.price * milk.amount;
  totalPrice += bread.price * bread.amount;
  console.log('total price', totalPrice);

  let priceElement = document.getElementById('price');
  priceElement.textContent = 'total price ' + totalPrice.toFixed(2) + '€';
}

render(milk);
render(bread);
