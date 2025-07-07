// todo Callback functions

//! function greet(name) {
//!     console.log(`Welcome ${name}!`);
//!   }
  
//!   function notify(name) {
//!     console.log(`Dear ${name}, your room will be ready in 30 minutes`);
//!   }
  
//!   function registerGuest(name, callback) {
//!     console.log(`Registering ${name}!`);
//!     callback(name);
//!   }
  
//!   registerGuest("Mango", greet); // "Registering Mango!"
//!                                                                // "Welcome Mango!"
  
//!   registerGuest("Mango", notify); // "Registering Mango!"
//!                                                                   // "Dear Mango, your room will be ready in 30 minutes"
  

// todo Inline callbacks

//! function registerGuest(name, callback) {
//!     console.log(`Registering ${name}!`);
//!     callback(name);
//!   }
  
//!   // Передаємо інлайн-функцію greet у якості колбека
//!   registerGuest("Mango", function greet(name) {
//!     console.log(`Welcome ${name}!`);
//!   });
  
//!   // Передаємо інлайн-функцію notify у якості колбека
//!   registerGuest("Poly", function notify(name) {
//!     console.log(`Dear ${name}, your room will be ready in 30 minutes`);
//!   });

// todo forEach(callback) method = undefined <-- for і for...of

//! array.forEach(function callback(element, index, array) {
//!     // Тіло колбек-функції
//!   });


//! const numbers = [5, 10, 15, 20, 25];

//! // Класичний for
//! for (let i = 0; i < numbers.length; i += 1) {
//!   console.log(`Index ${i}, value ${numbers[i]}`);
//! }

//! // Перебираючий метод forEach
//! numbers.forEach(function (number, index) {
//!   console.log(`Index ${index}, value ${number}`);
//! });

// const products = [
//     { name: "Хлеб", price: 20, quantity: 2 },
//     { name: "Молоко", price: 30, quantity: 1 },
//     { name: "Сыр", price: 80, quantity: 3 },
//   ];

//   let total = 0;
 //*                            object     
//   products.forEach(function (product) {
//     total += product.price * product.quantity;
//   }
// ) 

// console.log(`Summ is ${total}`);

//todo Arrow functions ARROWS

//! // Звичайне оголошення функції     // Те саме стрілочною функцією
                                        // оголошення фц парам  arrow
//! function classicAdd(a, b, c) {    const arrowAdd = (a, b, c) => {
//!     return a + b + c;             return a + b + c;
                                       //!  
//!                                   };
//!   }
//              1 Parameter
//! const add = a => {
//!     return a + 5;
//!   };
//              0 Parameter
//! const greet = () => {
//!     console.log("Hello!");
//!   };
 
// todo explicit return           implicit return
//             {} + return                    //   без {} = return 
//! const add = (a, b, c) => {    const add = (a, b, c) => a + b + c;
//!     console.log(a, b, c);
//!     return a + b + c;
//!   };

// todo Pseudo-array arguments

//! const add = (...args) => {
//!     console.log(args);
//!   };
  
//!   add(1, 2, 3); // [1, 2, 3]


// todo anonim function 

//! const numbers = [5, 10, 15, 20, 25];

//* // Звичайна анонімна функція
//* numbers.forEach(function (number, index) {
//*   console.log(`Index ${index}, value ${number}`);
//* });

//* // Стрілочна анонімна функція
//* numbers.forEach((number, index) => {
//*   console.log(`Index ${index}, value ${number}`);
//* });



//! const numbers = [5, 10, 15, 20, 25];

//! const logMessage = (number, index) => {
//!   console.log(`Index ${index}, value ${number}`);
//! };

//! numbers.forEach(logMessage);

// todo Map and flatMap methods

//! const dirtyMultiply = (array, value) => {
//!     for (let i = 0; i < array.length; i += 1) {
//!       array[i] = array[i] * value;
//!     }
//!   };
  
//!   const numbers = [1, 2, 3, 4, 5];
//!   dirtyMultiply(numbers, 2);
//!   // Відбулася мутація вихідних даних - масиву numbers
//!   console.log(numbers); // [2, 4, 6, 8, 10]
  
// todo pure function

//! const pureMultiply = (array, value) => {
//!     const newArray = [];
  
//!     array.forEach(element => {
//!       newArray.push(element * value);
//!     });
  
//!     return newArray;
//!   };
  
//!   const numbers = [1, 2, 3, 4, 5];
//!   const doubledNumbers = pureMultiply(numbers, 2);
  
//!   // Мутація вихідних даних не відбулася
//!   console.log(numbers); // [1, 2, 3, 4, 5]
//!   // Функція повернула новий масив зі зміненими даними
//!   console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// todo Selecting methods array.method(callback(currentValue, index, array))

//* array.method((item, idx, arr) => {
//*     // логіка, яка буде виконуватися на кожній ітерації
//*   });
  
//! array.method(item => {
//!     // логіка, яка буде виконуватися на кожній ітерації
//!   });

// todo method map(callback) -> return Array

//* array.map((element, index, array) => {
//*     // Тіло колбек-функції
//*   });


//! const planets = ["Earth", "Mars", "Venus", "Jupiter"];

//! const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
//! console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

//! const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
//! console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

//! // Оригінальний масив не змінився
//! console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]

  
//todo Array of objects

//! const students = [
//!     { name: "Mango", score: 83 },
//!     { name: "Poly", score: 59 },
//!     { name: "Ajax", score: 37 },
//!     { name: "Kiwi", score: 94 },
//!     { name: "Houston", score: 64 },
//!   ];
  
//!   const names = students.map(student => student.name);
//!   console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]

// todo FlatMap() method

//* array.flatMap((element, index, array) => {
//*     // Тіло колбек-функції
//*   });
  
//! const students = [
//!     { name: "Mango", courses: ["mathematics", "physics"] },
//!     { name: "Poly", courses: ["science", "mathematics"] },
//!     { name: "Kiwi", courses: ["physics", "biology"] },
//!   ];
  
//!   const mappedCourses = students.map(student => student.courses);
//!   console.log(mappedCourses) // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]
//   разделенный
//!   const flattenedCourses = students.flatMap(student => student.courses);
//!   console.log(flattenedCourses) // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// соединенный

// todo Methods filter and find

// todo Method filter(callback) -> return array 

//* array.filter((element, index, array) => {
//*     // Тіло колбек-функції
//*   });
  
//! const values = [51, -3, 27, 21, -68, 42, -37];

//! const positiveValues = values.filter(value => value >= 0);
//! console.log(positiveValues); // [51, 27, 21, 42]
//! // до positiveValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були >= 0  

//! const negativeValues = values.filter(value => value < 0);
//! console.log(negativeValues); // [-3, -68, -37]
//! // до negativeValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були < 0  

//! const bigValues = values.filter(value => value > 1000);
//! console.log(bigValues); // []
//! // до bigValues потрапили всі елементи масиву values, які задовольнили умову колбека, тобто були > 1000

//! console.log(values); // [51, -3, 27, 21, -68, 42, -37]
//! // Оригінальний масив values не змінився

//todo Filter() method on an array of objects

//! const LOW_SCORE = 50;
//! const HIGH_SCORE = 80;
//! const students = [
//!   { name: "Mango", score: 83 },
//!   { name: "Poly", score: 59 },
//!   { name: "Ajax", score: 37 },
//!   { name: "Kiwi", score: 94 },
//!   { name: "Houston", score: 64 },
//! ];

//! const best = students.filter(student => student.score >= HIGH_SCORE);
//! console.log(best); // Масив об'єктів з іменами Mango і Kiwi

//! const worst = students.filter(student => student.score < LOW_SCORE);
//! console.log(worst); // Масив з одним об'єктом Ajax

//! const average = students.filter(
//!   (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
//! );
//! console.log(average); // Масив об'єктів з іменами Poly і Houston

// todo Method find() -> return The first element 

//* array.find((element, index, array) => {
//*     // Тіло колбек-функції
//*   });
  
//! const colorPickerOptions = [
//!     { label: "red", color: "#F44336" },
//!     { label: "green", color: "#4CAF50" },
//!     { label: "blue", color: "#2196F3" },
//!     { label: "pink", color: "#E91E63" },
//!     { label: "indigo", color: "#3F51B5" },
//!   ];
  
//!   colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
//!   colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
//!   colorPickerOptions.find((option) => option.label === "white"); // undefined

// todo Methods every, some and reduce
// todo method every(callback) -> return true - alle /false

//* array.every((element, index, array) => {
//*     // Тіло колбек-функції
//*   });


//! // Усі елементи більші або дорівнюють нулю? - так
//! [1, 2, 3, 4, 5].every((value) => value >= 0); // true

//! // Усі елементи більші або дорівнюють нулю? - ні
//! [1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false

//! const products = [
//! 	{ name: "apple", quantity: 2 },
//! 	{ name: "orange", quantity: 5 },
//! 	{ name: "plum", quantity: 0 },
//! ];

//! const hasEveryProduct = products.every(product => product.quantity > 0);
//! console.log(hasEveryProduct); // false


// todo Method some() -> true nur ein element -> stop = true

//* array.some((element, index, array) => {
//*     // Тіло колбек-функції
//*   });

//! // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
//! [1, 2, 3, 4, 5].some(value => value >= 0); // true

//! // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
//! [-7, -20, 3, -10, -14].some(value => value >= 0); // true

//! // Чи є хоча б один елемент, що менший від нуля? - ні
//! [1, 2, 3, 4, 5].some(value => value < 0); // false

//! // Чи є хоча б один елемент, що менший від нуля? - так
//! [1, 2, 3, -10, 4, 5].some(value => value < 0); // true


// todo Method reduce(callback, initialValue) -> return Object, array, string, number

//* array.reduce((previousValue, element, index, array) => {
//*     // Тіло колбек-функції
//*   }, initialValue);
//      Initial value of the battery
  
//! const total = [2, 7, 3].reduce((previousValue, number) => {
//!     return previousValue + number;
//!   }, 0);
  
//!   console.log(total); // 12
  
//todo  Method reduce() and array of objects
  
//! const students = [
//!     { name: "Mango", score: 83 },
//!     { name: "Poly", score: 59 },
//!     { name: "Ajax", score: 37 },
//!     { name: "Kiwi", score: 94 },
//!     { name: "Houston", score: 64 },
//!   ];
  
//!   // Назва акумулятора може бути довільною, це просто параметр функції
//*   const totalScore = students.reduce((total, student) => {
//*     return total + student.score;
//*   }, 0);
  
//*   const averageScore = totalScore / students.length;
  
// todo Method toSorted() використовується для сортування чисел

//* const scores = [27, 2, 41, 4, 7, 3, 75];

//* console.log(scores.toSorted()); // [2, 27, 3, 4, 41, 7, 75]

//! const letters = ["b", "B", "a", "A", "c", "C"];

//! console.log(letters.toSorted()); // ["A", "B", "C", "a", "b", "c"]

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = releaseDates.toSorted();

// const alphabeticalAuthors = authors.toSorted();

//* array.toSorted((a, b) => {
//*     // Callback function body
//*   });

// todo Sort by ascending

//! const scores = [61, 19, 74, 35, 92, 56];
//! const ascendingScores = scores.toSorted((a, b) => a - b);
//! console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// todo Sort descending

//! const scores = [61, 19, 74, 35, 92, 56];
//! const descendingScores = scores.toSorted((a, b) => b - a);
//! console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

//todo firstString.localeCompare(secondString) - Він викликається на рядку, який потрібно порівняти (firstString) з тим, що був переданий йому як аргумент (secondString).

//! const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

//! const inAlphabetOrder = students.toSorted((a, b) => a.localeCompare(b));
//! console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

//! const inReversedOrder = students.toSorted((a, b) => b.localeCompare(a));
//! console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
//   ];
  
//   const authorsInAlphabetOrder = authors.toSorted((a, b) => a.localeCompare(b));
  
//   const authorsInReversedOrder = authors.toSorted((a, b) => b.localeCompare(a));

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
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       rating: 7.94,
//     },
//     {
//       title: "Enemy of God",
//       author: "Bernard Cornwell",
//       rating: 8.67,
//     },
//   ];
  
//   const sortedByAuthorName = books.toSorted((a, b) => a.author.localeCompare(b.author));
  
//   const sortedByReversedAuthorName = books.toSorted((a, b) => b.author.localeCompare(a.author));
  
//   const sortedByAscendingRating = books.toSorted((firstBook, secondBook) => firstBook.rating - secondBook.rating);
  
//   const sortedByDescentingRating = books.toSorted((firstBook, secondBook) => secondBook.rating - firstBook.rating);


// todo Chains of methods


//! const sortedByAscendingScore = students.toSorted((a, b) => a.score - b.score);
//! const names = sortedByAscendingScore.map(student => student.name);

//! console.log(names); // ["Ajax", "Poly", "Mango", "Kiwi"]

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
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//       title: "The Dreams in the Witch House",
//       author: "Howard Lovecraft",
//       rating: 8.67,
//     },
//   ];
//   const MIN_BOOK_RATING = 8;

//   const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted((a, b) => a.localeCompare(b));





//   const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]
 
// todo HW

//? Напиши стрілочну функцію getUserNames(users), яка прийматиме один параметр users — масив об’єктів користувачів. Функція має повертати масив імен усіх користувачів (властивість name) із масиву users.
//? Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її викликів.

// const getUserNames = users => users.map(user => user.name);

// console.log(
//     getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       balance: 2811
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       balance: 3821
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       balance: 3793
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       balance: 2278
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       balance: 3951
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       balance: 1498
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       balance: 2764
//     },
//   ])
//   ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
  


// const getProductPrices = products => products.map(product => product.price);

//   const products = [
//     { name: "Хлеб", price: 20 },
//     { name: "Молоко", price: 30 },
//     { name: "Сыр", price: 80 },
//   ];
  
//?   Напиши функцию getLongNames, которая получает массив пользователей и возвращает массив имён, длина которых больше 10 символов.

// const users = [
//     { name: "Alexander" },
//     { name: "Eva" },
//     { name: "Maximiliano" },
//     { name: "Sophia" },
//     { name: "Christopherson" }
//   ];
// const getLongNames = users => users
//     .filter(user => user.name.length > 10)
//     .map(user.name);

//? Создай функцию getAdultNames, которая вернёт массив имён пользователей, старше 18 лет.

// const users = [
//     { name: "Anna", age: 25 },
//     { name: "Boris", age: 17 },
//     { name: "Clara", age: 31 },
//     { name: "David", age: 15 },
//     { name: "Eva", age: 22 }
//   ];

//   const getAdultNames = users => users
//   .filter(user => user.age >= 18)
//   .map(user => user.name);

//   console.log(getAdultNames(users));
// // Ожидаемый результат: ["Anna", "Clara", "Eva"]

//? Напиши стрілочну функцію getUsersWithFriend(users, friendName) , яка прийматиме два параметра:
//? перший параметр users — масив об’єктів користувачів
//? другий параметр friendName — ім’я друга для пошуку.
//? Функція має повертати масив усіх користувачів із масиву users, у яких є друг з іменем friendName. Друзі кожного користувача зберігаються у властивості friends. Якщо користувачів, у яких є такий друг немає, то функція має повернути порожній масив.

// const allUsers = [
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"]
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"]
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"]
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"]
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"]
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"]
//     }
//   ];
  

// const getUsersWithFriend = (users, friendName) => users
// .filter(user => user.friends.includes(friendName))
// .map(user => user.name);

// console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
//   // [
//   //   {
//   //     name: "Sharlene Bush",
//   //     friends: ["Briana Decker", "Sharron Pace"]
//   //   },
//   //   {
//   //     name: "Sheree Anthony",
//   //     friends: ["Goldie Gentry", "Briana Decker"]
//   //   }
//   // ]
  
//   console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
//   // [
//   //   {
//   //     name: "Elma Head",
//   //     friends: ["Goldie Gentry", "Aisha Tran"]
//   //   },
//   //   {
//   //     name: "Sheree Anthony",
//   //     friends: ["Goldie Gentry", "Briana Decker"]
//   //   }
//   // ]
  
//   console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []
  

//? Создай функцию getUsersWithHobby(users, hobby), которая будет возвращать имена пользователей, у которых в списке хобби есть нужное.

// const users = [
//     { name: "Anna", hobbies: ["reading", "swimming"] },
//     { name: "John", hobbies: ["gaming", "cycling", "swimming"] },
//     { name: "Lena", hobbies: ["painting", "reading"] },
//     { name: "Mark", hobbies: ["chess", "gaming"] },
//   ];

//   const getUsersWithHobby = (users, hobby) => users
//   .filter(user => user.hobbies.includes(hobby))
//   .map(user => user.name) 

//   console.log(getUsersWithHobby(users, "reading"));
// // 👉 ["Anna", "Lena"]

// console.log(getUsersWithHobby(users, "gaming"));
// // 👉 ["John", "Mark"]


//? У тебя есть массив пользователей, у каждого есть имя и список навыков (skills). Нужно вернуть имена пользователей, у которых есть заданный навык. Создай функцию getUsersWithSkill, которая:
//? •	принимает массив пользователей и нужный навык (skill),
//? •	возвращает массив имён пользователей, у которых есть этот навык.
// const users = [
//     { name: "Alice", skills: ["HTML", "CSS", "JavaScript"] },
//     { name: "Bob", skills: ["Python", "Django"] },
//     { name: "Charlie", skills: ["JavaScript", "React"] },
//     { name: "Diana", skills: ["Java", "Spring"] }
//   ];

// const getUsersWithSkill = (users, skill) => users 
// .filter(user => user.skills.includes(skill))
// .map(user => user.name)

// console.log(getUsersWithSkill(users, "JavaScript")); // ["Alice", "Charlie"]
// console.log(getUsersWithSkill(users, "Python")); // ["Bob"]
// console.log(getUsersWithSkill(users, "Vue")); // []

//? Напиши стрілочну функцію sortByDescendingFriendCount(users) , яка прийматиме один параметр users — масив об’єктів користувачів.
//? Функція має повертати масив усіх користувачів, відсортованих за спаданням кількостій їх друзів (властивість friends).

// const sortByDescendingFriendCount = users => users 
// .toSorted((a, b) => b.friends.length - a.friends.length)

// console.log(
//     sortByDescendingFriendCount([
//       {
//         name: "Moore Hensley",
//         friends: ["Sharron Pace"],
//         gender: "male"
//       },
//       {
//         name: "Sharlene Bush",
//         friends: ["Briana Decker", "Sharron Pace"],
//         gender: "female"
//       },
//       {
//         name: "Ross Vazquez",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         gender: "male"
//       },
//       {
//         name: "Elma Head",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         gender: "female"
//       },
//       {
//         name: "Carey Barr",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         gender: "male"
//       },
//       {
//         name: "Blackburn Dotson",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         gender: "male"
//       },
//       {
//         name: "Sheree Anthony",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         gender: "female"
//       }
//     ])
//   );

//? Напиши стрілочну функцію getTotalBalanceByGender(users, gender), яка прийматиме два параметра:
//? перший параметр users — масив об’єктів користувачів,
//? другий параметр gender — рядок, що зберігає стать.
//? Функція має використовувати ланцюжок виклику методів та повертати загальний баланс користувачів (властивість balance), стать яких (властивість gender) збігається зі значенням параметра gender.

// const getTotalBalanceByGender = (users, gender) => users
// .filter(user => user.gender === gender)
// .reduce ((total, user) => total + user.balance, 0)



// const clients = [
// 	{
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764
//   }
// ];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863

//? Напиши стрілочну функцію getAverageAgeByGender(users, gender), яка приймає два параметри:
//? 	•	users — масив об’єктів користувачів з властивостями name, age, gender.
//? 	•	gender — рядок, який вказує стать (наприклад, "male" або "female").

//? Функція повинна повертати середній вік користувачів обраної статі.


// const users = [
//     { name: "Anna", gender: "female", age: 24 },
//     { name: "Tom", gender: "male", age: 30 },
//     { name: "Clara", gender: "female", age: 36 },
//     { name: "John", gender: "male", age: 28 },
//   ];


//   const getAverageAgeByGender = (users, gender) => {
//     const filteredUsers = users.filter(user => user.gender === gender);
//     const totalAge = filteredUsers.reduce((total, user) => total + user.age, 0);
//     return totalAge / filteredUsers.length ;
//   }


//   console.log(getAverageAgeByGender(users, "female")); // 30 (середній вік Анни і Клари)
// getAverageAgeByGender(users, "male");   // 29 (середній вік Тома і Джона)




  