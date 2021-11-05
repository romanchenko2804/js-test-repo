// 1
// const add = (a, b) => {
//     return a + b;
// }
// console.log(add(5, 4));
// 1.1
// неявный(implicit) вовзрат
// const add = (a, b) => a + b;
// console.log(add(5, 4));

// 2
// function logMessage(message) {
//     return message;
// }
// console.log(logMessage('Привет, Мир!'));

// 3
// const getValue = function (x, y, z) {
//     return x + y * z;
// }
// console.log(getValue(2, 2, 2));

//   Псевдомассив arguments**************************************************************

// const add = () => {
//     console.log(arguments);
// }

// add(1, 2, 3, 4, 5, 6, 7) // training.js:25 Uncaught ReferenceError: arguments is not defined at add at training.js

// решение примера выше:

// const addNumbers = (...args) => {
//     console.log(args);
// }
// addNumbers(1, 2, 3, 4, 5, 6, 7)

// обычная функция:

// const add = function() {
//     console.log(arguments);
// }

// add(1, 2, 3, 4, 5, 6, 7)


// КОНТЕКСТ ✅ КОНТЕКСТ ✅ КОНТЕКСТ ✅ КОНТЕКСТ ✅ КОНТЕКСТ ✅ КОНТЕКСТ ✅ КОНТЕКСТ ✅ КОНТЕКСТ ✅ КОНТЕКСТ ✅ КОНТЕКСТ ✅

/*✅✅✅ У трелочных функций нету свого THIS. Тоесть внутри стрелочной функции вот это вот значение контекста или значение 
ключевого слова THIS определяется не в момент её вызoва (как у нормальной функциии), а в момент её обьявления. Там где ты её 
обьявил, такой контекст она (внешний контекст) запомнила навсегда!!!✅✅✅*/

// const showThis = () => {
//     console.log('this in showThis', this);
// }
// showThis()

// const user = { name: 'Mango', };
// user.showContext = showThis;

// user.showContext();

// обычная функция:

// const showThis = function () {
//     console.log('this in showThis', this);
// };
// showThis();

// const user = { name: 'Mango', };
// user.showContext = showThis;

// user.showContext();


// функции как методы обьекта

// const user = {
//     name: 'Mango',
//     showName() {
//         console.log('show THIS: ', this);
//         console.log('show THIS.NAME: ', this.name);

//         // //обычная функция -> внутри метода обьекта -> который внутри фунцкии
//         // const inner = function () {
//         //     console.log('this ininner: ', this);
//         // };

//         // inner(); // this ininner:  undefined

//         //стрелочная функция -> внутри метода обьекта -> который внутри фунцкии
//         const inner = () => {
//             console.log('this in inner: ', this);
//         };
//         inner()
//     },
// };

// user.showName()

// ❌❌❌❌❌❌❌❌❌❌❌❌❌❌ НИКОГДА НЕ ИСПОЛЬЗУЙТЕ СТРЕЛКИ КАК МЕТОД ОБЬЕКТА !!! ❌❌❌❌❌❌❌❌❌❌❌❌❌❌❌

// const user = {
//     name: 'Mango',
//     showName() { // showName: function() {} - аналогичная запись ✅✅✅

//         console.log('show THIS: ', this);
//         console.log('show THIS.NAME: ', this.name);
//     },
// };

// user.showName()

// !!!!!!!!!!!не делать ТАК: ❌❌❌

// const user = {
//     name: 'Mango',
//     showName: () => { //  ❌

//         console.log('show THIS: ', this);
//         console.log('show THIS.NAME: ', this.name);
//     },
// };

// user.showName()

// ✅ Правила определения this


// ✅ this в глобальной области видимости 

// const fn = function () {
//     console.log('this in fn: ', this);
// };
// fn(); //this in fn:  undefined  -  потому что используем "use strict"


// ✅ this в методе объекта

// const car = {
//     brand: 'audi',
//     model: 'Q7',
//     price: 77777,

//     showModel() {
//         console.log('this: ', this);
//         console.log(`show model: ${this.model}`);
//     },
// };

// car.showModel();

// --------------------------

// const fn = function () {
//     console.log('this in fn: ', this);
// };
// fn();

// const user = {
//     name: 'Vasyl',
//     age: 27,
// };

// user.showContext = fn;

// user.showContext();

// ✅ this в callback-функциях +  Метод функции "bind() и методы объекта"
/*При передаче методов объекта как колбэк-функций, контекст не сохраняется. Колбэк это ссылка на метод, которая присваивается как значение параметра, вызываемого без объекта.*/

// const customer = {
//     firstName: 'Jack',
//     lastName: 'Wilson',
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },
// };
// const user = customer.getFullName();

// // console.log(user);

// const makeMessage = function (callback) {
//     // callback() это вызов метода getFullName без объекта
//     console.log(`Обрабатываем заявку от ${callback()}.`);
// };

// // ❌ Было
// // makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// // ✅ Стало
// makeMessage(customer.getFullName.bind(customer)); // Обрабатываем заявку от Jacob Mercer.

// ✅✅✅ Методы функций

// ✅  Метод call()  ✅
// Mетод call вызовет функцию foo так, что в this будет ссылка на объект obj, а также передаст аргументы arg1, arg2 и т. д.
// foo.call(obj, arg1, arg2, ...)

// const getFullName = function (greeting, emoji) {
//     console.log(`${greeting}, ${this.firstName} ${this.lastName}! ${emoji}`);
// }

// const admin = {
//     firstName: 'Nicholas',
//     lastName: 'Bond',
// };

// const user = {
//     firstName: 'Jack',
//     lastName: 'Jonsone',
// };

// getFullName.call(admin, 'Hello', "👋"); // Hello, Nicholas Bond!
// getFullName.call(user, 'Hi', '✈️'); // Hi, Jack Jonsone!

// ✅  Метод apply ✅
/*Метод apply это аналог метода call за исключением того, что синтаксис передачи аргументов требует не перечисление, а массив, даже если аргумент всего один.

foo.call(obj, arg1, arg2, ...)

foo.apply(obj, [arg1, arg2, ...])

Метод apply вызовет функцию foo так, что в this будет ссылка на объект obj, а также передаст элементы массива как отдельные аргументы arg1, arg2 и т. д.*/

// const getFullName = function (greeting, emoji) {
//     console.log(`${greeting}, ${this.firstName} ${this.lastName}! ${emoji}`);
// }

// const admin = {
//     firstName: 'Nicholas',
//     lastName: 'Bond',
// };

// const user = {
//     firstName: 'Jack',
//     lastName: 'Jonsone',
// };

// getFullName.apply(admin, ['Hello', "👋"]); // Hello, Nicholas Bond!
// getFullName.apply(user, ['Hi', '✈️']); // Hi, Jack Jonsone!

// ✅   Метод bind()   ✅

/*Методы call и apply вызывают функцию «на месте», то есть сразу. Но в случае колбэк-функций, когда необходимо не сразу вызвать функцию, а передать ссылку на неё, причём с привязанным контекстом, используется метод bind.

foo.bind(obj, arg1, arg2, ...)

Метод bind создаёт и возвращает копию функции foo с привязанным контекстом obj и аргументами arg1, arg2 и т. д. Получается копия функции которую можно передать куда угодно и вызвать когда угодно.*/

// function greet(clientName) {
//   console.log(`${clientName}, добро пожаловать в «${this.service}».`);
// }

// const steam = {
//   service: "Steam",
// };
// const steamGreeter = greet.bind(steam);
// steamGreeter("Манго"); // "Манго, добро пожаловать в «Steam»."

// const gmail = {
//   service: "Gmail",
// };
// const gmailGreeter = greet.bind(gmail);
// gmailGreeter("Поли"); // "Поли, добро пожаловать в «Gmail»."

// ✅   bind() и методы объекта#   ✅
/* При передаче методов объекта как колбэк-функций, контекст не сохраняется. Колбэк это ссылка на метод, которая присваивается как значение параметра, вызываемого без объекта.*/

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// ❌ makeMessage(customer.getFullName); // Будет ошибка при вызове функции

/* В строгом режиме, значение this в методе getFullName, при вызове как колбэк-функции callback(), будет undefined. При обращении к свойствам firstName и lastName будет ошибка, так как undefined это не объект.

Метод bind используется для привязки контекста при передаче методов объекта как колбэк-функций. Передадим колбэком не оригинальный метод getFullName, а его копию с привязанным контекстом к объекту customer.*/

// ❌ Было
// makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// ✅ Стало
// makeMessage(customer.getFullName.bind(customer)); // Обрабатываем заявку от Jacob Mercer.

