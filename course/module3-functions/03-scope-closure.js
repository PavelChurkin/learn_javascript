// ============================================
// ОБЛАСТЬ ВИДИМОСТИ И ЗАМЫКАНИЯ
// ============================================

console.log("=== ОБЛАСТЬ ВИДИМОСТИ И ЗАМЫКАНИЯ ===\n");

// --------------------------------------------
// 1. ГЛОБАЛЬНАЯ ОБЛАСТЬ ВИДИМОСТИ
// --------------------------------------------

console.log("=== ГЛОБАЛЬНАЯ ОБЛАСТЬ ===");

// Глобальная переменная
let globalVar = "Доступна везде";

function accessGlobal() {
  console.log("Из функции:", globalVar);
}

accessGlobal();
console.log("Из глобальной области:", globalVar);

// --------------------------------------------
// 2. ЛОКАЛЬНАЯ ОБЛАСТЬ ВИДИМОСТИ
// --------------------------------------------

console.log("\n=== ЛОКАЛЬНАЯ ОБЛАСТЬ ===");

function localScope() {
  let localVar = "Локальная переменная";
  console.log("Внутри функции:", localVar);
}

localScope();
// console.log(localVar); // Ошибка! Не доступна снаружи

// --------------------------------------------
// 3. БЛОЧНАЯ ОБЛАСТЬ ВИДИМОСТИ
// --------------------------------------------

console.log("\n=== БЛОЧНАЯ ОБЛАСТЬ ===");

if (true) {
  let blockVar = "Блочная переменная";
  const blockConst = "Блочная константа";
  var functionVar = "Функциональная переменная";

  console.log("Внутри блока:", blockVar, blockConst, functionVar);
}

// console.log(blockVar); // Ошибка! let имеет блочную область
// console.log(blockConst); // Ошибка! const имеет блочную область
console.log("Вне блока (var):", functionVar); // Работает! var игнорирует блоки

// --------------------------------------------
// 4. ВЛОЖЕННЫЕ ОБЛАСТИ ВИДИМОСТИ
// --------------------------------------------

console.log("\n=== ВЛОЖЕННЫЕ ОБЛАСТИ ===");

function outer() {
  let outerVar = "Внешняя";

  function inner() {
    let innerVar = "Внутренняя";
    console.log("Доступ к внешней:", outerVar);
    console.log("Доступ к внутренней:", innerVar);
  }

  inner();
  // console.log(innerVar); // Ошибка! innerVar не доступна
}

outer();

// --------------------------------------------
// 5. ЗАМЫКАНИЯ (CLOSURES)
// --------------------------------------------

console.log("\n=== ЗАМЫКАНИЯ ===");

// Замыкание - функция, которая "запоминает" переменные из внешней области

function createCounter() {
  let count = 0; // Приватная переменная

  return function() {
    count++; // Доступ к переменной внешней функции
    return count;
  };
}

const counter = createCounter();
console.log("Счёт 1:", counter()); // 1
console.log("Счёт 2:", counter()); // 2
console.log("Счёт 3:", counter()); // 3

// Каждое замыкание независимо
const counter2 = createCounter();
console.log("Новый счётчик:", counter2()); // 1

// Приватные переменные через замыкание
function createBankAccount(initialBalance) {
  let balance = initialBalance; // Приватная переменная

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) {
        return "Недостаточно средств";
      }
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
console.log("\nБаланс:", account.getBalance());
console.log("Внесено 500:", account.deposit(500));
console.log("Снято 200:", account.withdraw(200));
console.log("Итого:", account.getBalance());
// console.log(balance); // Ошибка! balance приватная

// --------------------------------------------
// 6. ПРАКТИЧЕСКИЕ ПРИМЕРЫ ЗАМЫКАНИЙ
// --------------------------------------------

console.log("\n=== ПРАКТИЧЕСКИЕ ПРИМЕРЫ ===");

// Генератор уникальных ID
function createIdGenerator(prefix = "id") {
  let nextId = 1;

  return function() {
    return `${prefix}-${nextId++}`;
  };
}

const userId = createIdGenerator("user");
const postId = createIdGenerator("post");

console.log(userId()); // user-1
console.log(userId()); // user-2
console.log(postId()); // post-1

// Кэширование результатов (мемоизация)
function memoize(fn) {
  const cache = {};

  return function(arg) {
    if (cache[arg] !== undefined) {
      console.log(`  Из кэша: ${arg}`);
      return cache[arg];
    }
    console.log(`  Вычисляем: ${arg}`);
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
}

const slowSquare = memoize(x => x * x);

console.log("\nПервый вызов square(5):", slowSquare(5));
console.log("Второй вызов square(5):", slowSquare(5)); // Из кэша
console.log("Первый вызов square(10):", slowSquare(10));

// Частичное применение (partial application)
function multiply(a, b) {
  return a * b;
}

function partial(fn, a) {
  return function(b) {
    return fn(a, b);
  };
}

const multiplyBy5 = partial(multiply, 5);
console.log("\n5 × 3 =", multiplyBy5(3));
console.log("5 × 7 =", multiplyBy5(7));

// --------------------------------------------
// ИТОГИ
// --------------------------------------------

console.log("\n=== ИТОГИ ===");
console.log("✓ Глобальная область - доступна везде");
console.log("✓ Локальная область - внутри функции");
console.log("✓ Блочная область - let/const внутри блоков");
console.log("✓ Замыкание - функция + её лексическое окружение");
console.log("✓ Замыкания создают приватные переменные");
console.log("✓ Используются для: счётчиков, кэширования, модулей");
