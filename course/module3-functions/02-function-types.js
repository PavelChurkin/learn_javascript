// ============================================
// ТИПЫ ФУНКЦИЙ В JAVASCRIPT
// ============================================

console.log("=== ТИПЫ ФУНКЦИЙ ===\n");

// --------------------------------------------
// 1. FUNCTION DECLARATION (Объявление функции)
// --------------------------------------------

console.log("=== FUNCTION DECLARATION ===");

// Классическое объявление функции
function sayHello() {
  console.log("Привет!");
}

sayHello();

// Hoisting (всплытие) - можно вызывать до объявления
hoistedFunction(); // Работает!

function hoistedFunction() {
  console.log("Я всплыла наверх!");
}

// --------------------------------------------
// 2. FUNCTION EXPRESSION (Функциональное выражение)
// --------------------------------------------

console.log("\n=== FUNCTION EXPRESSION ===");

// Функция присваивается переменной
const greet = function() {
  console.log("Приветствую!");
};

greet();

// Именованное функциональное выражение
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // Можно использовать имя fact внутри
};

console.log("Факториал 5:", factorial(5));

// НЕ всплывает - нельзя вызвать до объявления
// notHoisted(); // Ошибка!
const notHoisted = function() {
  console.log("Меня нужно объявить до вызова");
};
notHoisted(); // Теперь работает

// --------------------------------------------
// 3. ARROW FUNCTIONS (Стрелочные функции) - ES6
// --------------------------------------------

console.log("\n=== ARROW FUNCTIONS ===");

// Синтаксис: (параметры) => { тело }
const add = (a, b) => {
  return a + b;
};

console.log("5 + 3 =", add(5, 3));

// Краткая форма (без фигурных скобок) - неявный return
const multiply = (a, b) => a * b;
console.log("4 × 5 =", multiply(4, 5));

// Один параметр - скобки можно опустить
const square = x => x * x;
console.log("Квадрат 7:", square(7));

// Без параметров - скобки обязательны
const getRandom = () => Math.random();
console.log("Случайное число:", getRandom());

// Возврат объекта - нужны скобки
const createUser = (name, age) => ({ name: name, age: age });
console.log("Пользователь:", createUser("Иван", 25));

// Многострочные стрелочные функции
const complexCalculation = (a, b) => {
  let sum = a + b;
  let product = a * b;
  return { sum, product };
};

console.log("Расчёты:", complexCalculation(3, 4));

// --------------------------------------------
// 4. СРАВНЕНИЕ ТИПОВ ФУНКЦИЙ
// --------------------------------------------

console.log("\n=== СРАВНЕНИЕ ===");

// Function Declaration
function fdExample(x) {
  return x * 2;
}

// Function Expression
const feExample = function(x) {
  return x * 2;
};

// Arrow Function
const afExample = x => x * 2;

console.log("Function Declaration:", fdExample(5));
console.log("Function Expression:", feExample(5));
console.log("Arrow Function:", afExample(5));

// --------------------------------------------
// 5. МЕТОДЫ ОБЪЕКТОВ
// --------------------------------------------

console.log("\n=== МЕТОДЫ ОБЪЕКТОВ ===");

// Метод объекта (ES5)
const calculator = {
  value: 0,
  add: function(n) {
    this.value += n;
    return this.value;
  },
  reset: function() {
    this.value = 0;
  }
};

console.log("Добавить 5:", calculator.add(5));
console.log("Добавить 3:", calculator.add(3));
calculator.reset();
console.log("После reset:", calculator.value);

// Сокращённый синтаксис методов (ES6)
const counter = {
  count: 0,
  increment() { // Короткая форма
    this.count++;
    return this.count;
  },
  decrement() {
    this.count--;
    return this.count;
  }
};

console.log("Инкремент:", counter.increment());
console.log("Инкремент:", counter.increment());
console.log("Декремент:", counter.decrement());

// --------------------------------------------
// 6. CONSTRUCTOR FUNCTIONS (Функции-конструкторы)
// --------------------------------------------

console.log("\n=== ФУНКЦИИ-КОНСТРУКТОРЫ ===");

// Функция-конструктор (с заглавной буквы)
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    return `Привет, я ${this.name}`;
  };
}

// Создание объекта с помощью new
const person1 = new Person("Иван", 30);
const person2 = new Person("Мария", 25);

console.log(person1.greet());
console.log(person2.greet());
console.log("person1:", person1);

// --------------------------------------------
// 7. ГЕНЕРАТОРЫ (Generator Functions)
// --------------------------------------------

console.log("\n=== ГЕНЕРАТОРЫ ===");

// Генератор - функция, которая может приостанавливаться
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log("yield 1:", gen.next().value);
console.log("yield 2:", gen.next().value);
console.log("yield 3:", gen.next().value);

// Генератор с циклом
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const ids = idGenerator();
console.log("ID 1:", ids.next().value);
console.log("ID 2:", ids.next().value);
console.log("ID 3:", ids.next().value);

// --------------------------------------------
// 8. ASYNC FUNCTIONS (Асинхронные функции)
// --------------------------------------------

console.log("\n=== АСИНХРОННЫЕ ФУНКЦИИ ===");

// Асинхронная функция возвращает Promise
async function fetchData() {
  return "Данные загружены";
}

// Вызов асинхронной функции
fetchData().then(data => console.log(data));

// async/await для работы с промисами
async function processData() {
  console.log("Начало обработки...");
  // Симуляция асинхронной операции
  const result = await new Promise(resolve => {
    setTimeout(() => resolve("Готово!"), 100);
  });
  console.log("Результат:", result);
}

processData();

// --------------------------------------------
// ИТОГИ
// --------------------------------------------

console.log("\n=== ИТОГИ ===");
console.log("✓ Function Declaration - классическое объявление (всплывает)");
console.log("✓ Function Expression - присваивание функции переменной");
console.log("✓ Arrow Functions - краткий синтаксис, нет своего this");
console.log("✓ Методы объектов - функции внутри объектов");
console.log("✓ Конструкторы - создание объектов с new");
console.log("✓ Генераторы - функции с yield для итераций");
console.log("✓ Async - асинхронные функции с await");
