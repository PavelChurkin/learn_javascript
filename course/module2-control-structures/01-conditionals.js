// ============================================
// УСЛОВНЫЕ ОПЕРАТОРЫ В JAVASCRIPT
// ============================================

console.log("=== УСЛОВНЫЕ ОПЕРАТОРЫ ===\n");

// Условные операторы позволяют выполнять код в зависимости от условия

// --------------------------------------------
// 1. ОПЕРАТОР IF
// --------------------------------------------

console.log("=== ОПЕРАТОР IF ===");

// Базовый синтаксис: if (условие) { код }
let temperature = 25;

// Если условие true, выполняется блок кода
if (temperature > 20) {
  console.log("Тепло на улице!");
}

// Условие может быть любым выражением, которое преобразуется в boolean
let isLoggedIn = true;
if (isLoggedIn) {
  console.log("Пользователь авторизован");
}

// Без фигурных скобок (только одна инструкция, не рекомендуется)
if (temperature > 30)
  console.log("Очень жарко!");

// Несколько инструкций требуют фигурных скобок
if (temperature > 15) {
  console.log("Можно идти гулять");
  console.log("Температура:", temperature, "°C");
}

// --------------------------------------------
// 2. ОПЕРАТОР IF...ELSE
// --------------------------------------------

console.log("\n=== ОПЕРАТОР IF...ELSE ===");

// Синтаксис: if (условие) { код1 } else { код2 }
let age = 16;

if (age >= 18) {
  console.log("Вы совершеннолетний");
} else {
  console.log("Вы несовершеннолетний");
}

// Практический пример: проверка чётности
let number = 7;
if (number % 2 === 0) {
  console.log(number, "— чётное число");
} else {
  console.log(number, "— нечётное число");
}

// Вложенные условия
let hour = 14;
if (hour < 12) {
  console.log("Доброе утро!");
} else {
  if (hour < 18) {
    console.log("Добрый день!");
  } else {
    console.log("Добрый вечер!");
  }
}

// --------------------------------------------
// 3. ОПЕРАТОР IF...ELSE IF...ELSE
// --------------------------------------------

console.log("\n=== ОПЕРАТОР IF...ELSE IF...ELSE ===");

// Множественные условия (лесенка if-else if)
let score = 85;

if (score >= 90) {
  console.log("Оценка: Отлично (A)");
} else if (score >= 80) {
  console.log("Оценка: Хорошо (B)");
} else if (score >= 70) {
  console.log("Оценка: Удовлетворительно (C)");
} else if (score >= 60) {
  console.log("Оценка: Посредственно (D)");
} else {
  console.log("Оценка: Неудовлетворительно (F)");
}

// Проверяется первое подходящее условие
let value = 15;
if (value > 10) {
  console.log("Больше 10"); // Это выполнится
} else if (value > 5) {
  console.log("Больше 5"); // Это не выполнится, хотя условие true
}

// Практический пример: определение времени суток
let currentHour = 9;

if (currentHour >= 0 && currentHour < 6) {
  console.log("Время: Ночь");
} else if (currentHour >= 6 && currentHour < 12) {
  console.log("Время: Утро");
} else if (currentHour >= 12 && currentHour < 18) {
  console.log("Время: День");
} else if (currentHour >= 18 && currentHour < 24) {
  console.log("Время: Вечер");
} else {
  console.log("Некорректное время");
}

// --------------------------------------------
// 4. ТЕРНАРНЫЙ ОПЕРАТОР
// --------------------------------------------

console.log("\n=== ТЕРНАРНЫЙ ОПЕРАТОР ===");

// Краткая форма if-else: условие ? значение_если_true : значение_если_false
let userAge = 20;
let accessMessage = userAge >= 18 ? "Доступ разрешён" : "Доступ запрещён";
console.log("Статус доступа:", accessMessage);

// Использование в выражениях
let items = 5;
console.log("У вас", items, items === 1 ? "товар" : "товаров");

// Вложенные тернарные операторы (не рекомендуется, сложно читать)
let points = 75;
let grade = points >= 90 ? "A" : points >= 80 ? "B" : points >= 70 ? "C" : "D";
console.log("Оценка (тернарный):", grade);

// Лучше использовать if-else для сложных условий
let betterGrade;
if (points >= 90) {
  betterGrade = "A";
} else if (points >= 80) {
  betterGrade = "B";
} else if (points >= 70) {
  betterGrade = "C";
} else {
  betterGrade = "D";
}
console.log("Оценка (if-else):", betterGrade);

// --------------------------------------------
// 5. ОПЕРАТОР SWITCH
// --------------------------------------------

console.log("\n=== ОПЕРАТОР SWITCH ===");

// Синтаксис switch для множественного выбора
let dayOfWeek = 3;

switch (dayOfWeek) {
  case 1:
    console.log("Понедельник");
    break; // Прерывает выполнение
  case 2:
    console.log("Вторник");
    break;
  case 3:
    console.log("Среда");
    break;
  case 4:
    console.log("Четверг");
    break;
  case 5:
    console.log("Пятница");
    break;
  case 6:
    console.log("Суббота");
    break;
  case 7:
    console.log("Воскресенье");
    break;
  default: // Выполняется, если нет совпадений
    console.log("Некорректный день недели");
}

// Switch с группировкой case (provyval, fall-through)
let month = 3;
let season;

switch (month) {
  case 12:
  case 1:
  case 2:
    season = "Зима";
    break;
  case 3:
  case 4:
  case 5:
    season = "Весна";
    break;
  case 6:
  case 7:
  case 8:
    season = "Лето";
    break;
  case 9:
  case 10:
  case 11:
    season = "Осень";
    break;
  default:
    season = "Неизвестный месяц";
}

console.log("Месяц", month, "— это", season);

// Switch со строками
let command = "start";

switch (command) {
  case "start":
    console.log("Запуск программы...");
    break;
  case "stop":
    console.log("Остановка программы...");
    break;
  case "pause":
    console.log("Пауза...");
    break;
  case "resume":
    console.log("Возобновление...");
    break;
  default:
    console.log("Неизвестная команда");
}

// Важно: switch использует строгое сравнение (===)
let stringNumber = "5";
let numericValue = 5;

switch (stringNumber) {
  case 5: // Не совпадёт, т.к. "5" !== 5
    console.log("Число 5");
    break;
  case "5":
    console.log("Строка '5'"); // Это выполнится
    break;
}

// Пример без break (provyval)
let level = 2;
let permissions = [];

switch (level) {
  case 3:
    permissions.push("delete"); // Уровень 3: добавляет "delete"
  case 2:
    permissions.push("edit"); // Уровень 2: добавляет "edit"
  case 1:
    permissions.push("read"); // Уровень 1: добавляет "read"
    break;
  default:
    console.log("Нет прав доступа");
}

console.log("Права доступа (уровень " + level + "):", permissions);

// --------------------------------------------
// 6. СЛОЖНЫЕ УСЛОВИЯ
// --------------------------------------------

console.log("\n=== СЛОЖНЫЕ УСЛОВИЯ ===");

// Логические операторы в условиях
let userName = "admin";
let password = "12345";

// Логическое И (&&) - оба условия должны быть true
if (userName === "admin" && password === "12345") {
  console.log("Вход выполнен успешно");
} else {
  console.log("Неверное имя пользователя или пароль");
}

// Логическое ИЛИ (||) - хотя бы одно условие должно быть true
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("Можно отдыхать!");
} else {
  console.log("Рабочий день");
}

// Логическое НЕ (!) - инверсия условия
let isRaining = false;

if (!isRaining) {
  console.log("Дождя нет, можно идти гулять");
}

// Комбинация операторов
let userRole = "moderator";
let isActive = true;
let hasPremium = false;

if ((userRole === "admin" || userRole === "moderator") && isActive) {
  console.log("Доступ к панели управления разрешён");
}

// Использование скобок для группировки
let x = 10;
let y = 20;
let z = 30;

if ((x > 5 && y > 15) || z < 25) {
  console.log("Сложное условие выполнено");
}

// --------------------------------------------
// 7. ПРОВЕРКА НА СУЩЕСТВОВАНИЕ
// --------------------------------------------

console.log("\n=== ПРОВЕРКА НА СУЩЕСТВОВАНИЕ ===");

// Проверка на null и undefined
let data = null;

if (data === null) {
  console.log("Данные отсутствуют (null)");
}

// Проверка с помощью оператора ??
let userData = null;
let displayName = userData ?? "Гость";
console.log("Имя пользователя:", displayName);

// Проверка на truthy/falsy
let input = "";

if (input) {
  console.log("Введён текст:", input);
} else {
  console.log("Поле пустое");
}

// Проверка массива
let array = [1, 2, 3];

if (Array.isArray(array) && array.length > 0) {
  console.log("Массив не пустой, элементов:", array.length);
}

// Optional chaining для безопасного доступа
let user = {
  profile: {
    name: "Иван"
  }
};

if (user.profile?.name) {
  console.log("Имя пользователя:", user.profile.name);
}

// --------------------------------------------
// 8. ПРАКТИЧЕСКИЕ ПРИМЕРЫ
// --------------------------------------------

console.log("\n=== ПРАКТИЧЕСКИЕ ПРИМЕРЫ ===");

// Валидация формы
function validateForm(email, password) {
  if (!email) {
    return "Email обязателен";
  }

  if (!email.includes("@")) {
    return "Некорректный email";
  }

  if (!password) {
    return "Пароль обязателен";
  }

  if (password.length < 6) {
    return "Пароль должен быть не менее 6 символов";
  }

  return "Форма валидна";
}

console.log(validateForm("user@example.com", "123456")); // Форма валидна
console.log(validateForm("invalid-email", "pass")); // Некорректный email

// Определение скидки
function calculateDiscount(totalAmount, customerType) {
  let discount = 0;

  if (customerType === "vip") {
    discount = 0.20; // 20%
  } else if (customerType === "regular") {
    discount = 0.10; // 10%
  } else {
    discount = 0; // Нет скидки
  }

  // Дополнительная скидка за большую сумму
  if (totalAmount > 10000) {
    discount += 0.05; // +5%
  }

  return totalAmount * (1 - discount);
}

console.log("Сумма к оплате (VIP, 15000):", calculateDiscount(15000, "vip"));
console.log("Сумма к оплате (обычный, 5000):", calculateDiscount(5000, "regular"));

// Проверка диапазона
function checkAge(age) {
  if (age < 0 || age > 150) {
    return "Некорректный возраст";
  } else if (age < 18) {
    return "Несовершеннолетний";
  } else if (age < 65) {
    return "Взрослый";
  } else {
    return "Пенсионер";
  }
}

console.log("Возраст 25:", checkAge(25));
console.log("Возраст 70:", checkAge(70));

// --------------------------------------------
// ИТОГИ
// --------------------------------------------

console.log("\n=== ИТОГИ ===");
console.log("✓ if - базовое условие");
console.log("✓ if...else - выбор между двумя вариантами");
console.log("✓ if...else if...else - множественный выбор");
console.log("✓ Тернарный оператор (? :) - краткая форма if-else");
console.log("✓ switch - выбор из множества вариантов");
console.log("✓ Логические операторы: && (И), || (ИЛИ), ! (НЕ)");
console.log("✓ Используйте === для строгого сравнения");
console.log("✓ Не забывайте break в switch");
