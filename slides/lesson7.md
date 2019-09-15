<!-- .slide: id="lesson7" -->

# Basic Frontend - Fall 2019

Lesson 7, Thursday, 2019-09-12

---

# Recap: Everything!

Feel free to interrupt and ask questions!

---

### creating variables

```js
let variableName = value;
```

---

### Recap: data types

Number:
```js
42
-3.14
```

String:
```js
"John"
'Berlin'
```

Boolean:
```js
true
false
```
Undefined, no value
```js
undefined
```

---

### Recap: arithmetic Operators

```js
3 + 4    // 7

3 - 4    // -1

3 * 4    // 12

3 / 4    // 0.75

"I live in" + " " + "Berlin"
// "I live in Berlin"
```

---

### comparison


Always returns a Boolean!

For any type:
* `===`
* `!==`

For numbers only:
* `<`
* `>`
* `>=`
* `<=`

---


### Boolean operators

- NOT (!): inverts
- OR (||): true if at least one of the operands are true
- AND (&&): true if BOTH of the operands are true

---



### If

```js
if (food === 'pizza') {
  console.log('My favorite!');
}
```

```js
if (canEnterKindergarten) {
  console.log('Child is allowed.');
  countChildren++;
}
```

```js
if (money < 1000000) {
  console.log('You are not rich :p');
}
```


---

### If...Else

```js
if (temperature > 25) {
  console.log("Go swimming");
} else {
  console.log("Go biking");
}
```

---

### If...Else-If...Else

```js
if (day === 'Saturday') {
  console.log('Do all the shopping.');
} else if (day === 'Sunday') {
  console.log('Relax!');
} else {
  console.log('Wake up and go to work!');
}
```

---


### Functions

```js
function greet(name){
  console.log("Hello " + name + " !");
}

greet("Bob"); // "Hello Bob !"
```

---


### Simple Project structure

In a folder:

`index.html`:

```html
<html>
<body>
   <script src="main.js"></script>
</body>
</html>
```

`main.js`:

```js
console.log("Hello from JavaScript");
```

---


### onclick

* HTML elements have an [`onclick`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick) attribute that executes JavaScript code, e.g.:

```html
<button onclick="myFunction()">Click me!</button>
```

```js
function myFunction() {
   console.log('Button clicked');
}
```

---


### controlling html element with javascript


```html
<input type="text" id="name" placeholder="Insert your name" />

<div id="result"></div>
```

```js
let nameInput = document.getElementById('name');
let resultElement = document.getElementById('result');

function onButtonClick() {
  let name = nameInput.value;
  resultElement.textContent = 'Your name is ' + name;
}
```

---

### converting string containing numbers to a number

```js
typeof "123"    // "string"
typeof 123      // "number"

"123" === 123   // false

let parsed = parseInt("123");

typeof parsed   // "number"
parsed === 123  // true
```

---

# Questions?

About anything!

well maybe except the meaning of life, because that would fall within the purview of your conundrums of philosophy...

---

### preject!

With all this in mind, you have all the knowledge to do a small project on your own!

Every student has to do the preject. You have until the end of the lesson next Tuesday to finish it.


---

If you get stuck, ask us, ask the other students, and use Google and StackOverflow!

Teachers will help with you have small questions, but we wont give you the complete solution.

---

### preject task

Create a simple number guessing game, the webpage will have a secret number between 0 and 100, the player has to guess which number is that.

The player can input a guess and press a button, the webpage will tell the player if the guess is correct, or if the guessed number is bigger or smaller than the secret number.


At the beginning, the secret number can be any number you want.

---

### optional

**BONUS**: instead of using the same secret number every time, create and use a function to generate the secret number for you. Hint: use [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

**BONUS BONUS**: count the number of guesses until the player finds the secret number

**BONUS BONUS BONUS**: let the player choose the max number (instead of 100)
