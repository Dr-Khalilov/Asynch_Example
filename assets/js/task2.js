'use strict';
const span = document.querySelector('.textContainer');
const list = document.querySelector('.listContainer');
const main = document.querySelector('.mainContainer');

document.addEventListener('mouseover', showText);

function showText(e) {
    const text = document.createElement('div');
    text.append(e.target.innerHTML);

}