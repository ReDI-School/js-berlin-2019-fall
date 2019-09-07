# Week 2:

## PRACTICAL PART:

### 1. Valid - Invalid, how to fix it

#### A.

```js
let name = "Harald";
let name = "Sevtap";
```

Invalid. Either remove the second variable definition, or remove the let keyword. Remember if you used a name to declare a variable, you can not use that name again for another variable in the same code block.

#### B.

```js
if (name) === "Harald" {
    console.log("Hi Harald");
}
```

Invalid. Take parenthesis after the name and put it before the opening curly brace.

C.

```js
if (name === "Harald") {
    console.log("Hi Harald");
```

Invalid. Put curly brace after semicolon. Remember to close your if statements by typing the closing curly brace.

D.

```js
function addFive(number) {
    return num + 5;
}
addFive(100);
```

Invalid. Use number in return statement, not num. Verify that all the variables you use in your functions are declared either as a local variable or a global variable.

E.

```js
function addFive(number) {
    return number + 5;
}
```

Valid, but not calling the function. Call the function. Correct version:


```js
let result = addFive(10);
```

F.

```js
function addFive(number) {
    return number + 5;
}
let result = addFive;
```

Valid. But not what we wanted. We wanted to call addFive function, but forgot () and the value to pass. Correct version:

```js
let result = addFive(100);
```

G.

```js
function addFive(number) {
    return number + 5;
}
console.log(addFive);
```

Valid. But probably we wanted to call the addFive function with a value and print out the result of the function. Correct version:

```js
console.log(addFive(100));
```

H.

```js
console.log(console.log("Hey Harald"));
```

Valid. Just to show you that if a function does not return a value, it returns undefined.

I.

```js
console.log(console.log);
```

Valid. Just wanted to show you that you can output not just values but also functions. If they are the functions you defined, you can even see the code printed out to the console.

J.

```js
function sayHello {
    console.log("Hello");
}
sayHello();
```

Invalid. Add parentheses after the function name.

### 2. Discuss whether the following code pieces are doing the same thing.

Assuming that we don't change the values of the conditional variables name and favoriteFood, Program 1, 2 and 3 are doing the same thing, meaning that they will output exactly the same sentences.

The Program 4 however definitely outputs a different text, because we change the value of name variable inside the first if statement, which causes the second if statement to be false and as a result the second console.log statement does not get executed.

Stylistically, we prefer the syntax of Program 1, because it is the shortest version to type which makes your code more readable, and also has the less code to execute which makes your program faster. 

So in a similar situations, you should also prefer nested if statement like in Program 1.

**Program 1:**

```js
if (name === "Harald") {
    console.log("Hi, Harald");
    if (favoriteFood === "pizza") {
        console.log("Harald likes pizza");
    }
}
```

**Program 2:**

```js
if(name === "Harald") {
    console.log("Hi, Harald");
    if (name === "Harald" && favoriteFood === "pizza") {
        console.log("Harald likes pizza");
    }
}
```

**Program 3:**

```js
if (name === "Harald") {
    console.log("Hi, Harald");
}
if (name === "Harald" && favoriteFood === "pizza") {
    console.log("Harald likes pizza);
}
```

**Program 4:**

```js
if (name === "Harald") {
    console.log("Hi, Harald");
    name = "Sevtap";
}
if (name === "Harald" && favoriteFood === "pizza") {
    console.log("Harald likes pizza");
}
```

### 3. Write a lessThanFive function which takes a number as a parameter and returns true if the value we pass in is less than 5, returns false if the value we pass in is larger than or equal to 5.

```js
function lessThanFive(number) {
    if (number < 5) {
        return true;
    } else {
        return false;
    }
}
```

or

```js
function lessThanFive(number) {
    return number < 5;
}
```

### 4. Write an echo function which takes a string as a parameter and returns the same string without changing it.

```js
function echo(what) {
    return what;
}
let result = echo("I say hi");
console.log(result);
```

## THEORETICAL PART:

### 1. Go through the list of terms to see how much you remember what they mean.

**keyword**

Special word which JavaScript reserves for structuring programs. Examples: "if", "function", "return". Don't use keywords as variable and/or function names.

**assignment operator**

= sign associates a value, which is on the right side of = sign, with a **variable** which is on the left side of the = sign.

Always make sure that on the left side there is a variable.

**evaluation**

It is like the action of cooking, values are the ingredients, with evaluation you mix the ingredients in an **ordered** fashion to produce a result.

An expression gets evaluated. For example you evaluate the following expression 

```js
5<3 && 2>1
```

**left of the = sign** 

It must be a variable. [Variables allow you to store information, retrieve the stored information, and manipulate it whenever you please. The = operator has a variable identifier on the left and a value on the right.][1]

[1]: https://exlskills.com/learn-en/courses/javascript-fundamentals-basics_javascript/data-types-and-variables-JtljOLyKWIGm/declaring-and-using-variables-XmGXlozOezeC/what-is-a-variable-bCZKhpTgyZaH

**right of the = sign**

It can be any simple value, a variable or an expression

**compound operators**

(+=, -=, *=, -= ...)

Left side must be a variable, 3+= does not work because 3 is not a variable.

**increment operators**

(++)

Left side of ++ operator must be a variable. Remember + works with both numeric values, and numeric variables but ++ only works with variables.

**decrement operators**

(--)

Left side must be a variable.

**copying**

Taking a copy of one value and putting it into another variable.

**code block**

Anything you type between curl braces {}. Insert tab at the beginning of each line as a good style practice.

**conditional statement**

Creates an optional block of code in the program.

**condition**

Anything that should evaluate to true, for code block to run.

**block scope**

Create by surrounding the code with {}. Variables disappear after the end of the block. IMPORTANT to remember.

```js
let a = "Welcome";
function print() {
    let name = “George”; // local variable
    console.log(name);
}

console.log(a);
print();
// The statement below will throw an error
// Try removing the comments and running the program
// console.log(name)
```
[Read on local and global variables and see the original source code][2]

[Knowing the scope of the function as well as the variables inside the function is extremely important when writing your program. Every variable has its own scope and can only be used in specific places inside the program.][3]

[Any variable declared inside the function, including the parameter, is considered a local variable and can only be used within that function.][3]

[2]: https://exlskills.com/learn-en/courses/javascript-fundamentals-basics_javascript/data-types-and-variables-JtljOLyKWIGm/declaring-and-using-variables-XmGXlozOezeC/local-and-global-variables-XQGxUAWIKYKp
[3]: https://exlskills.com/learn-en/courses/javascript-fundamentals-basics_javascript/functions-SDPqsuslAyIO/using-functions-zLVUsmDUzeGX/function-scope-ghoimIvbVUcY

**if statement**

if statement consists of 3 building blocks:

1. if keyword 
1. (condition) 
1. code block

[Many of the decisions we make throughout the day – "it's cold, so put on a coat"; "you're running late, so text your friend"; "you're hungry, so eat something" – have an if-then structure. Just like you, JavaScript can make if-then decisions.][4]

[4]:https://www.teachyourselfpython.com/how-to.php?a=How_to_do&t=02_Conditionals&s=Basics

**else if statement**

else if statement consists of 3 building blocks:

1. else if keyword 
1. (condition) 
1. code block

Remember that there MUST be an if statement before an else if statement

**else statement**

else statement consists of 2 building blocks:

1. else keyword 
1. code block

Remember that there MUST be an if statement before an else statement.

**nesting**

When any code block is inside another code block, we call that nesting. We used this when we used the nested if statements.

**console.log()**

It allowed us to print out text on the screen. Coincidently, that was our first function call practice. We have been calling this function all along. Did you notice that we just called the console.log function, we did not have to define console.log function first in our programs. That is thanks to the browser which provides this useful function. 

There are other interesting functions which you can use by typing console. For example: console.dir(), console.table(), console.time(), console.timeEnd() You can find out which other functions are provided by console by reading the [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Console)

**calling a function**

A function call consists of 2 main parts:

1. function name 
1. parentheses

   2.a optionally input values inside parentheses separated by commas 

NEW INFO: the values we use in a function call are called arguments.

A function call is also known as invoking a function.

**function definition**

A function definition consists of 3 main parts:

1. function keyword 
1. parentheses 

    2.a optionally parameters inside parentheses separated by commas
1. code block

[Defining a function **does not execute** it. Defining the function simply names the function and specifies what to do when the function is called.][5]

[5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

**return statement**

It consists of 2 main parts:

1. return keyword
1. optionally a value to return

**Why do we need functions?**

With operators(+, -, ===) you can only go so far, at some point we need to add new operations to our repertoire.

[Functions create a more manageable environment for programming as they split large problems into small pieces.][6]

[It improves code readability and understandability.][6]

[Another benefit of using a function is code reusability as existing functions can be called several times.][6]

[6]: https://exlskills.com/learn-en/courses/javascript-fundamentals-basics_javascript/functions-SDPqsuslAyIO/functions-overview-FTiBWCoseNuP/what-is-a-function-kFiSmHxcDTYE
