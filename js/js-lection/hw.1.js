// HW1

// Оголоси функцію makeTransaction, яка очікує два параметри, значення яких будуть задаватися під час її виклику: • quantity— перший параметр, число, що містить кількість замовлених дроїдів • pricePerDroid — другий параметр, число, що містить вартість одного дроїда

// Доповни код функції так, щоб вона повертала рядок з повідомленням про покупку ремонтних дроїдів: "You ordered <quantity> droids worth <totalPrice> credits!", де: • <quantity> — це кількість замовлених дроїдів • <totalPrice> — це загальна вартість замовлення, тобто вартість усіх замовлених дроїдів
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function makeTransaction (quantity, pricePerDroid) {
//     return `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`
// }

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// Оголоси функцію getShippingMessage, яка очікує три параметри, значення яких будуть задаватися під час її виклику: • country — перший параметр, рядок, що містить країну доставки • price — другий параметр, число, що містить загальну вартість товару • deliveryFee — третій параметр, число, що містить вартість доставки товару

// Доповни код функції так, щоб вона повертала рядок з повідомленням про доставку товару в країну користувача: "Shipping to <country> will cost <totalPrice> credits", де: • <country> — це країни доставки • <totalPrice> — це загальна вартість замовлення, що включає вартість товару і його доставки
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function getShippingMessage (country, price, deliveryFee) {
//     return `Shipping to ${country} will cost ${price + deliveryFee} credits`;
// }

// console.log(getShippingMessage("Australia", 12, 50)); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
// console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"


//? Оголоси функцію getElementWidth, яка очікує три параметри, значення яких будуть задаватися під час її виклику: • content— перший параметр, ширина контенту • padding — другий параметр, значення горизонтального падінгу для кожної зі сторін • border — третій параметр, значення товщини бордера для кожної зі сторін Значення всіх параметрів будуть рядками формату Npx де N — це довільне число, ціле або дробове.

//? Доповни код функції так, щоб вона повертала число —загальну ширину елемента. При розрахунку загальної ширини орієнтуйся на те, що значення box-sizing дорівнює border-box.

//? Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.


//! function getElementWidth (content, padding, border) {
//!     return Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
   
//! }

//! console.log(getElementWidth("50px", "8px", "4px")); // 74
//! console.log(getElementWidth("60px", "12px", "8.5px")); // 101
//! console.log(getElementWidth("200px", "0px", "0px")); // 200

//? Доповни код функції checkAge(age) так, щоб функція повертала рядок "You are an adult", якщо значення параметра age більше або дорівнює 18. Використай у тілі функції інструкцію if для перевірки значення age.

//!  function checkAge(age) {
//!     if (age >= 18) {
//!       return "You are an adult";
//!     }
//!     return "You are a child";
//! }

//! console.log(checkAge(20));
//! console.log(checkAge(17));



// todo IF...ELSE

// function checkGrade(grade) {
//     if (grade >= 70) {
//       return "Satisfactory";
//     } else {
//       return "Unsatisfactory";
//     }
//   }
  
//   console.log(checkGrade(40)); // Unsatisfactory
//   console.log(checkGrade(75)); // Satisfactory
  
//? Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:
//? available - доступна кількість товарів на складі
//? ordered - кількість одиниць товару в замовленні
//? Використовуючи розгалуження, доповни код функції таким чином, щоб:
//? Якщо в замовленні вказане число, яке перевищує доступну кількість товарів на складі, функція повертає рядок "Not enough goods in stock!"
//? В іншому випадку функція повертає рядок "Order is processed, our manager will contact you"

//! function checkStorage(available, ordered) {
//!     if ( available < ordered ) {
//! return "Not enough goods in stock!";
//!     } else {
//!         return "Order is processed, our manager will contact you"
//!     }
//! }

//! console.log(checkStorage(100, 50)); 
//! console.log(checkStorage(100, 130)); 



//todo ELSE...IF

// const grade = 85;

// if (grade >= 90) {
//   console.log("Perfectly");
// } else if (grade >= 80) {
//   console.log("Good");
// } else if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }


//? Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику.

//? available - доступна кількість товарів на складі
//? ordered - кількість одиниць товару в замовленні
//? Використовуючи розгалуження, доповни код функції таким чином, щоб:

//? Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, функція повертає рядок "There are no products in the order!".
//? Якщо товарів у замовленні більше, ніж їх доступно на складі, то функція повертає рядок "Your order is too large, there are not enough items in stock!".
//? В іншому випадку функція повертає рядок "The order is accepted, our manager will contact you".

//! function checkStorage(available, ordered) {
//!     if ( ordered === 0 ) {
//!         return "There are no products in the order!";
//!     } else if ( available < ordered ) {
//!         return "Your order is too large, there are not enough items in stock!";
//!     } else { 
//!         return "The order is accepted, our manager will contact you";
//!     }
//! }

//! console.log(checkStorage(100, 50)); 
//! console.log(checkStorage(100, 130)); 
//! console.log(checkStorage(70, 0)); 


//todo Тернарний оператор

// const a = 5;
// const b = 10;
// let biggerNumber;

// if (a > b) {
//   biggerNumber = a;
// } else {
//   biggerNumber = b;
// }

// console.log(biggerNumber); // 10


// const a = 5;
// const b = 10;        cond. if  else
// const biggerNumber = a > b ? a : b;

// console.log(biggerNumber); // 10


//? Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим паролем адміністратора (correctPassword) і повертає рядок з повідомленням про результат.

//? Використовуючи тернарний оператор, доповни функцію таким чином, щоб:

//? Якщо значення password і correctPassword збігаються, функція повертала рядок "Access granted"
//? В іншому випадку, функція повертала рядок "Access denied, wrong password!"

// const correctPassword = "jqueryismyjam";
// function checkPassword(password) {
//     return password === correctPassword ? "Access granted" : "Access denied, wrong password!";
// }

// console.log(checkPassword("jqueryismyjam"));

//todo SWITCH

//! const fruit = 'apple';

//! switch (fruit) {
//!   case 'apple':
//!     console.log('Apple selected');
//!     break;
//!   case 'banana':
//!     console.log('Banana selected');
//!     break;
//!   case 'orange':
//!     console.log('Orange selected');
//!     break;
//!   default:
//!     console.log('The fruit is unknown');
//! }


//! const day = 3;

//! switch (day) {
//!   case 1:
//!   case 2:
//!   case 3:
//!   case 4:
//!   case 5:
//!     console.log('This is a working day');
//!     break;
//!   case 6:
//!   case 7:
//!     console.log('It is a day off');
//!     break;
//!   default:
//!     console.log('Invalid');
//! }

//? Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, або повідомлення про неправильний тип передплати.

//? Якщо значення параметра type — це рядок:

//? "starter" — ціна передплати 0 кредитів.
//? "professional" — ціна передплати 20 кредитів.
//? "organization" — ціна передплати 50 кредитів.
//? Для будь-якого іншого значення параметра type повертається рядок "Invalid subscription type!".

//? Використай оператор switch для розв'язання цієї задачі!

//* function getSubscriptionPrice(type) {
//     switch (type) {
//         case "starter": 
//         return 0;
//         case "professional": 
//         return 20;
//         case "organization": 
//         return 50;
//         default: 
//         return "Invalid subscription type!";
//     }
// }

// console.log(getSubscriptionPrice("organization"))

// todo &&

//! const screenWidth = 700;
//! const sm = 320;
//! const md = 768;
//! const lg = 1200;

//! if(screenWidth <= sm) {
//! 	console.log("Mobile screen");
//! } else if(screenWidth > sm && screenWidth <= md) {
//! 	console.log("Tablet screen");
//! } else if(screenWidth > md && screenWidth <= lg) {
//! 	console.log("Desktop screen");
//! } else {
//! 	console.log("Godzilla screen");
//! }

//? Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

//? number - число, входження якого перевіряється
//? start - початок числового проміжку
//? end - кінець числового проміжку
//? Використовуючи оператор &&, доповни функцію isNumberInRange таким чином, щоб вона повертала результат входження number у числовий проміжок від start до end включно. Тобто число повинно бути одночасно і більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виклику функції має бути буль true або false.

// function isNumberInRange(start, end, number) {
//     if (number >= start && number <= end) {
//         return true;
//     } else {
//         return false;
//     }  
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));

// todo ||

//! const a = 5;
//! console.log(a < 10 || a > 30); // true || false -> true

//! const b = 50;
//! console.log(b < 10 || b > 30); // false || true -> true

//! const c = 20;
//! console.log(c - 20 || c * 2); // 0 || 40 -> 40


//! const screenWidth = 700;
//! const sm = 320;
//! const md = 768;
//! const lg = 1200;

//! // У консолі буде пусто, якщо жодна з умов не перетворилась на true
//! if(screenWidth <= sm || screenWidth > md) {
//! 	console.log("Mobile or Desktop screen");
//! }


//? Функція checkAccess(subType) перевіряє, чи може користувач отримати доступ до контенту. Перевірка відбувається за типом передплати. Використовуючи оператор "АБО", доповни код функції так, щоб якщо значення параметра subType дорівнює рядкам "pro" або "vip", то функція повертала true і користувач отримував доступ. В іншому випадку повертала false.

// function checkAccess(subType) {
//     if (subType === "pro" || subType === "vip") {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(checkAccess("pro"));
// console.log(checkAccess("starter"));
// console.log(checkAccess("free"));

// todo !HI

//! const isBlocked = false;
//! const canChat = !isBlocked; // !false -> true

//! if(canChat) {
//! 	console.log("Can type in chat!")
//! } else {
//! 	console.log("Blocked from typing in chat!")
//! }




//! const isOnline = true;
//! const isBlocked = false;
//! const canChat = isOnline && !isBlocked; 
//! // true && !false -> true && true -> true

//! if(canChat) {
//! 	console.log("Can type in chat!")
//! } else {
//! 	console.log("Blocked from typing in chat!")
//! }





//! function canUserChat(isOnline, isBlocked) {
//!     const canChat = isOnline && !isBlocked;
  
//!     if (canChat) {
//!       return "Can type in chat!";
//!     } else {
//!       return "Blocked from typing in chat!";
//!     }
//!   }
  
//!   console.log(canUserChat(true, false));  // "Can type in chat!"
//!   console.log(canUserChat(true, true));   // "Blocked from typing in chat!"
//!   console.log(canUserChat(false, false)); // "Blocked from typing in chat!"
//!   console.log(canUserChat(false, true));  // "Blocked from typing in chat!"
  
//? Функція toggleModalVisibility(isVisible) перемикає стан відображення модального вікна. У параметрі isVisible вона очікує буль true або false. Доповни код функції так, щоб вона повертала протилежне значення цього параметра.

// function toggleModalVisibility(isVisible) {
//     if (!isVisible) {
//         return true;
//     } else {
//         return false; 
//     }
// }

// console.log(toggleModalVisibility(true));


// todo toUpperCase() 

//! const message = "JavaScript is awesome";
//! console.log(message.toUpperCase()); // "JAVASCRIPT IS AWESOME"

// todo toLowerCase() 

//! const message = "Welcome to Bahamas!";
//! console.log(message.toLowerCase()); // "welcome to bahamas!"
//! console.log(message); // "Welcome to Bahamas!"


// todo slice(startIndex, endIndex)

//! const fullName = "Jacob Mercer";
//! console.log(fullName.slice(0, 4)); // 'Jaco'
//! console.log(fullName.slice(3, 9)); // 'ob Mer'
//! console.log(fullName.slice(0, fullName.length)); // 'Jacob Mercer'
//! console.log(fullName.slice(0)); // 'Jacob Mercer'
//! console.log(fullName.slice()); // 'Jacob Mercer'



//! const fullName = "Jacob Mercer";
//! const firstName = fullName.slice(0, 5);
//! const lastName = fullName.slice(6);

//! console.log(fullName); // "Jacob Mercer"
//! console.log(firstName); // "Jacob"
//! console.log(lastName); // "Mercer"


//? Функція getSubstring(string, length) приймає рядок і повертає новий підрядок (його часткову копію). Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

//? string - оригінальний рядок
//? length - довжина нового підрядка
//? Доповни код функції так, щоб вона повертала новий підрядок, який починається від початку string і має довжину length.


// function getSubstring(string, length) {
//     return string.slice(0, length)
// }

// console.log(getSubstring("Hello world", 3));


//? Функція normalizeInput(input, to) оголошує два параметри:

//? input - рядок, який потрібно привести до певного регістру
//? to - рядок с двома можливими значеннями: "upper" або "lower", що вказують до якого регістру потрібно привести значення input
//? Доповни код функції таким чином, щоб:

//? Якщо значення параметра to — це рядок "upper", то функція повертала копію рядка input, але у верхньому регістрі
//? В іншому разі, функція повертала копію рядка inputу нижньому регістрі

// function normalizeInput(input, to) {
//     if (to === "upper") {
//         return input.toUpperCase();
//     } else {
//         return input.toLowerCase();
//     }
// }
// console.log(normalizeInput("This ISN'T SpaM", "lower"));
// console.log(normalizeInput("This ISN'T SpaM", "upper"));

// todo includes('substr')

//! const username = 'Jacob Mercer';

//! console.log(username.includes('Jacob')); // true
//! console.log(username.includes('John')); // false
//! console.log(username.includes('Mercer')); // true
//! console.log(username.includes('Doe')); // false


//? Функція checkForName(fullName, firstName) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка firstName у рядок fullName.

//? fullName - рядок, що містить повне ім'я
//? firstName - рядок, що містить ім'я для перевірки його входження в повне ім'я
//? Доповни тіло функції таким чином, щоб вона повертала результат перевірки входження імені (параметр firstName), у повне ім'я (параметр fullName). Врахуй, що регістр символів в параметрах fullName і firstName наперед не відомий. Перед перевіркою входження не забудь прирівняти їх до однакового регістру.

// * function checkForName(fullName, firstName) {
//     const fullNameLower = fullName.toLowerCase();
//     const firstNameLower = firstName.toLowerCase();

// return fullNameLower.includes(firstNameLower);
// }

// console.log(checkForName("Jason Neis", "Jason"));
// console.log(checkForName("Jason Neis", "Jacob"));


// todo .startsWith('substr')

//! const str = "Hello, world!";

//! console.log(str.startsWith("Hello")); // true
//! console.log(str.startsWith("hello")); // false (метод чутливий до регістру)

// todo .endsWith('substr')

//! const str = "Hello, world!";

//! console.log(str.endsWith("world!")); // true
//! console.log(str.endsWith("World!")); // false (метод чутливий до регістру)

//? Функція checkFileExtension(fileName, ext) приймає два параметри:

//? fileName - рядок, що зберігає ім'я файлу з розширенням, наприклад, styles.css, hello.js тощо.
//? ext - рядок, що зберігає розширення, наприклад, .css, .js тощо
//? Доповни код функції так, щоб:

//? Якщо ім'я файлу fileName закінчується розширенням, зазначеним у параметрі ext, то функція повертала рядок "File extension matches"
//? В іншому разі, функція повертала рядок "File extension does not match"

// function checkFileExtension(fileName, ext) {
//     if (fileName.endsWith(ext)) {
//         return "File extension matches";
//     } else {
//         return "File extension does not match"
//     }
// }

// console.log(checkFileExtension("styles.css", ".css"));
// console.log(checkFileExtension("styles.css", ".js"));

// todo indexOf('.') 

//! const message = "Welcome to Bahamas!";
//! const index = message.indexOf("to");
//! console.log(index); // 8


//! const message = "Welcome to Bahamas!";
//! const index = message.indexOf("hello");
//! console.log(index); // -1

//* Функція getFileName(file) приймає один параметр

//? file - рядок з іменем файлу. Ім'я файлу може бути з розширенням, наприклад: styles.css, app.js або без, наприклад: styles, app.
//? Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:

//? Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
//? Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
//? В іншому разі функція повертала підрядок з іменем файлу, але без розширення

//* function getFileName(file) {
//     const dotIndex = file.indexOf('.');
//     if (dotIndex === -1) {
//         return file;
//     } else {
//         return file.slice(0, dotIndex);
//     }
// }

// console.log(getFileName("styles.css")); // "styles"
// console.log(getFileName("app.js")); // "app"
// console.log(getFileName("app")); // "app"
// console.log(getFileName("index.js")); // "index"
// console.log(getFileName("index.html")); // "index"
// console.log(getFileName("index.css")); // "index"
// console.log(getFileName("index")); // "index"

// todo 

//! const input = " JavaScript is awesome!    ";
//! const trimmedInput = input.trim();
//! console.log(trimmedInput); // "JavaScript is awesome!"
//! console.log(input); // " JavaScript is awesome!    "


//? Функція createFileName(name, ext) приймає два параметри:

//? name - рядок, що зберігає ім'я файлу без розширення, яке вводить користувач. Воно може містити зайві пробіли на початку або в кінці рядка, наприклад "order ", " finance " тощо
//? ext - рядок, що зберігає розширення, наприклад "txt", "xml" тощо
//? Використовуючи синтаксис шаблонних рядків і метод trim(), доповни код функції таким чином, щоб вона повертала повне (об'єднане) ім'я файлу з доданим розширенням, зазначеним у параметрі ext у форматі ім'я.розширення. Також повне ім'я файлу не повинно містити зайвих пробілів на початку або наприкінці.

// function createFileName(name, ext) {
//     const trimmedName = name.trim();
//     return `${trimmedName}.${ext}`;
// }

// console.log(createFileName("report ", "csv"));

//todo Cycle WHILE

//! let clientCounter = 18;
//! const maxClients = 25;

//! while (clientCounter < maxClients) {
//!   console.log(clientCounter);
//!   clientCounter += 1;
//! }



//! function countClients(clientCounter, maxClients) {
//!     let counter = clientCounter; // створюємо локальну змінну
  
//!     while (counter < maxClients) {
//!       console.log(counter);
//!       counter += 1;
//!     }
//!   }
  
//!   countClients(18, 25);
  
//? Функція calculateTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//     let total = 0;
//     let i = 1;
//     while (i <= number) {
//         total += i;
//         i++;
//     }
//     return total;
// }


// todo 2 4 6

// function calculateEvenTotal(number) {
//     let total = 0;
//     let i = 1;

//     while (i <= number) {
//         if (i % 2 === 0) {
//             total += i;
//         }
//         i++;
//     } 
//     return total;
// }

// todo 1 3 5 

// function calculateOddTotal(number) {
//     let total = 0;
//     let i = 1;

//     while (i <= number) {
//         if (i % 2 !== 0) {
//             total += i;
//         }
//         i++
//     }
//     return total;
// }


// todo DO...WHILE

//! let count = 0;

//! do {
//! 	console.log(`Count: ${count}`);
//! 	count += 1;
//! } while (count < 5);

// todo FOR

//! for (let i = 0; i <= 20; i += 5) {
//!     console.log(i);
//!   }

  
//!   for (let i = 20; i >= 0; i -= 5) {
//!   console.log(i);
//! }


//! function sumUpTo(number) {
//!     let sum = 0;
  
//!     for (let i = 0; i <= number; i += 1) {
//!       sum += i;
//!     }
//!     return sum;
//!   }
  
//!   console.log(sumUpTo(5)); // 15
//!   console.log(sumUpTo(10)); // 55
//!   console.log(sumUpTo(0)); // 0


//? Функція calculateTotal(number) приймає ціле число (параметр number) Використовуючи цикл for, доповни код функції так, щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//     let sum = 0;
//     for (let i = 0; i <= number; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log(calculateTotal(100));
  

// todo ++i --i i++ i--

//? Функція calculateEvenTotal(number) приймає ціле число (параметр number). Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно. Парні числа — це ті, що можна поділити на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у модулі 1). Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.


// function calculateEvenTotal(number) {
//     let sum = 0; 
//     for (let i = 0; i <= number; i++) {
//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }

// console.log(calculateEvenTotal(27));

// todo break

//! for (let i = 0; i < 10; i+=1) {
//!     console.log(i);
  
//!     if (i === 5) {
//!       console.log('Met the number 5, interrupt the execution of the cycle');
//!       break;
//!     }
//!   }
  
//!   console.log('Log after cycle');

//? Доповни код таким чином, щоб у змінну number записувалося перше число у проміжку від start до end, яке ділиться на 5 без остачі.

// const start = 6;
// const end = 17;

// let nummer 
//             //  0 von  number bis
// for (let i = start; i <= end; i++) {
//     if (i % 5 === 0) {
//         number = i;
//         break;
//     }
// }

// console.log(number);

//? Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.

//? Доповни код функції таким чином, щоб вона:

//? повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
//? не використовуй оператор break

// function findNumber(start, end, divisor) {

//  for (let i = start; i <= end; i++) {
//     if (!(i % divisor)) {
//         return i;
//     }
//  }
// }

// console.log(findNumber(2, 6, 5));


// todo !(i % divisor) = i % divisor === 0


//! HW2 

//? Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.
//? Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
//? Усі символи slug повинні бути в нижньому регістрі.
//? Усі слова slug повинні бути розділені тире.


// function slugify(title) {
//     const titleLow = title.toLowerCase();
//     const titleTogether = titleLow.split(' ').join('-');
//     const titleTogether = titleLow.replaceAll(' ', '-');
//     const titleTogether = titleLow.replace(/ /g, '-');
// return titleTogether;
// }


// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

//? Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати програмне забезпечення для відділу продажів. Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits), яка складає та повертає повідомлення про купівлю ремонтних дроїдів.

//? Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:
//? quantity — кількість замовлених дроїдів
//? pricePerDroid — ціна одного дроїда
//? customerCredits — сума коштів на рахунку клієнта

//? Доповни функцію таким чином:
//? Оголоси змінну для зберігання загальної суми замовлення (загальна вартість усіх замовлених дроїдів) і задай їй вираз розрахунку цієї суми.
//? Додай перевірку, чи зможе клієнт оплатити замовлення:
//? якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, функція має повертати рядок "Insufficient funds!"
//? в іншому випадку функція має повертати рядок "You ordered <quantity> droids worth <totalPrice> credits!", де <quantity> це кількість замовлених дроїдів, а <totalPrice> це їх загальна вартість.

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//     const totalPrice = quantity * pricePerDroid; 

//     if (totalPrice > customerCredits ) {
//         return "Insufficient funds!";
//     } else {
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`
//     }
// }

// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 800)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 100)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

//? Оголоси функцію formatMessage(message, maxLength), яка приймає рядок (параметр message) та перевіряє його довжину відповідно до заданої максимальної довжини (параметр maxLength).

//? Доповни код функції таким чином, що:
//? Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
//? Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію.

// function formatMessage(message, maxLength) {
// if (message <= maxLength) {
//     return message;
// } else {
//    return message.slice(0, maxLength)+'...';
// }
// }

// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

//? Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.

//? Доповни код функції таким чином, що:
//? Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
//? Якщо в рядку відсутні заборонені слова, функція повертає буль false

// *function checkForSpam(message) {
//     const messageLow = message.toLowerCase();
//     if (messageLow.includes('spam') || messageLow.includes('sale')) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function checkForSpam(message) {
//     const messageLow = message.toLowerCase();
//                        true/false
//     return messageLow.includes('spam') || messageLow.includes('sale');
// }ß

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true


//? Оголоси функцію getShippingCost(country), яка повинна перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат. Обов'язково використовуй інструкцію switch.
//? Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price> необхідно підставити відповідні значення.

//? Список країн і вартість доставки:
//? China — 100 кредитів
//? Chile — 250 кредитів
//? Australia — 170 кредитів
//? Jamaica — 120 кредитів

//? Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country".

//* function getShippingCost(country) {
//     let price;

//     switch (country) {
//         case 'China': 
//         price = 100;
//         break;
//         case 'Chile': 
//         price = 250;
//         break;
//         case 'Australia': 
//         price = 170;
//         break;
//         case 'Jamaica': 
//         price = 120;
//         break;
//         default:
//         return "Sorry, there is no delivery to your country";
//     }
//     return `Shopping to ${country} will cost ${price} credits`;
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

//? Напиши функцію normalizeName(name), яка приймає рядок і повертає його у форматі:
//? 	•	перша літера — велика,
//? 	•	решта — маленькі.


// function normalizeName(name) {
//     return name[0].toUpperCase() + name.slice(1).toLowerCase();
// }
// console.log(normalizeName('dhjdhdg'));


//? Напиши функцію checkDomain(email), яка перевіряє, чи входить у рядок пошти домен "@gmail.com".

//? Функція повинна повертати true, якщо пошта gmail, інакше — false.

// function checkDomain(email) {
//     return email.includes('@gmail.com'); 
// }

// console.log(checkDomain('helena@gmail.com'));

//? slugify(title), яка перетворює заголовок у формат URL-slug:
//?  • Всі літери мають бути нижнього регістру
//?  • Пробіли мають бути замінені на дефіси -

// function slugify(title) {
//     const titleLow = title.toLowerCase();
//     const titleSlugify = titleLow.split(' ').join('-');

//     return titleSlugify;
// }

// console.log(slugify("Learn JavaScript Fast"));

//? Напиши функцію maskCardNumber(cardNumber), яка:
//? 	•	Приймає повний номер банківської картки як рядок
//? 	•	Повертає той самий номер, але всі символи, крім останніх 4-х, мають бути замінені на *

// function maskCardNumber(cardNumber) {
//     const cardNumberNew = cardNumber.slice(12);
//     return `************${cardNumberNew}`;
// }

// function maskCardNumber(cardNumber) {
//     const visibleCardNunber = cardNumber.slice(-4);
//     const hiddenCardNumber = '*'.repeat(cardNumber.length - 4);
//     return hiddenCardNumber + visibleCardNunber;
// }


// console.log(maskCardNumber("1234567812345678"));


//? Напиши функцію processMessage(message), яка:
//? 	1.	Видаляє пробіли на початку й у кінці
//? 	2.	Замінює всі ! та ? на .
//? 	3.	Видаляє всі цифри з тексту
//? 	4.	Переводить у нижній регістр
//? 	5.	Якщо рядок починається зі слова "alert" — додай "⚠️" на початок
//? 	6.	Якщо рядок закінчується словом "urgent" — додай "🚨" в кінець

// function processMessage(message) {
//     let messageNew = message
//     .trim()
//     .replace(/!/g, '.')
//     .replace(/?/g, '.')
//     .replace(/\d/g, '')
//     .toLowerCase()
//    if (messageNew.startsWith('alert')) {
//     return messageNew = "⚠️" + messageNew;
//    }
//     if (messageNew.endsWith('alert')) {
//     return messageNew += "🚨";
//    }
//    return messageNew;
   
// }

// console.log(processMessage("  ALERT! This is URGENT!!!  ")); 
// // ⚠️alert. this is urgent.🚨

// console.log(processMessage("Hi123! Is anyone here???")); 
// // hi. is anyone here.

// console.log(processMessage("alert! Urgent")); 
// // ⚠️alert. urgent🚨

// todo MASSIVE Arrays

//? Оголоси змінну fruits. Надай змінній fruits наступне значення: масив фруктів - рядків "apple", "plum", "pear" і "orange".

// const fruits = ["apple", "plum", "pear", "orange"];

//! const planets = ['Earth', 'Mars', 'Venus'];
//! const firstElement = planets[0];
//! console.log(firstElement); // 'Earth'

//! const planets = ['Earth', 'Mars', 'Venus'];
//! console.log(planets[3]); // undefined
//! console.log(planets[999]); // undefined


// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length-1];

// console.log(lastElement);

//todo Override item value

//! const planets = ['Earth', 'Mars', 'Venus', 'Uranus'];
//! planets[0] = 'Jupiter';
//! planets[2] = 'Neptune';
//! console.log(planets); // ['Jupiter', 'Mars', 'Neptune', 'Uranus']

//? Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".

// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);


// todo Array length

//! const planets = ['Earth', 'Mars', 'Venus'];
//! console.log(planets.length); // 3

//! if(planets.length >= 3) {
//! 	console.log("3 or more elements");
//! } else {
//! 	console.log("3 or less elements");
//! }

//? Функція getOrderQuantity(order) приймає один параметр order - масив рядків, які описують продукти в замовленні клієнта. Доповни код функції таким чином, щоб вона повертала число, що дорівнює кількості елементів масиву.

// function getOrderQuantity(order) {
//         return order.length;
// }

// console.log(getOrderQuantity(["apple", "peach", "pear", "banana"])); // Повертає 4
// console.log(getOrderQuantity(["apple", "banana"])); // Повертає 2
// console.log(getOrderQuantity(["apple", "banana", "pear"])); // 

// todo Index of the last element

//! const planets = ["Earth", "Mars", "Venus"];
//! const lastElementIndex = planets.length - 1;
//! console.log(planets[lastElementIndex]); // "Venus"


//? Функція getLastElementMeta(array) приймає один параметр array - масив довільних значень. Доповни код функції таким чином, щоб вона повертала новий масив з двох елементів:

//? перший елемент - це індекс останнього елементу у масиві array
//? другий елемент - це значення останнього елементу у масиві array

// function getLastElementMeta(array) {
// const lastIndex = array.length-1;
//     return [lastIndex, array[lastIndex]]; - значення останнього елементу у масиві array
// }   індекс останнього елементу у масиві array
// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

//? Функція getExtremeElements(array) приймає один параметр array - масив елементів довільної довжини. Доповни код функції таким чином, щоб вона повертала масив з двох елементів - першого і останнього елементів параметра array.

// function getExtremeElements(array) {
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];
 
//   return [firstElement, lastElement];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// todo Assignment by reference and by value

//! const a = ["Mango", "Poly"];
//! const b = a;
//! console.log(a); // ["Mango", "Poly"]
//! console.log(b); // ["Mango", "Poly"]

//! a[1] = "Jacob";
//! console.log(a); // ["Mango", "Jacob"]
//! console.log(b); // ["Mango", "Jacob"]

//! b[0] = "Ajax";
//! console.log(a); // ["Ajax", "Jacob"]
//! console.log(b); // ["Ajax", "Jacob"]


//! const arr1 = [1, 2, 3];
//! const arr2 = [1, 2, 3];

//! console.log(arr1 === arr2); // false
//! console.log([] === []); // false

//todo Type reduction: arrays - Array → String

//! const array = [1, true, "Poly"];
//! console.log(String(array));// "1,true,Poly"
//! console.log(array + "5"); // "1,true,Poly5"

// todo Array → Number

//! console.log(Number([])); // 0
//! console.log(Number([1])); // 1
//! console.log(Number([1, 2, 3])); // NaN

// todo Array → Logical value (bull)

//! const emptyArray = [];
//! const nonEmptyArray = [1, 2, 3];

//! console.log(Boolean(emptyArray)); // true
//! console.log(Boolean(nonEmptyArray)); // true

//! if(emptyArray) {
//! 	console.log("if is in progress")
//! } else {
//! 	console.log("else is not performed")
//! }

//! if(nonEmptyArray) {
//! 	console.log("if is in progress")
//! } else {
//! 	console.log("else is not performed")

// todo Array methods
// todo Method join(delimiter) snake_case kebab-case

//! const words = ["JavaScript", "is", "amazing"];
//! console.log(words.join("")); // 'JavaScriptisamazing'
//! console.log(words.join(" ")); // 'JavaScript is amazing'
//! console.log(words.join("-")); // 'JavaScript-is-amazing'

//! function transformString(string) {
//! 	const words = string.split("_");
//! 	return words.join("-");
//! }

//! transformString("user_age"); // "user-age"
//! transformString("price_per_droid"); // "price-per-droid"

//? Функція getLength(array) очікує один параметр array - масив довільних значень. Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників, і повертала кількість символів в отриманому рядку.

// function getLength(array) {
//     const arrayJoin = array.join('');
//     return arrayJoin.length;
// }

// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));


// todo Метод split()

//! const name = "Mango";
//! const letters = name.split("");
//! console.log(letters); // ["M", "a", "n", "g", "o"]

//! const message = "JavaScript essentials";
//! const words = message.split(" ");
//! console.log(words); // ["JavaScript", "essentials"]

//! const slug = "amazing-french-recipes";
//! const slugParts = slug.split("-");
//! console.log(slugParts); // ["amazing", "french", "recipes"]


//? Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

//? Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає першим параметром рядок, що складається зі слів, розділених лише пробілами (параметр message) та другим параметром - число, що містить ціну гравірування за одне слово (параметр pricePerWord).

//? Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
//     const messageString = message.split(' ');
//     const massageStringLength = messageString.length;
//     return massageStringLength * pricePerWord;
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));

// todo  slice() 
// todo slice(begin, end)

//! const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
//! console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
//! console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
//! console.log(planets.slice(1, 3)); // ['Mars', 'Venus']

// todo slice()

//! const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
//! console.log(planets.slice()); // ["Earth", "Mars", "Venus", "Jupiter", "Saturn"]

// todo slice(begin)

//! const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
//! console.log(planets.slice(1)); // ["Mars", "Venus", "Jupiter", "Saturn"]
//! console.log(planets.slice(2)); // ["Venus", "Jupiter", "Saturn"]

// todo slice(-begin)

//! const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
//! console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]

//? Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

//? firstTwoEls - масив із перших двох елементів
//? nonExtremeEls - масив з усіх елементів, крім першого та останнього
//? lastThreeEls - масив із трьох останніх елементів

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

//todo Concat() method

//! const firstArray = ["Mercury", "Venus"];
//! const secondArray = ["Mars", "Jupiter"];
//! const result = firstArray.concat(secondArray);

//! console.log(result); // ["Mercury", "Venus", "Mars", "Jupiter"];

//? Оголоси змінну allClients та доповни код таким чином, щоб її значенням було посилання на масив, що складається з усіх елементів масивів oldClients і newClients. Спочатку мають іти елементи з масива oldClients, а потім з newClients.

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients);
// console.log(allClients);

//todo Method array.indexOf(elem)

//! const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
//! console.log(clients.indexOf("Poly")); // 2
//! console.log(clients.indexOf("Monkong")); // -1

//? Функція getSlice(array, value) приймає два параметра:

//? array - масив довільних елементів
//? value - значення елемента масиву для пошуку
//? Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

//? порожній масив, якщо в array немає елемента зі значенням value
//? підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array

// function getSlice(array, value) {
//     const index = array.indexOf(value);
//     if (index !== -1 ) {
//         return array.slice(0, index + 1);
//     } else {
//         return [];
//     }
// }

// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));

//todo Push() method array.push(element1, element2, ..., elementN);

//! const planets = ["Earth", "Mars", "Venus"];

//! planets.push("Jupiter");
//! console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

//! planets.push("Saturn", "Neptune");
//! console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]



//! const tags = [];

//! for(let i = 0; i < 3; i += 1) {
//! 	tags.push(`tag-${i}`);
//! }

//! console.log(tags); // ["tag-0", "tag-1", "tag-2"]


//? Функція createArrayOfNumbers(min, max) приймає два параметра:

//? min - ціле число, з якого починаються обчислення
//? max - ціле число, до якого включно триватимуть обчислення
//? Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max включно.

// function createArrayOfNumbers(min, max) {
//     const result = [];

//     for( let i = min; i <= max; i++ ) {
//         result.push(i);
//     }
//     return result;
// }

// console.log(createArrayOfNumbers(29, 34));

// todo Array Iteration

//! const planets = ["Earth", "Mars", "Venus"];

// ! for (let i = 0; i < planets.length; i += 1) {
//!   console.log(planets[i]);
//! }

//? Функція calculateTotalPrice(order) приймає один параметр order - масив чисел. Доповни функцію так, щоб вона повертала загальну суму елементів з масиву order.

// function calculateTotalPrice(order) {

//     if (order === 0) {
//         return 0;
//     }
//     let totalPrice = 0;
//     for (let i = 0; i < order.length; i++ ) {
//         totalPrice += order[i];
//     }
//     return totalPrice
// }

//? Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами. Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

// function getEvenNumbers(start, end) {
//     const evenNumbers = [];

//     for (let i = start; i <= end; i++) {
//         if (i % 2 === 0) {
//             evenNumbers.push(i);
//         }
//     }
//     return evenNumbers;
// }

// console.log(getEvenNumbers(2, 5));

// todo Method includes() array.includes(element)

//! const planets = ["Earth", "Mars", "Venus"];

//! console.log(planets.includes("Earth")); // true
//! console.log(planets.includes("Mars")); // true
//! console.log(planets.includes("Venus")); // true
//! console.log(planets.includes("Jupiter")); // false



//! const fruits = ["apple", "banana", "orange"];

//! if (fruits.includes("banana")) {
//!   console.log("The array has an element banana");
//! } else {
//!   console.log("Array does not contain banana element");
//! }

//? Функція checkStorage(storage, item) приймає два параметри:

//? storage - масив рядків, що описує доступні товари на складі
//? item - рядок з назвою товара, наявність якого потрібно перевірити
//? Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

//? рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
//? рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
//? Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

// function checkStorage(storage, item) {
// const itemLower = item.toLowerCase();
//     const storageIncludes = storage.includes(itemLower);
//     if (storageIncludes) {
//         return `${itemLower} is available to order!`;
//     } 
//     return "Sorry! We are out of stock!";
// }
// console.log(checkStorage(["apple", "plum", "pear"], "pluM"));

// function checkStorage(storage, item) {
//     const lowercaseItem = item.toLowerCase();
//     for (let i = 0; i < storage.length; i++) {
//       if (storage[i].toLowerCase() === lowercaseItem) {
//         return `${storage[i]} is available to order!`;
//       }
//     }
//     return "Sorry! We are out of stock!";
//   }

//? Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи. Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

//? Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вхідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

//? Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.

//? Доповни код функції:

//? Створи порожній масив для зберігання нового масиву.
//? Використай цикл for для ітерації кожного елемента у array1.
//? У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
//? Якщо він існує, то додай елемент до нового масиву.
//? Поверни наповнений масив спільних елементів як результат роботи функції.


// function getCommonElements(array1, array2) {
//    const commonElements = [];
//    for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//    commonElements.push(array1[i]);
//     }
//    }
//    return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 3, 4]));

//todo Loop for...of 

//! for (const element of array) {
//!     // тіло циклу
//!   }
  
//! const planets = ["Earth", "Mars", "Venus"];

//! for (const planet of planets) {
//!   console.log(planet);
//! }

//? Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order. Використай цикл for...of для перебору масиву.

// function calculateTotalPrice(order) {
//     let total = 0;
//     for (const element of order) {
// total += element;
//     }
//     return total;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); 
// console.log(calculateTotalPrice([]));

// todo Pseudo-array arguments 

//! function sum(a, b) {
//!     console.log(arguments);
//!     return a + b;
//!   }
  
//!   sum(2, 5);
  


//! function multiply() {
//!     let total = 1;
  
//!     for (const arg of arguments) {
//!       total *= arg;
//!     }
  
//!     return total;
//!   }
  
//!   console.log(multiply(1, 2, 3)); //  6
//!   console.log(multiply(1, 2, 3, 4)); //  24
//!   console.log(multiply(1, 2, 3, 4, 5)); //  120

// todo Pseudo-array -> Array.from() 
  
//! function foo() {
//!     // У змінній args буде повноцінний масив з усіх аргументів
//!     const args = Array.from(arguments);
//!       return args.join("-");
//!   }
  
//!   foo(1, 2, 3); // Поверне "1-2-3"
  
//? Функція createReversedArray() може приймати довільну кількість аргументів. Доповни код функції так, щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку. Тобто, при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1]. Використовуй цикл або метод масиву toReversed(), який застосовується до масиву і результатом роботи повертає новий масив з елементами у зворотньому порядку.

// function createReversedArray() {
//     const args = Array.from(arguments);
//     const reversed = [];
//     for (let i = args.length -1; i >= 0; i--) {
//         reversed.push(args[i]);
//     }
//     return reversed;
// }

// console.log(createReversedArray(12, 85, 37, 4));
//                              все элементы в массив 
// function createReversedArray(...args) {
//     return args.reverse();
// }

// todo Default options

//! function greet(username = "Guest") {
//!     console.log(`Hello, ${username}!`);
//!   }
  
//!   greet("Jacob"); // "Hello, Jacob!"
//!   greet();        // "Hello, Guest!"


//! function count(from, to, step = 1) {
//!     console.log(`from: ${from}, to: ${to}, step: ${step}`);
  
//!     for (let i = from; i <= to; i += step) {
//!     // ... 
//!     }
//!   }
  
//!   count(1, 15, 4); // "from: 1, to: 15, step: 4"
//!   count(1, 15); // "from: 1, to: 15, step: 1"
   
//? Функція calculateTax(amount, taxRate) оголошує два параметри:

//? amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
//? taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
//? Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.

// function calculateTax(amount, taxRate = 0.2) {
//     const sumTax = amount * taxRate;

//     return sumTax;
// }

// console.log(calculateTax(100, 0.1));


// todo function expression 

//! const multiply = function (x, y, z) {
//!     console.log(x * y * z);
//!   };

//! // ❌ Помилка! Не працює виклик до оголошення
//! multiply(1, 2, 3);

//! const multiply = function (x, y, z) {
//!   console.log(x * y * z);
//! };

//! // ✅ Працює виклик після оголошення
//! multiply(4, 5, 6);

  

// todo function declaration оголошення ф-ц

//! function multiply(x, y, z) {
//!     console.log(x * y * z);
//!   }

//! // ✅ Працює виклик перед оголошенням
//! multiply(1, 2, 3);

//! function multiply(x, y, z) {
//!   console.log(x * y * z);
//! }

//! // ✅ Працює виклик після оголошення
//! multiply(4, 5, 6);

// todo call stack   Stack frame

//! function bar() {
//!     console.log("bar");
//!   }
  
//!   function baz() {
//!     console.log("baz");
//!   }
  
//!   function foo() {
//!     console.log("foo");
//!     bar();
//!     baz();
//!   }
  
//!   foo();
  
// todo HW 3

//? Напиши функцію slugify(title), яка приймає заголовок статті, параметр title і повертає slug, створений із цього рядка.
//? Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
//? Усі символи slug повинні бути в нижньому регістрі.
//? Усі слова slug повинні бути розділені тире.
//? Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.

// function slugify(title) {
//     const slugifyLow = title.toLowerCase();
//     const slugifyLowTitle = slugifyLow.split(' ').join('-');
//     return slugifyLowTitle;
// }
// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"

//? Напиши функцію під назвою makeArray, яка приймає три параметри: firstArray (масив), secondArray (масив) і maxLength (число). Функція повинна створювати новий масив, який містить усі елементи з firstArray, а потім усі елементи з secondArray.
//? Якщо кількість елементів у новому масиві перевищує maxLength, функція повинна повернути копію масиву з довжиною maxLength елементів.
//? В іншому випадку функція повинна повернути весь новий масив.

//? Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її роботи.
 
// function makeArray(firstArray, secondArray, maxLength) {
//     const arrayNew = firstArray.concat(secondArray);

// return arrayNew.slice(0, maxLength);

// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]

//? Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers) та значення (value) як параметри. Функція повинна повертати новий масив лише тих чисел із масиву numbers, які більші за значення value.

//? Усередині функції:
//? Створи порожній масив, у який будеш додавати підходящі числа.
//? Використай цикл для ітерації кожного елемента масиву numbers.
//? Використовуй умовний оператор if усередині циклу для перевірки кожного елемента и додавання до свого масиву.
//? Поверни свій новий масив з підходящими числами як результат.

// function filterArray(numbers, value) {
//     const arrayNew = [];

//     for ( const nummer of numbers ) {
//         if (nummer > value) {
//             arrayNew.push(nummer);
//         }
//     }
// return arrayNew;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]