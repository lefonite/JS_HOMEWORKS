'use strict';

const padString = function (str, len, sym = '*', fromLeft = true){
    if (typeof str !== 'string') return 'Ошибка! Первый аргумент должен быть строкой.';
    if (typeof len !== 'number' || len < 0) return 'Ошибка! Второй аргумент должен быть положительным числом.';
    if (typeof sym !== 'string' || sym.length !== 1 ) return 'Ошибка! Третий аргумент должен быть строкой длиной в 1 символ.';
    if (typeof fromLeft !== 'boolean') return 'Ошибка! Четвертый аргумент должен быть булевым значением.';

    if (str.length >= len) {
        return str.substring(0, len);
    }

    const diff = len - str.length;
    const padding = sym.repeat(diff);
    return fromLeft ? str + padding : padding + str;
}
console.log (padString('hello', 8,));
console.log (padString('hello', 6, '*', false));
console.log (padString('hello', 2,));
console.log(padString(123, 8)); // Выведет 'Ошибка! Первый аргумент должен быть строкой.'
console.log(padString('hello', -8)); // Выведет 'Ошибка! Второй аргумент должен быть положительным числом.'
console.log(padString('hello', '8')); // Выведет 'Ошибка! Второй аргумент должен быть положительным числом.'
console.log(padString('hello', 8, '**')); // Выведет 'Ошибка! Третий аргумент должен быть строкой длиной в 1 символ.'
console.log(padString('hello', 8, '*', 'true')); // Выведет 'Ошибка! Четвертый аргумент должен быть булевым значением.'


