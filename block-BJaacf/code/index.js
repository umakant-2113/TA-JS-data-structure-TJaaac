// 1. Create an array named numbers and store 5 number values in it
let numbers = [5, 7, 10, 12, 15];

// 2. Calculate the sum of array items and print it to the console using console.log()
let numbers = [5, 7, 10, 12, 15];
let sum = 0;
for (let number of numbers) {
  sum = sum + number;
}
console.log(sum);

// 3. Calculate the average of array items and print it to the console using console.log()
let numbers = [5, 7, 10, 12, 15];
let sum = 0;
for (let number of numbers) {
  sum = sum + number;
}
console.log(sum / 5);

// 4. Find the highest number in the array and print it to the console using console.log()

// 5. Find the lowest number in the array and print it to the console using console.log()

// 6. Find the even numbers in the array and print them to the console using console.log()
let even = [];
let numbers = [5, 7, 10, 12, 15];
for (let number of numbers) {
  if (number % 2 === 0) {
    even.push(number);
  }
}
console.log(even);

// 7. Find the odd numbers in the array and print them to the console using console.log()
let odd = [];
let numbers = [5, 7, 10, 12, 15];
for (let number of numbers) {
  if (number % 2 !== 0) {
    even.push(number);
  }
}
console.log(odd);
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let divisivle = [];
let numbers = [5, 7, 10, 12, 15];
for (let number of numbers) {
  if (number % 5 === 0) {
    divisivle.push(number);
  }
}
console.log(divisivle);
// 9. Log all the element of the array one by one
let numbers = [5, 7, 10, 12, 15];
for (let number of numbers) {
  console.log(number);
}

// 10. Find all the number in the array that is divisible by 3
