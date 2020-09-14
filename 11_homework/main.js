// Write your name five times

for (let i = 0; i < 5; i++) {
  console.log("Harald");
}

// Write the squares of the first 10 numbers (1, 4, 9, 16, ...)

for (let i = 1; i < 11; i++) {
  console.log("Square of " + i + " is " + i*i);
}

// Output the sum of the first 10 numbers

let sum = 0;
for (let i = 1; i < 11; i++) {
  sum += i;
}

console.log("The sum of the first 10 numbers is: " + sum);

// Write out the first 10 numbers and write if a number is even or odd.

for (let i = 1; i < 11; i++) {
  let evenOdd;
  if (i % 2 === 0) {
    evenOdd = "even";
  } else {
    evenOdd = "odd";
  }

  console.log("The number " + i + " is " + evenOdd);
}

// Bonus 1: Draw a pyramid

function drawPyramid(height) {
  let row = "*";
  for (let i = 0; i < height; i++) {
    console.log(row);
    row += "*";
  }
}

drawPyramid(5);

// Bonus 2: FizzBuzz

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
