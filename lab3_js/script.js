const countriesArray = [];

function addCountry(ele) {
    if (event.key !== "Enter") {
        return;
    }

    const countryField = document.getElementById("countriField");
    const country = countryField.value.trim();

    if (country === "") {
        return;
    }

    if (!containsOnlyLettersAndText(country)) {
        alert("Текст містить заборонені знаки");
        return;
    }

    countriesArray.push(country);
    printCountries();
    countryField.value = "";
}

function printCountries() {
    const countryResult = document.getElementById("countryRezult");
    countryResult.innerHTML = "<p>" + countriesArray.join(", ") + "</p>";
}

function containsOnlyLettersAndText(inputString) {
    const regex = /^[A-Za-zА-Яа-яҐґЄєІіЇї\s'-]+$/;
    return regex.test(inputString);
}

document.getElementById("countriField").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addCountry(this);
    }
});

var currentCell = null;
var saveButton = document.getElementById('saveButton');

function editCell(cell) {
    var saveButton = document.getElementById('saveButton');

    if (currentCell) {
        saveCell();
    }
    currentCell = cell;
    cell.setAttribute('contenteditable', 'true');
    saveButton.style.display = 'flex';
}

function saveCell() {
    var saveButton = document.getElementById('saveButton');
    if (currentCell) {
        const inputValue = currentCell.innerText;
        currentCell.removeAttribute('contenteditable');
        currentCell = null;
        saveButton.style.display = 'none';
    }
}
