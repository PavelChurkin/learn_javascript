// ============================================
// СПЕЦИАЛЬНЫЕ ЦИКЛЫ: FOR...IN И FOR...OF
// ============================================

console.log("=== СПЕЦИАЛЬНЫЕ ЦИКЛЫ ===\n");

// --------------------------------------------
// 1. ЦИКЛ FOR...IN
// ============================================

console.log("=== ЦИКЛ FOR...IN ===");

// for...in перебирает ключи (свойства) объекта

// Перебор свойств объекта
let person = {
  name: "Иван",
  age: 30,
  city: "Москва",
  occupation: "Программист"
};

console.log("Свойства объекта person:");
for (let key in person) {
  // key - это имя свойства (строка)
  console.log(`${key}: ${person[key]}`);
}

// Подсчёт свойств объекта
let propertyCount = 0;
for (let key in person) {
  propertyCount++;
}
console.log("\nКоличество свойств:", propertyCount);

// for...in с массивом (не рекомендуется!)
let fruits = ["яблоко", "банан", "апельсин"];

console.log("\nfor...in с массивом (перебирает индексы):");
for (let index in fruits) {
  console.log(`Индекс ${index}: ${fruits[index]}`);
  console.log(`Тип индекса: ${typeof index}`); // Важно: индекс - строка!
}

// Проверка собственных свойств (hasOwnProperty)
let animal = {
  species: "Собака",
  name: "Бобик"
};

// Добавим свойство в прототип (для примера)
Object.prototype.globalProperty = "Глобальное свойство";

console.log("\nБез проверки hasOwnProperty:");
for (let key in animal) {
  console.log(`${key}: ${animal[key]}`);
}

console.log("\nС проверкой hasOwnProperty:");
for (let key in animal) {
  if (animal.hasOwnProperty(key)) {
    console.log(`${key}: ${animal[key]}`);
  }
}

// Очистка прототипа
delete Object.prototype.globalProperty;

// --------------------------------------------
// 2. ЦИКЛ FOR...OF
// --------------------------------------------

console.log("\n=== ЦИКЛ FOR...OF ===");

// for...of перебирает значения итерируемых объектов (массивы, строки, и др.)

// Перебор массива
let colors = ["красный", "зелёный", "синий", "жёлтый"];

console.log("Цвета:");
for (let color of colors) {
  // color - это само значение (не индекс!)
  console.log(color);
}

// Перебор строки
let text = "Привет";

console.log("\nСимволы в строке:");
for (let char of text) {
  console.log(char);
}

// Перебор Set (множество уникальных значений)
let uniqueNumbers = new Set([1, 2, 3, 4, 5, 2, 3]);

console.log("\nЭлементы Set:");
for (let num of uniqueNumbers) {
  console.log(num);
}

// Перебор Map (словарь ключ-значение)
let userRoles = new Map([
  ["admin", "Администратор"],
  ["editor", "Редактор"],
  ["viewer", "Наблюдатель"]
]);

console.log("\nЗаписи Map:");
for (let [key, value] of userRoles) {
  console.log(`${key}: ${value}`);
}

// Только ключи Map
console.log("\nТолько ключи Map:");
for (let key of userRoles.keys()) {
  console.log(key);
}

// Только значения Map
console.log("\nТолько значения Map:");
for (let value of userRoles.values()) {
  console.log(value);
}

// for...of НЕ работает с обычными объектами
let car = {
  brand: "Toyota",
  model: "Camry"
};

// Это вызовет ошибку:
// for (let value of car) { // Ошибка: car is not iterable
//   console.log(value);
// }

// Но можно перебрать ключи объекта через Object.keys()
console.log("\nПеребор объекта через Object.keys():");
for (let key of Object.keys(car)) {
  console.log(`${key}: ${car[key]}`);
}

// Или значения через Object.values()
console.log("\nПеребор значений объекта:");
for (let value of Object.values(car)) {
  console.log(value);
}

// Или пары ключ-значение через Object.entries()
console.log("\nПеребор пар ключ-значение:");
for (let [key, value] of Object.entries(car)) {
  console.log(`${key}: ${value}`);
}

// --------------------------------------------
// 3. СРАВНЕНИЕ FOR...IN И FOR...OF
// --------------------------------------------

console.log("\n=== СРАВНЕНИЕ FOR...IN И FOR...OF ===");

let numbers = [10, 20, 30, 40];

console.log("for...in (индексы):");
for (let index in numbers) {
  console.log(`Индекс ${index} (${typeof index}): ${numbers[index]}`);
}

console.log("\nfor...of (значения):");
for (let value of numbers) {
  console.log(`Значение: ${value} (${typeof value})`);
}

// --------------------------------------------
// 4. ПРАКТИЧЕСКИЕ ПРИМЕРЫ
// --------------------------------------------

console.log("\n=== ПРАКТИЧЕСКИЕ ПРИМЕРЫ ===");

// Подсчёт символов в строке
let message = "Hello World";
let charCount = {};

for (let char of message) {
  if (char !== " ") { // Пропускаем пробелы
    charCount[char] = (charCount[char] || 0) + 1;
  }
}

console.log("Подсчёт символов в строке:");
for (let char in charCount) {
  console.log(`'${char}': ${charCount[char]}`);
}

// Суммирование значений в объекте
let prices = {
  apple: 50,
  banana: 30,
  orange: 45,
  grape: 80
};

let totalPrice = 0;
console.log("\nЦены товаров:");
for (let product in prices) {
  console.log(`${product}: ${prices[product]} руб.`);
  totalPrice += prices[product];
}
console.log("Итого:", totalPrice, "руб.");

// Поиск максимального значения в объекте
let scores = {
  player1: 150,
  player2: 200,
  player3: 175,
  player4: 190
};

let maxScore = 0;
let topPlayer = "";

for (let player in scores) {
  if (scores[player] > maxScore) {
    maxScore = scores[player];
    topPlayer = player;
  }
}

console.log(`\nЛучший игрок: ${topPlayer} с результатом ${maxScore}`);

// Фильтрация массива
let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];

for (let num of allNumbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

console.log("\nВсе числа:", allNumbers);
console.log("Чётные числа:", evenNumbers);

// Объединение массивов
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combined = [];

for (let item of array1) {
  combined.push(item);
}

for (let item of array2) {
  combined.push(item);
}

console.log("\nОбъединённый массив:", combined);

// Проверка наличия свойств
let config = {
  host: "localhost",
  port: 8080,
  debug: true
};

let requiredKeys = ["host", "port", "database"];
let missingKeys = [];

console.log("\nПроверка конфигурации:");
for (let key of requiredKeys) {
  if (!(key in config)) {
    missingKeys.push(key);
  }
}

if (missingKeys.length > 0) {
  console.log("Отсутствующие ключи:", missingKeys);
} else {
  console.log("Все обязательные ключи присутствуют");
}

// Преобразование объекта
let userData = {
  firstName: "иван",
  lastName: "петров",
  email: "ivan@example.com"
};

console.log("\nИсходные данные:");
for (let key in userData) {
  console.log(`${key}: ${userData[key]}`);
}

// Капитализация значений
let capitalizedData = {};
for (let key in userData) {
  let value = userData[key];
  capitalizedData[key] = value.charAt(0).toUpperCase() + value.slice(1);
}

console.log("\nОбработанные данные:");
for (let key in capitalizedData) {
  console.log(`${key}: ${capitalizedData[key]}`);
}

// --------------------------------------------
// 5. ДЕСТРУКТУРИЗАЦИЯ В ЦИКЛАХ
// --------------------------------------------

console.log("\n=== ДЕСТРУКТУРИЗАЦИЯ В ЦИКЛАХ ===");

// Деструктуризация массивов в for...of
let users = [
  ["Иван", 25],
  ["Мария", 30],
  ["Пётр", 28]
];

console.log("Пользователи:");
for (let [name, age] of users) {
  console.log(`${name}, возраст: ${age}`);
}

// Деструктуризация объектов
let products = [
  { name: "Ноутбук", price: 50000 },
  { name: "Мышь", price: 500 },
  { name: "Клавиатура", price: 1500 }
];

console.log("\nТовары:");
for (let { name, price } of products) {
  console.log(`${name}: ${price} руб.`);
}

// Деструктуризация с переименованием
let items = [
  { title: "Книга", cost: 300 },
  { title: "Ручка", cost: 50 }
];

console.log("\nТовары (с переименованием):");
for (let { title: itemName, cost: itemPrice } of items) {
  console.log(`${itemName} стоит ${itemPrice} руб.`);
}

// --------------------------------------------
// 6. СОВРЕМЕННЫЕ МЕТОДЫ МАССИВОВ
// --------------------------------------------

console.log("\n=== СОВРЕМЕННЫЕ МЕТОДЫ МАССИВОВ ===");

// forEach - альтернатива for...of с callback-функцией
let languages = ["JavaScript", "Python", "Java", "C++"];

console.log("Языки программирования (forEach):");
languages.forEach(function(language, index) {
  console.log(`${index + 1}. ${language}`);
});

// Стрелочная функция (более краткая форма)
console.log("\nЯзыки (forEach со стрелочной функцией):");
languages.forEach((language, index) => {
  console.log(`${index + 1}. ${language}`);
});

// map - создаёт новый массив на основе преобразования
let nums = [1, 2, 3, 4, 5];
let doubled = nums.map(num => num * 2);
console.log("\nИсходный массив:", nums);
console.log("Удвоенные значения:", doubled);

// filter - фильтрует массив
let ages = [12, 18, 25, 16, 30, 14];
let adults = ages.filter(age => age >= 18);
console.log("\nВсе возраста:", ages);
console.log("Совершеннолетние:", adults);

// reduce - сводит массив к одному значению
let values = [1, 2, 3, 4, 5];
let sum = values.reduce((accumulator, current) => accumulator + current, 0);
console.log("\nЗначения:", values);
console.log("Сумма:", sum);

// --------------------------------------------
// ИТОГИ
// --------------------------------------------

console.log("\n=== ИТОГИ ===");
console.log("✓ for...in - перебирает ключи объекта (свойства)");
console.log("✓ for...of - перебирает значения итерируемых объектов");
console.log("✓ for...in с массивами возвращает индексы (строки!)");
console.log("✓ for...of с массивами возвращает значения");
console.log("✓ Для объектов используйте Object.keys/values/entries с for...of");
console.log("✓ forEach/map/filter/reduce - современная альтернатива циклам");
console.log("✓ Деструктуризация упрощает работу с данными в циклах");
