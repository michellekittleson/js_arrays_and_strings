// Exploring Array Manipulation in JavaScript

// Task 1: Adding and Removing Elements
let fruits = ['apple', 'banana', 'orange'];
fruits.push('papaya');
console.log(`Fruits after push(): ${fruits}`);
fruits.pop();
console.log(`Fruits after pop(): ${fruits}`)

// Task 2: Sorting Arrays
let numbers = [3, 1, 5, 2, 4];
numbers.sort((a, b) => a - b);
console.log(`Sorted numbers: ${numbers}`)

// Task 3: Applying Array Methods
let doubled = numbers.map(num => num * 2);
console.log(`Doubled numbers: ${doubled}`);
let even = numbers.filter(num => num % 2 == 0);
console.log(`Even numbers: ${even}`);
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(`Sum of numbers: ${sum}`);


// Exploring String Manipulation in JavaScript

// Task 1: Obtaining String Length
let message = "Hello, World!";
console.log(`Length of message: ${message.length}`);

// Task 2: Converting Cases
let text = "Hello, World!";
console.log(`Uppercase text: ${text.toUpperCase()}`);
console.log(`Lowercase text: ${text.toLowerCase()}`);

// Task 3: Extracting Substrings
let sentence = "The quick brown fox jumps over the lazy dog";
console.log(`Extracted text: ${sentence.substring(4, 9)}`);

// Task 4: Splitting Strings
let sentence2 = "The quick brown fox";
console.log(`Split string: ${sentence2.split(" ")}`);
