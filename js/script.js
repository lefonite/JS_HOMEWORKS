'use strict';

function filterPositiveNumbers(arr) {
    const positiveNumbers = [];
    if (arr.length === 0) {
        return 'Массив пустой';
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNumbers.push(arr[i]);
        }
    }

    if (positiveNumbers.length > 0) {
        return positiveNumbers;
    } else {
        return null;
    }
}


const arr = [1, 2, 3, -1, -2, -3];
console.log(filterPositiveNumbers(arr)); // Выведет [1, 2, 3]

