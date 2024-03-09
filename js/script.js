const a = prompt('Введите значение для "a":');
const b = prompt('Введите значение для "b":');
const num = parseInt(prompt('Введите целое число от 1 до 4:'));

let result;

// Задача 1
if (parseFloat(a) === 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задача 2
if (parseFloat(a) > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задача 3
if (parseFloat(a) < 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задача 4
if (parseFloat(a) >= 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задача 5
if (parseFloat(a) <= 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задача 6
if (parseFloat(a) !== 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задача 7
if (a === 'test') {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задача 8
if (a === '1') {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задача 9
if (parseFloat(a) > 0 && parseFloat(a) < 5) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задача 10
if (parseFloat(a) === 0 || parseFloat(a) === 2) {
    console.log(parseFloat(a) + 7);
} else {
    console.log(parseFloat(a) / 10);
}

// Задача 11
if (parseFloat(a) <= 1 && parseFloat(b) >= 3) {
    console.log(parseFloat(a) + parseFloat(b));
} else {
    console.log(parseFloat(a) - parseFloat(b));
}

// Задача 12
if ((parseFloat(a) > 2 && parseFloat(a) < 11) || (parseFloat(b) >= 6 && parseFloat(b) <= 14)) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// Задача 13
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
