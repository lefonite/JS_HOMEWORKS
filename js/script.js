'use strict';

const userNumber = prompt('Введите свой возраст или год рождения: ');
const lastDigit = userNumber % 10;
const lastTwoDigits = userNumber % 100;

if (isNaN(userNumber)){
    alert('Пишите цифрами возраст!');
} else {
    if ((lastTwoDigits >= 11 && lastTwoDigits <= 19) || (lastDigit === 0) || (lastDigit >= 5 && lastDigit <= 9)) {
        alert(userNumber + " лет");
    } else if ((lastDigit === 1) || (userNumber >= 1000 && userNumber <= 9999)) {
        alert(userNumber + " год");
    } else {
        alert(userNumber + " года");
    }
}


