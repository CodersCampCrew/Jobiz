
import {ls} from "./localstorage.js";

const frontEnd = document.querySelector("#choice1");
    frontEnd.addEventListener("click", function () {ls.setPath("Front-end");});
const backEnd = document.querySelector('#choice2');
    backEnd.addEventListener('click', function () { ls.setPath("Back-end");});
