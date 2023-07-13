'use strict';

const box = document.getElementById('box');

console.log(box);

// const btns = document.getElementsByTagName('button')[1];
const btns = document.getElementsByTagName('button');

// console.log(btns);
console.log(btns[0]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
const boxs = document.querySelectorAll('#box');

console.log(boxs);

// console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); // first element
console.log(oneHeart);

const oneBox = document.querySelector('div'); 
console.log(oneBox);
