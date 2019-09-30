# Week 5:

## PRACTICAL PART:

### 1. Valid or invalid, how to fix it?

#### A.

```js
let inputElement = document.createElement("input");
inputElement.type = "number";
inputElement.placeHolder = "Amount";
inputElement.onchange = function() {
    console.log("The new amount is ", inputElement.value);
};
```

Nothing wrong, but the browser will not display the `inputElement`. We forgot to add it to the dom. Fix it by saying:

```js
productElement.appendChild(inputElement);
```

#### B.

```js
function render(product) {
    ...
    inputElement.onchange = function() {
        product.amount = parseInt(inputElement.value);
    }
    renderTotalPrice();
}
```

Will calculate the total price only once during the first render, but not every time in response to user changing the input value. So the initial calculation will be correct, but it will never update the total price ever again. Fix it by moving the renderTotalPrice inside the `onchange` event handler.

```js
function render(product) {
    ...
    inputElement.onchange = function() {
        product.amount = parseInt(inputElement.value);
        renderTotalPrice();
    }
}
```

## THEORETICAL PART:

### 1. Do you still remember the meaning of these terms?

**passing by reference**

So far, we have seen that value of a variable does not change after a function call.

```js
function wontChange(num) {
    num = 6;
    console.log(num); // 6
}

let number = 5;
console.log(number); // 5
wontChange(number);
console.log(number); // 5
```

The value of number did not change, because the number was passed by value, meaning that a duplicate was created and assigned to the parameter in the function. So the original value of num remained unchanged.

In contrast to that, the value of the milk object below changes after the function call. That is because milk is an object. In JavaScript, objects are passed by reference, meaning that the object is not duplicated. Therefore any changes you make to the product object will be visible outside the function.

```js
function willChange(product) {
    product.amount = 10;
    console.log(product.amount); // 10
}

let milk = { amount: 5 };
console.log(milk.amount); // 5
willChange(milk);
console.log(milk.amount); // 10
```

This behavioral difference between primitive data types and object data types is very important for you to understand in order to prevent bugs in your programs.

---

**functions in objects**

In the previous lesson, we covered the basics of objects by saying that properties of an object collect a set of facts about an entity in the real world. Some of these facts might change over time due to events. If John is a single person and meets Sally and decides to marry her, we need to update his properties (facts). We need to set his status to married, and maybe move him to a larger house, etc. We have two practices for updating the properties of an object. Either with direct access or through message passing.

We have already seen the direct access method: every time we use the dot operator in combination with an object, we can modify the value of a property like this:

```js
john.isMarried = true;
john.spousesName = "Sally";
john.livesIn = "house";
john.numberOfChildren = 0;
```

The second approach is the new one we are going to discuss today. It is motivated by a concept called **encapsulation**. Basically, a well encapsulated object, does not allow the outside world to change its properties directly, instead it provides a mechanism, so that outsiders can send messages to the object to get certain changes happen. We call this well-defined interaction with the outside world the interface of the object. If we return back to John, we might see code written like this, to achieve the same outcome of marrying Sally:

```js
john.marryTo("Sally");
```

If we look at the structure of this code, it has parentheses at the end, which looks like a function call. You are right in your observation. In this indirect method of changing facts about an object, we basically send a message to an object, in the form of a function call. For john to accept this message, it needs to have an implementation. We can implement this function like this:

```js
let john = {
    name: "John",
    isMarried: false,
    livesIn: "2 bed room flat",
    marryTo: function(spName) {
        john.isMarried = true;
        john.spousesName = spName;
        john.livesIn = "house";
        john.numberOfChildren = 0;
    }
}
```

Now our object `john` can happily marry Sally. This implementation has a small flaw which we are going to fix soon, when we talk about **`this`** variable. By the way, a function which is a part of an object property is called a **method**. Worth remembering.

To summarize, we implement functions inside the object definition, to create an encapsulation against the outside world. To call a function which belongs to an object, we need to know the name of the property this function is associated with and also we need to have a variable which references the object we are trying to change.

In JavaScript code, you will see both the direct and indirect way of changing properties of objects. Take the following snippets from our code examples:

```js
document.body.style.backgroundColor = "blue";
```

Here we are directly modifying the backgroundColor property of the body's style property.

```js
document.body.appendChild(productElement);
```

Here, we are using an indirect method of adding a new element to our dom.

---

**this variable**

We said that we have a flaw in our code:

```js
let john = {
    name: "John",
    isMarried: false,
    livesIn: "2 bed room flat",
    marryTo: function(spName) {
        john.isMarried = true;
        john.spousesName = spName;
        john.livesIn = "house";
        john.numberOfChildren = 0;
    }
}
```

Imagine we have Adam, who wants to marry to Jane. To do that, we do the following:

```js
let adam = john;
john = undefined;
adam.name = "Adam";
adam.marryTo("Jane");
```

We will get an error on the last line. Since marryTo is trying to use an object which does not exist anymore, it is undefined. So basically it is trying to run this:

```js
undefined.isMarried = true;
```

Remember dot operator requires a valid object to work on. Could we have prevented this error? Yes. Let me introduce you to the special variable `this`. When we use `this` variable in our method implementation, we stop relying on the hardcoded variable john, instead we generalize our idea by saying, that object which this function is currently part of. Let's have a look at an example:

```js
let a = {
    amount: 10,
    increase: function() {
        this.amount = 20;
    }
}
let b = {
    amount: 15,
    increase: function() {
        this.amount = 20;
    }
}
a.increase(); // "this" variable is referring to variable a
b.increase(); // "this" variable is referring to variable b
```

With this new information, we can reimplement our code from before to fix the bug.

```js
let john = {
    name: "John",
    isMarried: false,
    livesIn: "2 bed room flat",
    marryTo: function(spName) {
        this.isMarried = true;
        this.supposesName = spName;
        this.livesIn = "house";
        this.numberOfChildren = 0;
    }
}

let adam = john;
john = undefined;
adam.name = "Adam";
adam.marryTo("Jane");
```

Now, when the `adam.marryTo("Jane")` method runs, it will safely change the `adam` object.

By the way, there is still a small thing we can improve about our code, but I am not going to bore you with details here. If you want to know, see me in the class and ask me about the code duplication.

---

**document.createElement**

A lot of modern HTML pages contain a minimal amount of html code which is called "static" or "fixed" code, meaning that it doesn't change over time. New HTML elements are added to the web page dynamically by JavaScript. As soon as the browser tab/window closes, the dynamic content is deleted.

Use the `document.createElement` method to add new elements to your DOM. All you have to do is to provide the type of the element you wish to create as parameter. To create a `div` element, say:

```js
document.createElement("div");
```

For an input element, say:

```js
document.createElement("input");
```

The real fun begins when you start modifying the element you created, but for that you need to assign the output of `createElement` to a variable like this:

```js
let divElement = document.createElement("div");
let inputElement = document.createElement("input");
```

Now we can modify every attribute of our elements, for example:

```js
divElement.textContent = "God day to you sir";
divElement.style.backgroundColor = "red";

inputElement.type = "number";
inputElement.onchange = function() {
    console.log("user entered a new value");
}
```

So in short, whenever you need to add new content to your DOM, you start with creating a new object. Initially, every object you create using this method will be invisible to the user. You can add this element anywhere in your DOM hierarchy. Because of this variability, you need to specify where you want this object to be added. For learning how to do that keep on reading...

---

**appendChild**

So you created an HTML element and you don't see it on the screen. Maybe you have forgotten to add it to the DOM, by telling JavaScript where to insert your element. To fix that, use `appendChild`. When using `appendChild`, keep in mind that your object needs to connect to one visible element. This could be in one of two ways:

1. Use the `document.body` as your insertion place.
2. Find another element which you have inserted before and be the child of that element.

Example for the usage of the first way:

```js
document.appendChild(productElement);
```

For the second way:

```js
productElement.appendChild(inputElement);
```

Here we are assuming that `productElement` was inserted to the DOM previously.

---

**render function**

"What is a render function" is a question asked by some students. According to wikipedia, "rendering" is generating an image from a model by means of computer programs. This definition fits the purpose of our `render` function really well.

In our web store application, we created objects, which hold the important data for our products, such as the amount, price, description. This data on its own is not displayable in the browser. We can not submit our data to browser and say display them. We need to convert this data into visual components that the browser understands, which the user can interact with. These components are html elements. In our application, we created and displayed the html elements inside this function.

Every time we are faced with conversion from data into html elements, this operation can be called **"rendering"**. This function could be named differently, but it is customary to call it render.

---

**onchange property**

Let's remember the context where we used this property and generalize the idea behind this concept, which is event handling in JavaScript.

```js
...
let inputElement = document.createElement("input");
inputElement.type = "number";
...
inputElement.onchange = function() {
    console.log(inputElement.value);
    ...
}
```

Previously, we saw how to respond to `click` events in JavaScript, by defining a function in js file and assigning this function in the `onclick` attribute of a `button` element. This was static way of registering an event handler, because we did it in the html file.

Specifically, we wanted our code to respond to changes in the input field, we wanted to calculate the new total price based on the new value of the amount field. If an html element is generated dynamically (in js file), the code for registering the event handler also has to be in the js file.

In our course, we will use this pattern repetitively. Every time you create a new html element, ask yourself this question: am I interested in responding to an event(onchange, onclick, onsubmit, etc.) this element will generate? If your answer is yes, then add an event handler just the same way as in the sample code.
