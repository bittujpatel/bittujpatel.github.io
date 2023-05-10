// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// to get age year

function calculateAge(birthday) {
    var ageDifMs = Date.now() - new Date(birthday).getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function showAge() {
    var Bdate = "2000-10-06"; // your date of birth in yyyy-mm-dd format
    var age = calculateAge(Bdate);
    document.getElementById('age').innerHTML = age;
}

window.onload = showAge; // call the showAge function when the page loads