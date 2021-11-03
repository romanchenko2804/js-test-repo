//Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.
//"invalid value" for declaim

// Examples:
// 	For user input “test” should return “es”
// 	For user input “character” should return “a”
// 	For user input “B” should return “B”
// 	For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”

// const word = prompt('Enter your word:');

// // if (word === '' || word.trim() === '' || word === null) {
// //   alert("Invalid value");
// // } else {
// //   if (word.length % 2 === 0) {
// //     alert(word[(word.length / 2) - 1] + word[word.length / 2]);
// //   } else {
// //     alert(word[Math.floor(word.length / 2)]);
// //   }
// // }

// -------------------------------refactoring

// if (word && word.trim()) {
//   if (word.length % 2 === 0) {
//     alert(word[(word.length / 2) - 1] + word[word.length / 2]);
//   } else {
//     alert(word[Math.floor(word.length / 2)]);
//   }
// } else {
//   alert('Invalid value');
// }

// ✅ ------------------------------------------- 2 --------------------------------
// You need to calculate amount of tip to give in a restaurant/cafe.
// // 	Workflow:
// // 1.	User inputs check number. (Use “prompt” function).
// // 2.	User inputs tip percentage. (Use “prompt” function)
// // 3.	You need to validate the input data: both values should be numbers, total sum can’t be
// a negative number, percentage can’t be negative and bigger than 100.
// // 4.	If input data isn’t valid, you should show message “Invalid input data”. (Use “alert” function).
// // 5.	You need to calculate tip amount and total sum to pay.
// // 6.	Show message: (example). Use ”alert” function
// // Check number: 200
// // Tip: 15%
// // Tip amount: 30
// // Total sum to pay:  230

// // You should show only 2 numbers after comma (if needed).

// const checkNumber = prompt('Enter check number, please');
// const tip = prompt('Enter tip percentage, please');
// let tipAmount = 0;
// let total = 0;

// if (Number.parseFloat(checkNumber) > 0 && 100 >= Number.parseFloat(tip) > 0) {

//   tipAmount = Number.parseFloat(checkNumber) * (Number.parseFloat(tip) / 100);

//   total = Number.parseFloat(tipAmount) + Number.parseFloat(checkNumber);

//   console.log('Check number:', checkNumber);
//   console.log('Tip:', tip);
//   console.log('Tip amount:', tipAmount, 'usd');
//   console.log('Total sum to pay:', total, 'usd');

// } else {
//   alert('Cancel');
// }

// const checkNumber = Number.parseFloat(prompt('Enter check number, please'));
// const tip = Number.parseFloat(prompt('Enter tip percentage, please'));
// let tipAmount = Number.parseFloat(0);
// let total = 0;

// if ( checkNumber > 0 && tip <= 100 && tip > 0 ) {

//     tipAmount = Number((checkNumber * ((tip) / 100)).toFixed(2));

//     total = Number((tipAmount + checkNumber).toFixed(2));

//     alert(`Check number: ${checkNumber}, btc\n\Tip: ${tip}, %\n\Tip amount: ${tipAmount}, btc\n\Total sum to pay: ${total}, btc`);
// } else {
//   alert('Incorrect data!');
// }

// ✅------------------------------------------------ 3
// Write the code which verify user rights.
// Step 1. Check login
// 	Ask user for a login // use prompt()
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// 	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.
// 	If it’s another string – then show “I don’t know you”.
// 	If the visitor enters "User" or "Admin", then prompt for a password.
// Step 2. Check password:
// 	For an empty string or cancelled input, show “Canceled.”
// 	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”.
// In other case, show “Wrong password”.
// Step 3. Greets the user appropriately:
// 	If the current time in hours is more then 5.00 and less then 20: // current hours – new Date().getHours()
// 	For “User” show “Good day, dear User!”
// 	For “Admin” show “Good day, dear Admin!”
// 	In other way:
// 	For “User” show “Good evening, dear User!”
// 	For “Admin” show “Good evening

//✅✅✅✅✅✅ Practice 2 ✅✅✅✅✅✅

// const a = ["a", "b", "c"];
// const b = [1, [2, 3]];
// const c = 0;
// // Result: ["a", "b", "c", 0, 1, 2, 3];

// const d = [b[0], ...b[1]];

// const total = a.concat(c, d);

// console.log(total);

//      ✅

// const a = ["a", "b", "c", "d", "e", "f", "g", "h"];

// Result: ["a", "b", "c", "a", "b", "c", "g", "h"];

// // const res = [...a.slice(0, 3), ...a.slice(0, 3), ...a.slice(-2)];

// const res = a.copyWithin(3, 0, 3)  /*arr.copyWithin(target, start[, end = this.length])
// Параметры:
// target
// Начальный индекс позиции цели, куда копировать элементы.
// start
// Начальный индекс позиции источника, откуда начинать копировать элементы.
// end
// Необязательный параметр. Конечный индекс позиции источника, где заканчивать копировать элементы.*/

// console.log(res);

//       ✅

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Result: [1, 2, 3, 4, 5, 0, 0, 0, 9, 10];

// const res = a;

// // res.splice(5, 3, 0, 0, 0);

// a.fill(0, 5, 8); /* Синтаксис
// arr.fill(value[, start = 0[, end = this.length]])
// Параметры:
// value - Значение, заполняющее массив.
// start - Необязательный параметр. Начальный индекс.
// end - Необязательный параметр. Конечный индекс.
// Возвращаемое значение:
// Изменённый массив. */

// console.log(a);

//      ✅

// const a = [1, 2, [3, 4], [5, 6], 7];

// Result: [1, 2, 3, 4, 5, 6, 7]
// const res = a.flat();
// const res = [];

// for (const number of a) {
//   if (Array.isArray(number)) {
//     res.push(number[0])
//     res.push(number[1])
//   } else {
//     res.push(number)
//   }
// }

// console.log(res);

//      ✅

// const a = ['a', 'k', 'n', 'h', 'n', 'n', 'k'];

// const res = a.lastIndexOf("n");

// // let element = 0;

// // for (let i = 0; i < a.length; i += 1) {
// //   if (a[i] === 'n') {
// //     element = i;
// //   }
// // }

// console.log(res);

//      ✅

// const a = [1, 2, 3, 4, 5, 6, 7]
// Result: [7, 6, 5, 4, 3, 2, 1]

// const reversed = a.reverse();

// console.log('reversed:', reversed);

//      ✅

// Write a function that reverse an integer number. You can't use any array methods, besides push.
// reverseNumber(12345) returns 54321
// reverseNumber(-12345) returns -54321

// const number = -12345;

// let splitNum;

// function reverseNums(num) {
//   if (num > 0) {
//     splitNum = num.toString().split('');
//     splitNum = splitNum.reverse();
//     splitNum = Number(splitNum.join(''));
//   } else {
//     splitNum = num.toString().split('');
//     splitNum.splice(0, 1);
//     splitNum.reverse();
//     splitNum = splitNum.join('');
//     splitNum = Number('-' + splitNum);
//   }
//   return splitNum;
// }
// console.log (reverseNums(number));

//      ✅

// Write a function that converts the argument values. If it will be a string, convert it to number and wise versa.
// It should return an array of converted values.

// convert('1', 2, 3, '4') // [1, '2', '3', 4]

// function convert(...args) {

//   const newArray = [];

//   for (const arg of args) {
//     if (arg === Number(arg)) {
//       newArray.push(arg.toString());
//     } else {
//       newArray.push(Number(arg));
//     }
//   }
//   return newArray;
// }

// console.log(convert('1', 2, 3, '4', 7, 100)) // [1, '2', '3', 4])

//      ✅

// Write function, which iterates over array and executes function on each element.
// executeforEach([1,2,3], function(el) {console.log(el * 2)}) // 2 4 6

// function executeforEach(array, callback) {
//   for (const item of array) {
//     callback(item);
//   }
// }
// executeforEach([1,2,3], function(el) {console.log(el * 2)})

//✅✅✅✅✅✅ Practice 3 ✅✅✅✅✅✅

// Write a function - positiveSum
// It should accept an array of numbers and return a result of their addition. But you must calculate only positive numbers and omit negative if any presents.
// positiveSum([2, 4, 6, 8])   // => 20
// positiveSum([0, -3, 5, 7])  // => 12

// const positiveSum = (array) => {
//     let total = 0;
//     for (const num of array) {
//         if (num > 0) {
//             total += num;
//         }
//     }
//     return total
// }
// console.log(positiveSum([2, 4, 6, 8]));
// console.log(positiveSum([0, -3, 5, 7]));

// ---------------------------

// const positiveSum = (array) => {

//     const positiveNum = array.filter(num => num >= 0);
//     const result = positiveNum.reduce((acc, num) => {
//         return acc += num
//     }, 0)
//     return result;
// }

// console.log(positiveSum([2, 4, 6, 8]));
// console.log(positiveSum([0, -3, 5, 7]));

// ------------------------------

// const positiveSum = (array) => array.reduce((sum, value) => (value > 0 ? sum + value : sum), 0);

// console.log('result: ', positiveSum([2, 4, 6, 8]));
// console.log('result: ', positiveSum([0, -3, 5, 7]));

// ✅

// Write a function – letterCount
// It accepts two string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
// If no occurrences can be found, a count of 0 should be returned.

// For example:
// letterCount("Maggy", "g") // => 2
// letterCount("Barry", "b") // => 1
// letterCount("", "z")      // => 0

// const letterCount = (word, letter) => {
//     const array = word.toLowerCase().split("");
//     // console.log(array);
//     console.log(array.filter(value => value === letter).length);
// }

//---------------------

// const letterCount = (word, letter) => word.toLowerCase().split("").reduce((acc, value) => (value === letter ? acc + 1 : acc), 0);

// console.log(letterCount("Maggy", "g"));
// console.log(letterCount("Barry", "b"));
// console.log(letterCount("", "z"));

// ✅

// Our football team completed the championship. The result of each match look like "x:y".
// Results of all matches are recorded in the collection like this: ["3:1", "2:2", "0:1", ...]

// Write a function – countPoints
// It should accept a collection of football games scores and count the points of our team in the championship.
// Rules for counting points for each match:
// •	if x > y   - 3 points
// •	if x < y   - 0 point
// •	if x = y   - 1 point

// For example:
// countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']) // => 17
// countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']) // => 12

// const countPoints = (array) => {
//     let total = 0;
//     array.reduce((acc, value) => {
//         if (value[0] > value[2]) {
//             total += 3;
//         } if (value[0] === value[2]) {
//             total += 1;
//         }
//     }, 0)
//     return total;
// }

// ----------------------------

// const countPoints = (array) => array.map((element) => element[0] === element[2] ? 1 : element[0] > element[2] ? 3 : 0).reduce((acc, element) => acc + element, 0);

// -----------------------------

// const countPoints = (array) => array.reduce((acc, element) => (element[0] > element[2] ? acc + 3 : element[0] === element[2] ? acc + 1 : acc),0)

// -----------------------------

// const countPoints = (array) => array.reduce((acc, element) => acc + (element[0] > element[2] ? 3 : element[0] === element[2] ? 1 : 0),0)

// const countPoints = (array) => array.filter(element => element[0] > element[2]).length * 3 + array.filter(element => element[0] === element[2]).length;

// console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']));
// console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']));

// ✅

// getSums([1, 2, 3, 4, 5]) // result[1, 3, 6, 10, 15];

// const getElementsSum = numbers => numbers.reduce((sum, elem) => sum + elem, 0);

// const getSums = array => {
//   const result = [];

//   for (let i = 0; i < array.length; i++) {
//     const arr = array.slice(0, i + 1);

//     result.push(getElementsSum(arr)); // result.push(arr.reduce((sum, elem) => sum + elem, 0));
//   }
//   return result;
// };

// console.log(getSums([1, 2, 3, 4, 5, 6, 7, 8])); // [1, 3, 6, 10, 15, 21, 28, 36]