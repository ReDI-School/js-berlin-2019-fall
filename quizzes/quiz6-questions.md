# Week 6:

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

## THEORETICAL PART:

### 1. Do you still remember the meaning of these terms?

**passing by reference**

**functions in objects**

**this variable**

**document.createElement**

**appendChild**

**render function**

**onchange property**
