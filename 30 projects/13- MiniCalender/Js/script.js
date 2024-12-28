let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

const today = new date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const allMonth = ["January", "Fubuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

date.innerHTML = today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonth[today.getMonth()];
year.innerHTML = today.getFullYear();