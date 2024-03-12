'use strict';

let sum = 0;

outerLoop: for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue outerLoop;
    }
    sum += i;
}

console.log('Сумма нечетных чисел от 1 до 20: ' + sum);



