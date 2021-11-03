// Несколько колбэков: ✅

// function processCall(recipient) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//     // Логика активации автоответчика
//   } else {
//     console.log(`Соединяем с ${recipient}, ожидайте...`);
//     // Логика принятия звонка
//   }
// }

// processCall("Манго");
// processCall("Ман");
// processCall("UA");

// --------Выполним рефакторинг функции так, чтобы она принимала два колбэка onAvailable и onNotAvailable, и вызывала их по условию.✅

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступеность абонента случайным числом
//     const isRecipientAvailable = Math.random() > 0.5;
//     // console.log(isRecipientAvailable);

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall("Манго", takeCall, activateAnsweringMachine);
// processCall("Поли", takeCall, leaveHoloMessage);

// ✅-------------------------------Абстрагирование повторения - Поскольку «делать что-то» можно представить как функцию, 
// а функции - это просто значения, мы можем передать действие как аргумент.

// function printValue(value) {
//   console.log(value);
// }

// function prettyPrint(value) {
//   console.log("Logging value: ", value);
// }

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// ********Метод forEach   ✅✅✅✅✅

//✅ Перебирающий метод массива который используется как замена циклов for и for...of при работе с коллекцией данных.

//✅ Единственным случаем, когда стоит использовать циклы for или for...of для перебора массива, 
// это задачи с прерыванием выполнения цикла.Прервать выполнение метода forEach нельзя, он всегда перебирает массив до конца.

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }

// // Перебирающий forEach
// numbers.forEach(function (number, index, array) {
//   console.log(`Индекс ${index}, значение ${number}, массив ${array}`);
// });




// ****************** Стрелочные функции ✅✅✅✅✅

//✅ Все стрелки создаются как функциональное выражение, и если функция не анонимна, то она должна быть присвоена переменной.

// // Обычное объявление функции
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Тоже самое как стрелочная функция
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

//✅ Если параметр один, его объявление может быть без круглых скобок.

// const add = a => {
//   return a + 5;
// };

//✅ Если параметров нет, то обязательно должны быть пустые круглые скобки.

// const greet = () => {
//   console.log("Привет!");
// };

// greet();



// **************Неявный возврат (implicit return) ✅✅✅

//✅ В стрелочной функции после символа => идёт её тело. Здесь может быть два варианта: с фигурными скобками и без них.

// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// ✅Если фигурные скобки есть, и функция должна возвращать какое - то значение,
// необходимо явно поставить return.Это называется явный возврат(explicit return). Такой синтаксис используется в том случае,
// если в теле функции нужно выполнить ещё какие - то инструкции кроме возврата значения.

// const add = (a, b, c) => a + b + c;

// ✅Если фигурных скобок нет, то возвращается результат выражения стоящего после =>.Это называется неявный возврат(implicit return). 
// В примере вернётся результат выражения сложения параметров a, b и c.


// ****************** Псевдомассив arguments✅✅✅
// У стрелочных функций нет локальной переменной arguments, содержащей все аргументы. Если необходимо собрать все аргументы в массив, 
// используется операция rest
// const add = (...args) => {
//   console.log(args);
// };

// add(1, 2, 3); // [1, 2, 3]


// **************** Стрелочные функции как коллбеки ✅✅✅ 

// ✅ Анонимные стрелочные функции отлично подходят как коллбеки для перебирающих методов массива из - за более краткого синтаксиса объявления,
// особенно если не нужно тело функции.

// const numbers = [5, 10, 15, 20, 25];

// // Объявление функции
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// // Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// ✅ Стрелочную коллбек - функцию также можно объявлять отдельно и передавать на неё ссылку.Это стоит делать если одна функция используется
// в нескольих местах программы или если она громоздкая.

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };

// numbers.forEach(logMessage);

// ************************ Разновидности кода ✅ ✅ ✅ ✅ ✅ ✅ 

// *************************** Императивный vs декларативный ✅✅✅ 

// // Императивный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// console.log(filteredNumbers); // [4, 5]

// // VS   VS    VS     VS

// Метод filter() скрывает в себе логику перебора коллекции и вызывает callback - функцию, которую мы ему передаем для каждого элемента, возвращая массив элементов,
// подошедших под критерий.


// // Декларативный подход
// const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = numbers.filter(value => value > 3);
// console.log(filteredNumbers); // [4, 5];



//  ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅  РЕПЕТА

// CALLBACK

// const doMath = (a, b, callback) => {
//     const result = callback(a, b);
    
//     console.log(result);
// }

// // const add = (x, y) => {
// //     return x + y;
// // }
// // const sub = (x, y) => {
// //     return x - y;
// // }

// // doMath(8, 6, add);
// // doMath(8, 6, sub);

// // inline fn
// doMath(5, 4, (x, y) => {
//     return x + y;
// });
// doMath(5, 4, (x, y) => {
//     return x - y;
// }); 

// ЗАМЫКАНИЕ ✅ ✅ ✅

// const makeSheff = function (name) {
//     const innerVar = 777;
//     const makeDish = function (dish) {
//         console.log(innerVar);
//         console.log(`${name} готовит ${dish}`);
//     };

//     return makeDish;
// };

// const mango = makeSheff('Mango');
// console.dir(mango);
// // mango('суп');
// // mango('пюре');
// // mango('компот');


// const kate = makeSheff('Kate');
// console.dir(kate);
// // kate('суп');
// // kate('пюре');
// // kate('компот');


//    Права доступа    **************************

// const users = {
//     tutor: 'TUTOR',
//     user: 'USER',
//     admin: 'ADMIN',
// };

// const successMesage = (message) => {
//     return {
//         status: 'ok',
//         userInfo: {},
//         error: {message,},
//         isLoading: false,
//     };
// };

// const errorMesage = (message) => {
//     return {
//         status: 'ok',
//         userInfo: {},
//         error: {message,},
//         isLoading: false,
//     };
// };

// const fetcher = (user) => {
//     const isAdmin = [users.admin].includes(user);
//    if (isAdmin) {
//        return successMesage('Access success!');
//     } 
//     return errorMesage('Error access...');
// };

// const data = fetcher(users.admin);

// console.log('data ', data);


// Фильтрация уникальных элементов
// const students = [
//   { name: "Манго", courses: ["математика", "физика"] },
//   { name: "Поли", courses: ["информатика", "математика"] },
//   { name: "Киви", courses: ["физика", "биология"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];


// // const array = ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

// const uniqueCourses = allCourses.filter(
//     (course, index, array) => array.indexOf(course) === index
// );

// console.log(uniqueCourses);






// Сортировка объектов

// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log(inAscendingScoreOrder);

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log(inDescendingScoreOrder);

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAlphabeticalOrder);