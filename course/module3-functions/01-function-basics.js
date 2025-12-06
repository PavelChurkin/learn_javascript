// ============================================
// ОСНОВЫ ФУНКЦИЙ В JAVASCRIPT
// ============================================

console.log("=== ОСНОВЫ ФУНКЦИЙ ===\n");

// Функция - это блок кода, который можно вызывать многократно

// --------------------------------------------
// 1. ОБЪЯВЛЕНИЕ И ВЫЗОВ ФУНКЦИИ
// --------------------------------------------

console.log("=== ОБЪЯВЛЕНИЕ И ВЫЗОВ ===");

// Объявление функции (function declaration)
function greet() {
  console.log("Привет, мир!");
}

// Вызов функции
greet(); // Выводит: Привет, мир!
greet(); // Можно вызывать многократно

// Функция без вызова не выполняется
function notCalled() {
  console.log("Это не выведется");
}
// notCalled не вызвана, поэтому ничего не произойдёт

// --------------------------------------------
// 2. ПАРАМЕТРЫ И АРГУМЕНТЫ
// --------------------------------------------

console.log("\n=== ПАРАМЕТРЫ И АРГУМЕНТЫ ===");

// Функция с параметрами
function greetUser(name) {
  // name - это параметр функции
  console.log("Привет, " + name + "!");
}

// Вызов с аргументом
greetUser("Иван"); // "Иван" - это аргумент
greetUser("Мария");

// Несколько параметров
function introduce(firstName, lastName, age) {
  console.log(`Меня зовут ${firstName} ${lastName}, мне ${age} лет`);
}

introduce("Пётр", "Петров", 25);
introduce("Анна", "Иванова", 30);

// Порядок аргументов важен!
introduce("Петров", "Пётр", 25); // Неправильно - перепутан порядок

// Слишком много или мало аргументов
function showParams(a, b, c) {
  console.log("a =", a, "b =", b, "c =", c);
}

showParams(1, 2, 3); // Всё правильно
showParams(1, 2); // c будет undefined
showParams(1, 2, 3, 4, 5); // Лишние аргументы игнорируются

// --------------------------------------------
// 3. ПАРАМЕТРЫ ПО УМОЛЧАНИЮ
// --------------------------------------------

console.log("\n=== ПАРАМЕТРЫ ПО УМОЛЧАНИЮ ===");

// Старый способ (до ES6)
function oldGreet(name) {
  name = name || "Гость"; // Если name не передан, используем "Гость"
  console.log("Привет, " + name);
}

oldGreet("Иван"); // Привет, Иван
oldGreet(); // Привет, Гость

// Современный способ (ES6+)
function modernGreet(name = "Гость") {
  console.log("Привет, " + name);
}

modernGreet("Мария"); // Привет, Мария
modernGreet(); // Привет, Гость

// Несколько параметров со значениями по умолчанию
function createUser(name = "Аноним", role = "пользователь", active = true) {
  console.log(`Пользователь: ${name}, Роль: ${role}, Активен: ${active}`);
}

createUser("Иван", "admin", false);
createUser("Мария"); // role и active будут по умолчанию
createUser(); // Все параметры по умолчанию

// Значения по умолчанию могут быть выражениями
function calculateArea(width = 10, height = width * 2) {
  return width * height;
}

console.log("Площадь:", calculateArea(5, 10)); // 50
console.log("Площадь:", calculateArea(5)); // 50 (height = 5 * 2)
console.log("Площадь:", calculateArea()); // 200 (width = 10, height = 20)

// --------------------------------------------
// 4. ВОЗВРАТ ЗНАЧЕНИЙ (RETURN)
// --------------------------------------------

console.log("\n=== ВОЗВРАТ ЗНАЧЕНИЙ ===");

// Функция может возвращать значение
function add(a, b) {
  return a + b; // Возвращает сумму
}

let result = add(5, 3);
console.log("Результат:", result); // 8

// Использование возвращённого значения
let total = add(10, 20) + add(5, 15);
console.log("Итого:", total); // 50

// Функция без return возвращает undefined
function noReturn() {
  console.log("Эта функция ничего не возвращает");
}

let value = noReturn();
console.log("Возвращённое значение:", value); // undefined

// return прерывает выполнение функции
function earlyReturn(x) {
  if (x < 0) {
    return "Отрицательное число";
    console.log("Это никогда не выполнится"); // Недостижимый код
  }
  return "Положительное число";
}

console.log(earlyReturn(-5)); // "Отрицательное число"
console.log(earlyReturn(10)); // "Положительное число"

// Возврат сложных данных
function getUserData() {
  return {
    name: "Иван",
    age: 25,
    email: "ivan@example.com"
  };
}

let user = getUserData();
console.log("Пользователь:", user);

// Возврат массива
function getFirstThreeNumbers() {
  return [1, 2, 3];
}

let numbers = getFirstThreeNumbers();
console.log("Числа:", numbers);

// --------------------------------------------
// 5. ОБЛАСТЬ ВИДИМОСТИ ПАРАМЕТРОВ
// --------------------------------------------

console.log("\n=== ОБЛАСТЬ ВИДИМОСТИ ===");

// Параметры доступны только внутри функции
function scopeExample(param) {
  console.log("Внутри функции, param =", param);
}

scopeExample(100);
// console.log(param); // Ошибка! param не определён вне функции

// Локальные переменные
function localVariables() {
  let localVar = "Я локальная";
  console.log("Внутри функции:", localVar);
}

localVariables();
// console.log(localVar); // Ошибка! localVar не доступна

// Глобальные переменные доступны в функциях
let globalVar = "Я глобальная";

function accessGlobal() {
  console.log("Доступ к глобальной:", globalVar);
}

accessGlobal();

// Локальная переменная перекрывает глобальную
let variable = "глобальная";

function shadowVariable() {
  let variable = "локальная";
  console.log("Внутри функции:", variable); // локальная
}

shadowVariable();
console.log("Вне функции:", variable); // глобальная

// --------------------------------------------
// 6. ПРАКТИЧЕСКИЕ ПРИМЕРЫ
// --------------------------------------------

console.log("\n=== ПРАКТИЧЕСКИЕ ПРИМЕРЫ ===");

// Калькулятор
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Ошибка: деление на ноль";
  }
  return a / b;
}

console.log("10 × 5 =", multiply(10, 5));
console.log("20 ÷ 4 =", divide(20, 4));
console.log("10 ÷ 0 =", divide(10, 0));

// Проверка чётности
function isEven(number) {
  return number % 2 === 0;
}

console.log("4 чётное?", isEven(4)); // true
console.log("7 чётное?", isEven(7)); // false

// Проверка диапазона
function isInRange(value, min, max) {
  return value >= min && value <= max;
}

console.log("15 в диапазоне 10-20?", isInRange(15, 10, 20)); // true
console.log("5 в диапазоне 10-20?", isInRange(5, 10, 20)); // false

// Форматирование строки
function formatName(firstName, lastName) {
  // Капитализация первой буквы
  let formattedFirst = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
  let formattedLast = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
  return formattedFirst + " " + formattedLast;
}

console.log(formatName("иВАН", "пЕТРОВ")); // "Иван Петров"

// Вычисление возраста
function calculateAge(birthYear, currentYear = 2024) {
  return currentYear - birthYear;
}

console.log("Возраст (1990):", calculateAge(1990));
console.log("Возраст (1985) в 2020:", calculateAge(1985, 2020));

// Получение случайного числа
function getRandomInt(min, max) {
  // Возвращает случайное целое число от min до max (включительно)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Случайное число (1-10):", getRandomInt(1, 10));
console.log("Случайное число (50-100):", getRandomInt(50, 100));

// Конвертация температуры
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

console.log("25°C =", celsiusToFahrenheit(25).toFixed(1), "°F");
console.log("77°F =", fahrenheitToCelsius(77).toFixed(1), "°C");

// Валидация email
function isValidEmail(email) {
  // Простая проверка наличия @ и точки
  return email.includes("@") && email.includes(".");
}

console.log("user@example.com валиден?", isValidEmail("user@example.com")); // true
console.log("invalid-email валиден?", isValidEmail("invalid-email")); // false

// Вычисление скидки
function applyDiscount(price, discountPercent = 0) {
  let discount = price * (discountPercent / 100);
  return price - discount;
}

console.log("Цена 1000 руб, скидка 10%:", applyDiscount(1000, 10), "руб.");
console.log("Цена 500 руб, без скидки:", applyDiscount(500), "руб.");

// Склонение слов
function pluralize(count, singular, few, many) {
  // Склонение для русского языка
  let lastDigit = count % 10;
  let lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return many;
  }

  if (lastDigit === 1) {
    return singular;
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  }

  return many;
}

function formatCount(count, singular, few, many) {
  return count + " " + pluralize(count, singular, few, many);
}

console.log(formatCount(1, "товар", "товара", "товаров")); // "1 товар"
console.log(formatCount(2, "товар", "товара", "товаров")); // "2 товара"
console.log(formatCount(5, "товар", "товара", "товаров")); // "5 товаров"
console.log(formatCount(21, "товар", "товара", "товаров")); // "21 товар"

// --------------------------------------------
// 7. ДОКУМЕНТИРОВАНИЕ ФУНКЦИЙ
// --------------------------------------------

console.log("\n=== ДОКУМЕНТИРОВАНИЕ ФУНКЦИЙ ===");

/**
 * Вычисляет площадь прямоугольника
 * @param {number} width - Ширина прямоугольника
 * @param {number} height - Высота прямоугольника
 * @returns {number} Площадь прямоугольника
 */
function calculateRectangleArea(width, height) {
  return width * height;
}

console.log("Площадь (5 × 3):", calculateRectangleArea(5, 3));

/**
 * Проверяет, является ли строка палиндромом
 * @param {string} str - Строка для проверки
 * @returns {boolean} true если палиндром, иначе false
 */
function isPalindrome(str) {
  // Удаляем пробелы и приводим к нижнему регистру
  let cleaned = str.toLowerCase().replace(/\s/g, "");
  // Сравниваем с перевёрнутой строкой
  let reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

console.log("'радар' палиндром?", isPalindrome("радар")); // true
console.log("'А роза упала на лапу Азора' палиндром?", isPalindrome("А роза упала на лапу Азора")); // true
console.log("'привет' палиндром?", isPalindrome("привет")); // false

// --------------------------------------------
// ИТОГИ
// --------------------------------------------

console.log("\n=== ИТОГИ ===");
console.log("✓ Функции объявляются с помощью function имя() {}");
console.log("✓ Параметры - это переменные в определении функции");
console.log("✓ Аргументы - это значения, передаваемые при вызове");
console.log("✓ Параметры по умолчанию: function name(param = value) {}");
console.log("✓ return возвращает значение и прерывает выполнение");
console.log("✓ Функции создают собственную область видимости");
console.log("✓ Используйте понятные имена функций (глаголы)");
console.log("✓ Одна функция - одна задача (принцип единственной ответственности)");
