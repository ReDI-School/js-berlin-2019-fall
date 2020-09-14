<!-- .slide: id="lesson12" -->

# Basic Frontend - Fall 2019

Lesson 12, Tuesday, 2019-10-08

---

### Arrays

Arrays are variables that can hold multiple values.

```js
let cars = ["Saab", "Volvo", "BMW"];

// we create an array using []
let emptyArray = [];

// we put the values we want in these angled brackets
// separated by commas
let prices = [0.99, 0.49];
```

---

Array can hold any type of value you want

```js
let ages = [10, 20, 30];
```

They can also hold values of multiple types!

```js
let stuff = ["John", 20, true, undefined];
```

---

### accessing elements

We can access elements in the array by number

The numbering starts at `0`:

```js
let cars = ["Saab", "Volvo", "BMW"];

console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
// QUIZ - how do we access "BMW" ?
```

---

### accessing elements - solution

We can access elements in the array by number

The numbering starts at `0`:

```js
let cars = ["Saab", "Volvo", "BMW"];

console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW
```

The order of elements in the array matter!

---

### accessing invalid elements

```js
let cars = ["Saab", "Volvo", "BMW"];

console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW
console.log(cars[3]); // ???
```

---

### accessing invalid elements (2)

```js
let cars = ["Saab", "Volvo", "BMW"];

console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW
console.log(cars[3]); // undefined
```

---

### arrays and objects

The difference between arrays and objects is that values in arrays don't need a name.

```js
// the property called 'age' has a value of 25
let person = {
  age: 25
};
console.log(person.age); //25

// how can I access the value 25 here?
person = [25];
```

---

### quiz

```js
let names = ["Alice", "Bob", "Carol"];

console.log(names[1]); // ???
console.log(names[3]); // ???
```

---

### quiz answers

```js
let names = ["Alice", "Bob", "Carol"];

console.log(names[1]); // Bob
console.log(names[3]); // undefined
```

---

### modifying arrays

We can change any value using brackets:

```js
let names = ["Alice", "Bob", "Carol"];

names[1] = "David";

console.log(names[1]); // David
```

---

### getting the length of an array

We can get the length of an array with the `.length` property:

```js
let names = ["Alice", "Bob", "Carol"];
console.log(names.length); // 3
```

---

### appending new values

We can append new values to an array using `.push()`:

```js
let names = ["Alice", "Bob", "Carol"];
console.log(names.length); // 3

names.push("David");

console.log(names.length); // 4
console.log(names[3]); // David
```

---

We can also put objects in arrays

```js
let people = [
  {
    name: "Alice",
    age: 25,
    children: ["David", "Jesse"]
  },
  {
    name: "Bob",
    age: 20,
    children: []
  }
];
```

---

### Exercise

* Step 1: Create an array with your 3 top friends (or foes)
* Step 2: Say "hello" on console to each friend, e.g.:

```txt
hello Alice
hello Bob
hello Carol
```

---

### Exercise - cont.

* Step 1: Create an array with your 3 top friends (or foes)
* Step 2: Say "hello" on console to each friend
* **Step 3**: Same as Step 2, but with a `for` loop

---

### Exercise

Create an array containing a few numbers

* Output the last element of your array
* Output the sum of all the numbers in the array
* Output the largest number of the array
* Output the average (mean) of all numbers (sum of all numbers divided by amount of numbers)

---

### BONUS Exercise

* Create a new array containing only numbers of the original array that are smaller than 5
* Write a function that takes a number and an array of numbers as input parameter. Return the index of the number if it is in the array, otherwise return `-1`
* Create an array with 3 elements, each element should be a recipe, each recipe should have at least a name and an array of ingredients.
