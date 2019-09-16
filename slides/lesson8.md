<!-- .slide: id="lesson8" -->

# Basic Frontend - Fall 2019

Lesson 8, Tuesday, 2019-17-12

---

### Preject: Guessing game

Already done?

* **BONUS**: Output all the wrong guesses as well
* **BONUS**: After the user wins a game, choose a new secret number and let the user play again

---

### Quiz - Question 1

* How can we include a JavaScript file in our HTML file?

---

### Quiz - Question 1

* How can we include a JavaScript file in our HTML file?

```html
  <script src="main.js"></script>
```

---

### Quiz - Question 2

* How can we get an element from our document by its `id` attribute?

---

### Quiz - Question 2

* How can we get an element from our document by its `id` attribute?

```js
  let myElement = document.getElementById("someId");
```

---

### Quiz - Question 3

* How can we get the value from a html `<input>` field?

---

### Quiz - Question 3

* How can we get the value from a html `<input>` field?

```js
let myValue = myInputElement.value;
```

---

### Quiz - Question 4

* How can we set the text in an html element?

---

### Quiz - Question 4

* How can we set the text in an html element?

```js
myElement.textContent = "Hello";
```

---

### Quiz - Question 5

* How do we execute JavaScript when a button is clicked?

---

### Quiz - Question 5

* How do we execute JavaScript when a button is clicked?

```html
<button onclick="myFunction()">Click me!</button>
```

---

### Variable lifetime

Variables live only in their scope (the block of code surrounded by curly braces):

```js
function foo();
{
  let x = 42;
  // x is available
}

// x is NOT available
```

---

### Variable lifetime (2)

```js
function foo();
{
  let x = 42;
  // x is available
  if (x >= 42) {
    let y = 7331;
    // y and x are available
  }
  // only x is available, y is NOT available
}

// x and y are NOT available
```

---

### Global scope

Variables declared _outside_ a code block are in the global scope and are globally available:

```js
let buttonClickCount = 0;

function onButtonClick() {
  buttonClickCount += 1;
  console.log("you clicked the button " + buttonClickCount + " times");
}
```

---

### Objects

* Objects are a collection of *keys* and *values*.
* The key is for us a label (like a variable name). You will also see this called a "property". Keys unlock what is behind the door.
* The value is the type represented by the key. What is behind the door!
* Together they create a pair. Remember: objects are made of Pairs.
They come together. They are the building blocks of objects.

---

### Remember: Pairs

![Pears](images/pears.png) <!-- .element height="600px" width="600px" style="display: block; margin: 0 auto" -->

---

### Example

```js
let person = {
  firstName: 'John',  // key: firstName - value: 'John'
  lastName: 'Doe'     // key: lastName  - value: 'Doe'
};
```

* Objects start and end with curly braces `{}`
* They can contain zero or more key-value pairs

---

### Accessing key-value pairs

* You can access the values of an object with a dot: `.`

```js
let person = {
  firstName: 'John',
  lastName: 'Doe'
};

console.log(person.firstName); // prints "John"
console.log(person.lastName); // prints "Doe"
```

---

### Try it out!

* Write some facts about you and print them to console:

```js
let person = {
  firstName: 'Bob',
  age: 32,
  isStudent: true
};

console.log("Hi, I am " + person.firstName + " and ...");
```

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

So far, we had `number`, `string`, `boolean` and `object` as values. How about `function`?

```js
let person = {
  name: "John",
  sayHi: function() { console.log("Hi, I am John"); }
}
```

Quiz: How do we call `sayHi`?

---

### Functions in Objects (2)

```js
let person = {
  name: "John",
  sayHi: function() { console.log("Hi, I am John"); }
}

person.sayHi(); // calls the sayHi function within our person
```
