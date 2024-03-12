'use strict';

const yearOfBirthInput = prompt('Введите год Вашего рождения: ');
let yearOfBirth = parseInt(yearOfBirthInput);
let isYearEntered = true;

if (isNaN(yearOfBirth) || yearOfBirth < 0) {
    alert('Жалко, что вы не захотели вводить год своего рождения... 😩');
    isYearEntered = false;
}

const city = prompt('В каком городе Вы живете?: ');
let isCityEntered = true;

if (!city) {
    alert('Жаль, что вы не захотели вводить город... 😩');
    isCityEntered = false;
}

const favoriteSport = prompt('Какой у Вас любимый вид спорта?: ');
let isSportEntered = true;

if (!favoriteSport) {
    alert('Жаль, что вы не захотели вводить вид спорта... 😩');
    isSportEntered = false;
}

if (isYearEntered && isCityEntered && isSportEntered) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;

    let message = `Ваш возраст: ${age} лет.`;

    switch (city.toLowerCase()) {
        case 'київ':
        case 'киев':
        case 'kyiv':
        case 'washington':
        case 'вашингтон':
        case 'london':
        case 'лондон':
            let countries = {
                'київ': 'України',
                'киев': 'Украины',
                'kyiv': 'Ukraine',
                'вашингтон': 'США',
                'washington': 'USA',
                'лондон': 'Великої Британії',
                'london': 'Great Britain',
            };
            let country = countries[city.toLowerCase()];
            message += `Вы живете в столице ${country}.`;
            break;
        default:
            message += `Вы живете в городе ${city}.`;
            break;
    }

    const champions = {
        'футбол': 'Месси',
        'тенис': 'Серена Вильямс',
        'баскетбол': 'Леброн Джеймс',
    };
    const championName = champions[favoriteSport.toLowerCase()];
    if (championName) {
        message += ` Круто! Хочешь стать как ${championName}?`;
    } else {
        message += ` Ты выбрал(а) ${favoriteSport}. Класс!`;
    }

    alert(message);
}
