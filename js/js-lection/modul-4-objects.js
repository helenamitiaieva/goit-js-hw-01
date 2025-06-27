// todo objects 

//! const book = {
//!     title: "The Last Kingdom",
//!     author: "Bernard Cornwell",
//!     genres: ["historical prose", "adventure"],
//!     public: true,
//!     rating: 8.38,
//!   };

//? Оголоси змінну apartment і задай ій об'єкт, який описує квартиру з наступними характеристиками:

//? imgUrl - рядок, що містить шлях до зображення, значення "https://via.placeholder.com/640x480";
//? descr - рядок, що містить опис, значення "Spacious apartment in the city center";
//? rating - число, що містить рейтинг, значення 4;
//? price - число, що містить ціну, значення 2153;
//? tags - масив рядків, що містить метаінформацію, значення ["premium", "promoted", "top"].

  
//  const apartment = {
    //  imgUrl: "https://via.placeholder.com/640x480",
    //  descr: "Spacious apartment in the city center",
    //  rating: 4,
    //  price: 2153,
    //  tags: ["premium", "promoted", "top"],
//  };

//todo Nested properties

//! const user = {
//!     name: "Jacques Gluke",
//!     tag: "jgluke",
//!     location: {
//!       country: "Jamaica",
//!       city: "Ocho Rios",
//!     },
//!     stats: {
//!       followers: 5603,
//!       views: 4827,
//!       likes: 1308,
//!     },
//!   };

//? Об'єкт apartment описує квартиру з наступними характеристиками

//? imgUrl - шлях до зображення
//? descr - опис
//? rating - рейтинг
//? price - ціна
//? tags - метаінформація
//? Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника.

//? Додай об'єкту owner наступні властивості:

//? name - рядок, що містить ім'я власника, значення "Henry";
//? phone - рядок, що містить номер телефону, значення "982-126-1588";
//? email - рядок, що містить пошту, значення "henry.carter@aptmail.com"
  
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };


// todo Access properties through a dot objectName.key

//! const book = {
//!     title: "The Last Kingdom",
//!     author: "Bernard Cornwell",
//!     genres: ["historical prose", "adventure"],
//!     isPublic: true,
//!     rating: 8.38,
//!   };
  
//!   const bookTitle = book.title;
//!   console.log(bookTitle); // "The Last Kingdom"
  
//!   const bookGenres = book.genres;
//!   console.log(bookGenres); // ["historical prose", "adventure"]
  
//!   const bookPrice = book.price;
//!   console.log(bookPrice); // undefined

//? Об'єкт apartment описує квартиру і має 5 властивостей: шлях до зображення, опис, рейтинг, ціна, теги. Оголошені 4 змінні, значенням яких є значення властивостей об'єкту apartment.

//? Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

//? aptRating - рейтинг;
//? aptDescr - опис;
//? aptPrice - ціна;
//? aptTags - теги.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
  
//todo Access to nested properties user.location.country

//! const user = {
//!     name: "Jacques Gluke",
//!     tag: "jgluke",
//!     location: {
//!       country: "Jamaica",
//!       city: "Ocho Rios",
//!     },
//!     hobbies: ["swimming", "music", "sci-fi"],
//!   };
  
//!   const location = user.location;
//!   console.log(location); // {country: "Jamaica", city: "Ocho Rios"}
  
//!   const country = user.location.country;
//!   console.log(country); // "Jamaica"
  
//! const hobbies = user.hobbies;
//! console.log(hobbies); // ["swimming", "music", "sci-fi"]

//! const firstHobby = user.hobbies[0];
//! console.log(firstHobby); // "swimming"

//! const numberOfHobbies = user.hobbies.length;
//! console.log(numberOfHobbies); // 3


// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[2];

//todo Access to properties through square brackets objectName[”key”]

//! const book = {
//!     title: "The Last Kingdom",
//!     author: "Bernard Cornwell",
//!     genres: ["historical prose", "adventure"],
//!     isPublic: true,
//!     rating: 8.38,
//!   };
  
//!   console.log(book.title); // "The Last Kingdom" 
//!   console.log(book["title"]); // "The Last Kingdom" 
  
//!   console.log(book.genres); // ["historical prose", "adventure"]
//!   console.log(book["genres"]); // ["historical prose", "adventure"]
  
//!   const propKey = "author";
//!   console.log(book.propKey); // undefined
//!   console.log(book[propKey]); // "Bernard Cornwell"
  

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   const aptRating = apartment["rating"];
//   const aptDescr = apartment["descr"];
//   const aptPrice = apartment["price"];
//   const aptTags = apartment["tags"];

// todo Changing the property value

//! const book = {
//!     title: "The Last Kingdom",
//!     author: "Bernard Cornwell",
//!     genres: ["historical prose", "adventure"],
//!     isPublic: true,
//!     rating: 8.38,
//!   };
  
//!   book.rating = 9;
//!   book.isPublic = false;
//!   book.genres.push("drama");
  
//!   console.log(book.rating); // 9
//!   console.log(book.isPublic); // false
//!   console.log(book.genres); // ["historical prose", "adventure", "drama"]
  
//! const apartment = {
//!     imgUrl: "https://via.placeholder.com/640x480",
//!     descr: "Spacious apartment in the city center",
//!     rating: 4,
//!     price: 2153,
//!     tags: ["premium", "promoted", "top"],
//!     owner: {
//!       name: "Henry",
//!       phone: "982-126-1588",
//!       email: "henry.carter@aptmail.com",
//!     },
//!   };
  
//!   apartment.price = 5000;
//!   apartment.rating = 4.7;
//!   apartment.owner.name = "Henry Sibola";
//!   apartment.tags.push("trusted");
  
// todo Adding properties
//! const book = {
//!     title: "The Last Kingdom",
//!     author: "Bernard Cornwell",
//!     genres: ["historical prose", "adventure"],
//!     isPublic: true,
//!     rating: 8.38,
//!   };
  
//!   book.pageCount = 836;
//!   book.originalLanguage = "en";
//!   book.translations = ["ua", "ru"];
//!   book.price = {
//!     hardcover: 39,
//!     softcover: 29,
//!   };
  
//!   console.log(book.pageCount); // 836
//!   console.log(book.originalLanguage); // "en"
//!   console.log(book.translations); // ["ua", "ru"]

// todo shorthand properties

//! const name = "Henry Sibola";
//! const age = 25;

//! const user = {       
//!   name: name,  ->   name,
//!   age: age,    ->   age,
//! };

//! console.log(user.name); // "Henry Sibola"
//! console.log(user.age); // 25

// todo computed properties

//! const propName = "name";
//! const user = {
//!   age: 25, 
//!           <-  [propName]: "Henry Sibola",
//! };

//! user[propName] = "Henry Sibola"; -> weg
//! console.log(user.name); // "Henry Sibola"

// todo Re-election of the object
// todo LOOP for...in

//! for (key in object) {
//!     // інструкції
//!   }
  
// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     console.log(key); // Ключ
//     console.log(book[key]);  // Значення властивості з таким ключем
//   }

//? Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];

//   for (const key in apartment) {
//*     // keys.push(key); - в масив keys всі його ключі
//*     // values.push(apartment[key]); - всі значення його властивостей
//   }

// todo Object.keys() method - який приймає об'єкт і повертає масив ключів його властивостей

//! const book = {
//!     title: "The Last Kingdom",
//!     author: "Bernard Cornwell",
//!     genres: ["historical prose", "adventure"],
//!     rating: 8.38,
//!   };
//!   const keys = Object.keys(book);
//!   console.log(keys); // ['title', 'author', 'genres', 'rating']

// todo Object.keys() + цикл for...of = for...in 

// const book = {
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
  
//   for (const key of keys) {
//     console.log(key); // Ключ
//     console.log(book[key]); // Значення властивості
//   }

//? Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
  
// const keys = Object.keys(apartment);
// const values = [];
// for (const key of keys) {
//  values.push(apartment[key]);
// }

//? Виконай рефакторинг функції countProps(object), замінивши перебір ключів за допомогою циклу for…in на метод Object.keys() для отримання масиву властивостей. Функція має повернути кількість властивостей в об'єкті object.

// function countProps(object) {
// const keys = Object.keys(object);
// return keys.length;
// }
//   console.log(countProps({ name: "Mango", age: 2 }));

// todo Object.values() method - повертає масив значень його властивостей.

//! const book = {
//!     title: "The Last Kingdom",
//!     author: "Bernard Cornwell",
//!     rating: 8.38,
//!   };
//!   const keys = Object.keys(book);
//!   console.log(keys); // ["title", "author", "rating"]
  
//!   const values = Object.values(book);
//!   console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]

//? Запиши у змінну keys масив ключів властивостей об'єкта apartment, а у змінну values - масив їх значень. Використовуй методи Object.keys() і Object.values().

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };

//   const values = Objects.values(apartment);
//   const keys = Objects.keys(apartment);
  

//? Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра. Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.

//? Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.

//? Поради:

//? Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати за загальну суму зарплат усіх співробітників
//? Використай метод Object.values() для отримання значень (зарплат) з об'єкта salaries
//? Пройдись по отриманих значеннях за допомогою циклу та додай кожне значення до змінної totalSalary.
//? Поверни totalSalary як результат

// function countTotalSalary(salaries) {
//     let totalSalary = 0;

//     const salary = Object.values(salaries);

//     for ( let i = 0; i <= salary.length; i++) {
//         totalSalary += salary[i];
//     }

//     return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// todo короткий вариант 

// function countTotalSalary(salaries) {
//     return Object.values(salaries).reduce((sum, value) => sum + value, 0);
//   }

// todo Array of objects

// !const books = [
//!     {
//!       title: "The Last Kingdom",
//!       author: "Bernard Cornwell",
//!       rating: 8.38,
//!     },
//!     {
//!       title: "Beside Still Waters",
//!       author: "Robert Sheckley",
//!       rating: 8.51,
//!     },
//!     {
//!       title: "The Dream of a Ridiculous Man",
//!       author: "Fyodor Dostoevsky",
//!       rating: 7.75,
//!     }
//!   ];
  
//! for (const book of books) {
//!     console.log(book); // Об'єкт книги
//!     console.log(book.title); // Назва
//!     console.log(book.author); // Автор
//!     console.log(book.rating); // Рейтинг
//!   }

//? Масив colors містить колекцію кольорів. Кожен колір представлений об'єктом і має властивості hex і rgb з відповідними для цього формату і кольору значеннями.

//? Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.
  
// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
// const hexColors = [];
// const rgbColors = [];
//   for (const color of colors ) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   }

// todo Finding an object by property value

//! const books = [
//!     { title: "The Last Kingdom", author: "Bernard Cornwell" },
//!     { title: "Beside Still Waters", author: "Robert Sheckley" },
//!     { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
//!   ];
  
//!   const authorToSearchFor = "Robert Sheckley";
  
//!   for (const book of books) {
//!       if(book.author === authorToSearchFor) {
//!           console.log(book);
//!           console.log(book.title)
//!           console.log(book.rating)
//!       }
//!   }
  
// ? Функція getProductPrice(productName) приймає один параметр productName - назва продукту. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// ? Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям (властивість name) в масиві products і повертала його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// function getProductPrice(productName)  {
//     const products = [
//       { name: "Radar", price: 1300, quantity: 4 },
//       { name: "Scanner", price: 2700, quantity: 3 },
//       { name: "Droid", price: 400, quantity: 7 },
//       { name: "Grip", price: 1200, quantity: 9 },
//       ];
//         for (const product of products) {
//            if(product.name === productName) {
//             return product.price;
//            }
//         }
//         return null;
// }

// console.log(getProductPrice("Radar"));

// todo Collection of property values

//! const books = [
//!     { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//!     { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//!     { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
//!   ];
  
//!   const titles = [];
  
//!   for (const book of books) {
//!       titles.push(book.title)
//!   }
  
//!   console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]

// todo середній рейтинг усієї нашої колекції

//! const books = [
//!     { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
//!     { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
//!     { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 6.8 }
//!   ];
  
//!   let totalRating = 0;
  
//!   for (const book of books) {
//!     totalRating += book.rating;
//!   }
  
//!   const averageRating = totalRating / books.length;
//!   console.log(averageRating); // 8
  
//? Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// function getAllPropValues(propName) {
//     const products = [
//         { name: "Radar", price: 1300, quantity: 4 },
//         { name: "Scanner", price: 2700, quantity: 3 },
//         { name: "Droid", price: 400, quantity: 7 },
//         { name: "Grip", price: 1200, quantity: 9 },
//       ];

//       const values = [];

//       for (const product of products) {
//         if (product[propName] !== undefined)
//      values.push(product[propName]);
//       }

//       return values;
// }

// console.log(getAllPropValues("name")); 

//? Функція calculateTotalPrice(productName) приймає один параметр productName- назва товару. Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

//? Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

//? Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!" , де <productName> — це ім'я товару.


// function calculateTotalPrice(productName) {
//     const products = [
//                 { name: "Radar", price: 1300, quantity: 4 },
//                 { name: "Scanner", price: 2700, quantity: 3 },
//                 { name: "Droid", price: 400, quantity: 7 },
//                 { name: "Grip", price: 1200, quantity: 9 },
//               ];
//               for (const product of products) {
//                          if (product.name === productName)
//                         return product.price * product.quantity;
//                       }
//                       return `Product ${productName} not found!`
// }

// console.log(calculateTotalPrice("Scanner"));

// todo Object methods

//! const obj = {
//! 	method(value) {
//! 		console.log(`I'm a method with ${value}!`);
//! 	}
//! };

//! obj.method(5); // "I'm a method with 5!"
//! obj.method(10); // "I'm a method with 10!"


//! // ✅ Логічно й синтаксично згруповані сутності
//! const bookShelf = {
//!     books: ["The Last Kingdom", "Dream Guardian"],
//!     // Це метод об'єкта
//!     getBooks() {
//!       return "Returning all books";
//!     },
//!     // Це метод об'єкта
//!     addBook(bookName) {
//!           return `Adding book ${bookName}`;
//!     },
//!   };
  
//!   // Виклики методів
//!   bookShelf.getBooks(); // поверне "Returning all books"
//!   bookShelf.addBook("New book 1"); // поверне "Adding book New book 1"
//!   bookShelf.addBook("New book 2"); // поверне "Adding book New book 2"
  

//? До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю. Програма має додавати, видаляти, шукати та оновлювати зілля.

//? Оголоси об'єкт atTheOldToad з наступними властивостями:

//? potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
//? getPotions() — метод, який повертає рядок "List of all available potions"
//? addPotion(potionName) — метод, який повертає рядок "Adding <potionName>", де potionName — це значення параметра potionName

// const atTheOldToad = {
//     potions: [],
//     getPotions() {
//         return "List of all available potions";
//     },
//     addPotion(potionName) {
//         return `Adding ${potionName}`;
//     }
// }

// console.log(atTheOldToad.addPotion("Invisibility"));

//todo Access to object properties

//! const bookShelf = {
//!     books: ["The Last Kingdom", "The Mist"],
//!     getBooks() {
//!       return this.books;
//!     }          |
//!   };        bookShelf
  
//!   console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]

//? Об'єкт atTheOldToad має наступні властивості:

//? potions — масив рядків, з назвами зілль
//? getPotions() — метод, який повертає рядок "List of all available potions"
//? Зміни код метода об'єкта getPotions() так, щоб він повертав значення властивості potions
  
// const atTheOldToad = {
//     potions: ["Speed potion", "Stone skin"],
//     getPotions() {
//         return this.potions;
//     }
// }
// console.log(atTheOldToad.getPotions());

// todo Change by link

//! const bookShelf = {
//!     books: ["The Last Kingdom"],
//!  };
  
//!   bookShelf.books.push("The Mist");
//!   console.log(bookShelf.books); // ["The Last Kingdom", "The Mist"]

//! const bookShelf = {
//!     books: ["The Last Kingdom"],
//!     getBooks() {
//!       return this.books;
//!     },
//!     addBook(bookName) {
//!       this.books.push(bookName);
//!     }
//!   };
  
//!   console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
//!   bookShelf.addBook("The Mist");
//!   bookShelf.addBook("Dream Guardian");
//!   console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]
  

//? Об'єкт atTheOldToad має наступні властивості:

//? potions — масив рядків, з назвами зілль
//? getPotions() — метод, який повертає значення властивості potions
//? addPotion() — метод, який приймає параметр рядок з назвою зілля potionName
//? Зміни код методу addPotion(potionName) так, щоб він додавав зілля potionName в кінець масиву у властивості potions.
  
// const atTheOldToad = {
//     potions: ["Speed potion", "Stone skin"],
//     getPotions() {
//     return this.potions;
//     },
//     addPotion(potionName) {
//     this.potions.push(potionName);
//     return this.potions;
//     },
// };
// console.log(atTheOldToad.addPotion("Invisibility"));

// todo Array of objects

//! const bookShelf = {
//!     books: [
//!       { title: "The Last Kingdom", rating: 8 },
//!       { title: "The Mist", rating: 6 },
//!     ],
//!     getAvarageRating() {
//!       let totalRating = 0;
  
//!       for (const book of this.books) {
//!         totalRating += book.rating;
//!       }
  
//!       return totalRating / this.books.length;
//!     },
//!   };
  
//!   bookShelf.getAvarageRating(); // 7

//? Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною. Тому зараз у властивості potions буде зберігатися масив об'єктів з властивостями name та price.

//? Об'єкт atTheOldToad має наступні властивості:

//? potions — масив рядків, з назвами зілль
//? getPotions() — метод, який повертає значення властивості potions
//? addPotion() — метод, який приймає параметр об'єкт нового зілля newPotion і додає його в кінець масиву у властивості potions.
//? Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості potions.


// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Stone skin", price: 520 },
//     ],
//     getPotions(){
//       return this.potions;
//     },
//    addPotion(newPotion) {
//     this.potions.push(newPotion);
//    },
//   getTotalPrice(){
//     let totalPrice = 0;
//     for(const potion of this.potions) {
//       totalPrice += potion.price;
//     };
//     return totalPrice; 
//   },
//   }

// todo Change an object in an array

//! const bookShelf = {
//!     books: [
//!       { title: "The Last Kingdom", rating: 8 },
//!       { title: "The Mist", rating: 6 },
//!     ],
//!       changeRating(bookName, newRating) {
//!      for(const book of this.books) {
//!          if(book.title === bookName) {
//!              book.rating = newRating;
//!          }
//!      }
//!  }
//!  };

//! changeRating("The Mist", 9);
//! changeRating("The Last Kingdom", 4);


//? Об'єкт atTheOldToad має наступні властивості:

//? potions — масив об'єктів зілль
//? getPotions() — метод, який повертає значення властивості potions
//? updatePotionName() — метод, який приймає два параметра рядків oldName і newName
//? Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// const atTheOldToad = {
//     potions: [
//            { name: "Speed potion", price: 460 },
//            { name: "Stone skin", price: 520 },
//         ],
//     getPotions() {
//         return this.potions;
//         },
//     updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//     if (potion.name === oldName) {
//         potion.name = newName;
//       show  /break;
//         }
//       }
//       show /return this.potions;
//     },
// }
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));

// todo Spread and rest syntax
// todo Residual parameters - збери параметри, що залишилися, і поклади їх у масив
// !                  ...rest
//! function multiply(...args) {
//!     console.log(args);
//!   }
  
//!   multiply(1, 2); // [1, 2]
//!   multiply(1, 2, 3); // [1, 2, 3]
//!   multiply(1, 2, 3, 4); // [1, 2, 3, 4]

//? Використовуючи синтаксис залишкових параметрів, доповни код функції add() так, щоб вона приймала будь-яку кількість аргументів у параметр args і повертала їхню суму.

// function add(...args) {
//     let totalArgs = 0;
//     for ( const arg of args ) {
//         totalArgs += arg;
//     }
//     return totalArgs;
// }

// console.log(add(15, 27));

// todo Collecting part of the arguments

//! function multiply(first, second, ...args) {
//!     console.log(first, second, args);
//!   }
  
//!   multiply(1, 2); // 1 2
//!   multiply(1, 2, 3); // 1 2 [3] 
//!   multiply(1, 2, 3, 4); // 1 2 [3, 4]

//? Функція addOverNum() приймає довільну кількість аргументів чисел.

//? Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів, які більші за задане число. Це число завжди буде передано першим аргументом.

//? Для вирішення цього завдання тобі потрібно зробити наступне:

//? Перший параметр value повинен представляти задане число, а решта аргументів повинні бути зібрані за допомогою синтаксису (...args)
//? Усередині функції ініціалізуй змінну для зберігання загальної суми
//? Потім пройдись по кожному аргументу за допомогою циклу
//? Перевір, чи кожен аргумент більший за вказане число, і якщо так, додай його до загальної суми
//? На завершення поверни загальну суму

// function addOverNum(value, ...args) {
//     let totalSum = 0;
//     for (const arg of args) {
//         if(value < arg) {
//             totalSum += arg;
//         }
//     }
//     return totalSum;
// }
//   console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

