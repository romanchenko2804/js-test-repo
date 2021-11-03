// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//     const totalPrice =  orderedQuantity * pricePerDroid + deliveryFee;
//     const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   // Change code above this line
//   return message;
//   console.log(message);
// }

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//       message = 'There are no products in the order!';
//   } else if (ordered > available) {
//       message = 'Your order is too large, there are not enough items in stock!';
//   } else {
//       message = 'The order is accepted, our manager will contact you';

// }

//     console.log(message);

//   // Change code above this line
//   return message;
// }

// checkStorage(100, 50);

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line

//   if (message.length <= maxLength) {
//   result = message;
//   } else {
//   result = message.slice(0, maxLength)+'...';
//   }

//   /// Change code above this line
//   return result;
// }

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   if (message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')) {
//   result = true;
//   } else {
//   result = false;
// }

//     console.log(result);

//   // Change code above this line
//   return result;
// }

// checkForSpam('Вам пришло уведомление с магазина NIKE - там сейчас огромный - SALE!!!');

//  ******************************* second autocheck
//222222222222222222

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//     if (password === ADMIN_PASSWORD) {
//       console.log("Welcome!");
//     return("Welcome!");
//     }

//     console.log("Access denied, wrong password!");
//     return("Access denied, wrong password!");
// }

// checkPassword('jqueryismyjam');

// 33333333333333333333
// function cfunction checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";

//   // Change code above this line
// }

// //
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1;

// console.log(lastElementIndex);

// 9999999999999999999999999
// function getExtremeElements(array) {
//   // Change code below this line
//   return [array[0], array[array.length-1]];
//   // Change code above this line
// }
// getExtremeElements([1, 2, 3, 4, 5]);
// getExtremeElements(["apple", "peach", "pear", "banana"]);

// 1010101010101001
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
// words = (message.split(delimeter));
//   // Change code above this line
//   return words;
// }

// 11 11 11 11 11
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     console.log(message.split(' ').length * pricePerWord);
//     return (message.split(' ').length * pricePerWord);

//    // Change code above this line
// }

// calculateEngravingPrice("JavaScript is in my blood", 10)

// 12 12 12 12 12
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line

//     string = (array.join(delimeter));
//     console.log(string);

//   // Change code above this line
//   return string;
// }
// makeStringFromArray(["M", "a", "n", "g", "o"], "");

// 13 13 13 13 13 13
// function slugify(title) {
//   // Change code below this line
//     return title.split(" ").join("-").toLowerCase();
//   // Change code above this line
// }
// slugify("Arrays for begginers");
// slugify("How to become a JUNIOR developer in TWO WEEKS");

// ----------------16
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// const newArray = firstArray.concat(secondArray);
// if (maxLength < newArray.length) {
//   return newArray.slice(0, maxLength);
// }
//   return newArray;

//     // Change code above this line
//   }

// ---------------18
// function calculateTotal(number) {
//  // Change code below this line
// let sum = 0;
//     for (let i = 0; i <= number; i += 1) {
//         sum += i;
//     }
//     console.log(sum);
//     return sum;
//   // Change code above this line
// }

// calculateTotal(18);

// --------------------20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//     console.log(total);
// }
//   // Change code above this line
//   return total;
// }
// calculateTotalPrice([412, 371, 94, 63, 176]);

// ------------------------------------21 -  ПОИСК САМОГО ДЛИННОГО СЛОВА
// function findLongestWord(string) {
//   // Change code below this line
//   let array = string.split(' ');
//   let longestWord = array[0];

//   for (let i = 0; i < array.length; i += 1) {

//       if (array[i].length > longestWord.length) {
//         longestWord = array[i];
//       }
//   }
//   console.log(longestWord);
//   return longestWord;

//   // Change code above this line
// }
// findLongestWord("May the force be with you");

// ---------------------------------- 22   метод PUSH
// function createArrayOfNumbers(min, max) {
//   const numbers = [min];
//   // Change code below this line
//   for (let i = min; i < max; i += 1) {
//   numbers.push(min += 1);
//   }
//   console.log(numbers);
//   // Change code above this line
//   return numbers;
// }
// createArrayOfNumbers(29, 34);

// --------------------------------23    ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ
// function filterArray(numbers, value) {
//    // Change code below this line
//   let array = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

// 	if (number > value) {
//     array.push(number);
//     console.log(array);
//     }
// }

// return array;
//   // Change code above this line
// }

// filterArray([12, 24, 8, 41, 76], 38);

// --------------------24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   return fruits.includes(fruit);
// // Change this line
// }

// checkFruit("orange");

// --------------------25

// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const array = [];
//   for (let element of array1) {

//     if (array2.includes(element)) {
//       array.push(element);
//     }
//   }
//   console.log(array);
//     return array;

//  // Change code above this line
// }

// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);

// -----------------------26

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const element of order) {
//     total += element;
//   }

//   // Change code above this line
//   return total;
// }

// -------------------------27

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// --------------------------29

// function getEvenNumbers(start, end) {
//    // Change code below this line
// const array = [];

// for (let i = start; i <= end; i += 1) {

//   if (i % 2 === 0) {
//   	array.push(i);
//   }

// }

// return array;
//     // Change code above this line
// }

// ----------------31
// function findNumber(start, end, divisor) {
//   // Change code below this line

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

//   // Change code above this line
// }

// -------------------------------32
// function includes(array, value) {
//   for (const element of array) {

//     if (element === value) {
//       console.log(true);
//       return true;
//     }
//   }
//   console.log(false);
//   return false;
// }
// includes([1, 2, 3, 4, 5], 3);

// *****************************************************************************3

// 3---------------------------------------7

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
//  // area: 60,
//  // rooms: 3,
//  // location: {
//  // 	country: "Jamaica",
//  //   city: "Kingston",
//  // },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// // Change code below this line

// 3--------------------------------12

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// const keys = Object.keys(object);

//  // for (const key of keys) {
//   	propCount = keys.length;
//  // }
//   // Change code above this line
//   return propCount;
// }

// countProps({ name: "Mango", age: 2 });

// 3-------------------------------12

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);

// for (const key of keys) {
//   values.push(apartment[key])

// }

//  console.log(values);

// 3------------------------------------ 14

// function countProps(object) {
//   // Change code below this line

//     const propCount = [];

//    const keys = Object.keys(object);

//     for (const key of keys) {

//        propCount.push(key)

//         console.log(propCount);
//     }

//   return propCount.length;
//   // Change code above this line
// }

// countProps({ name: "Mango", age: 2 })

// 3------------------------------------ 16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//     const keys = Object.keys(salaries);

//     for (const key of keys) {

//     totalSalary += salaries[key];

//     }

//     console.log(totalSalary);
//   // Change code above this line
//   return totalSalary;
// }
// countTotalSalary({ mango: 100, poly: 150, alfred: 80 });

// 3----------------------------------17

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const element of colors) {
//     hexColors.push(element.hex);

//     rgbColors.push(element.rgb);
// }
//     console.log(hexColors);
//     console.log(rgbColors);

// 3------------------------------------18

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

//     for (const element of products) {
//         if (productName === element.name) {
//             console.log(element.price);
//             return element.price;
//         }
//     }

//         console.log(null);
//         return null;
// }
// getProductPrice("Droid");

// 3---------------------------------- 19

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   let array = [];

//   for (const product of products) {
//     if (Object.keys(product).includes(propName)) {
//       array.push(product[propName]);
//     }

//   }
//   console.log(array);
//   return array;
//   // Change code above this line
// }

// getAllPropValues("price");

// 3---------------------------------------- 20

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;

//   for (const product of products) {
//     if (productName === product.name) {
//       totalPrice = product.price * product.quantity

//     }
//   }
//   console.log('Total PRICE: ',totalPrice);
//   return totalPrice;

//   // Пиши код выше этой строки
// }

// calculateTotalPrice("Radar");

// 3--------------------------------24

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {

//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// 3------------25

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//   tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
// } = forecast;

// 3--------------------------26

// function calculateMeanTemperature(forecast) {

//   const {today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh}, } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// 3----------------------------30

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//     const obj = { category: category, priority: priority, completed: completed, ...data };
//     console.log(obj);
//   return obj;

//   // Change code above this line
// }
// makeTask({});

// 3-----------------------------31

// Change code below this line
// const add = function (...args) {
//     const a = [];
//     a.push(...args);
//     let total = 0;

//     for (const num of a) {
//         total += num;
        
//     }
//     console.log('total: ', total);
//     return total;
//   // Change code above this line
// }
// add(15, 27);

// 3-----------------------------------32
// Change code below this line
// const addOverNum = function (...args) {
//   let total = 0;

//   for (const arg of args) {

//       if (arg > args[0]) {
//           total += arg;
//       }
//   }
//   console.log(total);
//   return total;
//   // Change code above this line
// }
// addOverNum(10, 12, 4, 11, 48, 10, 8);

// 3--------------------------------33

// Change code below this line
// const findMatches = function (...args) {
//     const matches = []; // Don't change this line
    
//     // console.log(args);
//     for (let i = 0; i < args.length; i += 1) {
//         const arg = args[i];
//         // console.log(args[i]);
//         if (args[0].includes(args[i+1])) {
//             matches.push(args[i+1]);
//         }
//     }

//   // Change code above this line
//     console.log(matches);
//   return matches;
// }

// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);

// 3---------------------------------------------34
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//   	return `Updating book ${oldName} to ${newName}`;
//   },
//   // Change code above this line
// };

// 3------------------------------------35

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//       const { books } = this;
//       const bookIndex = books.indexOf(oldName);
//       books.splice(bookIndex, 1, newName);

//       console.log(books);
//     // Change code above this line
//   },
// };

// // После вызова метода
// bookShelf.updateBook("Haze", "Dungeon chronicles");
// // , значение свойства books это массив
// // ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// 3------------------------------------------------37
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//     getPotions() {
//     console.log(this.potions);
//     return this.potions;
// }
//   // Change code above this line
// };

// atTheOldToad.getPotions()

// 3----------------------------------------------38

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
    
//   addPotion(potionName) {
//     // Change code below this line
//       console.log(this.potions.push(potionName));
//     //   return this.potions.push(potionName);
//     // Change code above this line
//     },
  
// };
// atTheOldToad.addPotion('Invisibility');

// 3---------------------------------------------39

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//       const { potions } = this;

//       const potionIndex = potions.indexOf(potionName);
//       console.log(potionIndex);
      
//       return potions.splice(potionIndex, 1)
//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion("Dragon breath");

// 3------------------------------------------40
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const {potions} = this;
    
// 	const potionIndex = potions.indexOf(oldName);
    
// 	return potions.splice(potionIndex, 1, newName);
//     // Change code above this line
//   },
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");

// Альтернатива: this.potions.splice(this.potions.indexOf(oldName), 1, newName);

// 3---------------------------------------------41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//     getPotions() {
//         return this.potions;
//     },

//     addPotion(newPotion) {
//         const { potions } = this;

//         for (const potion of potions) {
            
//             if (potion.name === newPotion.name) {
//                 console.log(`Error! Potion ${newPotion.name} is already in your inventory!`);
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }  
//         }
//          return potions.push(newPotion);
//   },
//     removePotion(potionName) {

//         const { potions } = this;
        
//         for (let i = 0; i < potions.length; i += 1) {
//             const { name } = potions[i];
//             console.log(name);
            
//             if (name === potionName) {
//                 potions.splice(i, 1);
//             }
//         }
//     },

//   updatePotionName(oldName, newName) {
//       const { potions } = this;

//       for (let i = 0; i < potions.length; i+=1) {
//           const { name } = potions[i];
//         //   console.log(potions[i]);

//           if (name === oldName) {
//               potions[i].name = newName;
//           }
//       }
//   },
// //   Change code above this line
// };

// console.table(atTheOldToad.getPotions());

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 });
// atTheOldToad.addPotion({ name: "Power potion", price: 270 });
// atTheOldToad.addPotion({ name: "Dragon breath", price: 700 });
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
// console.table(atTheOldToad.getPotions());

// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.removePotion("Speed potion");
// console.table(atTheOldToad.getPotions());


// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion");
// console.table(atTheOldToad.getPotions());


// 444444444444444444444444444444444444444444444444444444444444444444

// 4-------------------------------1

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;
// Дополни код так, чтобы в переменной result был результат выполнения функции makePizza, а в переменной pointer была ссылка на функцию makePizza.

// 4----------------------------------------2

// const del = deliverPizza();
// const mak = makePizza();
// const msg = makeMessage();

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {

//     console.log(callback(pizzaName));

//     return callback(pizzaName);
// }


// makeMessage("Royal Grand", makePizza);
// makeMessage("Ultracheese", deliverPizza);

// 4--------------------------------------------4

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess , onError) {
//         if (this.pizzas.includes(pizzaName)) {

//             console.log(onSuccess(pizzaName));
//             return onSuccess(pizzaName);
//         }

//         console.log(onError(pizzaName));
//         return onError(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(pizzaName) {
//   return `Error! There is no pizza with a name ${pizzaName} in the assortment.`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// 4-------------------------------------------------------- 5

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//     orderedItems.forEach(function (number) {
//         totalPrice += number;
        
//     });
    
//         return totalPrice;
//     // Change code above this line
// }
// calculateTotalPrice([12, 85, 37, 4]);


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newArray = [];

// 4----------------------------------------------13

// function changeEven(numbers, value) {
//   // Change code below this line
//     const newArray = [];

//     numbers.forEach(number => {
//         if (number % 2 === 0) {
//             newArray.push(number + value)
//         }
//         if (number % 2 !== 0) {
//             newArray.push(number)
//         }
//     })

//     console.log(newArray);
//   return newArray;
//   // Change code above this line
// }

// changeEven([1, 2, 3, 4, 5], 10);
// // changeEven([44, 13, 81, 92, 36, 54], 100);

// 4-------------------------------14

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// 4--------------------------------------------------16

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);

// console.log(genres);

// 4--------------------------------------------------17


// // Change code below this line
// const getUserNames = users => {

//     console.log(users.map(user => user.name));
//     return users.map(user => user.name);

//   };
//   // Change code above this line
// getUserNames([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ]);

// 4---------------------------------------------24

// Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//     console.log(users.filter(user => user.friends.includes(friendName)));
//     return users.filter(user => user.friends.includes(friendName))
// };
// Change code above this line

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {
//     const newArray = [];
//     users.forEach(user => {
//         if (user.friends.includes(friendName)) {
//             users.filter(user => user.name);
//             newArray.push(user.name);
//         }
//     })
//     console.log(newArray);
//     return newArray;
// };
// // Change code above this line



// getUsersWithFriend(
//     [
//         {
//             name: "Moore Hensley",
//             email: "moorehensley@indexia.com",
//             eyeColor: "blue",
//             friends: ["Sharron Pace"],
//             isActive: false,
//             balance: 2811,
//             gender: "male",
//             age: 37
//         },
//         {
//             name: "Sharlene Bush",
//             email: "sharlenebush@tubesys.com",
//             eyeColor: "blue",
//             friends: ["Briana Decker", "Sharron Pace"],
//             isActive: true,
//             balance: 3821,
//             gender: "female",
//             age: 34
//         },
//         {
//             name: "Ross Vazquez",
//             email: "rossvazquez@xinware.com",
//             eyeColor: "green",
//             friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//             isActive: false,
//             balance: 3793,
//             gender: "male",
//             age: 24
//         },
//         {
//             name: "Elma Head",
//             email: "elmahead@omatom.com",
//             eyeColor: "green",
//             friends: ["Goldie Gentry", "Aisha Tran"],
//             isActive: true,
//             balance: 2278,
//             gender: "female",
//             age: 21
//         },
//         {
//             name: "Carey Barr",
//             email: "careybarr@nurali.com",
//             eyeColor: "blue",
//             friends: ["Jordan Sampson", "Eddie Strong"],
//             isActive: true,
//             balance: 3951,
//             gender: "male",
//             age: 27
//         },
//         {
//             name: "Blackburn Dotson",
//             email: "blackburndotson@furnigeer.com",
//             eyeColor: "brown",
//             friends: ["Jacklyn Lucas", "Linda Chapman"],
//             isActive: false,
//             balance: 1498,
//             gender: "male",
//             age: 38
//         },
//         {
//             name: "Sheree Anthony",
//             email: "shereeanthony@kog.com",
//             eyeColor: "brown",
//             friends: ["Goldie Gentry", "Briana Decker"],
//             isActive: true,
//             balance: 2764,
//             gender: "female",
//             age: 39
//         }
//     ], 'Briana Decker');


// 4---------------------------------------------25

// // Change code below this line
// const getFriends = (users) => {
//   const allFriends = users.flatMap(user => user.friends);
//   return allFriends.filter((friend, index, array) => array.indexOf(friend) === index)
// };
// // Change code above this line
// getFriends([
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ]);

// 4----------------------------------------------36

// // Change code below this line
// const calculateTotalBalance = users => {
//     const totalSum = users.reduce((total, user) => {
//         return total + user.balance;
//     }, 0);
//     console.log(totalSum);
//     return totalSum;
// };
// // Change code above this line

// calculateTotalBalance([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]);

// // Change code below this line
// const getTotalFriendCount = users => {
//     const amount = users.reduce((total, user) => {
//   return total + user.friends.length;
//   }, 0);
//     console.log(amount);
//   return amount;
// };
// // Change code above this line

// getTotalFriendCount([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]);


// 4----------------------------------43

// // Change code below this line
// const sortByDescendingFriendCount = users => {
//    console.log([...users].sort((ff, sf) => sf.friends.length - ff.friends.length));
// };
// // Change code above this line

// sortByDescendingFriendCount([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]);


// 4----------------------------------------45 

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter(book => book.rating > MIN_BOOK_RATING).map(book => book.author).sort();

// console.log(names);

// 4-----------------------------------47

// // Change code below this line
// const getSortedFriends = users => {
//   return users.flatMap(user => user.friends).filter((friend, index, arrayFriends) => arrayFriends.indexOf(friend) === index).sort(); 
// };
// // Change code above this line

// getSortedFriends([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]);

//  4----------------------------------48

// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => {
//     return (users.filter(user => user.gender === gender).reduce((totalBalance, userBalance) => {
//         return totalBalance + userBalance.balance;
//     }, 0));
// };
// // Change code above this line

// getTotalBalanceByGender([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ], "female");



//  ✅✅✅✅✅  5  ✅✅✅✅✅  5  ✅✅✅✅✅

// 5-------------------------------------------1

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     console.log(this.pizzas.includes(pizzaName));
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       console.log(`Sorry, there is no pizza named «${pizzaName}»`);
//     }

//     console.log(`Order accepted, preparing «${pizzaName}» pizza`);
//   },
//   // Change code above this line
// };

// pizzaPalace.order('Smoked');

// 5---------------------------------------2

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


// 5--------------------------------3

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };

// 5------------------------------------------10

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }

//     getItems() {
//         return this.items;
//     }

//     addItem(newItem) {
//         return this.items.push(newItem);
//     }

//      как сделал я:
// 
//     removeItem(itemToRemove) {
//         const index = this.items.findIndex(item => item === itemToRemove);
//         return this.items.splice(index, 1);
//     }

//      альтернативный и более правильный вариант:
// 
//      removeItem(itemToRemove) {
//      this.items = this.items.filter(item => item !== itemToRemove);
//      }

// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// class StringBuilder {
//     constructor (initialValue ) {
//         this.value = initialValue ;
//     }

//     getValue() {
//         return this.value;
//     }

//     padEnd(str) {
//         this.value += str;
//     }

//     padStart(str) {
//         this.value = str + this.value;
//     }

//     padBoth(str) {
//         this.value = str + this.value + str;
//     }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// 5------------------------------16

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if(newPrice > Car.MAX_PRICE) {
//      return this.#price
//     }

//     return this.#price = newPrice;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// 5------------------------------------------17

// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//   return  price > Car.#MAX_PRICE ?  "Error! Price exceeds the maximum" : "Success! Price is within acceptable limits";
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// 5------------------------------------------------18

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line


// class Admin extends User {
//   static AccessLevel = {
//     BASIC: 'basic', 
//     SUPERUSER: 'superuser',
//   }
// }


// 5---------------------------------------------------------------20

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line
//   blacklistedEmails = [];
  
//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   };

//   blacklist(email) {
//     return this.blacklistedEmails.push(email);
//   };

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true