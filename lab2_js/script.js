// Функція, яка змінює малюнок при наведенні миші
function changeImage() {
    var image = document.querySelector('.cat'); 
    image.src = './img/cat2.jpg'; 
}
// Функція, яка відновлює початковий вигляд малюнка
function restoreImage() {
    var image = document.querySelector('.cat'); 
    image.src = './img/cat.jpg';
}

// Функція для перевірки міста та виведення результату
function checkCity() {
    const phoneNumber = document.getElementById("phoneNumber").value;
    
    const city = document.getElementById("city").value;

    if (phoneNumber.trim() === "" || city.trim() === "") {
        alert("Обидва поля обов'язкові для заповнення");
        return;
    }

    var dictionary = {
        "Київ": "10000",
        "Львів": "10001",
        "Одеса": "10002",
        "Харків": "10003",
        "Дніпро": "10004",
        "Запоріжжя": "10005",
        "Донецьк": "10006",
        "Херсон": "10007",
        "Полтава": "10008",
        "Черкаси": "10009",
        "Вінниця": "10010",
        "Житомир": "10011",
        "Чернігів": "10012",
        "Суми": "10013",
        "Кропивницький": "10014",
        "Івано-Франківськ": "10015",
        "Ужгород": "10016",
        "Чернівці": "10017",
        "Тернопіль": "10018",
        "Луцьк": "10019",
        "Рівне": "10020",
        "Хмельницький": "10021",
        "Луцьк": "10022",
    };


    if (city in dictionary) {
        document.getElementById('result').innerText = 'Код міста ' + dictionary[city] + ': ' + phoneNumber;
    } else {
        document.getElementById('result').innerText = 'Місто ' + city + ' не підтримується';
    }
}

