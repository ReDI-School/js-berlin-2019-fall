# Basic Frontend - Fall 2019

## Lesson 1, Tuesday, 2019-08-20

---

### Hi!

Welcome to JavaScript!

```JavaScript
let x = 42;
let weather = "sunny";
let courseStarting = true;
```

---

### Pillars of Web Development

| HTML | CSS | JavaScript |
| ---- | --- | ---------- |
| ![HTML5](images/HTML5_Logo.svg) <!-- .element height="64px" width="64px" --> | ![CSS3](images/css3.svg) <!-- .element height="64px" width="64px" --> | ![JS](images/javascript-logo.svg) <!-- .element height="64px" width="64px" --> |
| *Content* |  *Presentation* | *Dynamic Effects* |
| Nouns | Adjectives | Verbs |

HTML:
```html
<p></p>  <!-- Adds a paragraph -->
```

CSS:
```css
P {color: red;}  /* Makes the paragraph red */
```

JavaScript:
```js
p.remove(); // removes the paragraph
```

---

### JavaScript - What is it?

* JS is a lightweight, cross-platform, object-oriented programming language
* JS is one of three core technologies of web development
* JS makes modern web-development possible
  * Dynamic effects
  * Modern web applications that we can interact with

---

### JavaScript - "Full Stack"

* JS can be used in more contexts, though:
  * In mobile apps, for example [Cordova](https://cordova.apache.org/) or [React Native](https://facebook.github.io/react-native/)
  * Server-side: with [Node.js](https://nodejs.org/en/)
  * In native apps, “embedded” JS engines ([QtQuick](https://doc.qt.io/qt-5/qtquick-index.html), [Rhino/Nashorn](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino))

---

### Tools

We'll be using these tools during our course:

* [Chrome Browser](https://www.google.com/chrome/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [MDN Web Documentation](https://developer.mozilla.org/en-US/)

---

### Tools: Chrome Browser

* https://www.google.com/chrome/
* Most common browser
* Most up to date
* Excellent Development Tools (F12)

---

### Tools: Visual Studio Code

* https://code.visualstudio.com/
* Open source IDE (**I**ntegrated **D**evelopment **E**nvironment)
* Great tools
* Good defaults
* Fast

---

### Tools: MDN Web Documentation

* https://developer.mozilla.org/en-US/
* Up to date reference for JS
* Good guides
* Free

---

### Additional Courseware

* [freecodecamp.org](https://www.freecodecamp.org/)
* [udemy.com](https://www.udemy.com): Introduction to JavaScript Development
* [codeacademy.com](https://www.codecademy.com): Introduction to JavaScript
* [edabit.com](https://edabit.com): Learn JavaScript with interactive challenges and external resources

---

### Special Characters

| Character | Character |
| --- | --- |
| `(` Parentheses `)` | `&` Ampersand `&` |
| `{` Braces, or curly braces `}` | `*` Asterisk `*` |
| `[` Brackets, or square brackets `]` | `^` Caret or circumflex `^` |
| `<` Angle brackets `>` | &#124; Vertical bar, or pipe &#124; |
| `'` Single quote `'`| `~` Tilde `~` |
| `"` Double quote `"` | `#` Hash or number sign `#` |
| `` ` `` Back tick `` ` `` | `_` Underscore `_` |
| `/` Slash, or Forward slash `/` | `:` Colon `:` |
| `\` Backslash `\` | `;` Semicolon `;` |

---

### Data Types

| Name | Description | Example |
| --- | --- | --- |
| Number | Decimals and integers | `42`<br/>`-2`<br/>`5.32` |
| String | Text | `"Would you like express delivery?"`<br/>`'red'` |
| Boolean | Logical values | `true`<br/>`false`
| Undefined | "No value | `undefined` |

---

### Variables

Variable: A container in which we can store a value in order to use it later again in our code

Example:

```js
let priceCoffee = 2;
let priceCappuccino = 3;
let customer = "John";
```

---

### Quiz Time

What are the types of the following variables?

```js
let temperature = 24;
let name = "John";
let teacherIsNice = true;
let totalPrice = '12.5';
let deliveryDate = undefined;
```

---

### Quiz Time - solution

What are the types of the following variables?

```js
let temperature = 24;           // number
let name = "John";              // string
let teacherIsNice = true;       // boolean
let totalPrice = '12.5';        // string
let deliveryDate = undefined;   // undefined
```

---

### Try it out!

* Open [jsbin.com](https://jsbin.com)
* In the `JavaScript` tab, create a few variables describing you, e.g. name, age, ...
* Think of the variable type

---

### Try it out - Solution

```js
let name = "Harald";
let age = 41;
let isTeacher = true;
```

---

### Let, const and var

* In this course, we use the `let` keyword to declare new variables
* Older JavaScript code uses `var`. This is deprecated, use `let` instead.
* If you're sure that the value will never change, you can also declare a variable as "constant" with `const`:

```js
const PI = 3.141592653589793;
```

---

### Strings

Strings start and end with single (`'`) or double quotes (`"`). But what if we want to add a quote within our string?

```js
let indirectSpeech = "He said: "Hello"";
```

Solution: We can escape the very next character with a backslash (`\`):

```js
let indirectSpeech = "He said: \"Hello\"";
```

---

### Quiz: Which strings are correct?

```none
let s1 = "Hello";
let s2 = 'World';
let s3 = "He said "hello" to me";
let s4 = 'Let's go!';
let s5 = "";
let s6 = 'This is a\nnew line';
let s7 = 'This is a backslash: \';
```

---

### Solution

```JavaScript
let s1 = "Hello";					// CORRECT
let s2 = 'World';					// CORRECT
let s3 = "He said "hello" to me";	// WRONG
let s3_correct = "He said \"hello\" to me";
let s4 = 'Let's go!';				// WRONG - unescaped '
let s4_corect = 'Let\'s go!';
let s5 = "";						// CORRECT
let s6 = 'This is a\nnew line';		// CORRECT
let s7 = 'This is a backslash: \';	// WRONG - escaped '
let s7_correct = 'This is a backslash: \\';
```

---

### Operators

| Group | Operators | Example |
| ----- | --------- | ------- |
| Numerical Operators | `+ - * /` | `5 + 4 * 3`<br/>`7 / 2 - 2`<br/>`"Hello" + " World"` |
| Comparison Operators | `=== !== < > <= >=` | `temperature !== 25`<br/>`age >= 18` |
| Logical Operators | &#124;&#124; `&& !` | `a && !b`<br />`x >= 5 && x < 15` |
| Combined Operators | `+= -= *= /= ++` | `a *= 2`<br />`count++` |
