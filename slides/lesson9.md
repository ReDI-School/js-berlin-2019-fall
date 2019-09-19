<!-- .slide: id="lesson9" -->

# Basic Frontend - Fall 2019

Lesson 9, Thursday, 2019-19-12

---

### Repeat - JavaScript files

```js
console.log("A");

function onButtonClicked() {
    console.log("B");
}

console.log("C");
```

This script is loaded in a html page using a `script` tag. A button's `onlick` attribute is set to `onButtonClicked()`.

**QUIZ**: What does the script print? And when?

---

### Repeat - JavaScript files (2)

```js
console.log("A");

function onButtonClicked() {
    console.log("B");
}

console.log("C");
```

When the HTML page loads, it prints `A` and `C`. Whenever the button is clicked, it prints `B`.

---

### Why objects?

Imagine writing a function that prints details about a person without using objects:

```js
function printPerson(firstName, lastName, age, isStudent, favoriteFood, streetAddress, city, country, phone, fax, facebookName) {
  console.log("Hi I am " + firstName + " ... ");
}
```

---

### Why objects? (2)

Now imagine the same function when using objects:

```js
function printPerson(person) {
  console.log("Hi, I am " + person.firstName + " ... ");
}
```

All the person's details are stored in one variable, much less to type!

---

### Modifying Objects

All key-value pairs in an object can be modified like normal variables:

```js
let person = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 28
};

// QUIZ:
// Jane has had her birthday, let's make her one year older:
// Jane marries her partner, changes her name to "Smith"
```

---

### Modifying Objects (2)

```js
let person = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 28
};

// Jane has had her birthday, let's make her one year older:
person.age = 29;
// Jane marries her partner, changes her name to "Smith"
person.lastName = "Smith";
```

---

### Adding new key-value pairs

You can easily add new key-value pairs to an existing object:

```js
let person = {
    firstName: 'Jane'
};

person.age = 28; // adds a new property with key 'age' and value '28'
```

---


### Objects in Objects

* A 'value' in an object can itself be an object:

```js
let person = {
  name: "John",
  address: {
    street: 'Am Nordbahnhof',
    city: 'Berlin'
  }
};
```

Quiz: How do we access the person's city?

---

### Objects in Objects

```js
let person = {
  name: "John",
  address: {
    street: 'Am Nordbahnhof',
    city: 'Berlin'
  }
};

console.log(person.address.city);
```

---

### Functions in Objects

So far, we had `number`, `string`, `boolean` and `object` as types of values. How about `function`?

```js
let person = {
  name: "John",
  sayHi: function() { console.log("Hi, I am John"); }
};
```

Quiz: How do we call `sayHi`?

---

### Functions in Objects (2)

```js
let person = {
  name: "John",
  sayHi: function() { console.log("Hi, I am John"); }
};

person.sayHi(); // calls the sayHi function within our person
```

---

### 'this' special variable

Every object has a special `this` variable that points to itself:

```js
let person = {
  name: "John",
  sayHi: function() { console.log("Hi, I am " + this.name); }
};
```

---

### Why use `this.name`?

Using `this.name` instead of `"John"` makes the function independent of the current value of `name`:

```js
let person = {
  name: "John",
  sayHi: function() { console.log("Hi, I am " + this.name); }
};

person.sayHi(); // prints "Hi, I am John"
person.name = "Jane";
person.sayHi(); // prints "Hi, I am Jane"
```

---

### Summary

* Objects start and end with curly braces `{}`
* Objects are a collection of *key* and *value* pairs, separated by comma
* Values can be of any type, including `object` and `function`
* Inside an object, we can use `this` to refer to our object

---

### Creating HTML elements from JavaScript

We can create new HTML elements with `document.createElement`. It takes one parameter, which is the element type:

```js
let divElement = document.createElement("div");
let buttonElement = document.createElement("button");
let inputElement = document.createElement("input");
```

---

### Adding our element to the page

Just calling `document.createElement()` is not enough. We also need to tell **where** in the HTML page the new element should appear. We must call `appendChild()`:

```js
let divElement = document.createElement("div");
divElement.textContent = "hello";
document.body.appendChild(divElement); // appends divElement to the <body> element
```

---

### Let's practice

Let's write a little web store:

* Create a 2-3 objects describing products, e.g.:

```js
let milk = {
    name: "Milk",
    price: 0.99,
    description: "Yummy cow juice"
};
```

---

### Let's practice (2)

Write a render function that adds them to our page

```js
function render(product) {
    let productElement = document.createElement("div");
    productElement.textContent = ""; // fill this out
    document.body.appendChild(productElement);
}
```

Call this function for each of your products.

---

### Homework

* In your `render()` function, add an `input` element to your div, so your user can enter the amount of products he wants to buy.
* Make sure the `input` element has type `number`
* Add a `placeholder` to your input element
* Add a `onchange` property to your `input` element
* BONUS: Output the `value` of your input element
* BONUS: Compute how much your user has to pay
