// ============================================
// ЦИКЛЫ В JAVASCRIPT
// ============================================

console.log("=== ЦИКЛЫ В JAVASCRIPT ===\n");

// Циклы позволяют выполнять код многократно

// --------------------------------------------
// 1. ЦИКЛ FOR
// --------------------------------------------

console.log("=== ЦИКЛ FOR ===");

// Синтаксис: for (инициализация; условие; инкремент) { код }
// Классический цикл со счётчиком
for (let i = 0; i < 5; i++) {
  console.log("Итерация", i);
}

// i = 0: начальное значение счётчика
// i < 5: условие продолжения (выполняется пока true)
// i++: увеличение счётчика после каждой итерации

// Обратный отсчёт
console.log("\nОбратный отсчёт:");
for (let i = 5; i > 0; i--) {
  console.log(i);
}
console.log("Пуск!");

// Изменение шага
console.log("\nЧётные числа от 0 до 10:");
for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

// Перебор массива
let fruits = ["яблоко", "банан", "апельсин", "груша"];
console.log("\nФрукты в массиве:");
for (let i = 0; i < fruits.length; i++) {
  console.log(i + ":", fruits[i]);
}

// Вложенные циклы (таблица умножения)
console.log("\nФрагмент таблицы умножения:");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} × ${j} = ${i * j}`);
  }
}

// Цикл с несколькими переменными
console.log("\nЦикл с двумя счётчиками:");
for (let i = 0, j = 10; i < 5; i++, j--) {
  console.log(`i = ${i}, j = ${j}`);
}

// Бесконечный цикл (осторожно!)
// for (;;) {
//   console.log("Это будет выполняться вечно!");
//   break; // Без break цикл никогда не остановится
// }

// --------------------------------------------
// 2. ЦИКЛ WHILE
// --------------------------------------------

console.log("\n=== ЦИКЛ WHILE ===");

// Синтаксис: while (условие) { код }
// Выполняется пока условие истинно

let counter = 0;
while (counter < 5) {
  console.log("Счётчик:", counter);
  counter++; // Важно: не забудьте изменить переменную!
}

// Поиск элемента в массиве
let numbers = [3, 7, 12, 5, 9];
let target = 12;
let index = 0;

while (index < numbers.length) {
  if (numbers[index] === target) {
    console.log(`\nНайдено число ${target} на позиции ${index}`);
    break; // Выходим из цикла
  }
  index++;
}

// Пример с неизвестным количеством итераций
let value = 100;
let iterations = 0;

console.log("\nУменьшение значения в два раза:");
while (value > 1) {
  console.log(`Итерация ${iterations}: ${value}`);
  value = value / 2;
  iterations++;
}
console.log(`Итого итераций: ${iterations}`);

// Бесконечный цикл с условием выхода
let password = "secret";
let attempts = 0;
let maxAttempts = 3;

console.log("\nСимуляция ввода пароля:");
while (true) {
  attempts++;
  console.log(`Попытка ${attempts}`);

  // В реальности здесь был бы ввод от пользователя
  let userInput = attempts === 2 ? "secret" : "wrong";

  if (userInput === password) {
    console.log("Пароль верный!");
    break;
  }

  if (attempts >= maxAttempts) {
    console.log("Превышено количество попыток");
    break;
  }
}

// --------------------------------------------
// 3. ЦИКЛ DO...WHILE
// --------------------------------------------

console.log("\n=== ЦИКЛ DO...WHILE ===");

// Синтаксис: do { код } while (условие)
// Выполняется минимум один раз, затем проверяется условие

let count = 0;
do {
  console.log("Выполнение:", count);
  count++;
} while (count < 3);

// Отличие от while: выполнится хотя бы раз, даже если условие false
let falseCondition = false;

console.log("\ndo...while с изначально false условием:");
do {
  console.log("Это выполнится один раз!");
} while (falseCondition);

console.log("\nwhile с изначально false условием:");
while (falseCondition) {
  console.log("Это не выполнится вообще!");
}

// Практический пример: меню
let choice = 0;
let menuIteration = 0;

console.log("\nСимуляция меню:");
do {
  console.log("--- МЕНЮ ---");
  console.log("1. Новая игра");
  console.log("2. Загрузить игру");
  console.log("3. Настройки");
  console.log("4. Выход");

  // Симуляция выбора пользователя
  menuIteration++;
  choice = menuIteration === 2 ? 4 : menuIteration;

  if (choice !== 4) {
    console.log(`Выбран пункт ${choice}`);
  }
} while (choice !== 4);

console.log("Выход из программы");

// --------------------------------------------
// 4. СРАВНЕНИЕ ЦИКЛОВ
// --------------------------------------------

console.log("\n=== СРАВНЕНИЕ ЦИКЛОВ ===");

// Одна и та же задача с разными циклами

// Задача: вывести числа от 1 до 5
console.log("С помощью for:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("\nС помощью while:");
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

console.log("\nС помощью do...while:");
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// --------------------------------------------
// 5. ПРАКТИЧЕСКИЕ ПРИМЕРЫ
// --------------------------------------------

console.log("\n=== ПРАКТИЧЕСКИЕ ПРИМЕРЫ ===");

// Сумма чисел от 1 до 100
let sum = 0;
for (let n = 1; n <= 100; n++) {
  sum += n;
}
console.log("Сумма чисел от 1 до 100:", sum);

// Факториал числа
let num = 5;
let factorial = 1;
for (let n = 1; n <= num; n++) {
  factorial *= n;
}
console.log(`Факториал ${num}:`, factorial);

// Фибоначчи (первые 10 чисел)
console.log("\nПоследовательность Фибоначчи:");
let fib1 = 0, fib2 = 1;
console.log(fib1);
console.log(fib2);

for (let i = 2; i < 10; i++) {
  let fibNext = fib1 + fib2;
  console.log(fibNext);
  fib1 = fib2;
  fib2 = fibNext;
}

// Проверка на простое число
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log("\nПростые числа от 1 до 20:");
for (let n = 1; n <= 20; n++) {
  if (isPrime(n)) {
    console.log(n);
  }
}

// Реверс строки
let text = "JavaScript";
let reversed = "";

for (let i = text.length - 1; i >= 0; i--) {
  reversed += text[i];
}

console.log("\nОригинальная строка:", text);
console.log("Перевёрнутая строка:", reversed);

// Подсчёт гласных в строке
let sentence = "Hello World";
let vowels = "aeiouAEIOU";
let vowelCount = 0;

for (let i = 0; i < sentence.length; i++) {
  if (vowels.includes(sentence[i])) {
    vowelCount++;
  }
}

console.log(`\nВ строке "${sentence}" гласных букв:`, vowelCount);

// Создание паттерна (пирамида из звёздочек)
console.log("\nПирамида:");
for (let i = 1; i <= 5; i++) {
  let spaces = " ".repeat(5 - i);
  let stars = "*".repeat(i * 2 - 1);
  console.log(spaces + stars);
}

// Поиск максимального элемента в массиве
let numArray = [45, 23, 67, 89, 12, 56];
let max = numArray[0];

for (let i = 1; i < numArray.length; i++) {
  if (numArray[i] > max) {
    max = numArray[i];
  }
}

console.log("\nМассив:", numArray);
console.log("Максимальное значение:", max);

// Генерация массива квадратов чисел
let squares = [];
for (let i = 1; i <= 10; i++) {
  squares.push(i * i);
}

console.log("\nКвадраты чисел от 1 до 10:", squares);

// Фильтрация массива (только чётные числа)
let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];

for (let i = 0; i < allNumbers.length; i++) {
  if (allNumbers[i] % 2 === 0) {
    evenNumbers.push(allNumbers[i]);
  }
}

console.log("\nВсе числа:", allNumbers);
console.log("Чётные числа:", evenNumbers);

// Умножение матриц (упрощённый пример 2x2)
let matrix1 = [[1, 2], [3, 4]];
let matrix2 = [[5, 6], [7, 8]];
let result = [[0, 0], [0, 0]];

console.log("\nУмножение матриц:");
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    for (let k = 0; k < 2; k++) {
      result[i][j] += matrix1[i][k] * matrix2[k][j];
    }
  }
}

console.log("Результат:", result);

// --------------------------------------------
// 6. ПРОИЗВОДИТЕЛЬНОСТЬ ЦИКЛОВ
// --------------------------------------------

console.log("\n=== СОВЕТЫ ПО ПРОИЗВОДИТЕЛЬНОСТИ ===");

// Плохо: вычисление length на каждой итерации
let items = ["a", "b", "c", "d", "e"];
console.log("Неоптимально:");
for (let i = 0; i < items.length; i++) {
  // items.length вычисляется каждый раз
  console.log(items[i]);
}

// Хорошо: сохраняем length в переменную
console.log("\nОптимально:");
let len = items.length;
for (let i = 0; i < len; i++) {
  console.log(items[i]);
}

// Или в самом цикле
console.log("\nОптимально (вариант 2):");
for (let i = 0, length = items.length; i < length; i++) {
  console.log(items[i]);
}

// --------------------------------------------
// ИТОГИ
// --------------------------------------------

console.log("\n=== ИТОГИ ===");
console.log("✓ for - когда известно количество итераций");
console.log("✓ while - когда количество итераций неизвестно");
console.log("✓ do...while - когда нужно выполнить минимум один раз");
console.log("✓ Не забывайте изменять переменную цикла!");
console.log("✓ Избегайте бесконечных циклов");
console.log("✓ Используйте break для выхода из цикла");
console.log("✓ Кэшируйте длину массива для лучшей производительности");
