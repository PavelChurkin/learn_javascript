# Советы по Производительности JavaScript

## Введение

Эффективный JavaScript-код не только работает правильно, но и работает быстро. Этот документ содержит рекомендации по оптимизации производительности ваших скриптов.

## 1. Оптимизация Циклов

### Кэширование Длины Массива

**Плохо:**
```javascript
for (let i = 0; i < array.length; i++) {
  // array.length вычисляется на каждой итерации
}
```

**Хорошо:**
```javascript
const len = array.length;
for (let i = 0; i < len; i++) {
  // Длина вычислена один раз
}
```

### Использование Правильного Цикла

- `for` - для простого перебора с индексом
- `for...of` - для перебора значений
- `forEach` - для функционального стиля (немного медленнее)

## 2. Работа с Массивами

### Используйте Современные Методы

```javascript
// Вместо циклов используйте встроенные методы
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
```

### Избегайте Изменения Массива В Цикле

**Плохо:**
```javascript
for (let i = 0; i < arr.length; i++) {
  arr.push(i); // Бесконечный цикл!
}
```

### Используйте `Array.from` Для Преобразования

```javascript
// Эффективное создание массива
const arr = Array.from({ length: 100 }, (_, i) => i);
```

## 3. Работа с Объектами

### Избегайте Лишних Обращений к Свойствам

**Плохо:**
```javascript
const fullName = user.profile.name.first + ' ' + user.profile.name.last;
```

**Хорошо:**
```javascript
const { first, last } = user.profile.name;
const fullName = `${first} ${last}`;
```

### Используйте `Object.assign` или Spread Для Копирования

```javascript
// Быстрое поверхностное копирование
const copy = { ...original };
```

## 4. Строки

### Используйте Template Literals

**Плохо:**
```javascript
const msg = 'Hello, ' + name + '! You have ' + count + ' messages.';
```

**Хорошо:**
```javascript
const msg = `Hello, ${name}! You have ${count} messages.`;
```

### Избегайте Множественной Конкатенации в Цикле

**Плохо:**
```javascript
let result = '';
for (let i = 0; i < 1000; i++) {
  result += 'text'; // Создаётся новая строка на каждой итерации
}
```

**Хорошо:**
```javascript
const parts = [];
for (let i = 0; i < 1000; i++) {
  parts.push('text');
}
const result = parts.join('');
```

## 5. Функции

### Избегайте Создания Функций в Циклах

**Плохо:**
```javascript
for (let i = 0; i < 100; i++) {
  setTimeout(function() { // Создаёт 100 новых функций
    console.log(i);
  }, i * 100);
}
```

**Хорошо:**
```javascript
function logValue(value) {
  console.log(value);
}

for (let i = 0; i < 100; i++) {
  setTimeout(() => logValue(i), i * 100);
}
```

### Используйте Стрелочные Функции Для Коротких Callback

```javascript
// Короче и быстрее
const doubled = arr.map(x => x * 2);
```

## 6. Переменные и Типы

### Используйте `const` по Умолчанию

```javascript
// const позволяет движку оптимизировать код
const PI = 3.14159;
const user = { name: 'Ivan' };
```

### Избегайте Глобальных Переменных

```javascript
// Глобальные переменные медленнее локальных
(function() {
  const localVar = 'fast'; // Быстрее
})();
```

### Используйте Правильные Типы

```javascript
// Числа быстрее строк в математике
const result = 5 + 10; // Быстро
// const result = '5' + '10'; // Медленнее, если нужна математика
```

## 7. DOM Манипуляции

### Минимизируйте Доступ к DOM

**Плохо:**
```javascript
for (let i = 0; i < 100; i++) {
  document.getElementById('list').innerHTML += '<li>Item</li>';
}
```

**Хорошо:**
```javascript
const items = [];
for (let i = 0; i < 100; i++) {
  items.push('<li>Item</li>');
}
document.getElementById('list').innerHTML = items.join('');
```

### Используйте DocumentFragment

```javascript
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const li = document.createElement('li');
  li.textContent = `Item ${i}`;
  fragment.appendChild(li);
}
document.getElementById('list').appendChild(fragment);
```

## 8. Асинхронность

### Используйте `async/await` Вместо Callback Hell

```javascript
// Читаемо и эффективно
async function fetchData() {
  const user = await getUser();
  const posts = await getPosts(user.id);
  return posts;
}
```

### Используйте `Promise.all` Для Параллельных Запросов

```javascript
// Выполняется параллельно - быстрее
const [users, posts, comments] = await Promise.all([
  fetchUsers(),
  fetchPosts(),
  fetchComments()
]);
```

## 9. Оптимизация Поиска

### Используйте Set Для Проверки Наличия

**Плохо:**
```javascript
const arr = [1, 2, 3, 4, 5];
const exists = arr.includes(3); // O(n)
```

**Хорошо:**
```javascript
const set = new Set([1, 2, 3, 4, 5]);
const exists = set.has(3); // O(1)
```

### Используйте Map Вместо Объектов Для Частых Операций

```javascript
const map = new Map();
map.set('key', 'value'); // Быстрее для частых операций
const value = map.get('key');
```

## 10. Общие Рекомендации

### 1. Избегайте Преждевременной Оптимизации

Сначала напишите читаемый код, затем оптимизируйте узкие места.

### 2. Используйте Инструменты Профилирования

- Chrome DevTools Performance
- `console.time()` и `console.timeEnd()`

```javascript
console.time('operation');
// ... ваш код ...
console.timeEnd('operation');
```

### 3. Минимизируйте Повторные Вычисления

```javascript
// Плохо
if (Math.sqrt(a) + Math.sqrt(b) > Math.sqrt(c) + Math.sqrt(d)) {
  // ...
}

// Хорошо
const sqrtA = Math.sqrt(a);
const sqrtB = Math.sqrt(b);
const sqrtC = Math.sqrt(c);
const sqrtD = Math.sqrt(d);

if (sqrtA + sqrtB > sqrtC + sqrtD) {
  // ...
}
```

### 4. Используйте Дебаунс и Троттлинг

```javascript
// Троттлинг для ограничения частоты вызовов
function throttle(func, delay) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
}

// Использование
window.addEventListener('scroll', throttle(() => {
  console.log('Scroll event');
}, 200));
```

### 5. Ленивая Загрузка

```javascript
// Загружайте данные только когда они нужны
let heavyData = null;

function getHeavyData() {
  if (!heavyData) {
    heavyData = loadHeavyData(); // Загрузка только при первом обращении
  }
  return heavyData;
}
```

## Итоги

✓ Кэшируйте длину массивов в циклах
✓ Используйте современные методы массивов
✓ Минимизируйте работу с DOM
✓ Используйте `const` по умолчанию
✓ Избегайте глобальных переменных
✓ Применяйте `async/await` и `Promise.all`
✓ Используйте Set и Map для частых операций
✓ Профилируйте код перед оптимизацией
✓ Применяйте дебаунс и троттлинг для событий

Помните: читаемость кода важнее микрооптимизаций!
