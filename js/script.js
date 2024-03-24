'use strict';

// 1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.
const arr = ['a', 'b', 'c','d'];
const modifiedString = arr.slice(0, 2).join('+') + ', ' + arr.slice(2).join('+');
console.log(modifiedString);

// 2. Умножьте первый элемент массива на второй, а третий элемент на четвертый.
const arr2 = [2, 5, 3, 9];
const result = arr2[0] * arr2[1] + arr2[2] * arr2[3];
console.log(result);

// 3. Выведите на экран цифру 4 из этого массива.
const arr3 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
console.log(arr3[1][0]);

// 4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.
const obj = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world',
};
console.log(obj.js[0]);

// 5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.
const arr5 = [];
for (let i = 1; i <= 5; i++) {
    arr5.push('x'.repeat(i));
}
console.log(arr5);

// 6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.
const arr6 = [];
for (let i = 1; i <= 5; i++) {
    arr6.push(String(i).repeat(i));
}
console.log(arr6);

// 7. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.
function arrayFill(value, length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(value);
    }
    return arr;
}
console.log(arrayFill('x', 5));

// 8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
function sumOverTen(arr) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        count++;
        if (sum > 10) {
            break;
        }
    }
    return count;
}

const numbers = [2, 3, 5, 1, 2];
console.log(sumOverTen(numbers));

// 9. Не используя метода reverse переверните элементы массива в обратном порядке.
function reverseArray(arr) {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}

const numbers9 = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbers9);
console.log(reversedNumbers);

// 10. Найдите сумму элементов массива. Массив, конечно же, может быть произвольным.
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            sum += sumArray(arr[i]);
        } else {
            sum += arr[i];
        }
    }
    return sum;
}

const array = [[1, 2, 3], [4, 5], [6]];
const totalSum = sumArray(array);
console.log(totalSum);

// 11. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
function sumArray11(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        if (Array.isArray(currentElement)) {
            sum += sumArray11(currentElement);
        } else {
            sum += currentElement;
        }
    }
    return sum;
}

const array11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
const totalSum11 = sumArray11(array11);
console.log(totalSum11);







