
import {ls} from "./localstorage.js"

    const button = document.querySelector("button");
        button.addEventListener("click", function () {
        ls.setPlayerName(document.querySelector('input').value);});
