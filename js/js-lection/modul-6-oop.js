// const user = {
//     username: "Poly",
//     showThis() {
//       console.log(this);
//     }
//   };
  
//   user.showThis(); // {username: "Poly", showThis: ƒ}
  

// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // "this in showThis: undefined"

// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// const user = {
//   username: "Poly",
// };

// user.showContext = showThis;

// // Викликаємо в контексті об'єкта
// user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// // Викликаємо в глобальному контексті
// showThis(); // "this in showThis: undefined"

//todo Call() method - Викликає функцію в певному контексті і передає перелік аргументів

// * foo.call(thisArg, arg1, arg2, ...)


//! function greet(str) {
//!     console.log(`${str}, ${this.username}, your room is ${this.room}!`);
//!   }
  
//!   const mango = {
//!     username: "Mango",
//!       room: 27
//!   };
  
//!   const poly = {
//!     username: "Poly",
//!       room: 191
//!   };

// function showName() {
// 	console.log(this.name);
// }

// const user = {
//   name: "Alice",
// };
//*   фция   method   Object
//! showName.call(user)
//todo The apply() method - array
//* foo.apply(thisArg, [arg1, arg2, ...])
//! function greet(str) {
//!     console.log(`${str}, ${this.username}, your room is ${this.room}!`);
//!   }
  
//!   const mango = {
//!     username: "Mango",
//!       room: 27
//!   };
  
//!   const poly = {
//!     username: "Poly",
//!       room: 191
//!   };
  
//!   greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
//!   greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"
  

// todo Bind() method and loss of context => new function - Створює і повертає нову функцію з прив'язаним контекстом

//* const boundFoo = foo.bind(thisArg, arg1, arg2, ...)

//! "use strict";

//! const customer = {
//!   username: "Jacob",
//! 	sayHello() {
//! 		console.log(`Hello, ${this.username}!`);
//!   }
//! };

//! customer.sayHello(); // "Hello, Jacob!"

//! const greet = customer.sayHello.bind(customer);

//! greet(); // "Hello, Jacob!"


// "use strict";

// const library = {
// 	books: 1923,
// 	logBookCount() {
// 		console.log(this.books);
// 	}
// };

// function showBooks(callback) {
// 	callback()
// }

// showBooks(library.logBookCount); - TypeError: Cannot read properties of undefined (reading 'books') ===>
//! showBooks(library.logBookCount.bind(library)) --> this===library

// todo Контекст **this** усередині стрілочної функції визначається місцем її оголошення, а не виклику.
//todo 2.Стрілочні функції ігнорують наявність суворого режиму. Тому в глобальному контексті у стрілці завжди this посилається на об'єкт window.
//todo 3.Неможливо змінити значення this усередині стрілочних функцій після її оголошення. Методи call, apply і bind не впливають на значення this у стрілках.
// todo this завжди має одне й те саме значення в стрілочній функції

// const showThis = () => {
//     console.log("this in showThis: ", this);
//   };
  
//!   showThis(); // this in showThis: window - this усередині стрілки посилається на контекст батьківської області видимості
  
// todo Method Object.create(obj) [[Prototype]]
// * Object.create(obj)
//! const animal = {
//!     legs: 4,
//!   };
  
//!   const dog = Object.create(animal);
//!   dog.name = "Mango";
  
//!  console.log(dog); // { name: "Mango", [[Prototype]]: animal }
  
// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
//   };
  
// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
//   console.log(child.hasOwnProperty("age"));

// todo Prototype check isPrototypeOf - перевірити, чи є об'єкт прототипом іншого об'єкта

//* objA.isPrototypeOf(objB)

//! const customer = {
//! 	username: "Jacob"
//! };

//! const animal = { 
// !	legs: 4 
//! };

//! const dog = Object.create(animal);
//! dog.name = "Mango";

//! console.log(dog); // { name: "Mango", [[Prototype]]: animal }

//! console.log(animal.isPrototypeOf(dog)); // true
//! console.log(dog.isPrototypeOf(animal)); // false
//! console.log(customer.isPrototypeOf(dog)); // false

//todo Proper and non-proprietary properties - Цей метод перевіряє наявність власної властивості з ім'ям key і повертає true, якщо є, і false в іншому випадку.

// * obj.hasOwnProperty(key)

//! console.log(dog.hasOwnProperty("name")); // true
//! console.log(dog.hasOwnProperty("legs")); // false

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = "Mango";

//! for (const key in dog) {       for(const key of Object.keys(dog)) {
//! if(dog.hasOwnProperty(key)) {   console.log(key); // "name"
//! console.log(key); // "name"    }
// 	}
// }

//! console.log(Object.keys(dog)); // ["name"]
//! console.log(Object.values(dog)); // ["Mango"]

// todo Prototype chains  - c конца

// const objC = { c: "objC prop" };

//! const objB = Object.create(objC);
// objB.b = "objB prop";

// const objA = Object.create(objB);
// objA.a = "objA prop";

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }

// todo  undefined - Якщо в об'єкті та його прототипі немає такої властивості

//? Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.

// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
//   };
  
//   const parent = Object.create(ancestor);
//   parent.name = "Stacey";
//   parent.surname = "Moore";
//   parent.age = 54;
  
//   const child = Object.create(parent);
//   child.name = "Jason";
//   child.age = 27;
  
//todo class

//* class User {
//*     // Тіло класу
//*   }

// todo Operator new - екземпляр класу User
//* class User {
//*     // Тіло класу
//*   }
  
//!   const mango = new User(); - екземпляр класу User
//!   console.log(mango); // {}
  
//*   const poly = new User();
//*   console.log(poly); // {}

// class Car {

// }

// const mango = new Car();

// todo constructor() - Для ініціалізації екземпляра класу

//* class User {
//*     // Синтаксис оголошення методу класу
//*     constructor() {
//*           // ...
//*     }
//*   }

//! class User {
//!     constructor(name, email) {
//!           console.log(name, email);
//!     }
//!   }
  
//!   const mango = new User("Mango", "mango@mail.com"); // "Mango mango@mail.com"
//!   console.log(mango); // {}

// todo this 

//! class User {
//!     constructor(name, email) {
//!       // Ініціалізація властивостей екземпляра
//!       this.name = name;
//!       this.email = email;
//!     }
//!   }
  
//!   const mango = new User("Mango", "mango@mail.com");
//!   console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }
  
//!   const poly = new User("Poly", "poly@mail.com");
//!   console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
  
// ? Додай класу Car метод constructor, який приймає три параметри:

// ? brand - марка автомобіля
// ? model - модель автомобіля
// ? price - ціна автомобіля
// ? Клас Car повинен створювати об'єкт з одноіменними властивостями brand,  model і price, які отримують свої значення з аргументів, переданих при  створенні нового екземпляра за допомогою оператора new.
 
// class Car {
//     constructor(brand, model, price) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
// }

// const car1 = new Car("Audi", "Q3", 36000);
// console.log(car1);
  

// todo object of paramerts

// class User {
//     constructor(params) {
//!       this.name = params.name;
//!       this.email = params.email;
//     }
//   }
  
// !  const mango = new User({
// !    name: "Mango",
// !    email: "mango@mail.com",
//   });
  
//   console.log(mango); 
//    { name: "Mango", email: "mango@mail.com" }
  
//? Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price.

// class Car {
//     constructor(cars) {
//         this.brand = cars.brand;
//         this.model = cars.model;
//         this.price = cars.price;
//     }
// }

// const car1 = new Car({ brand: "BMW", model: "X5", price: 58900 });
// console.log(car1);

// todo method of Class

// class User {
//     constructor(params) {
//       this.name = params.name;
//       this.email = params.email;
//     }
  
//     getEmail() {
//       return this.email;
//     }
  
//     changeEmail(newEmail) {
//       this.email = newEmail;
//     }
//   }

//   const mango = new User({ 
// 	name: "Mango", 
// 	email: "mango@mail.com" 
// });

// console.log(mango.getEmail()); // "mango@mail.com"

// mango.changeEmail("new@mail.com");

// console.log(mango.getEmail()); // "new@mail.com"

//? Додай класу Car два методи.

//? getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
//? changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на значення параметра newPrice.

// class Car {
//     constructor(cars) {
//         this.brand = cars.brand;
//         this.model = cars.model;
//         this.price = cars.price;
//     }


// getPrice() {
//     return this.price;
// }

// changePrice(newPrice) {
//     this.price = newPrice;
// }
// }

  
// todo Посилання на властивість prototype класу - зберігається у властивості [[Prototype]] екземпляра класу
// todo У властивість prototype класу - записуються оголошені методи класу

//! class User {
//!     name;
//!     #email;
  
//!     constructor(params) {
//!       this.name = params.name;
//!       this.#email = params.email;
//!     }
  
//!     getEmail() {
//!       return this.#email;
//!     }
  
//!     changeEmail(newEmail) {
//!       this.#email = newEmail;
//!     }
//!   }
  
//!   const mango = new User({
//!     name: "Mango",
//!     email: "mango@mail.com",
//!   });
  
//!   console.log(mango.getEmail()); // "mango@mail.com"
//!   mango.changeEmail("mango@supermail.com");
//!   console.log(mango.getEmail()); // "mango@supermail.com"
  

//? Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

//? getBrand() - повертає значення приватної властивості brand.
//? changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.


// class Car {
//     #brand;
//     constructor (params) {
//         this.#brand = params.brand;
//         this.price = params.price;
//         this.model = params.model;
//     }
//     getPrice() {
//         return this.price;
//       }
    
//       changePrice(newPrice) {
//         this.price = newPrice;
//       }
    
//       getBrand(){
//         return this.#brand;
//       }
    
//     changeBrand(newBrand) {
//       this.#brand = newBrand;
//     }  
//     }

// todo 

    // class User {
    //     name;
    //     #email;
      
    //     constructor(params) {
    //       this.name = params.name;
    //       this.#email = params.email;
    //     }
      
    //     // Публічний метод для отримання електронної пошти
    //     getEmail() {
    //       return this.#email;
    //     }
      
    //!     // Публічний метод для зміни електронної пошти
    //!     changeEmail(newEmail) {
    //!       if (this.#validateEmail(newEmail)) {
    //!         this.#email = newEmail;
    //!       } else {
    //!         console.log('Invalid email format');
    //!       }
    //!     }
      
    //!     // Приватний метод для валідації електронної пошти
    //!     #validateEmail(email) {
    //!       return email.includes('@');
    //!     }
    //!   }
      
    //   const mango = new User({
    //     name: 'Mango',
    //     email: 'mango@mail.com',
    //   });
      
    //   // Спробуємо змінити електронну пошту
    //   mango.changeEmail('newmail.com'); // "Invalid email format"
    //   mango.changeEmail('new@mail.com');
    //   console.log(mango.getEmail()); // "new@mail.com"
      
    //   // Прямий виклик приватного методу ззовні призведе до помилки
    //   mango.#validateEmail('test'); // Помилка
      
    //   todo GET + SET

    // class User {
    //     #email;
      
    //     constructor(params) {
    //       this.name = params.name;
    //       this.#email = params.email;
    //     }
      
    //*     // Геттер email - повертаємо значення приватної властивості #email 
    //*     get email() {
    //*       return this.#email;
    //*     }
      
    //*     // Сеттер email - змінюємо її значення за допомогою сеттера
    //*     set email(newEmail) {
    //*       this.#email = newEmail;
    //*     }
    //*   }

    //? Виконай рефакторинг класу Car. Додатково до приватної властивості #brand зроби приватними властивості model і price. Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи на геттери та сеттери brand, model і price, для взаємодії з приватними властивостями.

    // class Car {
    //     #brand;
    //     #model;
    //     #price;
    //     constructor(params) {
    //         this.#brand = params.brand;
    //         this.#model = params.model;
    //         this.#price = params.price;
    //     }

    //     get brand() {
    //         return this.#brand;
    //       }
        
    //       set brand(newBrand) {
    //         this.#brand = newBrand;
    //       }
        
    //       get model() {
    //         return this.model;
    //       }
        
    //       set model(newModel) {
    //         this.model = newModel;
    //       }
        
    //       get price() {
    //         return this.price;
    //       }
        
    //       set price(newPrice) {
    //         this.price = newPrice;
    //       }
    // }

    // todo static method

    //* class MyClass {
    //*     static myMethod() {
    //*       console.log("A static method");
    //*     }
    //*   }
      
    //*   MyClass.myMethod(); // "A static method"

    //! takenEmails - статичну властивість
// ! isEmailTaken - статичний метод

//? Додай класу Car публічний статичний метод checkPrice(price), що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичної властивості maxPrice.

//? Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
//? В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
//? Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як буде використовуватися метод checkPrice(price).

// class Car {
//         #brand;
//         #model;
//         #price;
//         constructor(params) {
//             this.#brand = params.brand;
//             this.#model = params.model;
//             this.#price = params.price;
//         }

//         get brand() {
//             return this.#brand;
//           }
        
//           set brand(newBrand) {
//             this.#brand = newBrand;
//           }
        
//           get model() {
//             return this.model;
//           }
        
//           set model(newModel) {
//             this.model = newModel;
//           }
        
//           get price() {
//             return this.price;
//           }
        
//           set price(newPrice) {
//             this.price = newPrice;
//           }
//     }


    // class Car {
    //     static #maxPrice = 50000;
    //!     static checkPrice(price){
    //!     if(price > Car.#maxPrice){
    //!       return "Error! Price exceeds the maximum";
    //!     };
    //!     return "Success! Price is within acceptable limits";
    //!   };
      
    //     constructor(params) {
    //       this.price = params.price;
    //     }
    //   }
      
    //   const audi = new Car({ price: 36000 });
    //   const bmw = new Car({ price: 64000 });
      
    //   console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
    //   console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

    // todo extends - дозволяє реалізувати наслідування класів


//* class Parent {}

 //* class Child extends Parent {
 //*     // ...
 //*   }

//  class User {
//     #email;
  
//     constructor(email) {
//       this.#email = email;
//     }
  
//     get email() {
//       return this.#email;
//     }
  
//     set email(newEmail) {
//       this.#email = newEmail;
//     }
//   }
  
//!   class ContentEditor extends User {
//!       // Тіло класу ContentEditor
//!   }
  
//   const editor = new ContentEditor("mango@mail.com");
//   console.log(editor); // { #email: "mango@mail.com" }
//   console.log(editor.email); // "mango@mail.com"
  
//? У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

//? Оголоси клас Admin, який наслідує від класу User
//? Додай класу Admin публічну статичну властивість role (рівень доступу), значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}

// class User {
//     #email;
//       constructor(email) {
//         this.#email = email;
//       }
    
//       get email() {
//         return this.#email;
//       }
    
//       set email(newEmail) {
//         this.#email = newEmail;
//       }
//     }
//     class Admin extends User {
//       static role = {BASIC: "basic", SUPERUSER: "superuser"}
//     }
    
  
// todo super(args) - це псевдонім конструктора батьківського класу.
  
//! class ContentEditor extends User {
//!     constructor(params) {
//!       // Виклик конструктора батьківського класу User
//!       super(params.email); 
  
// !      this.posts = params.posts;
// !    }
// !  }
      
//? Додай класу Admin метод constructor, який приймає один параметр params- об'єкт налаштувань з двома властивостями email і access. Додай класу Admin публічну властивість access, значення якої буде передаватися під час виклику конструктора.

//? Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра під оголошенням класу.
class User {
    email;
    constructor (email) {
        this._email = email;
    }
    get email() {
        return this._email;
    }
    set email(newEmail) {
        this._email = newEmail;
    }}

class Admin extends User {
        static role = {
            BASIC: "basic",
            SUPERUSER: "superuser",
          };
        constructor(params) {
            super(params.email);
            this.access = params.access;
        }
    }

    const mango = new Admin({
        email: "mango@mail.com",
        access: Admin.role.SUPERUSER,
      });


    //   todo 
    // Уявімо, що вище є оголошення класу User

// class ContentEditor extends User {
//     constructor(params) {
//       super(params.email);
//       this.posts = params.posts;
//     }
  
//!     addPost(post) {
//!       this.posts.push(post);
//!     }
//!   }
  
//   const editor = new ContentEditor({ 
//       email: "mango@mail.com", 
//       posts: [] 
//   });
  
//   console.log(editor); // { #email: "mango@mail.com", posts: [], addPost: f }
  
//   editor.addPost("post-1");
//   editor.addPost("post-2");
//   console.log(editor.posts); // ['post-1', 'post-2']
  
//? Додай класу Admin наступні властивості і методи.

//? Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
//? Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
//? Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.


// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   class Admin extends User {
//     static role = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
  
//     constructor(params) {
//       super(params.email);
//       this.access = params.access;
//       this.blacklistedEmails = [];
//     }

    

//     blacklist(email) {
//         this.blacklistedEmails.push(email);
//     }

//     isBlacklisted(email) {
//         return this.blacklistedEmails.includes(email);
//     }



//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     access: Admin.role.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.access); // "superuser"
  
//   mango.blacklist("poly@mail.com");
//   console.log(mango.blacklistedEmails); // ["poly@mail.com"]
//   console.log(mango.isBlacklisted("mango@mail.com")); // false
//   console.log(mango.isBlacklisted("poly@mail.com")); // true
  

