# Table Of Contents

Quick links to lessons:

[1](#lesson1), [2](#lesson2), [3](#lesson3)

---

<!-- .slide: id="lesson1" -->

# Basic Frontend - Fall 2019

Lesson 1, Tuesday, 2019-08-20

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

---

### Outputting values

* You can use `console.log` to print values to the JavaScript console.
* The console will only be visible to developers, _not_ to your users

Example:

```js
console.log("Hello");
```

---

### Try it out

* In [jsbin.com](https://jsbin.com), declare some variables
* Open the `console` tab in jsbin.com
* Use `console.log()` to print your variables
* Declare two variables `firstName` and `lastName`
* Use an operator to output your full name (first name followed by last name)

---

### Solution

```js
let firstName = "Harald";
let lastName = "Fernengel";
console.log(firstName + " " + lastName);
```

---

<!-- .slide: id="lesson2" -->

# Basic Frontend - Fall 2019


Lesson 2, Thursday, 2019-08-22

---


### Recap: Variables

Variables are like containers, we can put values in these containers.

We can create a new variable by using the keyword `let`.

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

### Variable names

You can choose whatever name you want for your variable, there are two important rules:
- You can use letters, numbers, and underscore _
- Variable name cannot start with a number.

Correct variable names:
```js
let x1 = 0;
let x_1 = 0;
```

Wrong variable names:
```js
let 1x = 0;
let x-1 = 0;
```

---

- In JavaScript, "camelCase" is very common:
  - `isStudent`
  - `favoriteFood`
  - `likesGermanFood`

- Some people also prefer "snake_case":
  - `is_student`
  - `favorite_food`
  - `likes_german_food`

In this course, we prefer camelCase

---


Giving good and descriptive names to your variables is very important!

Good variable names make the code easier to understand by other developers, and even by yourself!

---

### naming Boolean variables

When naming boolean variables, it is best to give it a name that describes a yes/no situation:

- isMarried
- hasKids
- canExecute

---

### Comments

You can write additional information using comments.

Comments are completely ignored by JavaScript, they exist only to help developers.

There are two types of comments:

---

### Comment types

```js
// this is a single-line comment

// anything after // is ignored by JavaScript

let firstName = "John";

let age = 24; // I can also write a comment here!
```

```js
/**
 * this is a multi-line comment
 *
 * I can write however many lines I want!
 */
let firstName = "John";
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

### Recap: console

We can output the contents of our variables to the console of our browser using `console.log();`

Try it yourself on [jsbin.com](https://jsbin.com)
```js
let firstName = "John";
let age = 24;

console.log("my name is " + firstName);
// my name is John

console.log("I am " + age + " years old");
// I am 24 years old

```

---

### Execution

JavaScript executes the code from top to bottom, line by line.

JavaScript will ignore comments.


---

### top to bottom, line by line
Wrong:
```js
console.log(name); // WRONG!! the variable "name" is not created!

let name = "Anakin Skywalker";
```
Correct:
```js
let name = "Anakin Skywalker";

console.log(name); // correct!
```

---

### Exercise

Convert Celsius to Fahrenheit.

```js
let degreesInCelsius = 28;

// Fahrenheit = Celsius multiplied by 1.8 plus 32
let degreesInFahrenheit = ???;

// output to the console to see the final result
console.log(degreesInFahrenheit);

```

---


### Solution

Convert Celsius to Fahrenheit.

```js
let degreesInCelsius = 28;

// Fahrenheit = Celsius multiplied by 1.8 plus 32
let degreesInFahrenheit = degreesInCelsius * 1.8 + 32;

// output to the console to see the final result
console.log(degreesInFahrenheit); // 82.4‬

```

---

### Recap: Booleans

Boolean values can either be `true` or `false`, nothing else.

`true` means yes, or okay.

`false` means no, or not okay.

---

### logic operators

Logical operators are used with Boolean values. And they return a Boolean value.

These operators are:
- Logical NOT (`!`)
- Logical OR (`||`)
- Logical AND (`&&`)

---

### NOT (!)

Works on one boolean, and inverts its value:

```js
console.log(!true); // false

console.log(!false); // true
```

---


### OR (||)

Works on two booleans, the output is true if at least one of the two booleans is true, otherwise its false:

```js
console.log(true || true);   // true

console.log(false || true);  // true

console.log(true || false);  // true

console.log(false || false); // false
```

---


### AND (&&)

Works on two booleans, the output is true if BOTH of the booleans are true, otherwise its false:

```js
console.log(true && true);   // true

console.log(false && true);  // false

console.log(true && false);  // false

console.log(false && false); // false
```

---

### Summary

- NOT (!): inverts
- OR (||): true if at least one of the operands are true
- AND (&&): true if BOTH of the operands are true

---

These operators also work with variables that contain Boolean values.

```js
let isMarried = true;
let hasKids = false;

console.log(!hasKids);              // true

console.log(isMarried && hasKids);  // false

console.log(hasKids || isMarried);  // true
```

---

### Exercise
```js
// set this if you like tea
let drinksTea = ???
// set this if you like coffee
let drinksCoffee = ???

// use tea and coffee variables. Set these
// variables using the &&, ||, and ! operators
let drinksSomething = ???
let drinksBoth = ???
let drinksNothing = ???
```

---

### Solution
```js
let drinksTea = true;
let drinksCoffee = false;

let drinksSomething = drinksTea || drinksCoffee;

let drinksBoth = drinksTea && drinksCoffee;

let drinksNothing = !drinksSomething;
// OR !drinksTea && !drinksCoffee
```

---

### Comparison operators

Always returns a Boolean!

For any type: `===` and `!==`
```js
let food = "Pizza";
let age = 24;

console.log(food === "Pizza");  // true
console.log(food === "pizza");  // false!
// string comparison is case sensitive!

console.log(food !== "Döner");  // true
console.log(food === true);     // false

console.log(age === 24);        // true
console.log(age === 20);        // false
console.log(age !== undefined); // true
```

---

Numbers only: `<`, `>`, `>=` and `<=`
```js
let age = 18;

console.log(age < 50);    // true
console.log(age >= 18);   // true

console.log(age > 18);    // false
console.log(age <= 15)    // false

```

---


### Task

You are implementing a simple program to calculate the entrance fee in a cinema, One Ticket for an adult costs 15€, One Ticket for a child costs 8€.

A family consisting of the two parents and their 3 children wants to go to the cinema, but they can only pay 45€, Can they enter?

---

### Understanding the task
Always divide into small chunks:
- You are implementing a simple program to calculate the entrance fee in a cinema
- One Ticket for an adult costs 15€
- One Ticket for a child costs 8€
- A family consisting of the two parents and their 3 children wants to go to the cinema
- they can only pay 45€
- Can they enter?

Try to solve it on jsbin.com!

---

### solution
```js
let feePerAdult = 15;
let feePerChild = 8;
let numAdults = 2;
let numChildren = 3;
let money = 45;

let costForParents = numAdults * feePerAdult;
let costForChildren = numChildren * feePerChild;

let totalCost = costForParents + costForChildren;
let canEnter = totalCost <= money;

console.log(canEnter); // false
```


---

### Homework, Task part 2
The family is lucky, because it is holiday time. In the holidays there is a 2€ discount per person.
Can they enter now ?

---

<!---
### solution part 2
```js
let discount = 2;
let feePerAdult = 15 - discount;
let feePerChild = 8 - discount;
let numAdults = 2;
let numChildren = 3;
let money = 45;

let costForParents = numAdults * feePerAdult;
let costForChildren = numChildren * feePerChild;

let totalCost = costForParents + costForChildren;
let canEnter = totalCost <= money;

console.log(canEnter); // true
```
---
--->

### homework
We are implementing a simple program that tests if a child is allowed to enter a Kindergarten.

Children are allowed to enter the Kindergarten only if they are older than 2 years old and younger than or exactly 6 years old.
- Can a child with the age of 3 enter?
- Can a child with the age of 7 enter?


---

<!-- .slide: id="lesson3" -->

# Basic Frontend - Fall 2019

## Lesson 3, Tuesday, 2019-08-27

---


### Execution


When we assign a value to a variable, the value is evaluated first and then assigned.

JavaScript will calculate everything on the right of the = sign, and then put it in the variable.
```js
let x = 10;

x = x + 15;

console.log(x); // what is the output here ?

```
---

### Pass-by-value

* Primitive types in JavaScript (number, boolean, string, undefined) are always passed by value:

```js
let age = 42;
let otherAge = age;

age++;   // only increases "age", not "otherAge"

console.log(age);       // 43
console.log(otherAge);  // 42
```

---

### Conditional Statements - If

```js
if (condition) {
  // block of code that
  // will run ONLY if
  // condition is true
}
```

---

### Conditional Statements - Examples

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
