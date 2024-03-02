'use strict';

// Задача 1

// let user ={}
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;
// console.log(user.name);

const user ={
    name: 'John',
    surname: 'Smith',
}
delete user.name;
console.log(user.name);



// Задача 2

const user2 = { name: 'John' };
user2.name = 'Pete2';
console.log(user2.name); // Ответ: Работает, выводится - Pete2
/*  В объекте с использованием const,
саму переменную нельзя переопределить другим объектам, но сам объект может быть изменен.
/const ограничивает переопределение переменной,
но не ограничивает изменение содержимого объекта, на который указывает переменная.
*/



// Задача 3

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
let sum = 0;
for (let key in salaries) {
    // if (typeof salaries2[key] === 'number') - это если нет уверенности что будут числа
        sum += salaries[key];
}
console.log('Все зарплаты2:', sum, '$');



