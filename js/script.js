'use strict';

const temp = +prompt('Введите температуру:');
const type = prompt('Перевести в градусы Цельсия - C, c или Фаренгейты - F, f?');
let result;

if (!isNaN(temp)) {
    if (type.toLowerCase() === 'f') {
        result = 'Результат: ' + ((temp - 32) * 5/9) + '°C';
    } else if (type.toLowerCase() === 'c') {
        result = 'Результат: ' + ((temp * 9/5) + 32) + '°F';
    } else {
        result = 'Ошибка! Введите "C" или "F" для указания типа температуры.';
    }
} else {
    result = 'Ошибка! Введите число вначале.';
}

alert(result);

