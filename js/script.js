'use strict';

let sum = 0;

outerLoop: for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        // Перериваємо цикл, якщо зустрічено парне число
        break outerLoop;
    }

    // Додаємо непарне число до суми
    sum += i;
}

console.log('Сума непарних чисел від 1 до 20: ' + sum);
