// ============================================
// МАССИВЫ В JAVASCRIPT
// ============================================

console.log("=== МАССИВЫ ===\n");

// Массив - упорядоченная коллекция элементов

// --------------------------------------------
// 1. СОЗДАНИЕ МАССИВОВ
// --------------------------------------------

console.log("=== СОЗДАНИЕ ===");

// Литеральный синтаксис (рекомендуется)
const fruits = ["яблоко", "банан", "апельсин"];
console.log("Фрукты:", fruits);

// Конструктор Array
const numbers = new Array(1, 2, 3, 4, 5);
console.log("Числа:", numbers);

// Пустой массив
const empty = [];
console.log("Пустой:", empty);

// Массив с разными типами данных
const mixed = [1, "текст", true, null, { name: "объект" }];
console.log("Смешанный:", mixed);

// --------------------------------------------
// 2. ДОСТУП К ЭЛЕМЕНТАМ
// --------------------------------------------

console.log("\n=== ДОСТУП К ЭЛЕМЕНТАМ ===");

const colors = ["красный", "зелёный", "синий"];

// Индексация с 0
console.log("Первый элемент:", colors[0]);
console.log("Второй элемент:", colors[1]);
console.log("Третий элемент:", colors[2]);

// Длина массива
console.log("Длина массива:", colors.length);

// Последний элемент
console.log("Последний:", colors[colors.length - 1]);

// Несуществующий индекс возвращает undefined
console.log("Индекс 10:", colors[10]);

// --------------------------------------------
// 3. ИЗМЕНЕНИЕ МАССИВОВ
// --------------------------------------------

console.log("\n=== ИЗМЕНЕНИЕ ===");

const items = ["первый", "второй", "третий"];
console.log("Исходный:", items);

// Изменение элемента
items[1] = "изменённый";
console.log("После изменения:", items);

// Добавление в конец
items.push("четвёртый");
console.log("После push:", items);

// Добавление в начало
items.unshift("нулевой");
console.log("После unshift:", items);

// Удаление с конца
const last = items.pop();
console.log("pop вернул:", last);
console.log("После pop:", items);

// Удаление с начала
const first = items.shift();
console.log("shift вернул:", first);
console.log("После shift:", items);

// --------------------------------------------
// 4. МЕТОДЫ ПОИСКА
// --------------------------------------------

console.log("\n=== ПОИСК ===");

const nums = [10, 20, 30, 40, 50];

// indexOf - индекс первого вхождения
console.log("Индекс 30:", nums.indexOf(30)); // 2
console.log("Индекс 99:", nums.indexOf(99)); // -1 (не найдено)

// includes - проверка наличия
console.log("Есть 40?", nums.includes(40)); // true
console.log("Есть 100?", nums.includes(100)); // false

// find - первый элемент, удовлетворяющий условию
const found = nums.find(n => n > 25);
console.log("Первое число > 25:", found); // 30

// findIndex - индекс первого элемента по условию
const foundIndex = nums.findIndex(n => n > 25);
console.log("Индекс первого > 25:", foundIndex); // 2

// --------------------------------------------
// 5. ПЕРЕБОР МАССИВОВ
// --------------------------------------------

console.log("\n=== ПЕРЕБОР ===");

const letters = ["A", "B", "C"];

// forEach
console.log("forEach:");
letters.forEach((letter, index) => {
  console.log(`  ${index}: ${letter}`);
});

// for...of
console.log("for...of:");
for (const letter of letters) {
  console.log(` ${letter}`);
}

// Классический for
console.log("for:");
for (let i = 0; i < letters.length; i++) {
  console.log(`  ${i}: ${letters[i]}`);
}

// --------------------------------------------
// 6. ПРЕОБРАЗОВАНИЕ МАССИВОВ
// --------------------------------------------

console.log("\n=== ПРЕОБРАЗОВАНИЕ ===");

// slice - копирование части массива
const original = [1, 2, 3, 4, 5];
const sliced = original.slice(1, 4); // с индекса 1 до 4 (не включая 4)
console.log("slice(1, 4):", sliced); // [2, 3, 4]

// splice - изменение массива (удаление/вставка)
const arr = [1, 2, 3, 4, 5];
const removed = arr.splice(2, 2); // удалить 2 элемента с индекса 2
console.log("splice удалил:", removed); // [3, 4]
console.log("Остался:", arr); // [1, 2, 5]

// splice для вставки
arr.splice(1, 0, "новый"); // вставить с индекса 1, ничего не удалять
console.log("После вставки:", arr);

// concat - объединение массивов
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = arr1.concat(arr2);
console.log("Объединённый:", combined);

// join - превращение в строку
const words = ["Привет", "мир"];
const sentence = words.join(" ");
console.log("join(' '):", sentence);

// reverse - переворот массива (изменяет исходный!)
const toReverse = [1, 2, 3];
toReverse.reverse();
console.log("После reverse:", toReverse);

// sort - сортировка (изменяет исходный!)
const unsorted = [3, 1, 4, 1, 5];
unsorted.sort();
console.log("После sort:", unsorted);

// Правильная сортировка чисел
const toSort = [10, 5, 40, 25];
toSort.sort((a, b) => a - b); // По возрастанию
console.log("Числовая сортировка:", toSort);

// --------------------------------------------
// ИТОГИ
// --------------------------------------------

console.log("\n=== ИТОГИ ===");
console.log("✓ Массивы создаются с помощью []");
console.log("✓ Индексация начинается с 0");
console.log("✓ push/pop - работа с концом массива");
console.log("✓ shift/unshift - работа с началом массива");
console.log("✓ forEach/for...of - перебор элементов");
console.log("✓ slice/splice - копирование/изменение");
console.log("✓ find/filter - поиск элементов");
