import { ls } from '../js/localstorage.js';

const intern = document.querySelector('#choice1');
intern.addEventListener('click', function () {
  ls.setTier('Intern');
});

const junior = document.querySelector('#choice2');
junior.addEventListener('click', function () {
  ls.setTier('Junior');
});

const regular = document.querySelector('#choice3');
regular.addEventListener('click', function () {
  ls.setTier('Regular');
});

const senior = document.querySelector('#choice4');
senior.addEventListener('click', function () {
  ls.setTier('Senior');
});
