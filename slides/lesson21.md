<!-- .slide: id="lesson21" -->

# Basic Frontend - Fall 2019

Lesson 21, Tuesday, 2019-11-19

---

### Things we did _not_ teach

We did leave out a couple of statements and keywords that you might see in other JavaScript beginners courses:

1. template strings
1. `break`
1. `continue`
1. `switch` statement
1. various operators

---

### Template strings

Template strings start and end with a backtick and can contain JavaScript expressions in a `${}` block:

```js
let name = "John";
let s1 = "Hi, my name is " + name;
let s2 = `Hi, my name is ${name}`;
```

Both s1 and s2 are identical.

---

### `break`

* `break` instantly exits the closest `for` or `while` loop:

```js
for (let i = 0; i < 10; i++) {
    if (i === 8) {
        break;
    }
    console.log(i);
}
```

* Often considered to be "dirty" as it's confusing to exit a loop at arbitrary places

---

### `continue`

* `continue` instantly continues with the next iteration of the loop:

```js
for (let i = 0; i < 10; i++) {
    if (i === 8) {
        continue;
    }
    console.log(i);
}
```

* Often considered to be "dirty" as breaks the established flow of a loop

---

### `switch`

* Switch is a "glorified" `if` statement:

```js
switch (dayOfWeek) {
    case "Monday":
        console.log("today just sucks");
        break;
    case "Friday":
        console.log("almost there!!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("party!!!");
        break;
    default:
        console.log("go to work");
        break;
}
```

---

### Advanced operators

* Arithmetic ( `+ - * / % ++ --` )
* Combined (`+=`, `-=`, etc.)
* Logical (`&& || !`)
* Comparison (`=== !== > < <= >=`)

We did _not_ learn the following:

* Ternary (`?`)
* Bitwise (`& | ~ ^ << >> >>>`)

---

### Debugging

* Debugging comes in handy when the code doesn't do what you expect it to
* Things to know:
   * Breakpoint
   * Step over
   * Step into
   * Step out
   * Call Stack

---

### Let's practice

* Open any of our projects, e.g. https://redi-school.github.io/js-berlin-2019-fall/10_homework/
* Open the developer tools (`F12` key)
* Open the "Sources" tab
* Click on your `main.js` file
* Set a breakpoint
* When the breakpoint triggers, step through your code

---

### Breakpoints and Stepping

* A breakpoint tells the debugger to interrupt your script at a certain line. This is useful to start inspecting the code.

* When your script is paused in debugger, you can either
   * Step over: Goes to the very next line
   * Step into: Tries to go _into_ the next function call
   * Step out: Returns to your caller

---

### Call Stack

* To understand the flow of your application, check the "call stack" - it tells you what functions executed in order to reach your breakpoint

```js
function baz() { console.log("baz!"); }
function bar() { baz(); }
function foo() { bar(); }
foo();
```

What is the call stack if you put a breakpoint to `baz`?

---

### Call Stack - solution

```js
function baz() { console.log("baz!"); }
function bar() { baz(); }
function foo() { bar(); }
foo();
```

What is the call stack if you put a breakpoint to `baz`:

```none
baz
bar
foo
```

---
