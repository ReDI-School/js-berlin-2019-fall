# Week 5:

## PRACTICAL PART:

### 1. Imagine you are the JavaScript engine, what will you output for the following pieces of code?

#### A.

```js
let john = {
    age:,
    eyeColor: "blue"
};
console.log(john.age);
```

Answer: we can not define a property with an empty value. Fix it by adding a value like this:

```js
let john = {
    age: 20,
    eyeColor: "blue"
};
```

#### B.

```js
let car = {
    type: "BMW";
    model: "i3"
};
```

Answer: we can not use semicolon (`;`) as a separator. Fix it by using comma (`,`) like this:

```js
let car = {
    type: "BMW",
    model: "i3"
};
```

#### C. 

```js
typeof {}
```

Answer: 
```js
"object"
```

#### D. 

```js
typeof {age: 33}.age
```

Answer:

```js
"number"
```

#### E.

```js
let puzzle = {
    $starts_with9: 900
}
console.log(puzzle.$starts_with9);
```

Answer: 900. I gave this example to show that we can use `$` and `_` in property names.

### 2. How do we create an empty object?

Answer: 

```js
let o = {};
```

## THEORETICAL PART:

### 1. Do you still remember these terms?

**Object data type**

So far we have worked with JavaScript primitive data types: number, string, boolean, and undefined. We have learned about the operators we can use with these types like addition(`+`), multiplication(`*`), concatenation(`+`), not(`!`), and(`&&`), or(`||`), etc.

Primitive data types are useful for representing simple values in our code, like the temperature of a room, name of a person, age of a person, etc. However, in real life, we deal with entities that are more complex than a single value. For example, when I talk about the person "John", I want to express a lot of facts about John, like John has blue eyes, he has black hair, is 33 years old, drives a Mercedes, studied computer science, and is married. We could define multiple variables to state all these facts about John:

```js
let johnsEyeColor = "blue";
let johnsHairColor = "black";
let johnsAge = 33;
let johnsCarType = "Mercedes";
let johnStudied = "Computer Science";
let isJohnMarried = true;
```

If our code was to deal with only John, this way of defining variables would have been enough for writing clean code. However in real life, we don't just talk about John. There is also Jane, Jack, Adam, also some other people. The question then becomes how do we manage their data in our code. Naive approach would be to create variables to express all these facts about all of them. If we have the data of millions of people, is this still a good way? Are we going to create millions of variables too? Definitely, no.

One way of reducing the complexity of dealing with many facts about many people is to collect all the facts about one single person into one place. So when we refer to John, we refer to all the facts about John. Similarly when we say Jane, we talk about all the facts about Jane. JavaScript has a mechanism of collecting all the facts about a person into one place. It is called an object. So to express all the facts about John, we write:

```js
let john = {
    name: "John",
    eyeColor: "blue",
    hairColor: "black",
    age: 33,
    carType: "Mercedes",
    studied: "Computer Science",
    isMarried: true
};
```

Here, we named the facts about John and collected all of them under one roof. This language construct allows us to do three things at the same time:

1. Give a name to a fact (for example age)
2. Assign a value to a named fact (for example 33)
3. Collect all the facts about a person in one place (john)

A fact without its value does not make much sense according to JavaScript. Therefore when defining a fact about John, we have to provide two things at the same time: a name (*age*) and a value (*33*) separated by colon (`:`). In JavaScript, we call this pair a property. In our example john has 6 properties.

The collection of all the facts about John creates another unit at a higher level. We refer to this unit as an object. If we ask JavaScript the type of the variable john, it confirms that it is an object. 

```js
typeof john; //object
```

To collect all the facts about John in one place, we used the comma (,) as a separator between the facts and enclosed them in curly braces ({}).

Let's summarize what we have accomplished so far. Now we have a single variable (john) to refer to all the facts about John. To collect facts about Jane we still need to create another variable. What did we gain by creating an object? Let's answer that by way of example. Our claim is that any function which deals with a person (let this be john, jane, jack, or adam) can do so in fewer lines of code. Compare the two pieces of code.

Initially:

```js
let johnsName = "John";
let johnsAge = 33;
let johnsHobby = "biking";
let johnPreferesAge = 30;

let janesName = "Jane";
let janesAge = 30;
let janesHobby = "hiking";
let janePrefersAge = 36;

function matchCouple(name1, age1, hobby1, prefersAge1, name2, age2, hobby2, prefersAge2) {
    if(prefersAge1 === age2 
        && prefersAge2 === age1 
        && hobby1 === hobby2) {
        console.log("There is a match between " + name1 + " and " + name2);
    } else {
        console.log("Sorry, there is no match between " + name1 + " and " + name2);
    }
}

matchCouple(johnsName, johnsAge, johnsHobby, johnPreferesAge, 
            janesName, janesAge, janesHobby, janePrefersAge);
```

This time with using objects:

```js
let john = {
    name: "John",
    age: 33,
    hobby: "biking",
    prefersAge: 30
};

let jane = {
    name: "Jane",
    age: 30,
    hobby: "hiking",
    prefersAge: 36
}

function matchCouple(person1, person2) {
    if(person1.prefersAge === person2.age 
        && person2.prefersAge === person1.age 
        && person1.hobby === person2.hobby) {
        console.log("There is a match between " + person1.name + " and " + person2.name);
    } else {
        console.log("Sorry, there is no match between " + person1.name + " and " + person2.name);
    }
}

matchCouple(john, jane);
```

Even with only 4 properties per object, we can already see the benefit of using objects. Imagine if you had 10 properties per object, the first matchCouple function would have to have 20 parameters whereas the second matchCouple function would still take two parameters. That is just a simple gain. As we learn more ways of using objects, we will discover more benefits.

As a side note, we still haven't solved the problem of handling millions of people in our code. We will solve this problem in the coming lessons. Hint: arrays.

---

**Object property**

Property is a known fact about an object. An object can have zero or more properties. A property only makes sense in the context of an object. You can never see a property wild in the open on its own.

Therefore any operation involving a property will inevitably involve an object, too. We can come up with a list of operations we want to perform on an object regarding its properties. These operations in no particular order are: 

* associating a property with an object
* extracting the value associated with a property
* modifying the value of a property
* deleting a property (which we will not talk about in this course)

Here is how we do these operations in JavaScript:

#### 1. We associate a property with an object as follows:

Either at the object creation time, so:

```js
let jack = { age: 33 };
```

Or long after we created our object, so:

```js
jack.hobby = "biking";
```

Another name for associating a property with an object is called defining a property. Note: there is yet a third way of defining a property, but in our course, we will stick to these two methods.

When it comes to giving names to object properties, we are going to use the same conventions we used for naming variables. So any combination of letters, $ and _ characters also digits provided that they are not at the beginning are welcome.

#### 2. We extract or access the value of a property like so:

```js
jack.age;
```

#### 3. We modify the value of a property as follows:

```js
jack.age = 34;
```

---

**Key, value pair**

When we defined a property, we provided two parts together. We called these parts the name and the value of a property. There is another jargon which defines the parts of a property as the key and the value of a property. You might see different sources referring to the same concept with different names. If we take an example:

```js
let john = { eyeColor: "blue" };
```

|Property name | Property value
|--------------|---------------
|eyeColor      | "blue"

|Key           | Value
|--------------|---------------
|eyeColor      | "blue"

Therefore that an object is a collection of key-value pairs or that an object is a collection of properties, describe the same idea about objects.

---

**Dot operator**

Dot operator is defined on objects. With it we can:

* Add a new property to an object
* Access the value of a property
* Modify the value of a property

There is something interesting about the dot operator. It takes two operands just like addition or multiplication but as opposed to the numerical operations, the operands on two sides of the dot operator don't have to have the same data type.

```js
2 + 3; // 2 and 3 both are numbers and the output is also a number

car.age; // car is an object, age is a string and the output is a number.
```
