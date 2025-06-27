// todo DOM 
// todo querySelector(selector) - css
// * element.querySelector(selector) 
//! const listItems = document.querySelectorAll("list-item")

// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

//! document.querySelectorAll(".heading")- отримання посилання в JavaScript коді на HTML-елементИ

//! document.querySelector(".heading") - отримання посилання в JavaScript коді на HTML-елемент

//todo предок (ancestor), нащадок (descendant), батько (parent), дитина (child) і сусід (sibling), Найвищий елемент називається кореневим (root node)

// todo 
//! <a class="link" href="https://goit.global">GoIT</a>;

//! const link = document.querySelector(".link");
//! console.log(link.href); // "https://goit.global"

//* link.href = "https://neo.goit.global"; - change link
//* console.log(link.href); // "https://neo.goit.global"


// const image = document.querySelector(".image");
// console.log(image.src); // https://picsum.photos/id/9/320/240
// console.log(image.alt); // A laptop

// image.src = "https://picsum.photos/id/13/640/480";
// image.alt = "River bank";

// todo TextContent - WO? property -  повертає весь текстовий контент усередині елементів - можна як читати, так і змінювати

//! const el = document.querySelector(".text")
//! console.log(el.textContent); // "Username: Mango"
//! el.textContent = "Username: Poly";

// const textEl = document.querySelector(".article-text");
// console.log(textEl.textContent); // text inside p.article-text - wo?

// const titleEl = document.querySelector(".article-title");
// titleEl.textContent = 'Welcome to Bahamas!'; 

// todo property classList - зберігається об'єкт із методами для роботи з CSS-класами елемента.

//*  <a class="link is-active" href="https://goit.global">GoIT</a>

// const link = document.querySelector(".link");
//! console.log(link.classList); 
//! ["link", "is-active", length: 2, value: "link is-active"]
//* value - містить точне значення атрибута class
//* length — кількість класів в елемента

// todo method classList.contains(className) - проверяет на наличие

//! const hasActiveClass = link.classList.contains("is-active"); // true
//! const hasActiveClass = link.classList.contains("title"); // false

// todo classList.add(className) - додає клас className до списку класів елемента.

//* link.classList.add("special");
//! console.log(link.classList); 
//! // ["link", "is-active", "special", length: 3, value: "link is-active special"]

// todo classList.remove(className) - удаляет

//* link.classList.remove("is-active");
//! console.log(link.classList); 
//! // ["link", "special", length: 2, value: "link special"]

// todo classList.toggle(className) - перемикач (есть - удалит, нет - добавит)

//* link.classList.toggle("is-active");
//! console.log(link.classList); 
//! // ["link", "special", "is-active", length: 3, value: "link special is-active"]

// todo classList.replace(oldClassName, newClassName) - замінює

//* link.classList.replace("special", "regular");
//! console.log(link.classList); 
//! // ["link", "regular", "is-active", length: 3, value: "link regular is-active"]

{/* <a class="link is-active" href="">A random link</a>

const link = document.querySelector(".link");
console.log(link.classList);

const hasActiveClass = link.classList.contains("is-active");
console.log(`hasActiveClass - ${hasActiveClass}`);

link.classList.add("special");
console.log(link.classList);

link.classList.remove("is-active");
console.log(link.classList);

link.classList.toggle("is-active");
console.log(link.classList);

link.classList.replace("special", "regular");
console.log(link.classList); */}

// todo Property style - Вона повертає об'єкт, який містить список лише всіх вбудованих властивостей елемента, а не увесь CSS.

// const button = document.querySelector(".btn");

//! button.style.backgroundColor = "teal";
//! button.style.fontSize = "24px";
//! button.style.textAlign = "center";

// console.log(button.style); // inline styles object

// todo 

{/* <img class="image" src="https://picsum.photos/id/15/320/240" alt="Rocks and waterfall" width="300" /> */}

// todo method element.hasAttribute(nameAttribute) - true / false

// const image = document.querySelector(".image");
// console.log(image.hasAttribute("src")); // true
// console.log(image.hasAttribute("href")); // false

// todo method element.getAttribute(nameAttribute) - значение атрибута / null

//! console.log(image.getAttribute("alt")); // "Rocks and waterfall"

// todo element.setAttribute(nameAttribute, value) - встановлює або змінює значення зазначеного атрибута для вказаного HTML-елемента element.

//! image.setAttribute("alt", "Amazing nature");
//! console.log(image.getAttribute("alt")); // Amazing nature

// todo element.removeAttribute(nameAttribute) - видаляє його

//! image.removeAttribute("alt");
//! console.log(image.hasAttribute("alt")); // false

{/* <img class="image" src="https://picsum.photos/id/15/320/240" alt="Rocks and waterfall" width="300" /> */}

// const image = document.querySelector(".image");

// console.log(image.attributes); // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}

// console.log(image.hasAttribute("src")); // true

// console.log(image.getAttribute("alt")); // "Rocks and waterfall"

// image.setAttribute("alt", "Amazing nature");

// console.log(image.getAttribute("alt")); // Amazing nature

// todo data-атрибути - Власні атрибути дозволяють додати до тегу довільний атрибут і отримати його значення в JavaScript.

{/* <button type="button" data-action="save">Save text</button>
<button type="button" data-action="close">Close editor</button> */}

// todo dataset
// *                                           !!!
//! const saveBtn = document.querySelector('button[data-action="save"]');
//!console.log(saveBtn.dataset.action); // "save"

//!const closeBtn = document.querySelector('button[data-action="close"]');
//!console.log(closeBtn.dataset.action); // "close"


// const saveBtn = document.querySelector('.editor button[data-action="save"]');
// const closeBtn = document.querySelector('.editor button[data-action="close"]');

// console.log(saveBtn.dataset.action); //save
// console.log(closeBtn.dataset.action); //close

 //! Змінюємо значення data-action для кнопки saveBtn
//! saveBtn.dataset.action = "update";

 //! Додаємо новий data-атрибут data-role
//! saveBtn.dataset.role = "admin";

 //! Перевіримо нові значення
//! console.log(saveBtn.dataset.action); // "update"
//! console.log(saveBtn.dataset.role); // "admin"

// todo Create and delete items
// todo DOM API (Document Object Model Application Programming Interface - вибирати або змінювати вже існуючі елементи
// todo     видаляти елементи
// todo     створювати нові елементи й додавати їх у документ


// todo document.createElement(tagName) - створити новий елемент - return Посилання на створений об’єкт

//! const heading = document.createElement("h1");
//! const heading = document.createElement("h1");
//! heading.classList.add("title");
//! heading.textContent = "This is a heading";
//! console.log(heading); // <h1 class="title">This is a heading</h1>

//! const image = document.createElement("img");
//! image.src = "https://picsum.photos/id/11/320/240";
//! image.alt = "Nature";
//! console.log(image); // <img src="https://picsum.photos/id/11/320/240" alt="Nature" />

// todo elem.append(el1, el2, ...) — додає один або декілька елементів після всіх дітей елемента elem.
// todo elem.prepend(el1, el2, ...) — додає один або декілька елементів перед усіма дітьми елемента elem.

// h1>Usernames</h1>
//   <ul class="usernames">
//     <li>Mango</li>
//   </ul>

// const list = document.querySelector(".usernames");

//! // Adds an item to the end of the list
//! const lastItem = document.createElement("li");
//! lastItem.textContent = "Poly";
//! list.append(lastItem); 

//! // Adds an item to the beginning of the list
//! const firstItem = document.createElement("li");
//! firstItem.textContent = "Ajax";
//! list.prepend(firstItem);

// todo method element.remove()

// <p class="text">Random text content</p>
//!  const text = document.querySelector(".text")
//! text.remove();

// todo property innerHTML - зберігає вміст елемента, включно з тегами, у вигляді рядка. Значення, що повертається, — це завжди валідний HTML-код
// todo innerHTML - Встановлює або отримує HTML-вміст елемента.
// todo return - Рядок (string)

// todo Reading
// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

// todo Change
{/* <h2 class="title">Article title</h2>
//! const title = document.querySelector(".article .title");
//! title.innerHTML = 'New and <span class="accent">improved</span> title'; */}


// todo 

{/* <section>
  <h2>Popular technologies</h2>
  <ul class="list"></ul>
</section> */}

//! const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
//! const list = document.querySelector(".list");

//! const markup = technologies
//!   .map((technology) => `<li class="list-item">${technology}</li>`)
//!   .join("");

//! // Check the console, you'll see a single string with HTML tags
//! console.log(markup);

//! // Adding all the markup in one operation
//! list.innerHTML = markup;

// todo method insertAdjacentHTML() - Додає HTML-рядок у певну позицію внутрішнього HTML-вмісту елемента.
// * element.insertAdjacentHTML(position, string)

// todo "beforebegin" — перед element
// todo "afterbegin" — всередині element, перед усіма дітьми
// todo "beforeend" — всередині element, після усіх дітей
// todo "afterend" — після element

{/* <ul class="list">
  <li class="list-item">HTML</li>
  <li class="list-item">CSS</li>
  <li class="list-item">JavaScript</li>
</ul> */}

//! const list = document.querySelector(".list");

//! const newTechnologies = ["React", "TypeScript", "Node.js"];
//! const markup = newTechnologies
//!   .map((technology) => `<li class="list-item new">${technology}</li>`)
//!   .join("");

//! list.insertAdjacentHTML("beforeend", markup);
//! list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

// todo Events

// todo addEventListener() - додає слухача події на елемент

// * element.addEventListener(event, handler, options)

// todo event — рядок, що містить ім'я події, наприклад, "click"
// todo handler — колбек-функція, яка буде викликана під час настання події
// todo options — необов'язковий об'єкт параметрів із розширеними налаштуваннями

//! const button = document.querySelector(".my-button");

//! button.addEventListener("click", () => {
//!   console.log("The button was pressed and now the next image will appear");
//! });


//! button.addEventListener("click", handleClick);

// todo removeEventListener() - видаляє слухача події з елемента

// * element.removeEventListener(event, handler, options)

// const button = document.querySelector(".my-button");

//! const handleClick = () => {
//   console.log("The button was pressed and now the next image will appear");
// };

//! button.addEventListener("click", handleClick);

// const addListenerBtn = document.querySelector('.js-add');
// const removeListenerBtn = document.querySelector('.js-remove');
// const btn = document.querySelector(".target-btn");

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

// todo Event object -  Він містить інформацію про саму подію, таку як тип події і об'єкт, що викликав подію. - Він автоматично передається як аргумент у функцію обробника події.
 //! const handleClick = event => {
//!   console.log(event);
//! };

//! button.addEventListener("click", handleClick);

// const button = document.querySelector(".btn");

// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);

// todo Keyboard events
//todo  keydown — подія, що відбувається при натисканні клавіші - быстрее
//todo  keyup — подія, що відбувається, коли клавішу відпустили

//! document.addEventListener("keydown", event => {
//!     console.log("Keydown: ", event);
//!   });
  
//!   document.addEventListener("keyup", event => {
//!     console.log("Keyup: ", event);
//!   });

// todo  Key and code properties

// todo key  - стан клавіш-модифікаторів, наприклад Shift and поточнy мову
// todo code - kод фізичної клавіші на клавіатурі й не залежить від мови та стану клавіш-модифікаторів.

//! document.addEventListener("keydown", event => {
//!     console.log("key: ", event.key);
//!     console.log("code: ", event.code);
//!   });
  
// const clearLogBtn = document.querySelector(".js-clear");
// const logList = document.querySelector(".log-list");
// let keypressCounter = 1;

// console.log(clearLogBtn)

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

//! const article = document.querySelector(".article");
//! const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
//!    <a class="link" href="#">Read more...</a>`;

//! // Replace += with = operator. See the difference? 
//! // Article title is lost because we overwrite element content.
// article.innerHTML += htmlString; - добавляет в конец 

// Пошук DOM-елементів
// element.querySelector(selector) - повертає перший елемент, який відповідає вказаному CSS селектору всередині елемента element.
// element.querySelectorAll(selector) - повертає всі елементи, які відповідають вказаному CSS селектору всередині елемента element.

// Властивості DOM-елемента
// element.textContent - містить текстовий вміст елемента element, ігноруючи всі теги HTML всередині.
// element.innerHTML - містить HTML-вміст елемента element.
// element.style - об'єкт, що містить вбудовані стилі елемента element, які можна змінювати динамічно з JavaScript.

// CSS класи на DOM-елементах
// element.classList.contains(className) - перевіряє, чи міститься вказаний клас className на елементі element.
// element.classList.add(className) - додає клас className до списку класів елемента element.
// element.classList.remove(className) - видаляє клас className зі списку класів елемента element.
// element.classList.toggle(className) - додає клас className, якщо його немає, або видаляє, якщо він вже присутній, на елементі element.
// element.classList.replace(oldClassName, newClassName) - замінює клас oldClassName на newClassName в списку класів елемента element.

// Створення та видалення DOM-елементів
// document.createElement(tagName) - створює новий HTML-елемент з вказаним ім'ям тегу tagName.
// element.append(el) - додає вміст (або елемент) до кінця списку дочірніх елементів element.
// element.prepend(el) - додає вміст (або елемент) до початку списку дочірніх елементів element.
// element.remove() - видаляє DOM-елемент з DOM дерева.
// insertAdjacentHTML(position, string) - додає вказаний рядок HTML після, перед, всередині або перед вказаним елементом.

// Події
// element.addEventListener(event, handler) - додає обробник події handler для події event на елемент element.
// element.removeEventListener(event, handler) - видаляє обробник події handler для події event на елементі element.
// keydown - подія, яка виникає, коли клавіша на клавіатурі натиснута.
// submit - подія, яка виникає при відправці форми.
// change - подія, яка виникає при зміні значення елемента форми.
// input - подія, яка виникає при введенні даних в текстове поле.
// focus - подія, яка виникає, коли елемент отримує фокус.
// blur - подія, яка виникає, коли елемент втрачає фокус.







