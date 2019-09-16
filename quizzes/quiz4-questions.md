# Week 4:

## PRACTICAL PART:

### 1. Valid or invalid, how to fix it?

#### A.

```js
let johnsAge = "12";
let janesAge = 12;
console.log(johnsAge === janesAge);
```

#### B.


```js
let johnsAge = "10";
let janesAge = 20;
let totalAge = johnsAge + janesAge;
console.log(totalAge);
```

#### C.


```html
<p id="1">hi</p>
<p id="1">bye</p>
```

#### D.

```js
let veryLongVariableNameToProveAPoint = "hello";
veryLongVariableNameToProveAPoint = veryLongVariableNameToProveAPoint + " john";
```

#### E.

```html
<input id="age" type="number" value="10" />
<script>
    let age = document.getElementById('age');
    age = age.value;
    console.log(age);
</script>
```

#### F. What does the following code output?

```html
<input id="name" type="text" value="John" />
<script>
    let nameElement = document.getElementById('name');
    console.log(nameElement.id);
    console.log(nameElement.type);
    console.log(nameElement.value);
</script>
```

## THEORETICAL PART:

### 1. Let's review the new terms we learned in this week.

**HTML Object Property**

Although we have used this concept in our examples, we have not introduced it yet. In last week's review, we talked about the relation between an HTML Element and an HTML Object. There is a similar link between an HTML attribute and an HTML Object property. Let's work on this topic with the help of an example. Assuming that we have the following code in our HTML file:

```html
<input id="name" type="text" />
```

We want to extract the value the user has entered into this input field. How can we do this? In JavaScript we can access the input element using its id:

```js
let nameElement = document.getElementById('name');
```

Now we have a **"go-to person"** (`nameElement`) for making enquires about our object. This input element has two attributes, id and type. How can we get the content of a specific attribute. When an object contains many values, we use predefined names to access individual values and we use a **.** operator to do that. A predefined name and a value together is called a **property** of an object. So in our example, we use the following code in JavaScript:

```js
let age = nameElement.type;
```

Here **nameElement** is our object and **type** is the predefined name and **text** is the value of the property.

Did you notice that type is the name of the attribute in HTML and at the same time it is the name of the property in our object. Neat hah? We don't have to memorize a lot of new names. If we know the name of an attribute, we can use the same name to access the value of it in JavaScript. So following table hopefully makes this relation clearer between attributes and properties:

|**In HTML**|**In JavaScript**|
|-----------|-----------------|
|HTML Element|HTML Object     |
|HTML Attribute|HTML Object Property|

Properties are our ways of manipulating our HTML page dynamically. If you are curios about what kind of properties each HTML object supports, you can do one of the following:

- Either read the [specification](https://html.spec.whatwg.org#htmlelement)
- Or use console.dir(element)
- Or use dev tools of your browser: 
    1. Go to elements tab
    2. Open the DOM properties panel. 

---

**textContent**

---

**onEnrollClicked()**

We have defined this function in our kindergarten program. Did you notice that we did not call this function in our JavaScript file? This is a special kind of function which gets called by the browser. It is called an event handler in JavaScript. An event handler is a function which gets called automatically by the browser and has the following characteristics:

1. This function does not have a return value. [When you set a button's click handler, the code that sets it generally doesn't want to interact with the click handler later in time when a click occurs. It's a set and forget operation. In other words, event handlers are usually fairly closed pieces of code that don't depend on anything other than the event that just occurred and the global state of the program.](https://www.i-programmer.info/programming/javascript/12416-javascript-async-the-callback-a-the-controller.html?start=1)
2. We need to create a link between an event (**click event**) and the function (**onEnrollClicked**) using the object (**button element**) where this event happens. This is called registering an event handler. We registered this event handler in HTML like this:

```html
<button id="enroll" onclick="onEnrollClicked()">enroll</button>
```

We could have registered it in our JavaScript file as well:

```js
let enrollElement = document.getElementById("enroll");
enrollElement.onclick = onEnrollClicked;
```

---

**Math.random()**
