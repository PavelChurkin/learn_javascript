// ============================================
// ОБЪЕКТЫ В JAVASCRIPT
// ============================================

console.log("=== ОБЪЕКТЫ ===\n");

// Объект - коллекция пар ключ-значение

// --------------------------------------------
// 1. СОЗДАНИЕ ОБЪЕКТОВ
// --------------------------------------------

console.log("=== СОЗДАНИЕ ===");

// Литеральный синтаксис
const person = {
  name: "Иван",
  age: 30,
  city: "Москва"
};

console.log("Объект person:", person);

// Пустой объект
const empty = {};

// С вычисляемыми свойствами
const key = "динамический";
const obj = {
  [key]: "значение"
};
console.log("Динамическое свойство:", obj);

// --------------------------------------------
// 2. ДОСТУП К СВОЙСТВАМ
// --------------------------------------------

console.log("\n=== ДОСТУП К СВОЙСТВАМ ===");

const user = {
  name: "Мария",
  age: 25,
  email: "maria@example.com"
};

// Точечная нотация
console.log("Имя:", user.name);

// Квадратные скобки
console.log("Возраст:", user["age"]);

// Динамический доступ
const prop = "email";
console.log("Email:", user[prop]);

// Несуществующее свойство
console.log("Телефон:", user.phone); // undefined

// --------------------------------------------
// 3. ИЗМЕНЕНИЕ ОБЪЕКТОВ
// --------------------------------------------

console.log("\n=== ИЗМЕНЕНИЕ ===");

const car = {
  brand: "Toyota",
  model: "Camry"
};

console.log("Исходный:", car);

// Изменение свойства
car.model = "Corolla";
console.log("После изменения:", car);

// Добавление свойства
car.year = 2023;
console.log("После добавления:", car);

// Удаление свойства
delete car.year;
console.log("После удаления:", car);

// --------------------------------------------
// 4. МЕТОДЫ ОБЪЕКТОВ
// --------------------------------------------

console.log("\n=== МЕТОДЫ ===");

const calculator = {
  value: 0,
  add(n) {
    this.value += n;
    return this;
  },
  subtract(n) {
    this.value -= n;
    return this;
  },
  getValue() {
    return this.value;
  }
};

// Цепочка вызовов
calculator.add(10).subtract(3).add(5);
console.log("Результат:", calculator.getValue()); // 12

// --------------------------------------------
// 5. ПЕРЕБОР СВОЙСТВ
// --------------------------------------------

console.log("\n=== ПЕРЕБОР ===");

const product = {
  name: "Ноутбук",
  price: 50000,
  inStock: true
};

// for...in
console.log("for...in:");
for (let key in product) {
  console.log(` ${key}: ${product[key]}`);
}

// Object.keys
const keys = Object.keys(product);
console.log("Ключи:", keys);

// Object.values
const values = Object.values(product);
console.log("Значения:", values);

// Object.entries
const entries = Object.entries(product);
console.log("Пары:", entries);

// --------------------------------------------
// 6. КОПИРОВАНИЕ И ОБЪЕДИНЕНИЕ
// --------------------------------------------

console.log("\n=== КОПИРОВАНИЕ ===");

const original = { a: 1, b: 2 };

// Поверхностное копирование
const copy1 = { ...original };
const copy2 = Object.assign({}, original);

console.log("Копия 1:", copy1);
console.log("Копия 2:", copy2);

// Объединение объектов
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };

console.log("Объединённый:", merged);

// --------------------------------------------
// 7. ДЕСТРУКТУРИЗАЦИЯ
// --------------------------------------------

console.log("\n=== ДЕСТРУКТУРИЗАЦИЯ ===");

const userData = {
  name: "Пётр",
  age: 28,
  city: "Санкт-Петербург"
};

// Извлечение свойств
const { name, age } = userData;
console.log("Имя:", name, "Возраст:", age);

// С переименованием
const { city: userCity } = userData;
console.log("Город:", userCity);

// Со значениями по умолчанию
const { country = "Россия" } = userData;
console.log("Страна:", country);

// --------------------------------------------
// ИТОГИ
// --------------------------------------------

console.log("\n=== ИТОГИ ===");
console.log("✓ Объекты создаются с помощью {}");
console.log("✓ Доступ: obj.key или obj['key']");
console.log("✓ Методы - функции внутри объектов");
console.log("✓ Object.keys/values/entries для перебора");
console.log("✓ Spread оператор для копирования/объединения");
console.log("✓ Деструктуризация для извлечения свойств");
