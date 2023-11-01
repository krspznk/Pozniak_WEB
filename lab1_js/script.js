    var arrExh = [];
    
    arrExh[0] = {
        Title: "Виставка сучасного мистецтва",
        Place: 'Музей мистецтв',
        Org: 'Олександр Мельник',
        Start: '2023-10-30'
    };
    
    arrExh[1] = {
        Title: "Виставка скульптур модерну",
        Place: 'Мистецький центр',
        Org: '',
        Start: '2023-11-06'
    };
    
    arrExh[2] = {
        Title: "Людина та я",
        Place: 'Мистецький арсенал',
        Org: 'Георгій Гур',
        Start: '2023-10-23'
    };
    
    arrExh[3] = {
        Title: "Фото дівчини в сукні",
        Place: 'Галерея на Подолі',
        Org: 'Вікторія Онопко',
        Start: '2023-10-27'
    };
    
    function ras_diff_Days(text) {
    var currentDate = new Date();
    var date1 = new Date(text);
    var timediff = currentDate - date1;
    var daysDiff = Math.ceil(Math.abs(timediff) / (1000 * 3600 * 24));
    if (timediff<0){ return -daysDiff;}
    return daysDiff;
}

    function ras() {
    var html = "<table class='b-table'><tr><td>Назва</td><td>Місце проведення</td><td>Організатор</td><td>Початок</td><td>Днів до закриття</td></tr>";

    arrExh.forEach(function (item) {
        var text = item['Start'];
        var diffDays = ras_diff_Days(text);
        var rowColor = '';
        var daysLeft = '';

        if (diffDays > 7) {
            rowColor = 'red';
            daysLeft = "Виставка закінчилася";
        } else if (diffDays < 0) {
            rowColor = 'green';
            daysLeft = "Очікуємо виставу";
        } else {
            daysLeft =(7-diffDays) + " днів до закриття";
        }

        html += "<tr style='background:" + rowColor + "'>";
        for (var key in item) {
            var value = item[key] || "Невідомо";
            html += "<td>" + value + "</td>";
        }
        html += "<td>" + daysLeft + "</td>";
        html += "</tr>";
    });

    html += "</table>";
    document.getElementById('result').innerHTML = html;
}



