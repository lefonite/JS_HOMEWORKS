'use strict';

// Задача 1
const x = 10;
const y = 7;
const result = x>y ? 'x больше y':'x не больше, чем y';
console.log(result);


// Задача 3
const userNumber = +prompt('Введите целое число, я опишу его: ');

if (!isNaN(userNumber)) {
    let length = Math.abs(userNumber).toString().length;
    if (length === 1) {
        if (userNumber > 0) {
            alert("Число " + userNumber + " однозначное положительное.");
        } else if (userNumber < 0) {
            alert("Число " + userNumber + " однозначное отрицательное.");
        } else {
            alert("Число " + userNumber + " ноль.");
        }
    } else if (length === 2) {
        if (userNumber > 0) {
            alert("Число " + userNumber + " двузначное положительное.");
        } else if (userNumber < 0) {
            alert("Число " + userNumber + " двузначное отрицательное.");
        } else {
            alert("Число " + userNumber + " ноль.");
        }
    } else if (length === 3) {
        if (userNumber > 0) {
            alert("Число " + userNumber + " трехзначное, положительное.");
        } else if (userNumber < 0) {
            alert("Число " + userNumber + " трехзначное, отрицательное.");
        } else {
            alert("Число " + userNumber + " ноль.");
        }
    } else {
        if (userNumber > 0) {
            alert("Число " + userNumber + " больше трехзначного, положительное.");
        } else if (userNumber < 0) {
            alert("Число " + userNumber + " больше трехзначного, отрицательное.");
        } else {
            alert("Число " + userNumber + " ноль.");
        }
    }
} else {
    alert("Введите нормальное число!");
}


// Задача 4
const num1 = +prompt('Введите первое число и я скажу какое больше:');
const num2 = +prompt('Введите второе число:');
const num3 = +prompt('Введите третье число:');

if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    if (num1 >= num2 && num1 >= num3) {
        alert("Больше число: " + num1);
    } else if (num2 >= num1 && num2 >= num3) {
        alert("Больше число: " + num2);
    } else {
        alert("Больше число: " + num3);
    }
} else {
    alert("Введите нормальные числа!");
}



// Задача 5

const side1 = +prompt('Введите длину для первой стороны:');
const side2 = +prompt('А теперь для второй стороны:');
const side3 = +prompt('И последнюю длину для третей стороны:');

if (!isNaN(side1) && !isNaN(side2) && !isNaN(side3) && side1 > 0 && side2 > 0 && side3 > 0) {
    if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
        alert("Такой треугольник может быть 👍");
    } else {
        alert("Такого треугольника быть не может 👎");
    }
} else {
    alert("Введите нормальные числа.");
}


