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

// ✅ ✅ ✅ ✅ ✅ DON - module #6 ✅ ✅ ✅ ✅ ✅ ✅ 

// ✅ Свойства и атрибуты

// //===================================================
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message

// //===================================================
// const activeLink = document.querySelector(".btn.active");
// console.log(activeLink.href); // https://s.codepen.io/about

// //===================================================
// const image = document.querySelector(".image");
// console.log(image.src); // https://placeimg.com/640/480/animals
// image.src = 'https://placeimg.com/640/480/tech';

// ✅ Свойство textContent

// const text = document.querySelector(".article-text");
// console.log(text.textContent); // text inside p.article-text

// const title = document.querySelector(".article-title");
// title.textContent = 'Welcome to Bahamas, BRO!';

// ✅  Свойство classList

// const text = document.querySelector("#paragraph");

// console.log(text.classList); // ["text", "red", "big", value: "text red big"]

// console.log(text.classList.contains("red")); // true

// text.classList.remove("big");
// console.log(text.classList); // ["text", "red", value: "text red"]

// text.classList.add("new-class");
// console.log(text.classList); // ["text", "red", "new-class", value: "text red new-class"]

// // Can add multiple classes
// text.classList.add("a", "b", "c");
// console.log(text.classList);

// text.classList.toggle("is-hidden"); // will add is-hidden class
// console.log(text.classList);

// text.classList.toggle("is-hidden"); // will remove is-hidden class
// console.log(text.classList);

// // classList has a forEach method
// text.classList.forEach(cls => {
//   console.log(cls); // text, red, new-class
// });


// ✅  Свойство style

/* Используется для чтения и изменения инлайновых стилей. Возвращает объект CSSStyleDeclaration, который содержит список всех свойств, определенных только во встроенных стилях элемента, а не весь CSS. При записи свойства записываются в camelCase, то есть background-color превращается в element.style.backgroundColor и т. д. */

// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";

// console.log(button.style); // inline styles object


// ✅  Атрибуты

// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // "Beautiful nature"

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature


// ✅   data-атрибуты

{/* <button type="button" data-action="save">Save</button>
<button type="button" data-action="close">Close</button> */}

// Для получения значения data-атрибута используется свойство dataset, после которого идет имя атрибута. То есть data- отбрасывается, а остальное имя записывается как имя свойства объекта.

// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"

// ------------------------------

// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

// const dishes = document.querySelectorAll(".dishes > li");
// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });


// ✅✅✅ Создание и удаление элементов

// ✅ Создание

// document.createElement(tagName); // Создает элемент с именем tagName и возвращает ссылку на него как результат своего выполнения. tagName - это строка, указывающая тип создаваемого элемента. Элемент создается в памяти, в DOM его еще нет.

// const heading = document.createElement("h2");
// console.log(heading); // <h2></h2>

// heading.textContent = "This is a heading";
// console.log(heading); // <h1>This is a heading</h1>

// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";
// image.alt = "Nature";
// console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="Nature" />

//  ✅  Добавление

// const list = document.querySelector(".usernames");

// // Adds an item to the end of the list
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// // Adds an item to the beginning of the list
// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);

// // Adds a title before the list
// const title = document.createElement("h2");
// title.textContent = "USER NAMES";
// list.before(title);

// // Adds a paragraph after the list
// const text = document.createElement("p");
// text.textContent =
//   "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum tenetur assumenda fugiat maxime, soluta aspernatur quasi nihil in asperiores ad distinctio illo et debitis error iure voluptate numquam maiores nisi!";
// list.after(text);

//  ✅   Удаление#

// elem.remove();

// Для того, чтобы удалить элемент используется метод remove(). Он вызывается на самом элементе elem, который необходимо удалить

// const text = document.querySelector('.text');
// text.remove();


// ✅ ✅ ✅ Свойство innerHTML

// Еще один способ создать DOM-элементы и поместить их в дерево - это использовать строки с тегами и позволить браузеру сделать всю тяжелую работу. У такого подхода есть свои плюсы и минусы.


// ✅ Чтение

// const article = document.querySelector(".article");
// console.log(article.innerHTML);/*  <h2 class="title">Article title</h2>
//   <p class="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa quibusdam! <strong>Praesentium</strong> accusantium fugiat distinctio quidem minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo perspiciatis, consectetur non.</p>
//   <a class="link" href="">Read more</a> */

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML); // Article title

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML); /* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, ipsa quibusdam! <strong>Praesentium</strong> accusantium fugiat distinctio quidem minima fugit eos, veniam, nam laboriosam deleniti nisi qui neque explicabo perspiciatis, consectetur non. */

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML); // Read more


// ✅ Изменение

// const title = document.querySelector(".article .title");
// title.innerHTML = 'New and <span class="accent">improved</span> title';

// Однотипная (шаблонная) разметка создается из массива данных. Приём заключается в переборе этого массива и составлении одной строки с HTML тегами, которую потом записываем в innerHTML элемента.

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;


// ✅ Добавление ⚠️⚠️⚠️ Используйте свойство elem.innerHTML для добавления только в случае когда элемент elem пустой или если надо полностью заменить его содержимое. ⚠️⚠️⚠️

// const article = document.querySelector(".article");
// const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//    <a class="link" href="#">Read more...</a>`;

// // Replace += with = operator. See the difference? 
// // Article title is lost because we overwrite element content.
// article.innerHTML += htmlString;


// ✅ Метод insertAdjacentHTML()  ⚠️⚠️⚠️ Современный метод для добавления строки с HTML-тегами до, после или внутрь элемента. Решает проблему innerHTML с повторной сериализацией содержимого элемента при добавлении разметки к уже существующей. ⚠️⚠️⚠️ 

//elem.insertAdjacentHTML(position, string);
 /* position - это строка, позиция относительно элемента elem. Принимает одно из четырёх значений:

➡️ "beforebegin" - перед elem
➡️ "afterbegin" - внутри elem, перед всеми детьми
➡️ "beforeend" - внутри elem, после всех детей
➡️ "afterend" - после elem */

// ⚠️"beforebegin"⚠️ и ⚠️"afterend"⚠️ работают только в том случае, если elem уже находится в DOM-дереве.⚠️

// const list = document.querySelector(".list");

// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`).join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");


// ✅ ✅ ✅  Подключение скриптов

/* Загрузка и выполнение скрипта указанного в теге <script> без каких-либо атрибутов, блокируют обработку HTML-документа и построение DOM. Это проблема.

<script src="path-to-script.js"></script>

Когда анализатор встречает такой тег, обработка HTML-документа приостанавливается и начинается загрузка файла скрипта указанного в атрибуте src. После загрузки скрипт выполняется, и только потом возобновляется обработка HTML. Это называется «блокирующий» скрипт.

Атрибуты defer и async были введены чтобы дать разработчикам возможность лучше контролировать как загружать скрипты и когда именно их выполнять. */


// ✅ Атрибут defer

//<script defer src="path-to-script.js"></script>

// Атрибут defer указывает браузеру загружать файл скрипта в фоновом режиме, паралельно обработке HTML-документа и построению DOM. Скрипт будет выполнен только после того как HTML-документ обработан, а DOM построен. 


// ✅ Атрибут async

// <script async src="path-to-script.js"></script>
// Загрузка скрипта с атрибутом async не блокирует построение DOM, но он выполняется сразу после загрузки. Это значит, что такие скрипты могут заблокировать построение DOM, и выполняются в произвольном порядке. 