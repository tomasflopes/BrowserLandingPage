function startClock() {
    let date = getDate();
    let formatedDate = formatDate(date);
    displayDate(formatedDate);
    let mainColor = dateToHexColor(date);
    let secondaryColor = generateColor(mainColor, 8, 15, 15);
    let thirdColor = generateColor(mainColor, 2, 5, 5);
    changeBackgroundColor(mainColor, secondaryColor, thirdColor);
}

function getDate() {
    let date = new Date();

    return date;
}

function formatDate(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = format(hours);
    minutes = format(minutes);
    seconds = format(seconds);

    let formatedDate = hours + ' : ' + minutes + ' : ' + seconds;

    return formatedDate;
}

function dateToHexColor(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let dateForHex = '#' + format((hours % 12)).toString() + format((Math.abs(minutes - 20) / 2).toString()) + format((seconds / 2).toString());

    /* I divide seconds and minutes in half so the colors don't get too strong
    and I substracted 20 in minutes to get a blueish color that I like in every state of the iterations */

    return dateForHex;
}

function generateColor(color, rAdd, gAdd, bAdd) {
    let r = color.substr(1, 2);
    let g = color.substr(3, 2);
    let b = color.substr(5, 2);

    let redAdd = 8;
    let greenAdd = 20;
    let blueAdd = 20;

    r *= 1;
    g *= 1; /* to convert this to int */
    b *= 1;

    r += rAdd;
    g += gAdd;
    b += bAdd;

    let newColor = '#' + format(r) + format(g) + format(b);

    return newColor;
}

function format(time) {
    strTime = String(time);
    nNumbers = strTime.length;

    if (nNumbers < 2) {
        strTime = '0' + strTime;
    }

    return strTime;
}

function displayDate(date) {
    let htmlHours = document.getElementById('numeros');
    htmlHours.innerHTML = date;
}

function changeBackgroundColor(color, secondaryColor, thirdColor) {
    document.body.style.backgroundColor = color;

    let clock = document.getElementById('numeros');
    clock.style.color = secondaryColor;

    let searchBox = document.getElementById('search-box');
    let searchBtn = document.getElementById('search-btn');

    searchBox.style.backgroundColor = thirdColor;
    searchBtn.style.backgroundColor = thirdColor;
}

setInterval('startClock()', 1000);

window.onload = startClock;