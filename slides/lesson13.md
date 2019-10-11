<!-- .slide: id="lesson13" -->

# Basic Frontend - Fall 2019

Lesson 13, Thursday, 2019-10-10

---

# Recap

What did we learn in the past couple of lessons?

<!-- .slide: style="font-size: 140%;" -->

---

# Loops

Loops are used for doing things repeatedly


<!-- .slide: style="font-size: 140%;" -->

---

### while


```js
while (isHungry) {
  eat();
  // make sure the value of isHungry changes
  // otherwise you would have an infinite loop
}
```

<!-- .slide: style="font-size: 140%;" -->

---

### for

```js
for (let i = 0; i < 5; i++) {
   console.log(i);
}
```

<!-- .slide: style="font-size: 140%;" -->

---

### When to use for and while?

* We use a `for` loop if we know in advance how often it will be executed.
* We use a `while` loop if we don't know how many times the loop will be executed.

---

### loops and arrays

Loops are very powerful when used with arrays

<!-- .slide: style="font-size: 140%;" -->

---

### arrays


Arrays are variables that can hold multiple values.

```js
let ages = [10, 20, 30];
```

<!-- .slide: style="font-size: 140%;" -->


---

### accessing elements

We can access elements in the array by number

The numbering starts at `0`:

```js
let cars = ["Saab", "Volvo", "BMW"];

console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
```

<!-- .slide: style="font-size: 140%;" -->

---

### arrays and loops

```js
let names = ['Alice', 'Bob', 'Carl'];

for (let i = 0; i < names.length; i++) {
  console.log('Hello ' + names[i] + '!');
}
// Hello Alice!
// Hello Bob!
// Hello Carl!
```

<!-- .slide: style="font-size: 140%;" -->

---

### Exercise

Let's go over the exercise from last lesson and test our knowledge.

Bonus tasks are up to you!

<!-- .slide: style="font-size: 140%;" -->

---

### Exercise

Create an array containing a few numbers

* Output the last element of your array
* Output the sum of all the numbers in the array
* Output the largest number of the array
* Output the average (mean) of all numbers (sum of all numbers divided by amount of numbers)

---

### Exercise - solutions

```js
let numbers = [3, 7, 5, 45, 12];

// last number of the array
console.log(numbers[numbers.length - 1]); // 12

// sum all the numbers in the array
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); // 72

// largest number in the array
let largest = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log(largest); // 45

// Output the average (mean) of all numbers
// sum of all numbers divided by amount of numbers
let average = sum / numbers.length;
console.log(average); // 14.4

```

---


### for of loop

Some of the tasks we did could be made simpler by using the for-of loop

```js
let numbers = [3, 7, 5, 45, 12];

let sum = 0;
for (let number of numbers) {
  sum += number;
}
console.log(sum); // 72

```

Can you tell what is happening?

---

### for of loop
```js
let numbers = [3, 7, 5, 45, 12];

let sum = 0;
for (let number of numbers) {
  // 'number' here is the same as numbers[i]
  // but we do not need the counter i !!!
  sum += number;
}
console.log(sum);

```


---


```js
let people = [
  {
    name: 'John',
    age: 24
  },
  {
    name: 'Hannah',
    age: 30
  }
];

function introduce(person){
  console.log('Hello, my name is ' + person.name);
  console.log('and I am ' + person.age + ' years old');
}

for (let person of people) {
  introduce(person);
}

```

<!-- .slide: style="font-size: 70%;" -->

---

# get coding!

We are going to use everything we learned in this exercise, if you have any questions, feel free to ask.


---

### Task

You are creating a website that displays a list of recipes to the user.

Each recipe contains the following:

* name
* serving
* array of ingredients

Create an array with 2 or 3 recipes. Render your recipes in HTML using JavaScript.
Use an ordered list for the recipes and an unordered list for the ingredients


---

This time, you decide what to do!
