// ============================================
// УПРАВЛЕНИЕ ЦИКЛАМИ: BREAK И CONTINUE
// ============================================

console.log("=== УПРАВЛЕНИЕ ЦИКЛАМИ ===\n");

// break и continue позволяют управлять выполнением циклов

// --------------------------------------------
// 1. ОПЕРАТОР BREAK
// --------------------------------------------

console.log("=== ОПЕРАТОР BREAK ===");

// break немедленно прерывает выполнение цикла

// Поиск элемента в массиве
let numbers = [5, 12, 8, 130, 44];
let searchValue = 130;
let foundIndex = -1;

console.log("Поиск числа", searchValue, "в массиве:");
for (let i = 0; i < numbers.length; i++) {
  console.log("Проверяем индекс", i, ":", numbers[i]);
  if (numbers[i] === searchValue) {
    foundIndex = i;
    console.log("Найдено! Прерываем цикл.");
    break; // Выходим из цикла, как только нашли
  }
}

if (foundIndex !== -1) {
  console.log(`Значение ${searchValue} найдено на позиции ${foundIndex}\n`);
}

// Поиск первого чётного числа
let mixedNumbers = [1, 3, 5, 8, 9, 11];
console.log("Поиск первого чётного числа:");
for (let i = 0; i < mixedNumbers.length; i++) {
  console.log("Проверяем:", mixedNumbers[i]);
  if (mixedNumbers[i] % 2 === 0) {
    console.log("Первое чётное:", mixedNumbers[i]);
    break;
  }
}

// break в while
console.log("\nbreak в while:");
let counter = 0;
while (true) {
  console.log("Итерация", counter);
  counter++;
  if (counter >= 3) {
    console.log("Достигнут лимит, выходим");
    break; // Выход из бесконечного цикла
  }
}

// break во вложенных циклах (прерывает только внутренний цикл)
console.log("\nbreak во вложенных циклах:");
for (let i = 0; i < 3; i++) {
  console.log("Внешний цикл, i =", i);
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      console.log("  break во внутреннем цикле при j = 1");
      break; // Прерывает только внутренний цикл
    }
    console.log("  Внутренний цикл, j =", j);
  }
}

// --------------------------------------------
// 2. МЕТКИ (LABELS) С BREAK
// --------------------------------------------

console.log("\n=== МЕТКИ (LABELS) С BREAK ===");

// Метки позволяют прервать внешний цикл из вложенного

// Поиск пары чисел с заданной суммой
console.log("Поиск пары чисел, дающих сумму 10:");
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let targetSum = 10;
let found = false;

// Метка для внешнего цикла
outerLoop: for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    console.log(`Проверяем: ${arr[i]} + ${arr[j]} = ${arr[i] + arr[j]}`);
    if (arr[i] + arr[j] === targetSum) {
      console.log(`Найдена пара: ${arr[i]} + ${arr[j]} = ${targetSum}`);
      found = true;
      break outerLoop; // Прерывает внешний цикл
    }
  }
}

// Поиск элемента в двумерном массиве
console.log("\nПоиск в двумерном массиве:");
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let searchFor = 5;

matrixSearch: for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] === searchFor) {
      console.log(`Найдено ${searchFor} в позиции [${i}][${j}]`);
      break matrixSearch; // Выходим из обоих циклов
    }
  }
}

// --------------------------------------------
// 3. ОПЕРАТОР CONTINUE
// --------------------------------------------

console.log("\n=== ОПЕРАТОР CONTINUE ===");

// continue пропускает текущую итерацию и переходит к следующей

// Пропуск чётных чисел
console.log("Вывод только нечётных чисел:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Пропускаем чётные числа
  }
  console.log(i);
}

// Пропуск определённых значений
let products = ["яблоко", "банан", "груша", "апельсин", "киви"];
let excludedProduct = "груша";

console.log("\nТовары (кроме", excludedProduct + "):");
for (let i = 0; i < products.length; i++) {
  if (products[i] === excludedProduct) {
    continue; // Пропускаем груши
  }
  console.log(products[i]);
}

// Обработка только положительных чисел
let values = [5, -3, 8, -1, 0, 12, -7];
let sum = 0;

console.log("\nСумма только положительных чисел:");
for (let i = 0; i < values.length; i++) {
  if (values[i] <= 0) {
    continue; // Пропускаем отрицательные и ноль
  }
  console.log("Добавляем:", values[i]);
  sum += values[i];
}
console.log("Итоговая сумма:", sum);

// continue в while
console.log("\ncontinue в while:");
let count = 0;
while (count < 5) {
  count++;
  if (count === 3) {
    console.log("Пропускаем значение", count);
    continue;
  }
  console.log("Обрабатываем значение", count);
}

// --------------------------------------------
// 4. CONTINUE С МЕТКАМИ
// --------------------------------------------

console.log("\n=== CONTINUE С МЕТКАМИ ===");

// continue с меткой переходит к следующей итерации внешнего цикла

console.log("Таблица умножения (пропуск некоторых строк):");
outerTable: for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log(`Пропускаем строку для ${i}`);
    continue outerTable; // Переходим к следующей итерации внешнего цикла
  }

  for (let j = 1; j <= 5; j++) {
    console.log(`${i} × ${j} = ${i * j}`);
  }
}

// --------------------------------------------
// 5. ПРАКТИЧЕСКИЕ ПРИМЕРЫ
// --------------------------------------------

console.log("\n=== ПРАКТИЧЕСКИЕ ПРИМЕРЫ ===");

// Валидация данных
console.log("Валидация списка email:");
let emails = ["user@example.com", "invalid-email", "admin@site.com", "", "test@domain.org"];

for (let i = 0; i < emails.length; i++) {
  // Пропускаем пустые строки
  if (!emails[i]) {
    console.log(`Email ${i}: пустая строка, пропускаем`);
    continue;
  }

  // Проверяем формат
  if (!emails[i].includes("@")) {
    console.log(`Email ${i}: ${emails[i]} - некорректный формат`);
    continue;
  }

  console.log(`Email ${i}: ${emails[i]} - валиден`);
}

// Поиск простых чисел (с оптимизацией)
console.log("\nПростые числа от 2 до 30:");
nextNumber: for (let num = 2; num <= 30; num++) {
  // Проверка делителей
  for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
    if (num % divisor === 0) {
      continue nextNumber; // Число не простое, переходим к следующему
    }
  }
  console.log(num); // Число простое
}

// Обработка данных с пропуском ошибок
console.log("\nОбработка данных с обработкой ошибок:");
let data = ["123", "456", "abc", "789", "xyz"];

for (let i = 0; i < data.length; i++) {
  let number = parseInt(data[i]);

  // Пропускаем некорректные данные
  if (isNaN(number)) {
    console.log(`Элемент ${i}: "${data[i]}" - ошибка преобразования, пропускаем`);
    continue;
  }

  console.log(`Элемент ${i}: ${data[i]} → ${number * 2}`);
}

// Поиск с множественными условиями
console.log("\nПоиск пользователя:");
let users = [
  { id: 1, name: "Иван", active: true },
  { id: 2, name: "Мария", active: false },
  { id: 3, name: "Пётр", active: true },
  { id: 4, name: "Анна", active: true }
];

let searchId = 3;

for (let i = 0; i < users.length; i++) {
  // Пропускаем неактивных пользователей
  if (!users[i].active) {
    console.log(`Пользователь ${users[i].name} неактивен, пропускаем`);
    continue;
  }

  // Ищем по ID
  if (users[i].id === searchId) {
    console.log(`Найден активный пользователь:`, users[i]);
    break;
  }
}

// Фильтрация с подсчётом
console.log("\nПодсчёт слов определённой длины:");
let words = ["кот", "собака", "слон", "муравей", "тигр", "бегемот"];
let minLength = 4;
let validWords = [];
let skippedCount = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i].length < minLength) {
    skippedCount++;
    continue; // Пропускаем короткие слова
  }
  validWords.push(words[i]);
}

console.log(`Слова длиной >= ${minLength}:`, validWords);
console.log(`Пропущено коротких слов: ${skippedCount}`);

// Обработка данных до первой ошибки
console.log("\nОбработка до первой критической ошибки:");
let tasks = [
  { name: "Task 1", status: "success" },
  { name: "Task 2", status: "warning" },
  { name: "Task 3", status: "error" },
  { name: "Task 4", status: "success" }
];

for (let i = 0; i < tasks.length; i++) {
  console.log(`Обработка: ${tasks[i].name}`);

  if (tasks[i].status === "error") {
    console.log("Критическая ошибка! Прерываем обработку.");
    break; // Останавливаем при ошибке
  }

  if (tasks[i].status === "warning") {
    console.log("Предупреждение, но продолжаем");
    continue; // Продолжаем при предупреждении
  }

  console.log(`${tasks[i].name} выполнен успешно`);
}

// --------------------------------------------
// 6. РАЗНИЦА МЕЖДУ BREAK И CONTINUE
// --------------------------------------------

console.log("\n=== РАЗНИЦА МЕЖДУ BREAK И CONTINUE ===");

console.log("С break (прерывает цикл полностью):");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("break при i = 3");
    break;
  }
  console.log("i =", i);
}

console.log("\nС continue (пропускает только текущую итерацию):");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("continue при i = 3");
    continue;
  }
  console.log("i =", i);
}

// --------------------------------------------
// ИТОГИ
// --------------------------------------------

console.log("\n=== ИТОГИ ===");
console.log("✓ break - полностью прерывает цикл");
console.log("✓ continue - пропускает текущую итерацию");
console.log("✓ Метки (labels) позволяют управлять вложенными циклами");
console.log("✓ break label - выход из помеченного цикла");
console.log("✓ continue label - переход к следующей итерации помеченного цикла");
console.log("✓ Используйте для оптимизации и избежания лишних итераций");
console.log("✓ Улучшают читаемость кода при правильном использовании");
