'use strict';
let a = prompt('Введите число для a: ');
let  b = prompt('Введите число для b: ');
const num = +prompt('Введите число от 1-4: ');

// Задание 1 (Якщо змінна a дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Неправильно'.):
if (parseInt(a) === 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 2 (a більша за нуль, то виведіть 'Вірно'):
if (a > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 3 (a менша за нуль):
if (a < 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 4 (a більша або дорівнює нулю):
if (a >= 0) {
    console.log('Верно');
} else {
    console.log('Неправильно');
}

// Задание 5 (a менша або дорівнює нулю):
if (a <= 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 6 (a не дорівнює нулю):
if (parseInt(a) !== 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 7 (змінна a дорівнює 'test'):
if (a === 'test') {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 8
if (parseInt(a) === 1) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 9
if (a > 0 && a < 5) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 10
let result10;
if (parseInt(a) === 0 || parseInt(a) === 2) {
    result10 = +a + 7;
} else {
    result10 = a /= 10;
}
console.log(result10);


// Задание 11
let result11;
if (parseInt(a) <= 1 && parseInt(b) >= 3) {
    result11 = a + b;
} else {
    result11 = a - b;
}
console.log(result11);



// Задание 12
if ((a > 2 && a < 11) || (b >= 6 && b <= 14)) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задание 13
let result;
switch (num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'лето';
        break;
    case 4:
        result = 'осень';
        break;
    default:
        result = 'нет такого';
}
console.log(result);


