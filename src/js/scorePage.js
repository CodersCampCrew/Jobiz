import {ls} from "./localstorage.js";

ls.setScoreboard();

function resetSettings(){
   
    localStorage.removeItem("player");
    ls.setPlayer();
 
}

function showPlayerScore() {
    const player = ls.getPlayer();
    const game = ls.getGame();
    const currentScore = player.score;
    const tier = game.tier;

    //document.querySelector('#score_line').innerText = 'Your score: ' +currentScore + '/20';
    document.querySelector(".container").insertAdjacentHTML('afterbegin', `<h3 class="container__title">Your score: ${currentScore}/20</h3>`);
    //<p class="container__title" id="role_line">You should apply for senior roles!</p>
    document.querySelector("#role_line").insertAdjacentHTML('afterbegin', `<p class="container__title" id="role">You should apply for ${tier} roles!</p>`);
}

function saveToScoreboard() {
    const player = ls.getPlayer();
    const {name, score} = player;
    ls.addScore(name,score);
    
}

function displayScoreboard() {
    const scoreBoard = ls.getScoreboard();
    scoreBoard.sort((a,b) => b.score - a.score);
    let index=1;
    scoreBoard.forEach(element => {
    if (!element.name) {
            return
        }
    else if (index<11) {
        console.log(index);
        const HTML = `
        <tr>
            <td>${index}</td>
            <td>${element.name}</td>
            <td>${element.score}</td>
        </tr>`
        document.querySelector('.score__tbody').insertAdjacentHTML("beforeend", HTML);  
        ++index;
    }
    });
    

}

showPlayerScore();

saveToScoreboard();

displayScoreboard();

resetSettings();