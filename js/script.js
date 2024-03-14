'use strict';

// #Задача 1
document.write('● 1 - Числа від 20 до 30 з кроком 0.5: ');
for (let i = 20; i <= 30; i += 0.5) {
    document.write(i + ', ');
}

// #Задача 2
document.write('<br> ● 2 - Один долар коштує 27 гривень. Вивести дані з розрахунком вартості: <br>');
const dollars = 27;
for (let i = 10; i <= 100; i += 10) {
    const UAH = dollars * dollars;
    document.write(`${i} $ = ${UAH} ₴ <br>`);
}

// #Задача 3
document.write(`<br> ● 3 - Цілі числа від 1 до 100, квадрат яких не перевищує N: <br>`);
const N = 100;
for (let i = 1; i <= 100; i++) {
    const square = i * i;
    if (square <= N) {
        document.write(`${i}²  = ${square} <br>`);
    }
}

// #Задача 4
// const number = 17; // Задане ціле число
// let isPrime = true;
// let i = 2;
//
// if (number <= 1) {
//     isPrime = false; // Якщо число менше або рівне 1, воно не є простим
// } else {
//     while (i <= Math.sqrt(number)) {
//         if (number % i === 0) {
//             isPrime = false; // Якщо знайдено дільник, число не є простим
//             break; // Виходимо з циклу, бо вже зрозуміло, що число не є простим
//         }
//         i++;
//     }
// }
//
// if (isPrime) {
//     document.write(`Число ${number} є простим.`);
// } else {
//     document.write(`Число ${number} не є простим.`);
// }



