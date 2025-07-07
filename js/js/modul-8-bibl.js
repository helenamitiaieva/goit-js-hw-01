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

// todo Library
//! Chart.js: Бібліотека для створення інтерактивних графіків і діаграм.
//! Lodash: Бібліотека для роботи з масивами, об'єктами, рядками тощо, що надає безліч зручних функцій.

// todo CDN (Content Delivery Network) -  Вона забезпечує швидку доставку контенту

//todo sum — він обчислює суму значень у масиві
//todo shuffle — створює масив перетасованих значень

// console.log(_.sum([4, 2, 8, 6])); // 20
// console.log(_.sum([5, 10])); // 15

// console.log(_.shuffle([1, 2, 3, 4])); // [4, 1, 3, 2]
// console.log(_.shuffle([1, 2, 3, 4])); // [3, 2, 1, 4]
// // todo  basicLightbox
// instance.show() покаже модальне вікно, а       instance.close() — навпаки його сховає.

// todo Destructuring  const { } = profile

// const user = { 
// 	name: "Jacob", 
// 	age: 32 
// };

//! const { name, age } = user; - Destructuring
// console.log(user.name); // Jacob
// console.log(user.age); // 32


// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//!   // Деструктуризуємо
//!   const { title, author, isPublic, rating } = book;
  
//!   // Використовуємо
//!   const accessType = isPublic ? "pulbic" : "private";
//!   const message = `Book ${title} by author ${author} with rating ${rating} is in ${accessType} access!`;

// todo const { username = "Guest" } = profile

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//   };
  
//!   // Додамо зображення обкладинки, якщо вона відсутня в об'єкті книги
//!   const {
//!     title,
//!     author,
//!     coverImage = "https://via.placeholder.com/640/480"
//!   } = book;
  
//   console.log(title); // "The Last Kingdom"
//   console.log(author); // "Bernard Cornwell"
//   console.log(coverImage); // "https://via.placeholder.com/640/480"
  
// todo Variable renaming :

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     isPublic: true,
//     rating: 8.38,
//   };
  
//   // Деструктуризуємо
//   const { title, author: bookAuthor, isPublic, rating: bookRating } = book;
//   console.log(title); // "The Last Kingdom"
//   console.log(bookAuthor); // "Bernard Cornwell"
//   console.log(isPublic); // true
//   console.log(bookRating); // 8.38
  
//  todo 
// const book = {
//     title: "The Last Kingdom",
//     coverImage:
//       "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
//   };
  
//   const {
//     title,
//!     coverImage: bookCoverImage = "https://via.placeholder.com/640/480",
//   } = book;
  
//   console.log(title); // "The Last Kingdom"
//   console.log(bookCoverImage); // "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg"


//! const book = {
// !    title: "The Dream of a Ridiculous Man",
// !  };
  
//   const {
//     title,
// !    coverImage: bookCoverImage = "https://via.placeholder.com/640/480",
//   } = book;
  
//   console.log(title); // "The Dream of a Ridiculous Man"
//   console.log(bookCoverImage); // "https://via.placeholder.com/640/480"

// todo Destructuring in cycles

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//   ];
  
//   for (const book of books) {
//     console.log(book.title);
//     console.log(book.author);
//     console.log(book.rating);
//   }
  

//! for (const book of books) {
//!     const { title, author, rating } = book;

//!     console.log(title);
//!     console.log(author);
//!     console.log(rating);
//!   }

//! for (const { title, author, rating } of books) {
//     console.log(title);
//     console.log(author);
//     console.log(rating);
//   }

// todo 
// function printUserInfo(user) {   
//! const { name, age, hobby } = user
//! console.log(`Name: ${name}, Age: ${age}, Hobby: ${hobby}`);
// }

// printUserInfo({ 
//   name: "Alice", 
//   age: 25, 
//   hobby: "dancing" 
// }); // Name: Alice, Age: 25, Hobby: dancing

//! function printUserInfo({ name, age, hobby })

// todo 
//! function doStuffWithBook(book) {
//!     const { title, pages, downloads, rating, isPublic } = book;
//!     console.log(title);
//!     console.log(pages);
//!   }
  
// todo Deep destructuring

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };
  
// !  const {
// !    name,
// !    tag,
// !    stats: { followers, views, likes },
// !  } = user;
  
//   console.log(name); // Jacques Gluke
//   console.log(tag); // jgluke
//   console.log(followers); // 5603
//   console.log(views); // 4827
//   console.log(likes); // 1308
  

// const {
//     name,
//     tag,
//!     stats: { followers = 0, views: userViews = 0, likes: userLikes = 0 },
//   } = user;

// todo Destructuring of arrays - const [ ] = fruits

//! const color = [200, 255, 100];
//! const [ red, green, blue ] = color;

// console.log(`rgb(${red}, ${green}, ${blue})`); // “rgb(200, 255, 100)"

// todo Default value const [ firstFruit = "A fruit" ] = fruits
// const color = [200, 100, 255];
//! const [ red, green, blue, alfa = 0.3 ] = color;

// console.log(rgba(${red}, ${green}, ${blue}, ${alfa})); // “rgba(200, 255, 100, 0.3)"

// todo ...rest const { quantity, ...otherValues } = fruit
// const color = [200, 255, 100];

//! const [ red, ...otherColors ] = color;

// console.log(red); // 200
// console.log(otherColors); // [255, 100]

// const user = {
// 	name: "Jacob",
// 	age: 32,
// 	email: "j.cob@mail.com",
// 	isOnline: true
// };

//! const { name, isOnline, ...otherProps } = user;

// console.log(name); // "Jacob"
// console.log(isOnline); // true
//! console.log(otherProps); // {age: 32, email: "j.cob@mail.com"}

// todo 
// const rgb = [200, 100, 255];

//! const [, , blue] = rgb;

// console.log(`Blue: ${blue}`); // "Blue: 255"

// todo 
//! function printFruits(fruits) {
//!     console.log(fruits[0], fruits[1], fruits[2]);
//   }
  
//   printFruits(["apple", "banana", "orange"]); // "apple banana orange"

//! function printFruits([firstFruit, secondFruit, thirdFruit]) {
// !    console.log(firstFruit, secondFruit, thirdFruit);
//   }
  
//   printFruits(["apple", "banana", "orange"]); // "apple banana orange"
//     .
  
  
