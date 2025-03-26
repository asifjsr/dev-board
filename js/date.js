let today = new Date();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[today.getDay()];

let date = today.getDate();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[today.getMonth()];
let year = today.getFullYear();


document.getElementById("day").innerText = day;
document.getElementById("date").innerText = month + " " + date;
document.getElementById("year").innerText = year;