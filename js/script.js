'use strict';

const operation= prompt('Что вы хотите сделать с числами? add(+), sub(-), mult(*), div(/)?: ');
const firstNumber= +prompt('Введите первое число:');
const secondNumber= +prompt('Введите второе число:');


if (!isNaN(firstNumber) && !isNaN(secondNumber)){
    let result;
    if (operation === 'add' || operation === '+'){
        result = firstNumber + secondNumber;
        alert(`Ваш результат: ${firstNumber} + ${secondNumber} = ${result}`);
    } else if (operation === 'sub' || operation === '-'){
        result = firstNumber - secondNumber;
        alert(`Ваш результат: ${firstNumber} - ${secondNumber} = ${result}`);
    } else if (operation==='mult' || operation ==='*'){
        result = firstNumber * secondNumber;
        alert ( `Ваш результат: ${firstNumber} * ${secondNumber} = ${result}`)
    } else if (operation === 'div' || operation === '/'){
        if (secondNumber !== 0){
            result = firstNumber / secondNumber;
            alert(`Ваш результат: ${firstNumber} / ${secondNumber} = ${result}`)
        } else {
            alert('Ошибка! На ноль делить нельзя.')
        }
    }
    else {
        alert('Ошибка! Пишите знак или название операции.')
    }
}
else{
    alert('Ошибка! Введите нормальное число.')
}



