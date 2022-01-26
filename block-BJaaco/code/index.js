let numbers = [6, 8, 10, 12, 43, 56, 98];

let userIds = [1230, 234, 1278, 984, 763, 900];

// 1. Add all the values of numbers and userIds array into the new newly created array named `collection`
let collection = [...numbers, ...userIds];
console.log(collection);

// 2. Add all the even numbers from both arrays numbers and userIds into a newly created array named `evenCollection`

evenCollection = [];
for (let collect of collection) {
  if (collect % 2 === 0) {
    evenCollection.push(collect);
  }
}
console.log(evenCollection);
// 3. Add all the odd numbers from both arrays numbers and userIds into a newly created array named `oddCollection`
oddCollection = [];
for (let collect of collection) {
  if (collect % 2 !== 0) {
    oddCollection.push(collect);
  }
}
console.log(oddCollection);
/*
  @param means parameter

 4. Write a function named times which accets two parameter and return an array. 

  @param times (number)
  @param character (string)
  @return array

  Example: 
    times(5, 'c'); // ['c', 'c', 'c', 'c', 'c']
    times(2, 'a'); // ['a', 'a']
    times(0); // []
    times(5); // ['test', 'test', 'test', 'test', 'test']
*/

function times(number, string = "test") {
  if (number < 1) return [];
  let final = [];
  for (let i = 0; i < number; i++) {
    final.push(string);
  }
  return final;
}
console.log(5, "nm");

// Uncomment the code below and test the output

// console.log(times(5, 'c')); // ['c', 'c', 'c', 'c', 'c']
// console.log(times(2, 'a')); // ['a', 'a']
// console.log(times(0)); // []
// console.log(times(5)); // ['test', 'test', 'test', 'test', 'test']

/*

 5. Write a function named revert which reverts the element of the input array. 

  @param arr (array)
  @return array

  Example: 
    revert([1, 2, 3, 4]); // [4, 3, 2, 1]
    revert(['a', 'd', 'c', 'b']); // ['b', 'c', 'd', 'a']
    revert(['Ryan', 'John', 'Bran']); //['Bran', 'John', 'Ryan']
*/

function revert(arr) {
  let final = [];
  for (i = arr.length - 1; i >= 0; i--) {
    final.push(arr[i]);
  }
  return final;
}
console.log(revert([1, 2, 3, 4]));
// Uncomment the code below and test the output
//  // [4, 3, 2, 1]
// console.log(revert(['a', 'd', 'c', 'b'])); // ['b', 'c', 'd', 'a']
// console.log(revert(['Ryan', 'John', 'Bran'])); //['Bran', 'John', 'Ryan']

/*

 6. Write a function named clear which remove all of these values (false, undefined, empty string, 0, null) and returns a new array  

  @param arr (array)
  @return array

  Example: 
   ; [4, 3, 2, 1]
    clear(['a', undefined, 'd', 0,  'c', 'b']); // ['b', 'c', 'd', 'a']
    clear(['Ryan', null, 0,  'John', 'Bran']); //['Bran', 'John', 'Ryan']
*/
function clear(arr) {
  let emptyArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === undefined ||
      arr[i] === null ||
      arr[i] === 0 ||
      arr[i] === ""
    ) {
      delete arr[i];
    } else {
      emptyArr.push(arr[i]);
    }
  }
  return emptyArr;
}
console.log(clear([1, 2, 3, 4, "", 0, null, undefined]));
// Uncomment the code below and test the output
// // [4, 3, 2, 1]
// console.log(clear(['a', undefined, 'd', 0, 'c', 'b'])); // ['b', 'c', 'd', 'a']
// console.log(clear(['Ryan', null, 0, 'John', 'Bran'])); //['Bran', 'John', 'Ryan']

/*

 7. Write a function named arrayToObj which accepts an array and return an object
 where the key will be the index of array and value will be the element of the array.

  @param arr (array)
  @return object

  Example: 
    arrayToObj([1, 2, 3, 4]); // {0: 1, 1: 2, 2: 3, 3: 4}
    arrayToObj(['a', undefined, 'd']); // {0: 'a', 1: undefined, 2: 'd'}
    arrayToObj(['Ryan', 'John']); // {0: 'Ryan', 1: 'John'}
*/

function arrayToObj(arrey) {
  let obj = {};
  for (let i = 0; i < arrey.length; i++) {
    obj[i] = arrey[i];
  }
  return obj;
}
arrayToObj([1, 2, 3, 4]);

// Uncomment the code below and test the output
// console.log(arrayToObj([1, 2, 3, 4])); // {0: 1, 1: 2, 2: 3, 3: 4}
// console.log(arrayToObj(['a', undefined, 'd'])); // {0: 'a', 1: undefined, 2: 'd'}
// console.log(arrayToObj(['Ryan', 'John'])); // {0: 'Ryan', 1: 'John'}
