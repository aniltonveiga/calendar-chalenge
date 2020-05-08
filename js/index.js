
    import {getCalendar} from './calendar.js';

    const selectYear = document.getElementById('yearCombo');
    selectYear.addEventListener("change", event => handleSearchYear(event.target.value));

    const selectMonth = document.getElementById('monthCombo')
    selectMonth.addEventListener("change", event => handleSearchMonth(event.target.value));

    const buttonPrev = document.getElementById('prev');
    buttonPrev.addEventListener("click", handlePrev);

    const buttonNext = document.getElementById('next');
    buttonNext.addEventListener("click", handleNext);

    const prevMonth = document.getElementById('prevMonth');
    prevMonth.addEventListener("click", handlePrevMonth);

    const nextMonth = document.getElementById('nextMonth');
    nextMonth.addEventListener("click", handleNextMonth);

    var newDate = new Date();
    var x = newDate.getFullYear();
    var y = newDate.getMonth();

    selectMonth.selectedIndex = y;

    for (var i = 1950; i < 2051; i++) {
        var opt = document.createElement("option");
        opt.value = i;
        opt.text = i;
        selectYear.add(opt, selectYear.options[i]);
    }

    selectYear.value = x;
    getCalendar(x, y);

    function handlePrevMonth() {
        if (y >= 0) {
            y--
            getCalendar(x, y)
        }
        if (y < 0) {
            y = 11;
            x--;
            getCalendar(x, y)
        }
    }

    function handleNextMonth() {
        if (y <= 11) {
            y++
            getCalendar(x, y)
        }
        if (y > 11) {
            y = 0;
            x++;
            getCalendar(x, y)
        }

    }

    function handlePrev() {
        x--
        getCalendar(x, y)
    }

    function handleNext() {
        x++
        getCalendar(x, y)
    }

    function handleSearchMonth(value) {
        y = value;
        getCalendar(x, value)
    }
    
    function handleSearchYear(value) {
        x = value;
        getCalendar(value, y)
    }
