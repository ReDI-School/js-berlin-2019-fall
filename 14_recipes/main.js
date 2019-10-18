let recipes = [
  {
    name: 'Pizza',
    serving: '2 people (1 if you are hungry)',
    ingredients: [
      'flour', 'oil', 'tomato sauce', 'mozzarella', 'mushrooms'
    ]
  },
  {
    name: 'Smoked Salmon Pasta',
    serving: '2 people',
    ingredients: [
      'spaghetti', 'red onions', 'garlic', 'cream', 'pepper', 'smoked salmon'
    ]
  }
];


let orderedListEl = document.createElement('ol');
let recipeListEl = document.getElementById('recipeList');
recipeListEl.appendChild(orderedListEl);

for (let recipe of recipes) {
  let listEl = document.createElement('li');
  orderedListEl.appendChild(listEl);


  let nameEl = document.createElement('h4');
  nameEl.textContent = recipe.name;

  // change the color when the mouse hovers over the title
  nameEl.onmouseenter = function () {
    nameEl.style.color = 'green';
  }
  nameEl.onmouseleave = function () {
    nameEl.style.color = 'black';
  }
  listEl.appendChild(nameEl);

  let hideButton = document.createElement('button');
  hideButton.textContent = "hide";
  listEl.appendChild(hideButton);

  let servingEl = document.createElement('div');
  servingEl.textContent = "Serving: " + recipe.serving;
  listEl.appendChild(servingEl);


  //create an unordered list of ingredients and add it to this list element
  let ingredientsList = document.createElement('ul');
  listEl.appendChild(ingredientsList);
  for (let ingredient of recipe.ingredients) {
    let ingredientEl = document.createElement('li');
    ingredientEl.textContent = ingredient;
    // Strike a line through one of the ingredients if the user clicks on it
    let isStriked = false;
    ingredientEl.onclick = function () {
      if (isStriked) {
        ingredientEl.style.textDecoration = 'unset';
        isStriked = false;
      } else {
        ingredientEl.style.textDecoration = 'line-through';
        isStriked = true;
      }
    }
    ingredientsList.appendChild(ingredientEl);
  }

  // hide and show the contents when the button is clicked
  let isVisible = true;
  hideButton.onclick = function () {
    if (isVisible) {
      servingEl.style.display = 'none';
      ingredientsList.style.display = 'none';
      hideButton.textContent = 'show';
      isVisible = false;
    } else {
      servingEl.style.display = 'block';
      ingredientsList.style.display = 'block';
      hideButton.textContent = 'hide';
      isVisible = true;
    }
  }


}
