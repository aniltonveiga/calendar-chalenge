
export function getCalendar(x, y) {
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   
    const calendarBody = document.getElementById('calendarBody');
    const calendarTitle = document.getElementById('calendarTitle');
    calendarBody.innerHTML = ' '
    const fullYear = x;
    const month = y;

    const firstDay = (new Date(fullYear, month)).getDay();
    function getDaysInMonth(date) {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    }
    const daysInMonth = getDaysInMonth(new Date(fullYear, month));
    renderCalendar(calendarBody, firstDay, daysInMonth);
    calendarTitle.innerHTML = months[month] + " " + fullYear;
}

function renderCalendar(table, firstDay, daysInMonth) {
    var day = 1;

    for (var i = 0; i < 6; i++) {
        var newRow = table.insertRow(-1);

        for (var j = 0; j < 7; j++) {
            if (day <= daysInMonth) {
                if (i == 0 && j < 7 && j == firstDay) {
                    var cell = document.createElement("td");
                    var cellText = document.createTextNode(day++);
                    cell.appendChild(cellText);
                    newRow.appendChild(cell);
                    j++
                }
                if (i == 0 && j > firstDay) {
                    if (j < 7) {
                        var cell = document.createElement("td");
                        var cellText = document.createTextNode(day++);
                        cell.appendChild(cellText);
                        newRow.appendChild(cell);
                    }
                }
                else {
                    if (i == 0 && j < 7) {
                        var cell = document.createElement("td");
                        var cellText = document.createTextNode(' ');
                        cell.appendChild(cellText);
                        newRow.appendChild(cell);
                    }
                }
                if (i > 0) {
                    var cell = document.createElement("td");
                    var cellText = document.createTextNode(day++);
                    cell.appendChild(cellText);
                    newRow.appendChild(cell);
                }
            }
        }
    }
}
