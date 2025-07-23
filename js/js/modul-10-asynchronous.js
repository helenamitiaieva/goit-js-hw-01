//todo method setTimeout() дозволяє запланувати одноразовий виклик функції через певний час. / web API
//* const timerId = setTimeout(callback, delay, arg1, arg2, ...);

//? callback — функція, виклик якої необхідно запланувати;
//? delay — час у мілісекундах, через який callback-функція буде викликана один раз.

//? Додаткові аргументи (arg1, arg2 тощо) не обов’язкові і будуть передані callback функції під час виклику. 
//! Результатом виклику setTimout() буде цифровий ідентифікатор створеного таймера, який потім може бути використаним для його подальшого скасування.
// ------------------------------------------------------
// const button = document.querySelector("button");

//! const onClick = () => {
//!   const timerId = setTimeout(() => {
//!     console.log("I love async JS!");
//!   }, 2000);

//   console.log(timerId);
// };

//! button.addEventListener("click", onClick);
// ------------------------------------------------------

// todo return setTimeout() повертає цифровий ідентифікатор створеного таймера.
// todo Функція setTimeout планує в асинхронній черзі відкладений виклик функції, який виконується після зазначеного інтервалу часу. Вона не викликає функцію безпосередньо, а лише планує її виконання через певний час.
// ------------------------------------------------------
//todo method clearTimeout(id)
// const greet = () => {
//   console.log("Hello!");
// };

// const timerId = setTimeout(greet, 3000);

//! clearTimeout(timerId);
// ------------------------------------------------------
// const setBtn = document.querySelector(".js-set");
// const clearBtn = document.querySelector(".js-clear");
//! let timeoutId;

// setBtn.addEventListener("click", () => {
//   timeoutId = setTimeout(() => {
//     console.log("I love async JS!");
//   }, 2000);
// });

//! clearBtn.addEventListener("click", () => {
//!   clearTimeout(timeoutId);
//!   console.log(`Timeout with id ${timeoutId} has stopped!`);
//! });
// -----------------------------------------------
// todo method setInterval() — це простий спосіб повторення коду знову і знову з певним інтервалом.

//* const intervalId = setInterval(callback, delay, arg1, arg2, ...);

// todo return setInterval() буде цифровий ідентифікатор створеного таймера, який потім може бути використаним для його подальшого скасування.
//-----------------------------------------------
// todo method clearInterval

// * clearInterval(id) 

// const greet = () => {
//     console.log("Hello!");
//   };
  
//   const intervalId = setInterval(greet, 3000);
  
//!   clearInterval(intervalId);
  
//? Що потрібно передати функції clearInterval?
//? Ідентифікатор інтервалу, який повернув setInterval

// todo-------------------------------------------

// todo Date 

//! const date = new Date();

//! console.log(date);
//! // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)" --- toString()

//-------------------------------------------------

// const date = new Date("2030-03-16");
// console.log(date); // "Sat Mar 16 2030 00:00:00 GMT+0200"

//-------------------------------------------------

// const date = new Date("2030-03-16T14:25:00");
// console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

//-------------------------------------------------

// console.log(new Date("2030")); // "Tue Jan 01 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03")); // "Fri Mar 01 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03-16")); // "Sat Mar 16 2030 02:00:00 GMT+0200"
// console.log(new Date("2030-03-16T14:25:00")); // "Sat Mar 16 2030 14:25:00 GMT+0200"

//-------------------------------------------------

// const date = new Date(2030, 2, 16, 14, 25, 0, 0);
// console.log(date); // "Sat Mar 16 2030 14:25:00 GMT+0200 "

//-------------------------------------------------

// todo Unix time 

//todo  method getTime() повертає числове значення цієї дати (timestamp) — кількість мілісекунд, що минула з півночі 1 січня 1970 року.

//! const date = new Date();
//! console.log(date.getTime()); // 1624021654154

// -----------------------------------------------

//todo Date.now() method

//! const time = Date.now(); // 1693237207904

// -----------------------------------------------

//? Якщо ти хочеш виміряти, скільки часу займає виконання деякого коду, можна зробити так:

// const startTime = Date.now();

 // Твій код, виконуваний упродовж деякого часу
// for(let i = 0; i <= 100; i += 1) {
// 	console.log(i);
// }

//! const endTime = Date.now();
//! const elapsedTime = endTime - startTime;

//! console.log(`Elapsed time: ${elapsedTime} ms`);

// ------------------------------------------------

// todo Get

// const date = new Date("March 16, 2030 14:25:00");
// console.log("Date: ", date); // "Sat Mar 16 2030 14:25:00 GMT+0200"

// ------------------------------------------------

 // Повертає день місяця від 1 до 31
// console.log("Day: ", date.getDate()); // 16

// ------------------------------------------------

 //! Повертає день тижня від 0 до 6, починається з неділі
// console.log("Day of the week: ", date.getDay()); // 6

// ------------------------------------------------

 //! Повертає місяць від 0 до 11
// console.log("Month: ", date.getMonth()); // 2

// ------------------------------------------------

 // Повертає рік з 4 цифр
// console.log("Full year: ", date.getFullYear()); // 2030

// ------------------------------------------------

 // Повертає години
// console.log("Hours: ", date.getHours()); // 14

// ------------------------------------------------

 // Повертає хвилини
// console.log("Minutes: ", date.getMinutes()); // 25

// ------------------------------------------------

 // Повертає секунди
// console.log("Seconds: ", date.getSeconds()); // 0

// ------------------------------------------------

 // Повертає мілісекунди
// console.log("Milliseconds: ", date.getMilliseconds()); // 0

// todo set 

// const date = new Date("March 16, 2030 14:25:00");

// ------------------------------------------------

//! date.setMinutes(50); 
// console.log(date); // "Sat Mar 16 2030 14:50:00 GMT+0200"

// ------------------------------------------------

// date.setFullYear(2040);
// console.log(date); // "Fri Mar 16 2040 14:50:00 GMT+0200"

// ------------------------------------------------

// date.setMonth(4); 
// console.log(date); // "Wed May 16 2040 14:50:00 GMT+0300"

// todo--------------------------------------------

// todo Promise (проміс, від англ. promise — обіцяти) — об'єкт, що представляє поточний стан асинхронної операції. 

//! Очікування (pending) — початковий стан під час створення промісу.
//! Виконано (fulfilled) — операція виконана успішно з будь-яким результатом.
//! Відхилено (rejected) — операція відхилена з помилкою.

// todo create of promice 

//* const promise = new Promise((resolve, reject) => {
//*     // Asynchronous operation
//*   });

// resolve(value) — функція для виклику у разі успішної операції. Переданий їй аргумент буде значенням виконаного промісу.

// reject(error) — функція для виклику у разі помилки. Переданий їй аргумент буде значенням відхиленого промісу.

// ------------------------------------------------

// const isSuccess = true;

//! const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//!     if (isSuccess) {
//!       resolve("Success! Value passed to resolve function");
//!     } else {
//!       reject("Error! Error passed to reject function");
//!     }
//   }, 2000);
// });

// console.log(promise); // Об'єкт промісу

//! Виклик new Promise() повертає об'єкт.

// ---------------------------------------------------

// todo method then()

// * promise.then(onResolve, onReject)

//! onResolve(value) — 1-й аргумент методу then(), колбек-функція, яка буде викликана у разі успішного виконання промісу та отримає його результат як аргумент.

//! onReject(error) — 2-й аргумент методу then(), колбек-функція, яка буде викликана у разі виконання промісу з помилкою та отримає її як аргумент.

// const isSuccess = true;

// // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// // Registering promise callbacks
// promise.then(
//   value => {
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   error => {
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// -----------------------------------------------

// const date = new Date("March 16, 2030 14:25:00");
// console.log("Date: ", date);

// console.log("Day: ", date.getDate());

// console.log("Day of the week: ", date.getDay());

// console.log("Month: ", date.getMonth()); 

// console.log("Full year: ", date.getFullYear());

// console.log("Hours: ", date.getHours());

// console.log("Minutes: ", date.getMinutes()); 

// console.log("Seconds: ", date.getSeconds());

// console.log("Milliseconds: ", date.getMilliseconds());

// -----------------------------------------------

// const startBtn = document.querySelector("button[data-action-start]");
// const stopBtn = document.querySelector("button[data-action-stop]");
// const clockface = document.querySelector(".clockface");

// class Timer {
//     constructor({ onTick }) {
//       this.onTick = onTick;      // Функция, которая будет обновлять интерфейс
//       this.isActive = false;     // Флаг: активен ли таймер
//       this.intervalId = null;    // ID интервала для setInterval
  
//       this.init(); // сразу запускаем метод, который установит 00:00:00
//     }

//     init() {
//         const time = this.getTimeComponent(0);  // Считаем время из 0 миллисекунд
//         this.onTick(time);                      // Показываем 00:00:00 на экране
//       }

//     }

//     start() {
//         if(this.isActive) { //Проверка: а таймер уже работает? 
//             return; // Если isActive === true, то просто выходим — чтобы не запустить таймер повторно.
//         }

//         this.isActive = true; // Теперь таймер считается активным — мы это фиксируем флагом.
//         const startTime = Date.now(); // - когда начался отсчет 

//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now(); // считает каждвцю секунду
//             const deltaTime = currentTime - startTime; // милисек вычетабтся - 1720871300000 - 1720871303000 = 3 sec

//             const time = this.getTimeComponent(deltaTime); //он преобразует миллисекунды (deltaTime) во время: часы, минуты, секунды.
//             this.onTick(time);
//         }, 1000);
//     }

//         stop() {
//             clearInterval(this.intervalId);
//             this.init();
//             this.isActive = false;
//         }
    
//         getTimeComponent(time) {
//             const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//             const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//             const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    
//             return { hours, mins, secs };
//         }
    
    
//         pad(value) {
//             return String(value).padStart(2, "0");
//         } // Делает число двухзначным:

    
//     const time = new Timer({ onTick: updateClockface }); 
    
//     startBtn.addEventListener("click", time.start.bind(time)); //чтобы внутри метода start() this указывал именно на экземпляр класса Timer
//     stopBtn.addEventListener("click", time.stop.bind(time));
    
//     function updateClockface({ hours, mins, secs }) {
//         clockface.textContent = `${hours}:${mins}:${secs}`;
//     }
  
// -------------------------------------------------------------------


// todo mathod catch ()

const isSuccess = true;

//* promise
//* 	.then(value => {
//* 		// Promise fulfilled
//* 	})
//* 	.catch(error => {
//* 	  // Promise rejected
//* 	});

// -----------------------------------------------------------------

 // Create promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

 // Registering promise callbacks
// promise
//   .then(value => {
//     console.log(value); // "Success! Value passed to resolve function"
//   })
//!  .catch(error => {
//!     console.log(error); // "Error! Error passed to reject function"
//   });

// -----------------------------------------------------------------

// todo method finally()

// promise
// 	.then(value => {
// 	  // Promise fulfilled
// 	})
// 	.catch(error => {
// 	  // Promise rejected
// 	})
// 	.finally(() => {
//* 	  // Promise fulfilled or rejected
//* 	});

// todo------------------------------------------------------
// todo Promisification Промісифікована функція — це функція, яка призначена для виконання асинхронних операцій і повертає проміс у результаті своєї роботи.

// const fetchUserFromServer = (username, onSuccess, onError) => {
//     console.log(`Fetching data for ${username}`);
//   };
  
// !  fetchUserFromServer(
// !      "Mango", 
// !      user => console.log(user), 
// !      error => console.error(error)
// !  );

// ----------------------------------------------------------------

// const fetchUserFromServer = (username, onSuccess, onError) => {
//     console.log(`Fetching data for ${username}`);
  
//     setTimeout(() => {
       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;
  
//       if (isSuccess) {
//         onSuccess("success value");
//       } else {
//         onError("error");
//       }
//     }, 2000);
//   };
  
//   fetchUserFromServer(
//       "Mango", 
//       user => console.log(user), 
//       error => console.error(error)
//   );

// -------------------------------------------------------------------

// const fetchUserFromServer = username => {
    //! return new Promise((resolve, reject) => {
    //!     console.log(`Fetching data for ${username}`);
    
    //!     setTimeout(() => {
    // !      // Change value of isSuccess variable to simulate request status
    //!       const isSuccess = true;
    
    // !      if (isSuccess) {
    // !        resolve("success value");  // значенням параметра resolve буде колбек-функція методу then()
    // !      } else {
    // !        reject("error");  // значенням параметра reject буде колбек-функція методу catch()
    // !      }
    // !    }, 2000);
    // !  });
//   };

// const userPromise = fetchUserFromServer("Mango"); // результатом виклику fetchUserFromServer("Mango") буде проміс

// fetchUserFromServer("Mango")  // результатом виклику fetchUserFromServer("Mango") буде проміс

// // проміс обробляємо у методах then() i catch()
// userPromise
// 	.then(user => console.log(user))
//   .catch(error => console.error(error));

// todo Promise.resolve() і Promise.reject() — це статичні методи для створення промісів, що миттєво успішно виконуються або відхиляються. Вони працюють аналогічно new Promise(), повертають проміс, але мають коротший синтаксис.

// Promise.resolve("success value");
// 	.then(value => console.log(value));
// 	.catch(error => console.log(error));
//-----------------------------------------
//     Promise.reject("error");
// 	.then(value => console.log(value));
// 	.catch(error => console.log(error));

// todo Промісифікація синхронних функцій

// const makeGreeting = guestName => {
//     if (!guestName) {
//!      return Promise.reject("Guest name must not be empty");
//     } else {
//!           return Promise.resolve(`Welcome ${guestName}`);
//       }
//   };
  
//!   makeGreeting("Mango")
//!     .then(greeting => console.log(greeting))
//!     .catch(error => console.error(error));
  
// todo Створення промісів із затримкою

//* const makePromise = options => {	
//* 	return new Promise((resolve, reject) => {
		// ...
// *  });
//* };

//* makePromise({
//* 	value: "Some value",
//* 	delay: 2000,
//* 	shouldResolve: true
//* })

// -----------------------------------------------------------------

// const makePromise = ({ value, delay, shouldResolve = true }) => {
//     return new Promise((resolve, reject) => {
//          setTimeout(() => {
//                   if(shouldResolve) {
//                       resolve(value)
//                   } else {
//                       reject(value)
//                   }
//               }, delay);
//     });
//   };
  
//   makePromise({ value: "A", delay: 1000 })
//       .then(value => console.log(value)) // "A"
//       .catch(error => console.log(error));
  
//   makePromise({ value: "B", delay: 3000 })
//       .then(value => console.log(value)) // "B"
//       .catch(error => console.log(error));
  
//   makePromise({ value: "C", delay: 2000, shouldResolve: false })
//       .then(value => console.log(value)) 
//       .catch(error => console.log(error)); // "C"
//   --------------------------------------------------------------

// Коли виконається проміс, що повертається з Promise.all? - Коли виконаються всі проміси або буде відхилено хоча б один