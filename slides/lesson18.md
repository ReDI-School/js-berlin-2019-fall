<!-- .slide: id="lesson18" -->

# Basic Frontend - Fall 2019

Lesson 18, Thursday, 2019-10-31

---

### Recap: What did we learn last time?

- Touched on using the `moment()` library to format date strings
- Calling BVG rest endpoint to get station data
- Using GET parameters
- Encoding using `encodeURIComponent()` to pass parameters safely

---

### Today

- Review homework
- More on libraries

---

### Homework check

---

### Libraries

- A library is a bundle of code that contains frequently used functions
- Can be built by yourself or someone else
- ex: momentjs, jQuery, leaflet, lodash
- Have a specific focus/specialization

---

### Linking someone else's library

Last week, we linked momentjs using a `<script>` tag

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.js"></script>
```

---

### Creating your own library

- Start a project as usual with `index.html` and `main.js` files.
- Create an additional file in the same directory, eg: `mathlibrary.js`
- This file is your library!
- Add a script tag linking it into your `index.html` file as you do with `main.js`

```html
<script src="mathlibrary.js"></script>
<script src="main.js"></script>
```

---

### What goes in the library?

Let's start off simple and create a (unnecessary) library for basic math:

```js
// mathlibrary.js

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}
```

---

### How is a library accessible from main.js?

Once it's linked onto the page, `mathlibrary.js` is automatically run like `main.js` is.
However, those functions are in a different scope, we need to make them available somehow.

```js
// mathlibrary.js

window.mathLibrary = {
  add: function(x, y) {
    return x + y;
  },
  multiply: function(x, y) {
    return x * y;
  }
};
console.log('globals set!');
```

---

### Using the library

Now that you've set your library on `window`, we can see it from `main.js`

```js
// main.js

console.log('main.js loaded');

// Optionally, it's window.mathLibrary
console.log('2 plus 3 is ', mathLibrary.add(2, 3));
console.log('4 times 5 is ', mathLibrary.multiply(4, 5));
```

---

### Practice

- Write a library to create a div and set the text, and use it
- Have this library also create a button with text!
- Write a library to call a specific api (random user api, BVG api)
