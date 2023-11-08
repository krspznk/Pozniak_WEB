class Refrigerator {
    constructor(color, brand, model, price) {
        this.color = color;
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
}

const refrigerators = [
    new Refrigerator("Білий", "LG", "ABCD123", 799.99),
    new Refrigerator("Срібний", "Samsung", "XYZ456", 899.99),
    new Refrigerator("Чорний", "Whirlpool", "1234EFG", 699.99),
    new Refrigerator("Сірий", "Bosch", "GHI789", 849.99),
    new Refrigerator("Синій", "Haier", "JKL012", 749.99),
    new Refrigerator("Червоний", "Electrolux", "MNO345", 999.99),
];

function displayRefrigerators() {
    var table = document.getElementById("refrigeratorTable");
    table.style.display = 'contents';

    table.innerHTML = "<tr><th>Колір</th><th>Марка</th><th>Модель</th><th>Ціна</th></tr>";
    refrigerators.forEach(refrigerator => {
        table.innerHTML += `<tr><td>${refrigerator.color}</td><td>${refrigerator.brand}</td><td>${refrigerator.model}</td><td>${refrigerator.price}</td></tr>`;
    });
}