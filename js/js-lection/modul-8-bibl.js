// todo Delegation of events
// todo event propagation
// todo Capturing phase (занурення)
// todo Target phase (таргетинг)
// todo Bubbling phase (спливання)
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");
// const descendant = document.querySelector("#descendant");

// parent.addEventListener("click", () => {
//   console.log("Parent click handler");
// });

// child.addEventListener("click", () => {
//   console.log("Child click handler");
// });

// todo event.target - це посилання на вихідний елемент, на якому відбулася подія, у процесі спливання вона — незмінна - цільовий елемент
// todo event.currentTarget — це посилання на поточний елемент, до якого прив’язаний поточний обробник події, і до якого в резуль -  , і обробник її перехопив (event.currentTarget) - до якого подія спливла

// const parent = document.querySelector("#parent");

// parent.addEventListener("click", (event) => {
//   console.log("event.target: ", event.target);
//   console.log("event.currentTarget: ", event.currentTarget);
// });

// todo Termination of the pop-up - Зупиняє "спливання" події в DOM-дереві. Це означає, що жоден батьківський елемент не зможе відловити цю подію

//! event.stopPropagation(),
//! event.stopImmediatePropagation(),

// todo events delegation - Додавання одного спільного обробника події для групи елементів
//! const box = document.querySelector("div.box");

//! box.addEventListener("click", function (event) {
//!   console.log(event.target);
//! });


// todo dataset

{/* <div data-color="red" class="color-box"></div>
    //    data = dataset 
const selectedColor = event.target.dataset.color; */}

{/* <p class="output">Selected color: -</p>
<div class="color-palette"></div> */}

//! const colorPalette = document.querySelector(".color-palette");

//! colorPalette.addEventListener("click", selectColor);

//! function selectColor(event) {
//!  	console.log(event.target);
// !	const selectedColor = event.target.dataset.color;
//! }

// function selectColor(event) {
//     if (event.target.nodeName !== "BUTTON") {
//       return; // користувач клікнув між кнопками
//     }
  
//     const selectedColor = event.target.dataset.color; // користувач клікнув на кнопку і ми маємо доступ до її атрибутів
//   }





// const colorPalette = document.querySelector(".color-palette");
// const output = document.querySelector(".output");

// colorPalette.addEventListener("click", selectColor);

// // This is where delegation «magic» happens
// function selectColor(event) {
//   if (event.target.nodeName !== "BUTTON") {
//     return;
//   }

//   const selectedColor = event.target.dataset.color;
//   output.textContent = `Selected color: ${selectedColor}`;
//   output.style.color = selectedColor;
// }

// // Some helper functions to render palette items
// createPaletteItems();

// function createPaletteItems() {
//   const items = [];
//   for (let i = 0; i < 60; i++) {
//     const color = getRandomHexColor();
//     const item = document.createElement("button");
//     item.type = "button";
//     item.dataset.color = color;
//     item.style.backgroundColor = color;
//     item.classList.add("item");
//     items.push(item);
//   }
//   colorPalette.append(...items);
// }

// function getRandomHexColor() {
//   const letters = "0123456789ABCDEF";
//   let color = "#";

//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }

//   return color;
// }

// todo bibliotheka
//! Chart.js: Бібліотека для створення інтерактивних графіків і діаграм.
//! Lodash: Бібліотека для роботи з масивами, об'єктами, рядками тощо, що надає безліч зручних функцій.

// todo CDN (Content Delivery Network) -  Вона забезпечує швидку доставку контенту

//todo sum — він обчислює суму значень у масиві
//todo shuffle — створює масив перетасованих значень

console.log(_.sum([4, 2, 8, 6])); // 20
console.log(_.sum([5, 10])); // 15

console.log(_.shuffle([1, 2, 3, 4])); // [4, 1, 3, 2]
console.log(_.shuffle([1, 2, 3, 4])); // [3, 2, 1, 4]
