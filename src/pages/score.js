import { ls } from "../js/localstorage.js";

ls.setScoreboard();
function resetSettings() {
    localStorage.removeItem("player");
    ls.setPlayer();
}

function saveToScoreboard() {
    const player = ls.getPlayer();
    const { name, score } = player;
    ls.addScore(name, score);
}

function displayScoreboard() {
    const scoreBoard = ls.getScoreboard();
    scoreBoard.sort((a, b) => b.score - a.score);
    let index = 1;
    scoreBoard.forEach((element) => {
        if (!element.name) {
            return;
        } else if (index < 5) {
            const HTML = `
                <tr>
                    <td>${index}</td>
                    <td>${element.name}</td>
                    <td>${element.score}</td>
                </tr>
            `;
            document
                .querySelector(".score__tbody")
                .insertAdjacentHTML("beforeend", HTML);
            ++index;
        }
    });
}

saveToScoreboard();

displayScoreboard();

resetSettings();
