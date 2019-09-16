# Week 3:

## PRACTICAL PART:

### 1. Valid, invalid? How to fix it?

#### A. 

```js
if ( age < 6 ) {
    // do something
    if ( age === 6) {
        // do something else
        if ( age > 6 ) {
            // do something completely different
        }
    }
}
```

Valid but not logically correct. The conditions that age is smaller, equal, or larger than 6 are mutually exclusive conditions, meaning that they can not be true at the same time. For conditions that are mutually exclusive we have a construct which we use, it is called if, else if, and else. So the correct version will be:

```js
if ( age < 6 ) {
    // do something
} else if ( age === 6 ) {
    // do something else
} else {
    // do something completely different
}
```

#### B.

```js
<script src="main.js">
  console.log("hi");
</script>
```

Valid but not doing what we want. It seems like we both want to execute main.js file and want to execute the contents of the `<script>` tag. But when the src attribute is set the contents of the `<script>` tag is ignored. To solve this, we can create two separate `<script>` tags.

```js
<script src="file.js"></script>
<script>
  console.log("hi");
</script>
```

## THEORETICAL PART:

#### 1. Do you still remember what we learnt in this week?

**HTML attribute**

Attributes provide additional information about HTML elements. We use them in the HTML documents. They are typed inside the opening tag of an HTML element and their content is put inside double quotes. Examples are:

**script** element has **src** attribute.
```html
<script src="..."></script>
```

**button** element has **onclick** attribute.
```html
<button onclick="..." >click me</button>
```

**input** element has **id** attribute.
```html
<input id="..."/>
```

**input** element has **value** attribute.
```html
<input value="..." />
```

**input** element has **type** attribute.
```html
<input type="..."/>
```

**input** element has **placeholder** attribute.
```html
<input placeholder="..."/>
```

**body** element has **background-color** attribute.
```html
<body background-color="...">
</body>
```

HTML is **not case sensitive**, you can use any small or capital letters for the attribute names. But stick to all lower case letters when you type them in your HTML.

___

**HTML DOM**

In JavaScript code, we want to manipulate the web page contents, meaning we want to add new elements to the page, we want to change the style of elements, we want to react to events when the user does something on the page.

For this purpose, a web browser provides programmers **a language** that can be used inside JavaScript code. We call this language DOM. Document Object Model. With DOM, JavaScript can create a dynamic HTML page.

This "language" is made up of **only objects**, specifically HTML objects. They are called **HTML objects** because each object in this language represents an HTML element in the HTML document. **Why** are they **objects** but not something else is because JavaScript uses objects natively just like it uses strings and numbers. **Important to remember**, in HTML we talk about elements, on JavaScript we call these elements objects.

|**In HTML**|**In JavaScript**|
|-----------|-----------------|
|HTML Element|HTML Object     |

So anytime a JavaScript programmer wants to change something about the HTML document, he/she needs to **translate** his/her intention using this language. For example:

Programmer wants to change the background color of the document, he/she translates this command into DOM language by saying:

```js
document.body.style.backgroundColor = "red";
```

This is a command that JavaScript understands because it is using object syntax. Then the web browser takes this command and executes it and does something internally and as a result we see that the background color has changed.

We can make an interesting observation about our example. In an html file, to change the background color of our document we say:

```html
<body background-color="red"></body>
```

But in JavaScript, we said:

```js
body.style.backgroundColor = "red";
```

So did you notice that in one case we used the - character to separate multiwords (**background-color**) and in the other case we used the camel case (**backgroundColor**)

We are going to learn about the object syntax in the coming lessons.

___

**document variable**

document is an object that web browser supplies to us for changing the HTML document. If you want to access any element in an HTML document, you always start with accessing the document object.

___

**accessing an element if you know its id**

If in your html file you have created an id attribute for an html element, you can access this element in JavaScript using the document.getElementById() method. (NEW INFO: method is a function that belongs to an object) For example in your html if you have:

```html
<input id="age" type="number"/>
```

Then in JavaScript you can access it using:

```js
document.getElementById("age");
```

Remember JavaScript is quite picky about the case of the id attribute's value. So you can't say:

```js
document.getElementById("AGE");
```

If you do, then you get a **null** back.

There are **multiple ways** of accessing an HTML element in DOM language, good news is that in this course we will be using **only** the `getElementById` method.

#### 2. Name two ways of executing JavaScript code using HTML.

**First way** is to embed the code directly into the HTML file. Like this:

```html
<html>
    <body>
        <script>console.log("hello");
        </script>
    </body>
</html>
```
or

```html
<html>
    <body>
        <button onclick="console.log("hello");" />
    </body>
<html>
```

**Second way** is to link the JavaScript file using the src attribute of the script tag. Like this:

```html
<html>
    <body>
        <script src="main.js"></script>
    </body>
</html>
```

#### 3. What is the advantage of linking a separate JavaScript source file into our HTML file instead of writing code directly in the HTML file?

**One reason** is that, HTML uses a different syntax than the JavaScript and for a programmer switching between two different contexts might be difficult.

**Another reason** is that, we can validate an HTML code but we can not execute HTML code step by step. We can put breakpoints into a JavaScript file but we can not put breakpoints into an HTML file. So although technically we can write JavaScript code inside the HTML code, we try to keep this to a minimum.

#### 4. What is the reason that we put `<script>` tag as the last tag in the `<body>` tag?

Because while the browser is executing your HTML file line by line, if it encounters a `<script>` tag, it will start executing the JavaScript code line by line before continuing the execution of your HTML. If you try to access an HTML element which is not defined yet, it will get null back. To prevent this scenario, we write the code associated with the `<script>` tag at the bottom of the `<body>` tag. 

#### 5. We have decided that we want to link JavaScript file into our HTML file using src attribute. Now we want to respond to user clicks on an html element, how can we achieve that?

```html
<html>
    <body>
        <button onclick="onClickHandler();" >click me</button>
        <script src="main.js"></script>
    </body>
</html>
```

Here we have to call a function which we must define in our JavaScript file, because otherwise browser does not know which code to execute in the JavaScript file.
