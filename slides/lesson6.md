<!-- .slide: id="lesson6" -->

# Basic Frontend - Fall 2019

Lesson 6, Tuesday, 2019-09-10

---

### VSCode

To setup a simple front-end project with VSCode, we need at least 2 files:
* an HTML file
* a JavaScript file

To make our setup easier, we put both files in the same folder.

Do it yourself! create a new folder and open that folder with VSCode.

Add two files: `index.html` and `main.js`.

---

And now we have to connect our HTML file with our JavaScript file.

We do that using the `<script>` tag!
```html
<script src="main.js"></script>
```
We put the name of our JavaScript file in the `src` attribute of our `<script>` tag.

---

**Where do we put the script tag?**

You should always put it as the final element of your `body` tag.

```html
<html>
  <head>
    <!-- Stuff here ... -->
  </head>
  <body>
    <!-- More stuff here ... -->

    <!-- your script tag should be just before </body> -->
    <script src="main.js"></script>
  </body>
</html>
```

---

Let's make our HTML file very simple, just to see if it works.

`index.html`:

```html
<html>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```

---

And now in our JavaScript file:


`main.js`:
```js
// let's see if our HTML and JavaScript file are connected
console.log("Hey! it worked!");
```
And now open your `index.html` in the file explorer and it should open in the browser!

---

The page is empty but that's okay! We should check the console to see if it worked.

To open the console, you can press `F12` and go to the `Console` tab.

Or you can use a keyboard shortcut (Chrome):
* Windows: `Ctrl` + `Shift` + `J`
* Mac: `Cmd` + `Option` + `J`

If you see `"Hey! it worked!"` Congrats!

---

### let's solve the homework together!

### in VSCode

---

<!-- .slide: style="font-size:60%;" -->

### homework

* Create a HTML page with two text input fields: `name` and `age`
* Add a button named `enroll`, call `onEnrollClicked()` when it’s clicked
* Create a JavaScript file with a function `onEnrollClicked`
* In your function, check whether the kid can join our Kindergarten (must be older than two and younger or equal to 6 years old)
* When the button is clicked, `console.log` the name of the kid and "yes, can enter" or "no, can’t enter"

* BONUS1: Set the page background red if the kid can’t enter, green otherwise
* BONUS2: `console.log` the reason the kid can’t enter (e.g. “too young” or “too old”)
* BONUS3: instead of outputting to the console, output the text to an HTML element so the user can see the result


---

### Homework - solution

See the full code on Github [here!](https://github.com/ReDI-School/js-berlin-2019-fall/tree/master/6_lesson_kindergarten)

`index.html`:
```html
<html>
  <body>
  <input type="text" placeholder="input name" id="nameInput"/>
  <input type="text" placeholder="input age" id="ageInput"/>
  <button onclick="onEnrollClicked()">enroll</button>
  <div id="result">
    Result would be here
  </div>
  <script src="main.js"></script>
  </body>
</html>
```

---

`main.js`:
```js
console.log('Hello, I am imported from HTML');

function onEnrollClicked() {
  console.log('clicked!');
  let ageInput = document.getElementById('ageInput');
  let age = parseInt(ageInput.value); // '111' => 111
  let canEnter = age > 2 && age <= 6;

  let nameInput = document.getElementById('nameInput');
  let name = nameInput.value;

  let resultDiv = document.getElementById('result');
  resultDiv.textContent = name;

  if (canEnter) {
    resultDiv.textContent += ' yes, can enter!';
    document.body.style.backgroundColor = 'green';
  } else {
    resultDiv.textContent += ' can not enter :(';
    document.body.style.backgroundColor = 'red';
    if (age <= 2) {
      resultDiv.textContent += ' : child is too young';
    } else {
      resultDiv.textContent += ' : child is too old';
    }
  }
}

```
<!-- .slide: style="font-size:50%;" -->

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
let age = parseInt(ageElement.value);

// we can change the contents of an HTML element
// using the .textContent attribute
// we can put any text we want!
resultElement.textContent = "HELLO!!!!";
```
