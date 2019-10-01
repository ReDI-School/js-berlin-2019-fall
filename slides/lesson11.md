<!-- .slide: id="lesson11" -->

# Basic Frontend - Fall 2019

Lesson 11, Tuesday, 2019-10-01

---

You might have noticed in the homework last time that if we want to add a new product, we have to copy and paste a lot of code around, which is never good.

To solve this problem, we are going to talk about array and loops. Let's start with loops.

---

### While loop

A `while` loop repeats its body while its `condition` is `true`:

```js
while (condition) {
  // body is executed while "condition" is true
  console.log("Hello from while loop");
}
```

Example:

```js
while (isHungry) {
  eat();
}
```

While `isHungry` is `true`, the function `eat` is called.

---

### While loop 2

A while loop might execute zero to unlimited times:

```js
let isHungry = false; // we just ate
while (isHungry) {
  eat(); // this is never reached!
}
```

---

### While loop 3

Always make sure that a `while` loop's condition is eventually set to `false`:

```js
while (true) {
  console.log("Hello");
  // this code will print "Hello" until your laptop
  // runs out of battery, you kill the process
  // by closing the browser, you reboot or the universe ends
}

while (isHungry) {
  goRunning(); // going running makes us more hungry
               // loop won't terminate!!!
}
```

---

### Counting

Quiz: Let's `console.log` the numbers from 1 to 5 using a `while` loop.

---

### Counting - solution

Quiz: Let's `console.log` the numbers from 1 to 5 using a `while` loop.

```js
let i = 1;          // initialize i with 1
while (i < 6) {     // repeat this loop until we reach 6
  console.log(i);
  i++;              // increment i at every step
}
```

---

### Loops - illustrated

![loops](images/loop_js-02-farm.png)

<!-- from: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code -->

---

### For loops - parts

Remember this? Let's divide it in parts

```js
let i = 1;          // part 1 - initialize the counter
while (i < 6) {     // part 2 - the exit condition
  console.log(i);
  i++;              // part 3 - update the counter
}
```

You can see that all three parts are spread around.
If the body of the `while` loop gets more complex, it
might be difficult to figure out how long the while loop
runs.

---

### For loops

How can we express the three parts of our while loop better?

We can use a for loop:

```js
for (init; test; update) {
  // body
}
```

The `for` loop consists of three parts, separated by semicolon (`;`)

---

### For loop

Let's replace our `while` loop with a `for`:

```js
let i = 1;          // part 1 - initialize the counter
while (i < 6) {     // part 2 - the exit condition
  console.log(i);
  i++;              // part 3 - update the counter
}

// same code with for loop:

for (let i = 1; i < 6; i++) {
  console.log(i);
}
```

---

### For loop - summary

* A `while` loop executes its body while the condition is `true`.
* A `for` loop *first* runs the **init** part, checks the **condition** part
and if it is `true`, executes the body. After every loop, it executes the **update** part.

---

### For vs. while

* We use a `for` loop if we know in advance how often it will be executed.

```js
for (let i = 0; i < 1000; i++) { console.log(i); }
```

* We use a `while` loop if we don't know how many times the loop will be executed.

```js
while (passwordIsWrong) { askForPassword(); }
```

---

### Exercises

* Write your name five times
* Write the squares of the first 10 numbers (1, 4, 9, 16, ...)
* Output the sum of the first 10 numbers
* Write out the first 10 numbers and write if a number is even or odd.
  * It's even if `i % 2 === 0`, odd otherwise
* BONUS: Solve chapter 2 of http://roverjs.com/

---

### Bonus exercises

* Draw a pyramid:

```
*
**
***
****
*****
```

---

### Bonus 2

This is a real interview question for a Junior JavaScript developer:

* Print all the numbers from 1 to 100 to console
  * If the number is divisible by 3, print “Fizz” instead
  * If the number is divisible by 5 (and not by 3), print “Buzz” instead
  * If the number is divisible by both 3 and 5, print “FizzBuzz” instead
