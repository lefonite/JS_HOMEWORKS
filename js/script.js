'use strict';

const firstOperand = prompt('Введите первое число: ');
const secondOperand = prompt('Введите второе число и получите результат: ');

// #1 вариант решения:
// const resultPlus = (+firstOperand + +secondOperand);
// or
const resultPlus = parseFloat(firstOperand) + parseFloat(secondOperand);
const resultMinus = (firstOperand - secondOperand);
const resultMultiply = (firstOperand * secondOperand);
const resultDivision = (firstOperand / secondOperand);

console.log(`
        Результаты:
        - Сложение: ${firstOperand} + ${secondOperand} = ${resultPlus}
        - Вычитание: ${firstOperand} - ${secondOperand} = ${resultMinus}
        - Умножение: ${firstOperand} * ${secondOperand} = ${resultMultiply}
        - Деление: ${firstOperand} / ${secondOperand} = ${resultDivision}
    `);
