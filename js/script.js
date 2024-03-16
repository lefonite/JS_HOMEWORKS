'use strict';

const userNumber = +prompt('Введите число:');
const exponent = +prompt('Введите степень:');

function power(base, exp) {
    exp = exp || 1;
    if (isNaN(base) || isNaN(exp)) {
        return 'Ошибка! Вводите число';
    }
    const result = Math.pow(base, exp);
    return result;
}

const result = power(userNumber, exponent);
alert(result);

