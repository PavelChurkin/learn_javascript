// ============================================
// МЕТОДЫ МАССИВОВ
// ============================================

console.log("=== МЕТОДЫ МАССИВОВ ===\n");

// --------------------------------------------
// 1. MAP - ПРЕОБРАЗОВАНИЕ ЭЛЕМЕНТОВ
// --------------------------------------------

console.log("=== MAP ===");

// map создаёт новый массив, применяя функцию к каждому элементу
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);

console.log("Исходный:", numbers);
console.log("Удвоенный:", doubled);

// Практический пример
const prices = [100, 200, 300];
const withTax = prices.map(price => price * 1.2);
console.log("Цены с налогом:", withTax);

// --------------------------------------------
// 2. FILTER - ФИЛЬТРАЦИЯ
// --------------------------------------------

console.log("\n=== FILTER ===");

// filter создаёт новый массив из элементов, прошедших проверку
const ages = [12, 18, 25, 16, 30, 14];
const adults = ages.filter(age => age >= 18);

console.log("Все возраста:", ages);
console.log("Совершеннолетние:", adults);

// Фильтрация объектов
const users = [
  { name: "Иван", active: true },
  { name: "Мария", active: false },
  { name: "Пётр", active: true }
];

const activeUsers = users.filter(user => user.active);
console.log("Активные пользователи:", activeUsers);

// --------------------------------------------
// 3. REDUCE - СВЁРТКА
// --------------------------------------------

console.log("\n=== REDUCE ===");

// reduce сводит массив к одному значению
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((acc, n) => acc + n, 0);

console.log("Числа:", nums);
console.log("Сумма:", sum);

// Поиск максимума
const max = nums.reduce((max, n) => n > max ? n : max, nums[0]);
console.log("Максимум:", max);

// Группировка
const products = [
  { name: "яблоко", category: "фрукты" },
  { name: "морковь", category: "овощи" },
  { name: "банан", category: "фрукты" }
];

const grouped = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }
  acc[product.category].push(product.name);
  return acc;
}, {});

console.log("Группировка:", grouped);

// --------------------------------------------
// 4. КОМБИНАЦИИ МЕТОДОВ
// --------------------------------------------

console.log("\n=== КОМБИНАЦИИ ===");

// Цепочка методов
const result = [1, 2, 3, 4, 5, 6]
  .filter(n => n % 2 === 0)  // Только чётные: [2, 4, 6]
  .map(n => n * 10)          // Умножить на 10: [20, 40, 60]
  .reduce((sum, n) => sum + n, 0);  // Сумма: 120

console.log("Результат цепочки:", result);

// --------------------------------------------
// 5. ДРУГИЕ ПОЛЕЗНЫЕ МЕТОДЫ
// --------------------------------------------

console.log("\n=== ДРУГИЕ МЕТОДЫ ===");

// every - все элементы удовлетворяют условию
const allPositive = [1, 2, 3].every(n => n > 0);
console.log("Все положительные?", allPositive); // true

// some - хотя бы один элемент удовлетворяет условию
const hasNegative = [1, -2, 3].some(n => n < 0);
console.log("Есть отрицательные?", hasNegative); // true

// flat - выравнивание вложенных массивов
const nested = [1, [2, 3], [4, [5, 6]]];
const flattened = nested.flat(2); // глубина 2
console.log("Выровненный:", flattened);

// flatMap - map + flat
const words = ["привет мир", "JavaScript"];
const letters = words.flatMap(w => w.split(" "));
console.log("flatMap:", letters);

// --------------------------------------------
// ИТОГИ
// --------------------------------------------

console.log("\n=== ИТОГИ ===");
console.log("✓ map - преобразование каждого элемента");
console.log("✓ filter - отбор элементов по условию");
console.log("✓ reduce - свёртка в одно значение");
console.log("✓ every/some - проверка условий");
console.log("✓ Методы можно объединять в цепочки");
