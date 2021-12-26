import { ls } from "./localstorage.js";
import { QuizapiWrapper } from "./quizapiWrapper.js";
async function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

let quizapiWrapper = new QuizapiWrapper(ls.getPath());

const button = document.querySelector("button");
button.addEventListener("click", async function () {
    const nickname = document.querySelector(".nickname-input");
    if (nickname.value === "") {
        nickname.style.border = "5px solid #d41c1c";
        nickname.placeholder = "Please enter a nickname";
    } else {
        ls.setPlayerName(nickname.value);

        document.querySelector(".lds-ring").style.display = "block";
        button.style.display = "none";
        ls.setPlayerName(document.querySelector("input").value);
        const questions = await shuffle(await quizapiWrapper.getData());
        ls.setQuestions(await questions);

        window.location.href = "./question.html";
    }
});
