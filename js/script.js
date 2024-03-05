'use strict';

const num1 = +prompt('Введите первое число:');
const num2 = +prompt('Введите второе число и получите результат:');

const resultPlus = num1 + num2;
const resultMinus = num1 - num2;
const resultMultiply = num1 * num2;
const resultDivision = num1 / num2;

alert(`Ваш результат:\n
  ${num1} + ${num2} = ${resultPlus}\n
  ${num1} - ${num2} = ${resultMinus}\n
  ${num1} * ${num2} = ${resultMultiply}\n
  ${num1} / ${num2} = ${resultDivision}`);
