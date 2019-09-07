<!-- .slide: id="lesson6" -->

# Basic Frontend - Fall 2019

Lesson 6, Thursday, 2019-09-10

---

### Homework - solution
[interactive solution on jsbin!](https://jsbin.com/hoyuyum/edit?html,js,output)

HTML:
```html
<html>
  <body>
    Name: <input id="name" type="text" />
    Age: <input id="age" type="number" />
    <button onclick="onEnrollClicked()">Enroll</button>
    <p id="result"></p>
    <script src="main.js"></script>
  </body>
</html>
```

---

JavaScript:
```js
function onEnrollClicked() {
  let nameElement = document.getElementById("name");
  let ageElement = document.getElementById("age");
  let resultElement = document.getElementById("result");

  let name = nameElement.value;
  let age = Number(ageElement.value);

  if (age > 2 && age <= 6) {
    resultElement.textContent = name + " can enter Kindergarten";
    resultElement.style.backgroundColor = "green";
  } else {
    resultElement.textContent = name + " can not enter Kindergarten";
    resultElement.style.backgroundColor = "red";
    if (age <= 2) {
      resultElement.textContent += ": Kid too young";
    } else {
      resultElement.textContent += ": Kid too old";
    }
  }
}

```
<!-- .slide: style="font-size:70%;" -->

---

### Recap

```html
<!--
  we give any HTML element an id so we can easily
  access it in JavaScript and CSS
-->
Age: <input id="age" type="number" />
```
```js
// we give the id we defined in HTML when we call
// the 'document.getElementById' function
// and it gives us back that element in JavaScript!
let ageElement = document.getElementById("age");
```

---


```js
// we can access the value of an HTML input using .value
// be careful! .value is a string!
let age = ageElement.value;

// if we want to convert it to number:
let age = Number(ageElement.value);
// OR
let age = parseInt(ageElement.value);

// we can change the contents of an HTML element
// using the .textContent attribute
// we can put any text we want!
resultElement.textContent = "HELLO!!!!";
```

---

Through out the previous examples, we did use the dot ` . ` operator a lot

But we haven't really explained it.

```js
let nameElement = document.getElementById("name");
let resultElement = document.getElementById("result");

let name = nameElement.value;

resultElement.textContent = name + " can enter Kindergarten";
resultElement.style.backgroundColor = "green";
```

to understand it, we have to first understand `objects`!

---

Normal JavaScript variables can contain only single values:
```js
let name = 'John!';
let age = 25;
let isMarried = false;
```

---

### Objects

Objects are variables too, but they can contain many values!

```js
let person = {
  name: 'John!',
  age: 25,
  isMarried: false
};
```

---

### Object Syntax

To create an object we use curly braces `{}`

```js
// this is an empty object!
let person = {};
```

We put any values with their names in the `{}`, these values are written as a pair `property: value`

```js
let person = {
  name: 'John!'
};
```

---

If we have more than one pair, we need to add a comma after each pair.

```js
let person = {
  name: 'John!',
  age: 25,
  isMarried: false
};
```

We can add as many properties as we want!

---

We can also add functions as properties!

```js
let mathStuff = {
  PI: 3.1415,
  square: function(x) {
    return x * x;
  },
  half: function (x) {
    return x / 2;
  }
};
```


---

Okay, now we created an object, what can we do with it?

```js
// we can access the value of a property using the . operator
let someonesName = person.name;


// we have used 'console.log' for a while now,
// 'console' is an object that the browser creates for us
// and 'log' is a function defined on that object
console.log(someonesName); //John!

// we can use stuff in our object as if
// they were out of the object
let number = mathStuff.square(person.age);

// we can also change the value
person.age = (person.age + 30) / 2;

```
<!-- .slide: style="font-size:95%;" -->

---

what would happen here?

```js
let person = {
  name: 'John!',
  age: 25,
  isMarried: false
};

console.log(person.numChildren); // ????
person.lastName = 'Smith'; // ????
person.isMarried(); // ????
```
---

Solutions

```js
let person = {
  name: 'John!',
  age: 25,
  isMarried: false
};

console.log(person.numChildren); // undefined

// this is correct, we added a new property: 'lastName'
// with the value of 'Smith' to our person object
person.lastName = 'Smith';

//ERROR! isMarried is a boolean, it is not a function!
person.isMarried();
```

---

### Task - 1

in VSCode, create a new `myRecipe` object with the following information:

* title
* serving
* ingredients

write any recipe you want, and then log it to the console.

You can create a new `index.html` and `main.js` or use the same ones from last time.

---

### Task - 2

create empty HTML elements for each property of your recipe object.

Give them some ids, we are going to use them in the next part of the task.


---

### Task - 3

create a `render` function that takes a recipe object as a parameter and fills out the HTML elements with the contents of that object.

```js
// Remember:
// you can get the HTML element using:
let someElement = document.getElementById('someId');

// you can change the contents of an HTML element
// using the .textContent property
someElement.textContent = 'Whatever you want !';
```

Don't forget to call the function, otherwise the page will remain empty!

---

### Task - 4

create a second `myRecipe2` object with the same structure as the last one and write any recipe you want.

NOTE : do NOT replace your old `myRecipe` variable!

Call your `render` function with the new object you just created, and see how the page changes!

---

### More on objects

We can also create nested objects!

```js
let person = {
  name: 'John',
  age: 30,
  spouse: {
    name: 'Alice',
    age: 28
  }
};

console.log(person.spouse.name); // Alice
```

---

```js
// we can change the background color of the page like this:
document.body.style.backgroundColor = "green";

// document is an object and has a property 'body'
// body is also an object and has a property 'style'
// style is ALSO an object and has a property 'backgroundColor'
// backgroundColor is a string!
// we can just change it to any color we want!
document.body.style.backgroundColor = "red";
```


---

<!--
### Homework

Create a shipping address form, we need to have at least the following items:
* Full name
* Full address
* Email
* Phone

Add a button to submit the form, and when the button is clicked, all the data should be saved in one object and then logged to the console.

BONUS: if the name or address is empty, change the background color of the corresponding input to red indicating and error, otherwise change the color to green.


<!-- .slide: style="font-size:80%;" -->
