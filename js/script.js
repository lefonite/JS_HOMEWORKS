'use strict';

// 1. Объединить массивы
const arr = [1, 2, 3];
const arr1 = [4, 5, 6];
console.log(arr.concat(arr1));

// 2. Отзеркалить массив
const arr2 = [1, 2, 3];
arr2.reverse();
console.log(arr2);

// 3. Добавить в конец элементы
const arr3 = [1, 2, 3];
arr3.push(4, 5, 6);
console.log(arr3);

// 4. Добавить в начало элементы
const arr4 = [1, 2, 3];
arr4.unshift(4, 5, 6);
console.log(arr4);

// 5. Выведите на экран первый элемент
const arr5 = ['js', 'css', 'jq'];
console.log(arr5[0]);

// 6. Выведите на экран первый элемент
console.log(arr5[arr5.length - 1]);

// 7. Запишите в новый массив элементы из начала
const arr7 = [1, 2, 3, 4, 5];
const newArr7 = arr7.slice(0,3);
console.log(newArr7);

// 8. Запишите в новый массив элементы с конца
const newArr8 = arr7.slice(3,5);
// or
// const newArr8 = arr7.slice(-2);
console.log(newArr8);

// 9. преобразуйте массив в [1, 4, 5]
const newArr9 = arr7.slice(0, 1).concat(arr7.slice(3));
console.log(newArr9);

// 10. запишите в новый массив элементы [2, 3, 4].
const newArr10 = arr7.slice(1, 4);
console.log(newArr10);

// 11. сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
arr7.splice(3, 0, 'a', 'b', 'c');
console.log(arr7);

// 12. сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const arr12 = [1, 2, 3, 4, 5];
arr12.splice(1, 0, 'a', 'b');
arr12.splice(6, 0, 'c');
arr12.push('e');
console.log(arr12);

// 13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
const arr13 = [3, 4, 1, 2, 7];
arr13.sort();
console.log(arr13);

// 14. Дан массив с числами [5, 6, 7, 8, 9]. Найдите сумму этих чисел.
const arr14 = [5, 6, 7, 8, 9];
const sum = arr14.reduce((sum, current) => sum + current, 0);
console.log(sum);

// 15. Дан массив с числами [5, 6, 7, 8, 9]. Сделайте из него массив, состоящий из квадратов этих чисел.
const squares = arr14.map(num => num * num);
console.log(squares);

// 16 & 17 Дан массив с числами [1,-3, 5, 6,-7, 8, 9,-11]. Оставьте в нем только отрицательные числа.
const arr16 = [1,-3, 5, 6,-7, 8, 9,-11];
const negativeNumbers = arr16.filter(num => num < 0);
console.log(negativeNumbers);

// 18 Оставьте в массиве только те строки, длина которых больше 5 символов.
const arr18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const filteredStrings = arr18.filter(str => str.length > 5);
console.log(filteredStrings);

// 19 Дан массив, в нем могут быть обычные элементы и подмассивы. Оставьте в нем только подмассивы.
const arr19 = [1, 2, [3, 4], 5, [6, 7]];
const subarr = arr19.filter(item => Array.isArray(item));
console.log(subarr);

// 20 Посчитайте количество отрицательных чисел в массиве.
const arr20 = [5,-3, 6,-5, 0,-7, 8, 9];
const negativeNumbers20 = arr16.filter(num => num < 0);
const count = negativeNumbers.length;
console.log("Кол-во отрицательных чисел:", count);

