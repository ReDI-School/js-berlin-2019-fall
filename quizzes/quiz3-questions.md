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

#### B.

```js
<script src="main.js">
  console.log("hi");
</script>
```

## THEORETICAL PART:

#### 1. Do you still remember what we learned in this week?

**HTML attribute**
___
**HTML DOM**

In JavaScript code, we want to manipulate the web page contents, meaning we want to add new elements to the page, we want to change the style of elements, we want to react to events when the user does something on the page.

For this purpose, a web browser provides programmers **a "language"** that can be used inside JavaScript code. We call this language DOM. Document Object Model. With DOM, JavaScript can create a dynamic HTML page.

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
___
**accessing an element if you know its id**
___

#### 2. Name two ways of executing JavaScript code using HTML.
#### 3. What is the advantage of linking a separate JavaScript source file into our HTML file instead of writing code directly in the HTML file?

**One reason** is that, HTML uses a different syntax than the JavaScript and for a programmer switching between two different contexts might be difficult.

**Another reason** is that, we can validate an HTML code but we can not execute HTML code step by step. We can put breakpoints into a JavaScript file but we can not put breakpoints into an HTML file. So although technically we can write JavaScript code inside the HTML code, we try to keep this to a minimum.

#### 4. What is the reason that we put `<script>` tag as the last tag in the `<body>` tag?
#### 5. We have decided that we want to link JavaScript file into our HTML file using src attribute. Now we want to respond to user clicks on an html element, how can we achieve that?
