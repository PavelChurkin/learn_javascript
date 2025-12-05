// ============================================
// ОПЕРАТОРЫ В JAVASCRIPT
// ============================================

console.log("=== ОПЕРАТОРЫ JAVASCRIPT ===\n");

// --------------------------------------------
// 1. АРИФМЕТИЧЕСКИЕ ОПЕРАТОРЫ
// --------------------------------------------

console.log("=== АРИФМЕТИЧЕСКИЕ ОПЕРАТОРЫ ===");

// Основные математические операции
let a = 10;
let b = 3;

// Сложение
let addition = a + b;
console.log(`${a} + ${b} = ${addition}`); // 13

// Вычитание
let subtraction = a - b;
console.log(`${a} - ${b} = ${subtraction}`); // 7

// Умножение
let multiplication = a * b;
console.log(`${a} * ${b} = ${multiplication}`); // 30

// Деление
let division = a / b;
console.log(`${a} / ${b} = ${division}`); // 3.3333...

// Остаток от деления (модуль)
let modulus = a % b;
console.log(`${a} % ${b} = ${modulus}`); // 1

// Возведение в степень
let exponentiation = a ** b;
console.log(`${a} ** ${b} = ${exponentiation}`); // 1000

// Инкремент (увеличение на 1)
let counter = 5;
counter++; // Постфиксная форма: сначала использует, потом увеличивает
console.log("Постфиксный инкремент (counter++):", counter); // 6

let preCounter = 5;
++preCounter; // Префиксная форма: сначала увеличивает, потом использует
console.log("Префиксный инкремент (++preCounter):", preCounter); // 6

// Пример разницы
let x = 5;
let y = x++; // y = 5, x = 6 (сначала присваивает, потом увеличивает)
console.log("x++ (постфикс): x =", x, ", y =", y);

let m = 5;
let n = ++m; // n = 6, m = 6 (сначала увеличивает, потом присваивает)
console.log("++m (префикс): m =", m, ", n =", n);

// Декремент (уменьшение на 1)
let decrementValue = 10;
decrementValue--; // Постфиксная форма
console.log("Декремент (decrementValue--):", decrementValue); // 9

--decrementValue; // Префиксная форма
console.log("Декремент (--decrementValue):", decrementValue); // 8

// Унарный плюс и минус
let stringNumber = "5";
let convertedNumber = +stringNumber; // Унарный + преобразует в число
console.log("+stringNumber:", convertedNumber, "| Тип:", typeof convertedNumber);

let positiveNum = 10;
let negativeNum = -positiveNum; // Унарный - меняет знак
console.log("-positiveNum:", negativeNum); // -10

// --------------------------------------------
// 2. ОПЕРАТОРЫ ПРИСВАИВАНИЯ
// --------------------------------------------

console.log("\n=== ОПЕРАТОРЫ ПРИСВАИВАНИЯ ===");

// Простое присваивание
let value = 100;
console.log("value = 100:", value);

// Присваивание со сложением
value += 20; // Эквивалентно: value = value + 20
console.log("value += 20:", value); // 120

// Присваивание с вычитанием
value -= 30; // Эквивалентно: value = value - 30
console.log("value -= 30:", value); // 90

// Присваивание с умножением
value *= 2; // Эквивалентно: value = value * 2
console.log("value *= 2:", value); // 180

// Присваивание с делением
value /= 3; // Эквивалентно: value = value / 3
console.log("value /= 3:", value); // 60

// Присваивание с остатком
value %= 7; // Эквивалентно: value = value % 7
console.log("value %= 7:", value); // 4

// Присваивание с возведением в степень
value **= 3; // Эквивалентно: value = value ** 3
console.log("value **= 3:", value); // 64

// --------------------------------------------
// 3. ОПЕРАТОРЫ СРАВНЕНИЯ
// --------------------------------------------

console.log("\n=== ОПЕРАТОРЫ СРАВНЕНИЯ ===");

// Равенство (нестрогое, с приведением типов)
console.log("5 == '5':", 5 == "5"); // true (строка преобразуется в число)
console.log("0 == false:", 0 == false); // true
console.log("'' == false:", "" == false); // true

// Строгое равенство (без приведения типов)
console.log("5 === '5':", 5 === "5"); // false (разные типы)
console.log("5 === 5:", 5 === 5); // true
console.log("0 === false:", 0 === false); // false (разные типы)

// Неравенство (нестрогое)
console.log("5 != '5':", 5 != "5"); // false
console.log("5 != 10:", 5 != 10); // true

// Строгое неравенство
console.log("5 !== '5':", 5 !== "5"); // true (разные типы)
console.log("5 !== 5:", 5 !== 5); // false

// Больше
console.log("10 > 5:", 10 > 5); // true
console.log("5 > 10:", 5 > 10); // false

// Больше или равно
console.log("10 >= 10:", 10 >= 10); // true
console.log("5 >= 10:", 5 >= 10); // false

// Меньше
console.log("5 < 10:", 5 < 10); // true
console.log("10 < 5:", 10 < 5); // false

// Меньше или равно
console.log("5 <= 5:", 5 <= 5); // true
console.log("10 <= 5:", 10 <= 5); // false

// Сравнение строк (лексикографическое)
console.log("'яблоко' > 'банан':", "яблоко" > "банан"); // true (по алфавиту)
console.log("'a' < 'b':", "a" < "b"); // true

// --------------------------------------------
// 4. ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
// --------------------------------------------

console.log("\n=== ЛОГИЧЕСКИЕ ОПЕРАТОРЫ ===");

// Логическое И (AND) - возвращает true, если оба операнда true
console.log("true && true:", true && true); // true
console.log("true && false:", true && false); // false
console.log("false && true:", false && true); // false
console.log("false && false:", false && false); // false

// Практический пример
let age = 25;
let hasLicense = true;
let canDrive = age >= 18 && hasLicense;
console.log("Может водить (возраст >= 18 и есть права):", canDrive); // true

// Логическое ИЛИ (OR) - возвращает true, если хотя бы один операнд true
console.log("true || true:", true || true); // true
console.log("true || false:", true || false); // true
console.log("false || true:", false || true); // true
console.log("false || false:", false || false); // false

// Практический пример
let isWeekend = true;
let isHoliday = false;
let canRest = isWeekend || isHoliday;
console.log("Можно отдыхать (выходной или праздник):", canRest); // true

// Логическое НЕ (NOT) - инвертирует значение
console.log("!true:", !true); // false
console.log("!false:", !false); // true
console.log("!!true:", !!true); // true (двойное отрицание)

// Практический пример
let isLoggedIn = false;
let needsLogin = !isLoggedIn;
console.log("Нужна авторизация:", needsLogin); // true

// Короткое замыкание (short-circuit evaluation)
let result1 = false && console.log("Не выполнится"); // false останавливает выполнение
let result2 = true || console.log("Не выполнится"); // true останавливает выполнение
console.log("Короткое замыкание работает!");

// Логические операторы возвращают значение операнда (не обязательно boolean)
console.log("'Hello' && 'World':", "Hello" && "World"); // "World"
console.log("'' || 'Default':", "" || "Default"); // "Default"
console.log("null ?? 'Fallback':", null ?? "Fallback"); // "Fallback" (nullish coalescing)

// --------------------------------------------
// 5. СТРОКОВЫЕ ОПЕРАТОРЫ
// --------------------------------------------

console.log("\n=== СТРОКОВЫЕ ОПЕРАТОРЫ ===");

// Конкатенация (объединение строк) с помощью +
let firstName = "Иван";
let lastName = "Петров";
let fullName = firstName + " " + lastName;
console.log("Полное имя:", fullName); // "Иван Петров"

// Конкатенация с присваиванием
let greeting = "Привет, ";
greeting += "мир!"; // greeting = greeting + "мир!"
console.log("Приветствие:", greeting); // "Привет, мир!"

// Конкатенация с числами
let text = "Результат: " + (5 + 3);
console.log(text); // "Результат: 8"

// Шаблонные строки (рекомендуется вместо конкатенации)
let productName = "Ноутбук";
let price = 50000;
let message = `Товар: ${productName}, Цена: ${price} руб.`;
console.log(message); // "Товар: Ноутбук, Цена: 50000 руб."

// --------------------------------------------
// 6. УСЛОВНЫЙ (ТЕРНАРНЫЙ) ОПЕРАТОР
// --------------------------------------------

console.log("\n=== ТЕРНАРНЫЙ ОПЕРАТОР ===");

// Синтаксис: условие ? значение_если_true : значение_если_false
let userAge = 20;
let accessStatus = userAge >= 18 ? "Доступ разрешён" : "Доступ запрещён";
console.log("Статус доступа:", accessStatus); // "Доступ разрешён"

// Вложенные тернарные операторы (использовать осторожно!)
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log("Оценка:", grade); // "B"

// Практический пример
let itemCount = 5;
let itemWord = itemCount === 1 ? "товар" : "товаров";
console.log(`В корзине ${itemCount} ${itemWord}`);

// --------------------------------------------
// 7. ОПЕРАТОР TYPEOF
// --------------------------------------------

console.log("\n=== ОПЕРАТОР TYPEOF ===");

// Определяет тип значения
console.log("typeof 42:", typeof 42); // "number"
console.log("typeof 'text':", typeof "text"); // "string"
console.log("typeof true:", typeof true); // "boolean"
console.log("typeof undefined:", typeof undefined); // "undefined"
console.log("typeof null:", typeof null); // "object" (баг JavaScript)
console.log("typeof {}:", typeof {}); // "object"
console.log("typeof []:", typeof []); // "object"
console.log("typeof function(){}:", typeof function(){}); // "function"

// --------------------------------------------
// 8. ОПЕРАТОР DELETE
// --------------------------------------------

console.log("\n=== ОПЕРАТОР DELETE ===");

// Удаляет свойство объекта
let person = {
  name: "Анна",
  age: 28,
  city: "Москва"
};

console.log("До удаления:", person);
delete person.age; // Удаляет свойство age
console.log("После удаления age:", person);

// Не работает с переменными
let testVar = 10;
delete testVar; // Не удалит переменную
console.log("testVar всё ещё существует:", testVar);

// --------------------------------------------
// 9. ОПЕРАТОР IN
// --------------------------------------------

console.log("\n=== ОПЕРАТОР IN ===");

// Проверяет наличие свойства в объекте
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022
};

console.log("'brand' in car:", "brand" in car); // true
console.log("'color' in car:", "color" in car); // false

// Работает с массивами (проверяет индексы)
let fruits = ["яблоко", "банан", "апельсин"];
console.log("0 in fruits:", 0 in fruits); // true (индекс существует)
console.log("5 in fruits:", 5 in fruits); // false (индекс не существует)

// --------------------------------------------
// 10. ОПЕРАТОР INSTANCEOF
// --------------------------------------------

console.log("\n=== ОПЕРАТОР INSTANCEOF ===");

// Проверяет, является ли объект экземпляром определённого класса
let date = new Date();
let array = [1, 2, 3];
let regex = /pattern/;

console.log("date instanceof Date:", date instanceof Date); // true
console.log("array instanceof Array:", array instanceof Array); // true
console.log("array instanceof Object:", array instanceof Object); // true (Array наследуется от Object)
console.log("regex instanceof RegExp:", regex instanceof RegExp); // true

// --------------------------------------------
// 11. ОПЕРАТОР SPREAD (...)
// --------------------------------------------

console.log("\n=== ОПЕРАТОР SPREAD ===");

// Разворачивает массив или объект
let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];
let combined = [...numbers1, ...numbers2]; // Объединение массивов
console.log("Объединённый массив:", combined); // [1, 2, 3, 4, 5, 6]

// Копирование массива
let original = [1, 2, 3];
let copy = [...original]; // Создаёт новый массив
console.log("Копия массива:", copy);

// Spread с объектами
let user1 = { name: "Иван", age: 25 };
let user2 = { ...user1, city: "Москва" }; // Копирует и добавляет свойство
console.log("Новый объект:", user2); // { name: "Иван", age: 25, city: "Москва" }

// --------------------------------------------
// 12. ОПЕРАТОР NULLISH COALESCING (??)
// --------------------------------------------

console.log("\n=== ОПЕРАТОР NULLISH COALESCING (??) ===");

// Возвращает правый операнд, если левый null или undefined
let username = null;
let displayName = username ?? "Гость"; // "Гость"
console.log("Имя пользователя:", displayName);

// Разница с оператором ||
let count = 0;
let result_or = count || 10; // 10 (0 считается falsy)
let result_nullish = count ?? 10; // 0 (0 не null и не undefined)
console.log("count || 10:", result_or);
console.log("count ?? 10:", result_nullish);

// --------------------------------------------
// 13. OPTIONAL CHAINING (?.)
// --------------------------------------------

console.log("\n=== OPTIONAL CHAINING (?.) ===");

// Безопасный доступ к вложенным свойствам
let userData = {
  name: "Пётр",
  address: {
    city: "Санкт-Петербург"
  }
};

// Без optional chaining (может вызвать ошибку)
// console.log(userData.contact.phone); // Ошибка: Cannot read property 'phone' of undefined

// С optional chaining (безопасно)
console.log("Телефон:", userData.contact?.phone); // undefined (без ошибки)
console.log("Город:", userData.address?.city); // "Санкт-Петербург"

// С методами
let object = {
  method: function() {
    return "Метод вызван";
  }
};
console.log(object.method?.()); // "Метод вызван"
console.log(object.nonExistent?.()); // undefined (без ошибки)

// --------------------------------------------
// ПРИОРИТЕТ ОПЕРАТОРОВ
// --------------------------------------------

console.log("\n=== ПРИОРИТЕТ ОПЕРАТОРОВ ===");

// Операторы выполняются в определённом порядке
let calculation = 2 + 3 * 4; // Умножение выполняется первым
console.log("2 + 3 * 4 =", calculation); // 14 (не 20!)

// Использование скобок для изменения приоритета
let withParentheses = (2 + 3) * 4;
console.log("(2 + 3) * 4 =", withParentheses); // 20

// Сложное выражение
let complex = 10 + 5 * 2 - 8 / 4;
console.log("10 + 5 * 2 - 8 / 4 =", complex); // 18

// --------------------------------------------
// ИТОГИ
// --------------------------------------------

console.log("\n=== ИТОГИ ===");
console.log("✓ Арифметические: +, -, *, /, %, **");
console.log("✓ Присваивания: =, +=, -=, *=, /=, %=, **=");
console.log("✓ Сравнения: ==, ===, !=, !==, >, <, >=, <=");
console.log("✓ Логические: &&, ||, !");
console.log("✓ Используйте === вместо == для строгого сравнения");
console.log("✓ Используйте ?? для обработки null/undefined");
console.log("✓ Используйте ?. для безопасного доступа к свойствам");
