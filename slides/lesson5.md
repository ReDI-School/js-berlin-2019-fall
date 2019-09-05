<!-- .slide: id="lesson5" -->

# Basic Frontend - Fall 2019

Lesson 5, Thursday, 2019-09-05

---

### Homework - solution

* Simple: https://jsbin.com/tideges/edit?js,console
* With functions: https://jsbin.com/tahihax/edit?js,console

---

### Quiz

* What does the code below do?

```js
let t1 = (12 - 32) * 5/9;
let t2 = (15 - 32) * 5/9;
```

---

### Quiz

* What does the code below do?

```js
let t1 = (12 - 32) * 5/9;
let t2 = (15 - 32) * 5/9;
```

Answer: We don't care. It has no semantics, the developer should be shouted at for writing such bad code.

---

### Quiz - Try 2

* What does the code below do?

```js
function fahrenheitToCelsius(degrees) {
   return (degrees - 32) * 5/9;
}

let t1 = fahrenheitToCelsius(12);
let t2 = fahrenheitToCelsius(15);
```

---

### My first interactive Webpage!

* Create a new folder
* Create a html file `index.html`:

```html
<html>
<body>
   <script src="main.js"></script>
</body>
</html>
```

* Create a JS file `main.js`:

```js
console.log("Hello from JavaScript");
```

---

### onclick

* HTML elements have an [`onclick`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick) attribute that executes JavaScript code, e.g.:

```html
<button onclick="let x = 1; x++; console.log(x);">
Click me!
</button>
```

* Writing JavaScript inside HTML is tedious. Call a function instead:

```html
<button onclick="myFunction()">Click me!</button>
```

---

### Add a button

* Add a button to the html:

```html
<button onclick="onButtonClick()"> Change Color </button>
```

* Add a new function to your JavaScript:

```js
function onButtonClick() {
   console.log('Button clicked');
}
```

---

### Changing Color

* Change the color of your body element
* Use auto-complete of VSCode

```js
function onButtonClick() {
   document.body.style.backgroundColor = 'red';
}
```

---

### Document

`document` is a variable provided by browser for us:

https://developer.mozilla.org/en-US/docs/Web/API/Document

`document.body.style.backgroundColor` is a variable pointing to the backgroundColor of the style of the body of the document.

More details later when we learn more about the `object` datatype.

---

### Add Input Field

* Add an input field, and it field an `id` attribute:
```html
<input type="text" id="textColor"
   placeholder="Background Color">
```
* Use [`document.getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) to get a variable pointing to your HTML element
* Console log the `value` attribute:

```js
function onButtonClick() {
   let textColorElement = document.getElementById('textColor');
   console.log(textColorElement.value);
   document.body.style.backgroundColor = 'red';
}
```

---

### Exercise

* Extend the function below to set the background color to the value of the input element:

```js
function onButtonClick() {
  let textColorElement = document.getElementById('textColor');
  console.log(textColorElement.value);
  document.body.style.backgroundColor = 'red';
}
```

---

### Solution

```js
function onButtonClick() {
  let textColorElement = document.getElementById('textColor');
  console.log(textColorElement.value);
  document.body.style.backgroundColor = textColorElement.value;
}
```

---

### Further reading

* Query Selectors. Learn CSS Selectors with plates: [flukeout.github.io](https://flukeout.github.io/)
* HTML/CSS colors [https://developer.mozilla.org/en-US/docs/Web/CSS/color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

---

<!-- .slide: style="font-size:60%;" -->

### Exercise

* Create a HTML page with two text input fields: `name` and `age`
* Add a button named `enroll`, call `onEnrollClicked()` when it’s clicked
* Create a JavaScript file with a function `onEnrollClicked`
* In your function, check whether the kid can join our Kindergarten (must be older than two and younger or equal to 6 years old)
* When the button is clicked, `console.log` the name of the kid and "yes, can enter" or "no, can’t enter"

* BONUS1: Set the page background red if the kid can’t enter, green otherwise
* BONUS2: `console.log` the reason the kid can’t enter (e.g. “too young” or “too old”)

