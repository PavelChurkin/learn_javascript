// ============================================
// ТИПЫ ДАННЫХ В JAVASCRIPT
// ============================================

// JavaScript — это динамически типизированный язык
// Существует 8 основных типов данных

console.log("=== ПРИМИТИВНЫЕ ТИПЫ ДАННЫХ ===\n");

// --------------------------------------------
// 1. NUMBER (Число)
// --------------------------------------------

// Целые числа
let integer = 42;
console.log("Целое число:", integer, "| Тип:", typeof integer);

// Числа с плавающей точкой
let floatingPoint = 3.14159;
console.log("Дробное число:", floatingPoint, "| Тип:", typeof floatingPoint);

// Отрицательные числа
let negative = -100;
console.log("Отрицательное число:", negative);

// Специальные числовые значения
let infinity = Infinity; // Бесконечность
let negativeInfinity = -Infinity; // Отрицательная бесконечность
let notANumber = NaN; // Not a Number (не число)

console.log("Infinity:", infinity);
console.log("NaN:", notANumber, "| NaN === NaN:", NaN === NaN); // false!

// Математические операции
let sum = 10 + 5; // Сложение: 15
let difference = 10 - 5; // Вычитание: 5
let product = 10 * 5; // Умножение: 50
let quotient = 10 / 5; // Деление: 2
let remainder = 10 % 3; // Остаток от деления: 1
let power = 2 ** 3; // Возведение в степень: 8

console.log("Математика: 10+5=", sum, "10-5=", difference, "10*5=", product);

// --------------------------------------------
// 2. BIGINT (Большое целое число)
// --------------------------------------------

// Для работы с очень большими целыми числами
let bigNumber = 1234567890123456789012345678901234567890n;
console.log("\nBigInt:", bigNumber, "| Тип:", typeof bigNumber);

// Создание BigInt
let bigInt1 = BigInt(123); // Из числа
let bigInt2 = 456n; // Литерал с суффиксом n
console.log("BigInt операции:", bigInt1 + bigInt2); // 579n

// --------------------------------------------
// 3. STRING (Строка)
// --------------------------------------------

console.log("\n=== СТРОКИ ===");

// Способы создания строк
let singleQuotes = 'Одинарные кавычки';
let doubleQuotes = "Двойные кавычки";
let backticks = `Обратные кавычки (template literals)`;

console.log(singleQuotes);
console.log(doubleQuotes);
console.log(backticks);

// Конкатенация (объединение) строк
let firstName = "Иван";
let lastName = "Иванов";
let fullName = firstName + " " + lastName;
console.log("Полное имя:", fullName);

// Шаблонные строки (template literals)
let age = 25;
let greeting = `Привет, меня зовут ${firstName} и мне ${age} лет`;
console.log(greeting);

// Многострочные строки
let multiline = `Это
многострочная
строка`;
console.log(multiline);

// Экранирование символов
let escaped = "Он сказал: \"Привет!\""; // \" для кавычек внутри строки
let newLine = "Первая строка\nВторая строка"; // \n для новой строки
let tab = "Колонка1\tКолонка2"; // \t для табуляции

console.log("Экранирование:", escaped);
console.log(newLine);

// Свойства и методы строк
let text = "JavaScript";
console.log("Длина строки:", text.length); // 10
console.log("Верхний регистр:", text.toUpperCase()); // JAVASCRIPT
console.log("Нижний регистр:", text.toLowerCase()); // javascript
console.log("Символ по индексу 0:", text[0]); // J
console.log("Подстрока:", text.substring(0, 4)); // Java

// --------------------------------------------
// 4. BOOLEAN (Логический тип)
// --------------------------------------------

console.log("\n=== ЛОГИЧЕСКИЙ ТИП ===");

// Только два значения: true (истина) и false (ложь)
let isActive = true;
let isCompleted = false;

console.log("Активен:", isActive, "| Тип:", typeof isActive);
console.log("Завершён:", isCompleted);

// Результат сравнения — это boolean
let isGreater = 10 > 5; // true
let isEqual = 5 === 5; // true
let isNotEqual = 5 !== 10; // true

console.log("10 > 5:", isGreater);
console.log("5 === 5:", isEqual);

// Логические операции
let and = true && false; // Логическое И: false
let or = true || false; // Логическое ИЛИ: true
let not = !true; // Логическое НЕ: false

console.log("true && false:", and);
console.log("true || false:", or);
console.log("!true:", not);

// --------------------------------------------
// 5. UNDEFINED (Неопределённое значение)
// --------------------------------------------

console.log("\n=== UNDEFINED ===");

// Переменная объявлена, но значение не присвоено
let undefinedVariable;
console.log("Неопределённая переменная:", undefinedVariable); // undefined
console.log("Тип:", typeof undefinedVariable); // undefined

// Функция без return возвращает undefined
function noReturn() {
  // Нет return
}
console.log("Функция без return:", noReturn()); // undefined

// --------------------------------------------
// 6. NULL (Нулевое значение)
// --------------------------------------------

console.log("\n=== NULL ===");

// null — это специальное значение, означающее "ничего" или "пусто"
let emptyValue = null;
console.log("Пустое значение:", emptyValue); // null
console.log("Тип:", typeof emptyValue); // object (это баг в JavaScript!)

// Разница между null и undefined
console.log("null == undefined:", null == undefined); // true (нестрогое равенство)
console.log("null === undefined:", null === undefined); // false (строгое равенство)

// --------------------------------------------
// 7. SYMBOL (Символ) - уникальный идентификатор
// --------------------------------------------

console.log("\n=== SYMBOL ===");

// Создание уникального символа
let symbol1 = Symbol("description");
let symbol2 = Symbol("description");

console.log("Символ 1:", symbol1);
console.log("Символ 2:", symbol2);
console.log("symbol1 === symbol2:", symbol1 === symbol2); // false (всегда уникальны!)

// Использование в объектах (для уникальных ключей)
let id = Symbol("id");
let user = {
  name: "Иван",
  [id]: 12345 // Уникальное свойство
};
console.log("Объект с символом:", user);
console.log("Значение по символу:", user[id]);

// --------------------------------------------
// 8. OBJECT (Объект) - сложный тип
// --------------------------------------------

console.log("\n=== ОБЪЕКТЫ ===");

// Объект — это коллекция пар ключ-значение
let person = {
  name: "Мария", // Свойство name
  age: 30, // Свойство age
  isStudent: false, // Свойство isStudent
  greet: function() { // Метод объекта
    return "Привет!";
  }
};

console.log("Объект person:", person);
console.log("Имя:", person.name); // Доступ через точку
console.log("Возраст:", person["age"]); // Доступ через квадратные скобки
console.log("Метод:", person.greet()); // Вызов метода

// Массив — это специальный вид объекта
let colors = ["красный", "зелёный", "синий"];
console.log("Массив:", colors);
console.log("Первый элемент:", colors[0]); // Индексация с 0
console.log("Длина массива:", colors.length); // 3
console.log("Тип массива:", typeof colors); // object

// Проверка, является ли значение массивом
console.log("Это массив?:", Array.isArray(colors)); // true

// Дата — тоже объект
let now = new Date();
console.log("Текущая дата:", now);
console.log("Тип даты:", typeof now); // object

// --------------------------------------------
// ПРОВЕРКА ТИПОВ
// --------------------------------------------

console.log("\n=== ПРОВЕРКА ТИПОВ ===");

// Оператор typeof возвращает тип значения
console.log("typeof 42:", typeof 42); // number
console.log("typeof 'привет':", typeof "привет"); // string
console.log("typeof true:", typeof true); // boolean
console.log("typeof undefined:", typeof undefined); // undefined
console.log("typeof null:", typeof null); // object (баг!)
console.log("typeof Symbol():", typeof Symbol()); // symbol
console.log("typeof {}:", typeof {}); // object
console.log("typeof []:", typeof []); // object
console.log("typeof function(){}:", typeof function(){}); // function

// --------------------------------------------
// ПРЕОБРАЗОВАНИЕ ТИПОВ (краткий обзор)
// --------------------------------------------

console.log("\n=== АВТОМАТИЧЕСКОЕ ПРЕОБРАЗОВАНИЕ ===");

// Неявное преобразование
console.log("'5' + 3:", "5" + 3); // "53" (число преобразуется в строку)
console.log("'5' - 3:", "5" - 3); // 2 (строка преобразуется в число)
console.log("'5' * '2':", "5" * "2"); // 10 (обе строки в числа)

// Явное преобразование
console.log("Number('123'):", Number("123")); // 123
console.log("String(123):", String(123)); // "123"
console.log("Boolean(1):", Boolean(1)); // true
console.log("Boolean(0):", Boolean(0)); // false

// --------------------------------------------
// ИТОГИ
// --------------------------------------------

console.log("\n=== ИТОГИ ===");
console.log("Примитивные типы: number, bigint, string, boolean, undefined, null, symbol");
console.log("Сложный тип: object (включая массивы, функции, даты и т.д.)");
console.log("typeof — оператор для проверки типа");
console.log("JavaScript — динамически типизированный язык");
