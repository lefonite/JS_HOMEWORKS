'use strict';

// 1.
let result1 = '';
for (let i = 10; i <= 20; i++) {
    result1 += i + ', ';
}
document.write('● 1 - Вивести на сторінку в один рядок через кому числа від 10 до 20: ' + result1);


// 2.
document.write('<br> ● 2 - Квадрати чисел від 10 до 20: ');
for (let i = 10; i <= 20; i++) {
    const square = Math.pow(i, 2);
    document.write(square + ', ');
}

// 3.
document.write('<br> ● 3 - Вивести таблицю множення на 7: ');
for (let i = 1; i <= 10; i++) {
    document.write(` ${7 * i}`+ ', ');
}

// 4.
let sum4 = 0;
for (let i = 1; i <= 15; i++) {
    sum4+=i;
}
document.write('<br> ● 4 - Сума всіх цілих чисел від 1 до 15: ' + sum4 );

// 5.
let product = 1;
for (let i = 15; i <= 35; i++) {
    product *= i;
}
document.write('<br> ● 5 - Добуток усіх цілих чисел від 15 до 35: ' + product);

// 6.
let sum6 = 0;
for (let i = 1; i <= 500; i++) {
    sum6 += i;
}
document.write('<br> ● 6 - середнє арифметичне всіх цілих чисел від 1 до 500: ' + sum6 / 500);




// 7.
let sum7 = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum7 += i;
    }
}
document.write('<br> ● 7 - Сума парних чисел від 30 до 80: ' + sum7);


// 8.
let result8 = '';
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        result8 += i + ', ';
    }
}
document.write('<br> ● 8 - Всі числа в діапазоні від 100 до 200 кратні 3: ' + result8);


// 9.
// 10.
// 11.
const number = 24;
document.write(`<br> ● 9 - Дільники числа ${number}: `);

let evenDivisorsCount = 0;
let evenDivisorsSum = 0;

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        document.write(i + ', ');

        if (i % 2 === 0) {
            evenDivisorsCount++;
            evenDivisorsSum += i;
        }
    }
}

document.write(`<br> ● 10 - Кількість парних дільників: ${evenDivisorsCount}`);
document.write(`<br> ● 11 - Сума парних дільників: ${evenDivisorsSum}`);






// 12.
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
document.write('<br> ● 12 - Повна таблицю множення від 1 до 10: ' + result8);
