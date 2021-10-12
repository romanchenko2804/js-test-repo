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



// ------------------------------------------- 2 --------------------------------
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


//  ------------------------------------------------ 3
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
