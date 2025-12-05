// ============================================
// ПРЕОБРАЗОВАНИЕ ТИПОВ В JAVASCRIPT
// ============================================

console.log("=== ПРЕОБРАЗОВАНИЕ ТИПОВ ===\n");

// JavaScript может преобразовывать типы автоматически (неявно) или по запросу (явно)

// --------------------------------------------
// 1. ПРЕОБРАЗОВАНИЕ В СТРОКУ (String)
// --------------------------------------------

console.log("=== ПРЕОБРАЗОВАНИЕ В СТРОКУ ===");

// Явное преобразование с помощью String()
let num = 123;
let str = String(num);
console.log("String(123):", str, "| Тип:", typeof str); // "123", string

// Метод toString()
let boolean = true;
let boolStr = boolean.toString();
console.log("true.toString():", boolStr, "| Тип:", typeof boolStr); // "true", string

// Неявное преобразование (с помощью конкатенации)
let implicitStr = 456 + "";
console.log("456 + '':", implicitStr, "| Тип:", typeof implicitStr); // "456", string

// Преобразование различных типов
console.log("String(true):", String(true)); // "true"
console.log("String(false):", String(false)); // "false"
console.log("String(null):", String(null)); // "null"
console.log("String(undefined):", String(undefined)); // "undefined"
console.log("String([1,2,3]):", String([1, 2, 3])); // "1,2,3"
console.log("String({a: 1}):", String({a: 1})); // "[object Object]"

// Шаблонные строки (автоматическое преобразование)
let age = 25;
let message = `Мне ${age} лет`; // age автоматически становится строкой
console.log("Шаблонная строка:", message);

// --------------------------------------------
// 2. ПРЕОБРАЗОВАНИЕ В ЧИСЛО (Number)
// --------------------------------------------

console.log("\n=== ПРЕОБРАЗОВАНИЕ В ЧИСЛО ===");

// Явное преобразование с помощью Number()
let strNum = "42";
let convertedNum = Number(strNum);
console.log("Number('42'):", convertedNum, "| Тип:", typeof convertedNum); // 42, number

// Унарный плюс (самый короткий способ)
let unaryPlus = +"99";
console.log("+'99':", unaryPlus, "| Тип:", typeof unaryPlus); // 99, number

// parseInt() - преобразует в целое число
let intFromString = parseInt("42.7");
console.log("parseInt('42.7'):", intFromString); // 42 (отбрасывает дробную часть)

// parseInt() с основанием системы счисления
let binary = parseInt("1010", 2); // Двоичное число
let hexadecimal = parseInt("FF", 16); // Шестнадцатеричное число
console.log("parseInt('1010', 2):", binary); // 10
console.log("parseInt('FF', 16):", hexadecimal); // 255

// parseFloat() - преобразует в число с плавающей точкой
let floatNum = parseFloat("3.14159");
console.log("parseFloat('3.14159'):", floatNum); // 3.14159

// Неявное преобразование (арифметические операции)
let implicitNum1 = "10" - 5; // Строка преобразуется в число
let implicitNum2 = "10" * 2;
let implicitNum3 = "20" / 4;
console.log("'10' - 5:", implicitNum1); // 5
console.log("'10' * 2:", implicitNum2); // 20
console.log("'20' / 4:", implicitNum3); // 5

// Особые случаи
console.log("Number(''):", Number("")); // 0 (пустая строка → 0)
console.log("Number('   '):", Number("   ")); // 0 (пробелы → 0)
console.log("Number(true):", Number(true)); // 1
console.log("Number(false):", Number(false)); // 0
console.log("Number(null):", Number(null)); // 0
console.log("Number(undefined):", Number(undefined)); // NaN
console.log("Number('123abc'):", Number("123abc")); // NaN (некорректная строка)

// Проверка на NaN
let notANumber = Number("abc");
console.log("isNaN('abc'):", isNaN(notANumber)); // true
console.log("Number.isNaN(NaN):", Number.isNaN(NaN)); // true (более строгая проверка)

// --------------------------------------------
// 3. ПРЕОБРАЗОВАНИЕ В BOOLEAN (Логический тип)
// --------------------------------------------

console.log("\n=== ПРЕОБРАЗОВАНИЕ В BOOLEAN ===");

// Явное преобразование с помощью Boolean()
console.log("Boolean(1):", Boolean(1)); // true
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean('hello'):", Boolean("hello")); // true
console.log("Boolean(''):", Boolean("")); // false

// Двойное отрицание (короткий способ)
console.log("!!'hello':", !!"hello"); // true
console.log("!!0:", !!0); // false

// Falsy значения (преобразуются в false):
// 0, -0, 0n, "", null, undefined, NaN, false
console.log("\nFalsy значения:");
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean(-0):", Boolean(-0)); // false
console.log("Boolean(0n):", Boolean(0n)); // false (BigInt 0)
console.log("Boolean(''):", Boolean("")); // false (пустая строка)
console.log("Boolean(null):", Boolean(null)); // false
console.log("Boolean(undefined):", Boolean(undefined)); // false
console.log("Boolean(NaN):", Boolean(NaN)); // false
console.log("Boolean(false):", Boolean(false)); // false

// Truthy значения (все остальное преобразуется в true)
console.log("\nTruthy значения:");
console.log("Boolean(1):", Boolean(1)); // true
console.log("Boolean(-1):", Boolean(-1)); // true
console.log("Boolean('0'):", Boolean("0")); // true (непустая строка!)
console.log("Boolean('false'):", Boolean("false")); // true (непустая строка!)
console.log("Boolean([]):", Boolean([])); // true (пустой массив!)
console.log("Boolean({}):", Boolean({})); // true (пустой объект!)
console.log("Boolean(Infinity):", Boolean(Infinity)); // true

// Неявное преобразование (в условиях)
let value = "hello";
if (value) {
  console.log("'hello' преобразуется в true в условии");
}

let emptyString = "";
if (!emptyString) {
  console.log("Пустая строка преобразуется в false");
}

// --------------------------------------------
// 4. ПРЕОБРАЗОВАНИЕ ОБЪЕКТОВ
// --------------------------------------------

console.log("\n=== ПРЕОБРАЗОВАНИЕ ОБЪЕКТОВ ===");

// Объекты имеют методы toString() и valueOf()
let obj = {
  value: 42,
  // Метод toString() вызывается при преобразовании в строку
  toString: function() {
    return "Объект со значением: " + this.value;
  },
  // Метод valueOf() вызывается при преобразовании в число
  valueOf: function() {
    return this.value;
  }
};

console.log("String(obj):", String(obj)); // "Объект со значением: 42"
console.log("Number(obj):", Number(obj)); // 42
console.log("obj + 10:", obj + 10); // 52 (valueOf)
console.log("obj + ' руб':", obj + " руб"); // "42 руб" (valueOf → toString)

// Массивы
let arr = [1, 2, 3];
console.log("String([1,2,3]):", String(arr)); // "1,2,3"
console.log("Number([5]):", Number([5])); // 5 (массив с одним элементом)
console.log("Number([1,2]):", Number([1, 2])); // NaN (массив с несколькими элементами)
console.log("Number([]):", Number([])); // 0 (пустой массив)

// --------------------------------------------
// 5. ОСОБЕННОСТИ ОПЕРАТОРА +
// --------------------------------------------

console.log("\n=== ОСОБЕННОСТИ ОПЕРАТОРА + ===");

// + работает по-разному в зависимости от операндов

// Если один из операндов строка → конкатенация
console.log("5 + '5':", 5 + "5"); // "55" (конкатенация)
console.log("'Hello' + 5:", "Hello" + 5); // "Hello5"
console.log("'5' + true:", "5" + true); // "5true"

// Если оба операнда числа → сложение
console.log("5 + 5:", 5 + 5); // 10

// Порядок имеет значение!
console.log("1 + 2 + '3':", 1 + 2 + "3"); // "33" (сначала 1+2=3, потом "3"+"3")
console.log("'1' + 2 + 3:", "1" + 2 + 3); // "123" (все становится строками)

// Другие операторы всегда преобразуют в число
console.log("'10' - 5:", "10" - 5); // 5
console.log("'10' * '2':", "10" * "2"); // 20
console.log("'20' / '4':", "20" / "4"); // 5

// --------------------------------------------
// 6. СРАВНЕНИЕ С ПРЕОБРАЗОВАНИЕМ
// --------------------------------------------

console.log("\n=== СРАВНЕНИЕ С ПРЕОБРАЗОВАНИЕМ ===");

// Нестрогое равенство (==) преобразует типы
console.log("5 == '5':", 5 == "5"); // true (строка преобразуется в число)
console.log("0 == false:", 0 == false); // true
console.log("'' == 0:", "" == 0); // true
console.log("null == undefined:", null == undefined); // true

// Строгое равенство (===) НЕ преобразует типы
console.log("5 === '5':", 5 === "5"); // false (разные типы)
console.log("0 === false:", 0 === false); // false
console.log("'' === 0:", "" === 0); // false
console.log("null === undefined:", null === undefined); // false

// Особые случаи
console.log("NaN == NaN:", NaN == NaN); // false (NaN не равен ничему, даже себе)
console.log("NaN === NaN:", NaN === NaN); // false

// Сравнение null и undefined
console.log("null == 0:", null == 0); // false (особый случай)
console.log("null >= 0:", null >= 0); // true (null → 0)
console.log("undefined == 0:", undefined == 0); // false
console.log("undefined > 0:", undefined > 0); // false (undefined → NaN)

// --------------------------------------------
// 7. ПРАКТИЧЕСКИЕ ПРИМЕРЫ
// --------------------------------------------

console.log("\n=== ПРАКТИЧЕСКИЕ ПРИМЕРЫ ===");

// Проверка пользовательского ввода
function processUserInput(input) {
  // Преобразуем в число
  let number = Number(input);

  // Проверяем, корректно ли преобразование
  if (isNaN(number)) {
    return "Ошибка: введите корректное число";
  }

  return number * 2;
}

console.log("processUserInput('10'):", processUserInput("10")); // 20
console.log("processUserInput('abc'):", processUserInput("abc")); // Ошибка

// Безопасное преобразование с значением по умолчанию
function safeParseInt(value, defaultValue = 0) {
  let parsed = parseInt(value);
  return isNaN(parsed) ? defaultValue : parsed;
}

console.log("safeParseInt('42'):", safeParseInt("42")); // 42
console.log("safeParseInt('invalid'):", safeParseInt("invalid")); // 0
console.log("safeParseInt('invalid', 100):", safeParseInt("invalid", 100)); // 100

// Форматирование цены
function formatPrice(price) {
  // Преобразуем в число и округляем
  let numPrice = Number(price);

  if (isNaN(numPrice)) {
    return "Некорректная цена";
  }

  // Преобразуем обратно в строку с форматированием
  return numPrice.toFixed(2) + " руб.";
}

console.log("formatPrice(99.9):", formatPrice(99.9)); // "99.90 руб."
console.log("formatPrice('150'):", formatPrice("150")); // "150.00 руб."

// Проверка на пустое значение
function isEmpty(value) {
  // Преобразуем в boolean
  return !value; // вернёт true для всех falsy значений
}

console.log("isEmpty(''):", isEmpty("")); // true
console.log("isEmpty(0):", isEmpty(0)); // true
console.log("isEmpty(null):", isEmpty(null)); // true
console.log("isEmpty('hello'):", isEmpty("hello")); // false

// --------------------------------------------
// ИТОГИ
// --------------------------------------------

console.log("\n=== ИТОГИ ===");
console.log("✓ Явное преобразование: String(), Number(), Boolean()");
console.log("✓ Неявное преобразование: операторы +, -, *, /, ==");
console.log("✓ Falsy: 0, '', null, undefined, NaN, false");
console.log("✓ Используйте === для избежания неявного преобразования");
console.log("✓ Проверяйте NaN с помощью isNaN() или Number.isNaN()");
console.log("✓ parseInt/parseFloat для строк с числами");
console.log("✓ Унарный + для быстрого преобразования в число");
