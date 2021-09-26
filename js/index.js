// const message = "JavaScript is awesome!";
// console.log(message);

// let age = 777;
// console.log(age);
// console.log(typeof age);


// const message = "JavaScript is awesome!";
// alert(message);

// Просим клиента подтвердить бронь на отель
// и сохраняем в переменную результат работы confirm
// const isComing = confirm("Please confirm hotel reservation");
// console.log(isComing);

// Спрашиваем имя отеля в котором хотел бы остановится клиент
// и сохраняем в переменную результат вызова prompt.
// const hotelName = prompt("Please enter desired hotel name");
// console.log(hotelName);

// const value = prompt("Please enter a number!");
// console.log(typeof value); // "string"
// console.log(value); // "5"

// const x = 10;
// const y = 5;

// Сложение
// console.log(x + y); // 15
// console.log(y - x);

// Сложение с заменой (также есть для всех других операторов)
// let value = 10;

// Аналогично записи value = value + 10;
// value += 7;
// console.log(value);

// Операторы сравнения***********************************************************

// const x = 5;
// const y = 10;
// const z = 5;

// console.log("x > y:", x > y); // false
// console.log("x < y:", x < y); // true
// console.log("x < z:", x < z); // false
// console.log("x <= z:", x <= z); // true
// console.log("x === y:", x === y); // false
// console.log("x === z:", x === z); // true
// console.log("x !== y:", x !== y); // true
// console.log("x !== z:", x !== z); // false


// const valueB = "777 or ass";
// console.log(Number(valueB)); // NaN
// console.log(typeof Number(valueB)); // "number"

// console.log(Number.parseInt("5px")); // 5
// console.log(Number.parseInt("12qwe74")); // 12
// console.log(Number.parseInt("12.46qwe79")); // 12
// console.log(Number.parseInt("qweqwe")); // NaN

// console.log(Number.parseFloat("5px")); // 5
// console.log(Number.parseFloat("12qwe74")); // 12
// console.log(Number.parseFloat("12.46qwe79")); // 12.46
// console.log(Number.parseFloat("qweqwe")); // NaN


//          parseInt***********************************************************

// let elemWidth = '50px';
// const result = Number.parseInt(elemWidth);
// // elemWidth = Number.parsInt(elemWidth);
// console.log(result);


//          parseFloat***********************************************************

// let elementHeight = '123.45em';
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight:', elementHeight);


//          toFixed***********************************************************

// let salary = 1500.48789;
// salary = Number(salary.toFixed(1));
// // salary = Number(salary);
// // console.log(salary.toFixed());
// console.log(salary);


//      Math***********************************************************

// console.log(Math.PI);


// const a = 5;
// const c = 5;

// const calc = Math.pow(a, c);  // (a ** c);

// console.log(calc); //console.log(a ** c);


//      test***********************************************************

// const base = prompt('Введи число');
// console.log(Number(base));

// const exponent = prompt('Какая степень?');
// console.log(Number(exponent));

// console.log(base ** exponent);


//      psevdoGeneration numbers***********************************************************

// const max = 77;
// const min = 55;
// const score = Math.round(Math.random() * (max - min) + min);

// console.log(score);


//          strings***********************************************************

// const message = 'В этой строке 26 символовю';
// console.log(message.length);

// конкатенация строк - сшивать строки
// template strings

// const firstName = 'Chelsy';
// const lastName = 'Muler';
// const fullName = firstName + ' ' + lastName;

// console.log(fullName);

// const room = 777;
// const type = 'VIP';

// // const welcomeMsg = 'Гость ' + firstName + ' ' + lastName + ' ' + 'поселяется в ' + type + ' ' + 'номер ' + room; - старый метод
// const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}.`

// console.log(welcomeMsg);


// нормализация с методом toLowerCase()***********************************************************

// const brand = 'SamSung'; // let brand = prompt('Давай бренд);
// const normalizeBrand = brand.toLowerCase(); // brand = nrand.toLowerCase();

// console.log(normalizeBrand); // console.log(brand);

// let brand = 'SamSuNG';
// brand = brand[0] + brand.slice(1).toLowerCase(); 

// console.log(brand);

// ***

//  поиск в строке с методом includes***********************************************************

// ***

// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'распродажа';

// const string1 = 'Это не спам.'; 
// const string2 = 'Это супер РАСПРОДАЖА!';
// const string3 = 'Рекламная компания #lightWings.';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));
// const normalizedString2 = string2.toLowerCase();
// console.log(normalizedString2.includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));

// ***

//          логические операторы*****************************************************************

// ***

//  логическое И (оператор &&)
//  запинается на лжи
//  возвращает то, на чем запнулось или последний операнд

// console.log(5 && 6 && 7 && 'hello'); // (в нашем случае все операнды преобразовуются к TRUE, поэтому выводится последний операнд - 'hello')

// ***

//  логическое ИЛИ (оператор ||)
// запинается на правде
//  возвращает то, на чем запнулось или последний операнд

// console.log(0 || NaN || false || null || undefined || '' || 'mango');

// ***

// логическое НЕ (оператор !)
// делает инверсию правда > ложь и ложь > правда

// console.log(!NaN);
// console.log(!0);
// console.log(!null);
// console.log(!undefined);
// console.log(!false);
// console.log(!'');

// ***

//      test***********************
// написать скрипт, который проверяет вложение числа в отрезок обозначеный х1 и х2.

// const x1 = 7;
// const x2 = 17;
// const number = 15;

// console.log(`Число ${ number } попадает в отрезок до ${ x1 }?`, number < x1);
// console.log(`Число ${ number } попадает в отрезок после ${ x2 }?`, number > x2);
// console.log(`Число ${ number } попадает в отрезок между ${x1} и ${ x2 }?`, number > x1 && number < x2);
// console.log(`Число ${ number } попадает в отрезок до ${x1} или после ${ x2 }?`, number < x1 || number > x2);

// ***
    
// написать скрипт, который проверяет возможность открыть чат с пользователем
// для этого пользователь должен быть:
// - другом;
// - онлайн;
// - без режима не беспокоить.

// const isFriend = true;
// const isOnline = true;
// const isDnd = false;

// const canOpenChat = isFriend && isOnline && !isDnd;
// console.log(`Можно открыть чат? `, canOpenChat);

// ***

// написать скрипт, который проверяет подписку пользователя при доступе к контенту
// - есть три типа подписки: free, pro, vip;
// - получить доступ могут только пользователи pro и vip.

// // const subscription = 'free';
// // const subscription = 'pro';
// const subscription = 'vip';

// const canAccessContent = subscription === 'pro' || subscription === 'vip';
// // true || false => true
// // false || true => true
// // false || false => false
// console.log(`Есть доступ к контенту? `, canAccessContent);

// ***

// операторы ветвления: if, if else, else

// // IF
// if (50 > 8) {
//     console.log(777);
// }

// //  IF ELSE
// if (7 < 8) {
//     console.log('таки - да!');
// } else {
//     console.log('эммм...что-то пошло не так...');
// }

// ***

// const salary = 1501;

// if (salary <= 500) {
//     console.log('Уровень 1');
// } else if (salary > 501 && salary <= 1500) {
//     console.log('Уровень 2')
// } else if (salary > 1500 && salary < 3000) {
//     console.log('Уровень 3')
// } else {
//     console.log('Уровень 4')
// }

// тернарний оператор

// const balance = 1000;

// // let message;

// // if (balance >= 0) {
// //     message = 'Positive balance.';
// // } else {
// //     message = 'Negative balance.';
// // }
// // удобный аналог верхнего кода о балансе
// const message = balance >= 0 ? 'Positive balance' : 'Negative balance'; // формула записи - const message = условие ? выражение1 : выражение2 ;  ___формула работает только если у нас два варианта - тогда тернарный оператор (или то или другое).

// console.log(message);

// ***

// блочная область видимости переменных

// if (true) {
//     const a = 5;
// }

// console.log(a);  
// данный код не работает, так как переменная обьявлена в {} находится в блочной области видимости, а консоль лог находится в глобальной области видимости
// рабочая версия кода указана ниже (принцип матрешки)

// const b = 10

// if (true) {
//     const a = 55 / 5 + 5;

//     console.log(a);
//     console.log(b);
// }

// *** Цикл с предусловием - while

// let clientCounter = 15;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//     console.log(clientCounter);
//     clientCounter += 1;
// }


// *** Цикл с постусловием - do...while

// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);


// *** Цикл со счётчиком - for

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// const target = 4;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }


// *** Оператор - break

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Нашли число 3, прерываем выполнение цикла");
//     break;
//   }
// }

// console.log("Лог после цикла");


// ***Оператор - continue

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Нечетное i: ", i);
// }

// ***  SWITCH

// if...else...if
// const stars = 1;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого кол-ва звезд нет');
// }
// console.log(price);

// const stars = 1;
// let price

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
    
//     case 2:
//         price = 30;
//         break;
    
//     case 3:
//         price = 50;
//         break;
    
//     case 4:
//         price = 70;
//         break;
    
//     case 5:
//         price = 120;
//         break;
    
//     default:
//         console.log('Такого кол-ва звезд нет');
// }

// console.log(price);


// const stars = 4;
// let price

// if (stars === 1 || stars === 2) {
//     price = 20;
// } else if (stars === 3 || stars === 4) {
//     price = 30;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого кол-ва звезд нет');
// }

// console.log(price);


// const stars = 4;
// let price

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
    
//     case 3:
//     case 4:
//         price = 30;
//         break;
    
//     case 5:
//         price = 120;
//         break;
    
//     default:
//         console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

// *** Цикл FOR

// for (let i = 0; i <= 7; i += 1) {
//     console.log(i)
// }
// console.log('Конечный лог');

// for (let i = 0; i <= 100; i += 50) {
//     console.log(i);
// }


// ***    TEST

// const minSal = 500;
// const maxSal = 5000;
// const employees = 7;
// let totalSal = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(
//         Math.random() * (maxSal - minSal) + minSal,
//     );
//     console.log(`ЗП работника номер ${i} - ${salary}`);

//     totalSal += salary;
// }

// console.log('totalSalary: ', totalSal);


// const min = 0;
// const max = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         // console.log('Не четное: ', i);
//         continue;
//      }

   
//     console.log('Четное: ', i);
//     total += i; // агалогично - total = total + i;
    
// }

// console.log('Total: ', total);


// *** ЗАДАЧИ

// ***1

// let balance = 10000;
// const payment = 2000;

// console.log(`Сyмма заказа ${ payment}, хватает кредитов на счечу?`);

// if (balance >= payment) {
//     console.log('Достаточно средств.');

//     balance -= payment;

//     console.log(`На счету осталось ${balance} кредитов`);
// } else {
//     console.log(`На счету недостаточно средств для проведения операции!`);
// }

// console.log('Операция завершина.')

// ***2

// let totalSpent = 1546;
// let payment = 500;
// let discount = 0;

//  if (totalSpent >= 1000 && totalSpent < 1000) {
//     console.log('Бронзовый партнер, скидка 2%');
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log('Серебряный партнер, скидка 5%');
//     discount = 0.05;
// } else if (totalSpent >= 5000) {
//     console.log('Золтой партнер, скидка 10%');
//     discount = 0.1;
// } else {
//      console.log('Не паринер, скидка 0%');
// }
// payment -= payment * discount;
// // payment = payment - payment * discount;

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`,);

// totalSpent += payment;

// console.log(`Общая потраченая сумма в магазине ${totalSpent}`);

// ***
