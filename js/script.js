'use strict';

const userNumber = +prompt('Введите число и получите минимальный делитель: ');

if (isNaN(userNumber) || userNumber < 1) {
    console.log('NaN');
} else {
    let smallestDivisor = 2;

    while (smallestDivisor <= userNumber) {
        if (userNumber % smallestDivisor === 0) {
            console.log(`Наименьший делитель числа ${userNumber}: ${smallestDivisor}`);
            break;
        }
        smallestDivisor++;
    }

    if (smallestDivisor > userNumber) {
        console.log(`Число ${userNumber} простое`);
    }
}
