// todo JSON (JavaScript Object Notation) — це не об'єкт, а його рядкове відображення.
//! {
//!     "name": "Josh", - усе ""
//!     "weight": 175, - key in ""
//!     "age": 30,
//!     "eyecolor": "brown",
//!     "isHappy": true,
//!     "cars": ["Chevy", "Honda"],
//!     "favoriteBook": {
//!       "title": "The Last Kingdom",
//!       "author": "Bernard Cornwell",
//!       "rating": 8.38 - нет в конце , value ≠ undefined, 
// !                                     value = null
//!     }
//!   }

// todo Method JSON.stringify(value)

// const dog = {
//     name: "Mango",
//     age: 3,
//     isGoodBoy: true,
//   };
  
//!   const json = JSON.stringify(dog);
//!   console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'


//todoметодами об'єкта при спробі перетворити його у json -  Вони будуть проігноровані

// const dog = {
//     name: "Mango",
//     age: 3,
//     isGoodBoy: true,
//!     bark() {
//!      console.log("Woof!");
//!     },
//   };
  
//!   const json = JSON.stringify(dog);
//!   console.log(json); // '{"name":"Mango","age":3,"isGoodBoy":true}'
  

// todo Parse with json - JSON.parse(value) json -> JavaScript data 

//! console.log(JSON.parse("5")); // 5
//! console.log(JSON.parse("false")); // false
//! console.log(JSON.parse("null")); // null

// const json = '{"name":"Mango","age":3,"isGoodBoy":true}';

//! const dog = JSON.parse(json); - As a result, we get a valid object
// console.log(dog); // {name: "Mango", age: 3, isGoodBoy: true}
// console.log(dog.name); // "Mango"

// todo try ... catch - Щоб у разі помилки парсингу скрипт не впав
//! try {
//     const data = JSON.parse("Well, this is awkward");
//!   } catch (error) {
//!*     console.log(error.name); // "SyntaxError" - тип помилки
//!     console.log(error.message); // Unexpected token W in JSON at position 0 -  сообщение про детали ошибки
//!   } 
  
//!   console.log("✅ This is fine, we handled parsing error in try...catch");
  
// todo 1. compile time, evaluation time - підготовка перед виконанням коду
// todo 2. Фаза виконання (runtime)

// todo Web Storage
// todo Cookie
// todo local Storage


// !console.log(window.localStorage); / console.log(localStorage);
// Storage {length: 0}

// todo Adding data
// todo Method setItem(key, value), - Встановлює значення для ключа в localStorage

//!  localStorage.setItem("ui-theme", "light");
//  console.log(localStorage); // Storage {ui-theme: "light", length: 1}

// todo Adding complex data

// const settings = {
//     theme: "dark",
//     isAuthenticated: true,
//     options: [1, 2, 3],
//   };
  
//!   localStorage.setItem("settings", JSON.stringify(settings));

//todo GetItem(key) method - дозволяє зчитати зі сховища запис із ключем key і повертає його значення у JSON форматі
// ! localStorage.getItem("key")  - якщо у сховищі відсутній запис з таким ключем, метод повертає null.

//!  const savedTheme = localStorage.getItem("ui-theme"); 
// console.log(savedTheme); // "light" - возврящает value

// const settings = {
//     theme: "dark",
//     isAuthenticated: true,
//     options: [1, 2, 3],
//   };

//!   localStorage.setItem("settings", JSON.stringify(settings)); 
//    - Встановлює значення для ключа settings в localStorage
  
//!    const savedSettings = localStorage.getItem("settings"); // - перевели в рядок
//   console.log(savedSettings); // A string 
  
// !    const parsedSettings = JSON.parse(savedSettings); // - перевели обратно в обьект 
//   console.log(parsedSettings); // Settings object 


// todo Remove item(key) - localStorage.removeItem(key) - Ключ елемента, який треба видалити

//! localStorage.setItem("ui-theme", "dark"); - записать 
//* console.log(localStorage.getItem("ui-theme")); // "dark" - показать 

//! localStorage.removeItem("ui-theme"); - удалить
//* console.log(localStorage.getItem("ui-theme")); // null

// todo method clear()

// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("notif-level", "mute");

// console.log(localStorage); 
// Storage {notif-level: 'mute', ui-theme: 'light', length: 2}

//! localStorage.clear();
// console.log(localStorage); // Storage {length: 0}


// todo Session Storage - Різні типи даних, зокрема об'єкти
//todo  sessionStorage.setItem("key", value)
//! console.log(window.sessionStorage); // Storage {length: 0}
//! const userId = sessionStorage.getItem("user-id");
// console.log(userId); // "123"

//! const tickets = JSON.parse(sessionStorage.getItem("tickets"));
// console.log(tickets); // { from: "Lviv", to: "Kyiv", quantity: 2 }

//! sessionStorage.removeItem("tickets");
// console.log(sessionStorage); // Storage {user-id: '123', length: 1}

//! sessionStorage.clear();
// console.log(sessionStorage); // Storage {length: 0}

//! const form = document.querySelector(".feedback-form");

//! form.addEventListener("submit", evt => {
//!   evt.preventDefault(); // приостанавливается отправление формы

 // evn - Подія (event), яка виникла, наприклад, при натисканні кнопки “Надіслати”.
 // evt.target - Елемент, на якому відбулась подія. У випадку сабміту — це <form>.
 // evt.target.elements - Колекція всіх елементів усередині цієї форми (інпути, чекбокси, textarea тощо).
 // evt.target.elements.message - Конкретний елемент з name="message" 
 // .value - Значення, яке ввів користувач у це поле.

//! 	console.log(evt.target.elements.message.value); // 
//!   form.reset(); // все удадяется 
// });



// todo при перезагрузке страницы - все остается


//! const form = document.querySelector(".feedback-form");
// const textarea = form.elements.message;
//! const localStorageKey = "goit-example-message"; // ключ, под которым будет храниться значение из поля textarea в localStorage.

//! textarea.value = localStorage.getItem(localStorageKey) ?? ""; - означает: если getItem() вернёт null, то используем пустую строку.
// * ?? - Если слева ничего нет, возьми то, что справа

//! form.addEventListener("input", (evt) => {
//!   localStorage.setItem(localStorageKey, evt.target.value);
//! }); - Каждый раз при вводе в любое поле формы (в данном случае это textarea), значение сохраняется в localStorage. Так даже если пользователь обновит страницу — текст не потеряется.

// form.addEventListener("submit", (evt) => {
//   evt.preventDefault();
// 	console.log(evt.target.elements.message.value);
//!   localStorage.removeItem(localStorageKey); - очищаем сохранённое значение при перезагрузке страницы
//   form.reset();
// });
// -----------------------------------------------
// todo 
// ! Vite (https://vitejs.dev/) - це інструмент збірки проєкту для розробки вебдодатків на базі JavaScript.

// Швидка розробка: Vite відомий своєю швидкістю завантаження та перезавантаження, що дозволяє розробникам бачити зміни в реальному часі практично миттєво після редагування коду. Це робить процес розробки більш продуктивним.
// Миттєве створення проєкту: Ти можеш створити новий проєкт за допомогою Vite за декілька секунд, завдяки готовому шаблону і швидкому встановленню залежностей.
// Широкий спектр мов і технологій: Vite підтримує різні мови програмування (такі як JavaScript, TypeScript), CSS і декілька фреймворків, зокрема Vue.js, React і Svelte. Можна вибрати те, що тобі підходить найкраще.
// Модульна система: Vite використовує сучасну модульну систему ESM, що дозволяє завантажувати модулі за потребою і сприяє ефективному використанню ресурсів.
// Гаряча заміна модулів (HMR): Vite підтримує гарячу заміну модулів, що дозволяє вносити зміни в код і бачити їх відображення в реальному часі без перезавантаження сторінки.
// Плагін-система: Розробник може легко розширити функціональність Vite, додаючи плагіни зі спільноти або створюючи власні.
// Вбудована підтримка CSS і препроцесорів CSS: Vite автоматично обробляє CSS і дозволяє використовувати різні препроцесори, такі як SASS або LESS.


// npm config set init-author-name "helenamitiaieva@gmail.com"
//  cd /Users/helenamitiaieva/Documents/GitHub 
// mkdir ~/projects - create
// cd ~/projects - in 
// pwd check
// npm init - initiali
// nvm - several version node.js
//? clone get - 
// devDependeses - help in development, work nur in developing 
// dependensies - work in final
// npm i - instal
// git remote -   check where is my project
// git remote set-url origin link - new
//? get .add (45 min)
// get commit

// default - люба назва 
// undefined / null ?? 5 -> 5
// false ?? 5 -> false 