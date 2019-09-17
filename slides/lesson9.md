---

### Why objects?

Imagine writing a function that prints details about a person without using objects:

```js
function printPerson(firstName, lastName, age, isStudent, favoriteFood, streetAddress, city, country, phone, fax, facebookName) {
  console.log("Hi I am " + firstName + " ... ");
}
```

---

### Why objects? (2)

Now imagine the same function when using objects:

```js
function printPerson(person) {
  console.log("Hi, I am " + person.firstName + " ... ");
}
```

All the person's details are stored in one variable, much less to type!

---

### Modifying Objects

All key-value pairs in an object can be modified like normal variables:

```js
let person = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 28
};

// QUIZ:
// Jane has her birthday, let's make her one year older:
// Jane marries her partner, changes her name to "Smith"
```

---

### Modifying Objects (2)

```js
let person = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 28
};

// Jane has her birthday, let's make her one year older:
person.age = 29;
// Jane marries her partner, changes her name to "Smith"
person.lastName = "Smith";
```

---

### Objects in Objects

* A 'value' in an object can itself be an object:

```js
let person = {
  name: "John",
  address: {
    street: 'Am Nordbahnhof',
    city: 'Berlin'
  }
};
```

Quiz: How do we access the person's city?

---

### Objects in Objects

```js
let person = {
  name: "John",
  address: {
    street: 'Am Nordbahnhof',
    city: 'Berlin'
  }
};

console.log(person.address.city);
```

---

### Functions in Objects

So far, we had `number`, `string`, `boolean` and `object` as types of values. How about `function`?

```js
let person = {
  name: "John",
  sayHi: function() { console.log("Hi, I am John"); }
};
```

Quiz: How do we call `sayHi`?

---

### Functions in Objects (2)

```js
let person = {
  name: "John",
  sayHi: function() { console.log("Hi, I am John"); }
};

person.sayHi(); // calls the sayHi function within our person
```

---

### 'this' special variable

Every object has a special `this` variable that points to itself:

```js
let person = {
  name: "John",
  sayHi: function() { console.log("Hi, I am " + this.name); }
};
```

---

### Why use `this.name`?

Using `this.name` instead of `"John"` makes the function

```js
let person = {
  name: "John",
  sayHi: function() { console.log("Hi, I am " + this.name); }
};

person.name = "Jane";
// person.sayHi() will now print "Hi, I am Jane"
```

---

### Summary

* Objects start and end with curly braces `{}`
* Objects are a collection of *key* and *value* pairs.
* Values can be of any type, including `object` and `function`
* Inside an object, we can use `this` to refer to our object
