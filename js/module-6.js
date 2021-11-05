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



// ✅ ✅ ✅ События = Event ✅ ✅ ✅

// ✅ Метод addEventListener()

// element.addEventListener(event, handler, options);

// ➡️ event - имя события, строка, например "click".
// ➡️ handler - коллбэк-функция которая будет вызвана при наступлении события.
// ➡️ options - необязательный объект параметров с расширенными настройками.

// const button = document.querySelector(".my-button");

// button.addEventListener("click", () => {
//   console.log("Button was clicked");
// });

/* Для коллбэка можно (и желательно) использовать отдельную функцию и передавать на неё ссылку. Именованная функция повышает читаемость кода. */

// const button = document.querySelector(".my-button");

// const handleClick = () => {
//   console.log("Button was clicked");
// };

// button.addEventListener("click", handleClick);


// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

// // ===============================================
// const multiBtn = document.querySelector("#multiple");

// const firstCallback = () => {
//   console.log("First callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);


// ✅ Метод removeEventListener()

// Удаляет слушателя события с элемента. Аргументы аналогичны методу addEventListener().

//     element.removeEventListener(event, handler, options);

// Для удаления нужно передать ссылку именно на ту коллбэк-функцию, которая была назначена в addEventListener(). В таком случае для коллбэков используют отдельную функцию и передают её по имени (ссылку).

// const addListenerBtn = document.querySelector('[data-action="add"]');
// const removeListenerBtn = document.querySelector('[data-action="remove"]');
// const btn = document.querySelector("#btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });


// ✅ Ключевое слово this ⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

// Если коллбэком будет функция которая использует this, по умолчанию контекст внутри неё будет ссылаться на DOM-элемент на котором висит слушатель.

// const mango = {
//   username: "Mango",
//   showUsername() {
//     console.log(this);
//     console.log(`My username is: ${this.username}`);
//   },
// };

// const btn = document.querySelector(".js-btn");

// // ✅ Работает
// mango.showUsername();

// // ❌ this будет ссылаться на button если использовать showUsername как callback
// btn.addEventListener("click", mango.showUsername); // не работает

// // ✅ Не забывайте привязывать контекст методов объекта
// btn.addEventListener("click", mango.showUsername.bind(mango));


// ✅ ✅ ✅ Объект события

// Все события происходят от базового класса Event.

// const button = document.querySelector('button');

// const handleClick = event => {
//   console.log(event);
// };

// button.addEventListener("click", handleClick);

/*Параметр event это и есть обьект события, который автоматически передается первым аргументом при вызове коллбэк функции. Мы можем называть его как угодно, но обычно его объявляют как e, evt или event.

Некоторые свойства объекта события:

event.type - тип события.
event.currentTarget - элемент, на котором выполняется обработчик события.*/

// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);


// ✅ Действия браузера по умолчанию

// Для отмены действия браузера по умолчанию на объекте события есть стандартный метод preventDefault()

// const form = document.querySelector(".register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const {
//     elements: { username, password }
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });


// ✅ ✅ ✅ События клавиатуры

// Есть два основных события клавиатуры: keydown и keyup. В отличии от других, события клавиатуры обрабатываются на документе, а не на конкретном элементе. Объекты событий клавиатуры происходят от базового класса KeyboardEvent.

// document.addEventListener("keydown", event => {
//   console.log("Keydown: ", event);
// });

// document.addEventListener("keyup", event => {
//   console.log("Keyup: ", event);
// });

/* При нажатии клавиши сначала происходит keydown, после чего keyup, когда клавишу отжали. На практике, в основном обрабатывают только событие keydown, так как оно происходит быстрее чем keyup и пользователь раньше видит результат нажатия. События keydown и keyup срабатывают при нажатии любой клавиши, включая служебные (Ctrl, Shift, Alt, Escape и другие).

ИНТЕРЕСНО
Раньше было еще одно событие клавиатуры - keypress. Многие посты на форумах и блогах по-прежнему могут его использовать, но будьте осторожны - оно устарело и поддержка в новых браузерах может прекратиться в любой момент. */

// ✅ Свойства key и code

// Свойство key возвращает символ сгенерированный нажатием клавиши, принимая во внимание состояние клавиш модификаторов, например Shift, а так же текущий язык. Свойство code возвращает код физической клавиши на клавиатуре и не изменяется между языками.

// document.addEventListener("keydown", event => {
//   console.log("key: ", event.key);
//   console.log("code: ", event.code);
// });

// -----------⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

// const clearLogBtn = document.querySelector('[data-action="clear"]');
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//     <span class="chip">${keypressCounter}</span>
//     <ul>
//       <li><b>Event</b>: ${type}</li>
//       <li><b>Key</b>: ${key}</li>
//       <li><b>Code</b>: ${code}</li>
//     </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);

//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }

// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }

// ✅ Клавиши-модифкаторы

// Для обработки комбинации клавиш, например Ctrl + s или любую другую, на объекте события есть свойства ctrlKey, altKey, shiftkey и metaKey, хранящие булевое значение сигнализирующее о том, была зажата клавиша-модификатор или нет.

// document.addEventListener("keydown", event => {
//   event.preventDefault();

//   if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
//     console.log("«Ctrl + s» or «Command + s» combo");
//   }
// });
// Некоторые комбинации клавиш могут конфликтовать с поведением браузера по умолчанию. Например, Ctrl + d или Command + d делает закладку. Нужно стараться проектировать систему комбинаций страницы так, чтобы она не пересекалась со встроенной в браузер. Но, в крайнем случае, поведение по умолчанию можно отменить вызвав метод event.preventDefault().

// ИНТЕРЕСНО
// Не так давно, вместо свойств key и code использовали свойство keyCode. Многие посты на форумах и блогах по-прежнему могут использовать его, но будьте осторожны - оно устарело, не используйте свойство keyCode.


//  ✅ ✅ ✅ События элементов форм

//  ✅ Событие submit

// const form = document.querySelector(".form");

// const handleSubmit= (event) => {
//   event.preventDefault();
//   const {
//     elements: { login, password }
//   } = event.currentTarget;

//   if (login.value === "" || password.value === "") {
//     return console.log("Please fill in all the fields!");
//   }

//   console.log(`Login: ${login.value}, Password: ${password.value}`);
//   event.currentTarget.reset();
// }

// form.addEventListener("submit", handleSubmit);


// ✅ Событие change

// const select = document.querySelector(".pizza-select");

// const textOutput = document.querySelector(".text-output");

// const valueOutput = document.querySelector(".value-output");


// const setOutput = () => {
//     const selectedOptionValue = select.value; // ⚠️ - value 
//     // console.log(selectedOptionValue); // four_meats
//     const selectedOptionIndex = select.selectedIndex; // ⚠️ - selectedIndex
//     // console.log(selectedOptionIndex); // 0
//     const selectedOptionText = select.options[selectedOptionIndex].text; // ⚠️ - options
//     // console.log(selectedOptionText); // Four Meats

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }

// setOutput();

// select.addEventListener("change", setOutput);


// ✅ Событие input
/* Происходит только на текстовых полях и textarea, и создаётся каждый раз при изменении значения элемента, не дожидаясь потери фокуса. На практике input это самое главное событие для работы с текстовыми полями формы. */

// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });


// ✅ События focus и blur
/*Элемент получает фокус при клике мыши или переходе клавишей Tab. Момент получения фокуса и потери очень важен, при получении фокуса мы можем подгрузить данные для автозаполнения, начать отслеживать изменения и т. п. При потере фокуса - проверить введённые данные.

При фокусировке элемента происходит событие focus, а когда фокус исчезает, например пользователь кликает в другом месте экрана, происходит событие blur. Активировать или отменить фокус можно программно, вызвав в коде одноименные методы focus() и blur() у элемента.*/

// const textInput = document.querySelector(".text-input");
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener("click", () => {
//   textInput.focus();
// });

// removeFocusBtn.addEventListener("click", () => {
//   textInput.blur();
// });

// textInput.addEventListener("focus", () => {
//   textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
//   textInput.value = "";
// });

// Фокус может быть только на одном элементе страницы в единицу времени и текущий элемент, на котором фокус, доступен как document.activeElement.