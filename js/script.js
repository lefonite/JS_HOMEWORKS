'use strict';

// 1.
console.log('числа від 10 до 20: ');
for (let i = 10; i <= 20; i++) {
    console.log(i);
}

// 2.
console.log('квадрати чисел від 10 до 20: ');
for (let i = 10; i <= 20; i++) {
    console.log(Math.pow(i, 2));
}

// 3.
console.log('Вивести таблицю множення на 7: ');
for (let i = 1; i <= 10; i++) {
    console.log(7 * i);
}

// 4.
console.log('сума всіх цілих чисел від 1 до 15: ');
let sum = 0;
for (let i = 1; i <= 15; i++) {
    sum+=i;
    console.log(sum);
}

// 4.
console.log('добуток усіх цілих чисел від 15 до 35: ');
let product = 1;
for (let i = 15; i <= 35; i++) {
    console.log(product *= i);
}


// 6.
let sum2 = 0;
let count = 0;
for (let i = 1; i <= 500; i++) {
    sum2 += i;
    count++;
}
const average = sum2 / count;
console.log('середнє арифметичне всіх цілих чисел від 1 до 500: ', average);


// 7.
let sum3 = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum3 += i;
    }
}
console.log('Сума парних чисел від 30 до 80:', sum3);


// 8.
console.log('всі числа в діапазоні від 100 до 200 кратні 3.: ');
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}


// 9.
// 10.
// 11.
console.log('Дано натуральне число. Знайти та вивести на сторінку всі його дільники. Визначити кількість його парних дільників. Знайти суму його парних дільників.: ');
const naturalNumber = prompt('Введіть натуральне число:');
const number = parseInt(naturalNumber);

if (isNaN(number) || number <= 0) {
    console.log('Будь ласка, введіть коректне натуральне число.');
} else {
    console.log(`Дільники числа ${number}: `);

    let evenDivisorsCount = 0;
    let evenDivisorsSum = 0;

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);

            if (i % 2 === 0) {
                evenDivisorsCount++;
                evenDivisorsSum += i;
            }
        }
    }

    console.log(`Кількість парних дільників: ${evenDivisorsCount}`);
    console.log(`Сума парних дільників: ${evenDivisorsSum}`);
}




// 12.
console.log('повна таблицю множення від 1 до 10.: ');
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
