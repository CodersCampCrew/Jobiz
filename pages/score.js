import { ls } from "../js/localstorage.js";

function resetSettings() {
    ls.setPath("");
    ls.setTier("");
    ls.setPlayerName("");
}

window.onload = function () {
    document
        .getElementById("button-question-read")
        .addEventListener("click", () => {
            resetSettings();
        });
};
