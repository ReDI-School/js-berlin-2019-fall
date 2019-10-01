<!-- .slide: id="lesson12" -->

# Basic Frontend - Fall 2019

Lesson 12, Tuesday, 2019-10-01

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

### arrays and objects

the difference between arrays and objects is that values in arrays don't need a name.

```js
// the value 25 has the name 'age'
let person = {
  age: 25
};
console.log(person.age); //25

// how can I access the value 25 here?
person = [25];
```

---

we can access elements in the array by number!

the numbering starts at `0`
```js
let cars = ["Saab", "Volvo", "BMW"];

console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW
```

The order of elements in the array matter.

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

We can change any value using the same syntax
```js
let names = ["Alice", "Bob", "Carol"];

names[1] = "David";

console.log(names[1]); // David
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

### exercise

Create an array with 3 elements, each element should be a recipe, each recipe should have at least a name and an array of ingredients.

---
