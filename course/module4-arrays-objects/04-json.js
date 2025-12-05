// ============================================
// JSON - JavaScript Object Notation
// ============================================

console.log("=== JSON ===\n");

// JSON - формат обмена данными

// --------------------------------------------
// 1. JSON.stringify - ОБЪЕКТ В СТРОКУ
// --------------------------------------------

console.log("=== JSON.stringify ===");

const user = {
  name: "Иван",
  age: 30,
  active: true
};

// Преобразование в JSON
const jsonString = JSON.stringify(user);
console.log("JSON строка:", jsonString);
console.log("Тип:", typeof jsonString);

// С форматированием (отступы)
const formatted = JSON.stringify(user, null, 2);
console.log("Форматированный:\n" + formatted);

// --------------------------------------------
// 2. JSON.parse - СТРОКА В ОБЪЕКТ
// --------------------------------------------

console.log("\n=== JSON.parse ===");

const json = '{"name":"Мария","age":25}';
const parsed = JSON.parse(json);

console.log("Распарсенный:", parsed);
console.log("Имя:", parsed.name);

// --------------------------------------------
// 3. РАБОТА С МАССИВАМИ
// --------------------------------------------

console.log("\n=== JSON С МАССИВАМИ ===");

const users = [
  { id: 1, name: "Пётр" },
  { id: 2, name: "Анна" }
];

const usersJson = JSON.stringify(users);
console.log("Массив в JSON:", usersJson);

const usersBack = JSON.parse(usersJson);
console.log("Обратно в массив:", usersBack);

// --------------------------------------------
// 4. ОГРАНИЧЕНИЯ JSON
// --------------------------------------------

console.log("\n=== ОГРАНИЧЕНИЯ ===");

// Функции не сериализуются
const withMethod = {
  name: "Test",
  method: function() { }
};
console.log("С функцией:", JSON.stringify(withMethod)); // {"name":"Test"}

// undefined пропускается
const withUndefined = {
  a: 1,
  b: undefined,
  c: 3
};
console.log("С undefined:", JSON.stringify(withUndefined)); // {"a":1,"c":3}

// Symbol пропускается
const withSymbol = {
  a: 1,
  [Symbol("sym")]: "value"
};
console.log("С Symbol:", JSON.stringify(withSymbol)); // {"a":1}

// --------------------------------------------
// ИТОГИ
// --------------------------------------------

console.log("\n=== ИТОГИ ===");
console.log("✓ JSON.stringify - объект в строку");
console.log("✓ JSON.parse - строка в объект");
console.log("✓ JSON поддерживает: объекты, массивы, строки, числа, boolean, null");
console.log("✓ Не поддерживает: функции, undefined, Symbol, Date (преобразуется в строку)");
