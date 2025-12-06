// ============================================
// ПРОДВИНУТЫЕ КОНЦЕПЦИИ ФУНКЦИЙ
// ============================================

console.log("=== ПРОДВИНУТЫЕ ФУНКЦИИ ===\n");

// --------------------------------------------
// 1. CALLBACK FUNCTIONS (Функции обратного вызова)
// --------------------------------------------

console.log("=== CALLBACK FUNCTIONS ===");

// Callback - функция, переданная как аргумент
function processArray(arr, callback) {
  const result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, x => x * 2);
console.log("Удвоенные:", doubled);

// Асинхронный callback
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "Иван", age: 25 };
    callback(data);
  }, 100);
}

console.log("Запрос данных...");
fetchData(data => {
  console.log("Данные получены:", data);
});

// --------------------------------------------
// 2. IIFE (Немедленно вызываемое функциональное выражение)
// --------------------------------------------

console.log("\n=== IIFE ===");

// IIFE - функция, которая выполняется сразу после объявления
(function() {
  console.log("Я выполнилась немедленно!");
})();

// IIFE с параметрами
(function(name) {
  console.log("Привет, " + name + "!");
})("Мария");

// IIFE для создания приватной области
const module = (function() {
  let privateVar = "Приватная";

  return {
    getPrivate() {
      return privateVar;
    },
    setPrivate(value) {
      privateVar = value;
    }
  };
})();

console.log("Приватная переменная:", module.getPrivate());
module.setPrivate("Изменённая");
console.log("После изменения:", module.getPrivate());

// --------------------------------------------
// 3. РЕКУРСИЯ
// --------------------------------------------

console.log("\n=== РЕКУРСИЯ ===");

// Рекурсия - функция вызывает сама себя

// Факториал
function factorial(n) {
  if (n <= 1) return 1; // Базовый случай
  return n * factorial(n - 1); // Рекурсивный вызов
}

console.log("5! =", factorial(5)); // 120

// Числа Фибоначчи
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci(7):", fibonacci(7));

// Обход вложенной структуры
function sumNested(arr) {
  let sum = 0;
  for (let item of arr) {
    if (Array.isArray(item)) {
      sum += sumNested(item); // Рекурсия для вложенных массивов
    } else {
      sum += item;
    }
  }
  return sum;
}

const nested = [1, [2, 3], [4, [5, 6]]];
console.log("Сумма вложенного массива:", sumNested(nested)); // 21

// --------------------------------------------
// 4. HIGHER-ORDER FUNCTIONS (Функции высшего порядка)
// --------------------------------------------

console.log("\n=== ФУНКЦИИ ВЫСШЕГО ПОРЯДКА ===");

// Функция, которая возвращает функцию
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const triple = createMultiplier(3);
const double = createMultiplier(2);

console.log("3 × 5 =", triple(5));
console.log("2 × 5 =", double(5));

// Функция, принимающая функцию как аргумент
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

console.log("\nПовторение действия:");
repeat(3, i => console.log("Итерация " + i));

// Композиция функций
function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

const addOne = x => x + 1;
const multiplyByTwo = x => x * 2;

const addThenMultiply = compose(multiplyByTwo, addOne);
console.log("\nКомпозиция (5 + 1) × 2 =", addThenMultiply(5)); // 12

// --------------------------------------------
// 5. REST И SPREAD ПАРАМЕТРЫ
// --------------------------------------------

console.log("\n=== REST И SPREAD ===");

// Rest параметры (...) - собирает все аргументы в массив
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log("Сумма 1+2+3+4+5 =", sum(1, 2, 3, 4, 5));

// Spread оператор - разворачивает массив
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Объединённый:", combined);

// --------------------------------------------
// 6. ДЕСТРУКТУРИЗАЦИЯ ПАРАМЕТРОВ
// --------------------------------------------

console.log("\n=== ДЕСТРУКТУРИЗАЦИЯ ===");

// Деструктуризация объектов
function printUser({ name, age, city = "Неизвестно" }) {
  console.log(name + ", " + age + " лет, " + city);
}

printUser({ name: "Иван", age: 30, city: "Москва" });
printUser({ name: "Мария", age: 25 }); // city по умолчанию

// Деструктуризация массивов
function getFirstTwo([first, second]) {
  return { first, second };
}

console.log("Первые два:", getFirstTwo([10, 20, 30]));

// --------------------------------------------
// 7. CURRYING (Каррирование)
// --------------------------------------------

console.log("\n=== CURRYING ===");

// Каррирование - преобразование функции с несколькими аргументами
// в последовательность функций с одним аргументом

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log("Обычный вызов:", curriedAdd(1, 2, 3));
console.log("Каррированный:", curriedAdd(1)(2)(3));
console.log("Частичный:", curriedAdd(1, 2)(3));

// --------------------------------------------
// ИТОГИ
// --------------------------------------------

console.log("\n=== ИТОГИ ===");
console.log("✓ Callback - функция как аргумент");
console.log("✓ IIFE - немедленное выполнение");
console.log("✓ Рекурсия - функция вызывает себя");
console.log("✓ Higher-order - функции возвращают/принимают функции");
console.log("✓ Rest/Spread - работа с переменным числом аргументов");
console.log("✓ Деструктуризация - удобное извлечение данных");
console.log("✓ Currying - преобразование в цепочку вызовов");
