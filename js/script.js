let userInput = document.getElementById("dateBirth");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge(){
    let birthDate = new Date(userInput.value)

    let dayBirth = birthDate.getDate();
    let monthBirth = birthDate.getMonth() + 1;
    let yearBirth = birthDate.getFullYear();

    let today = new Date();

    let dayToday = today.getDate();
    let monthToday = today.getMonth() + 1;
    let yearToday = today.getFullYear();

    let yearDifference, monthDifference, dayDifference;

    yearDifference = yearToday - yearBirth;

    if (monthToday >= monthBirth) {
        monthDifference = monthToday - monthBirth;
    }
    else{
        yearDifference--;
        monthDifference = 12 + monthToday - monthBirth;
    }

    if (dayToday >= dayBirth) {
        dayDifference = dayToday - dayBirth;
    }
    else{
        monthDifference--;
        dayDifference = DaysInMonth(monthToday, yearToday) + dayToday - dayBirth;
    }
    if (monthDifference < 0) {
        monthDifference = 11;
        yearDifference--;
    }
    document.getElementById("year-result").innerHTML = yearDifference;
    document.getElementById("month-result").innerHTML = monthDifference;
    document.getElementById("day-result").innerHTML = dayDifference;
}
function DaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
