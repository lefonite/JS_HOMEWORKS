'use strict';

let sum = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        break;
    }
    sum += i;
}

console.log('Сумма нечетных чисел от 1 до 20: ' + sum);


