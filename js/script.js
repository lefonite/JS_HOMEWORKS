'use strict';


const arr = [1, 2, 3, 4, 5];
let sum = 0;
let sumOfSquares = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
for (let i = 0; i < arr.length; i++) {
    sumOfSquares += Math.pow(arr[i], 2);
}
console.log('Сумма элементов массива: ',sum);
console.log('Сумма квадратов элементов массива: ', sumOfSquares);




