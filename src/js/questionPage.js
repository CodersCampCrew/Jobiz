// test array
const questions = [
    {
        question: "2+2",
        answer1: "4",
        answer2: "3",
        answer3: "2",
    },
    {
        question: "2+1",
        answer1: "4",
        answer2: "3",
        answer3: "2",
    },
];
let question;
let questionCounter = 0;
let avaibleQuestions = [];
let currentQuestion = {};
const answers = Array.from(document.getElementsByClassName("answer__button"));
let skipBtn = document.querySelector('.button-skip');

class ProgressBar {
    constructor(seconds) {
        this.secondsToCount = seconds;
        this.countDownDate = new Date();
        this.countDownDate.setSeconds(
            this.countDownDate.getSeconds() + this.secondsToCount
        );
        this.createProgressBar();
        this.element = document.getElementById("progress-bar-text");

        this.startBar();
        this._status = true;
    }

    createProgressBar() {
        let progressBarElem = document.createElement("div");
        progressBarElem.className = "round-time-bar";
        progressBarElem.id = "progress";
        progressBarElem.innerHTML =
            "<div></div><p class='progress-bar-text' id='progress-bar-text'></p>";

        let healthBar = document.querySelector(".health");
        let main = document.querySelector(".container");
        main.insertBefore(progressBarElem, healthBar);
        document.documentElement.style.setProperty("--duration", 15);
    }

    startBar() {
        const interval = setInterval(
            (date = this.countDownDate, elem = this.element) => {
                let now = new Date().getTime();
                let distance = date - now;
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);
                elem.innerHTML = seconds + "s ";
                if (distance < 0) {
                    clearInterval(interval);
                    elem.innerHTML = "You've lost heart";
                    this.status = false;
                    //TIMES UP
                }
            },
            1000
        );
        this.element.innerHTML = this.secondsToCount + "s";
    }
}

function addHoverToAnswerButtons() {
    let answerButtons = document.getElementsByClassName("answer__button");
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.add("answer__button-hover");
    }
}
function enableQuestions() {
    document.getElementsByClassName("answer-container")[0].style.filter =
        "blur(0px)";
    let btn = (document.getElementsByClassName(
        "button-question-read"
    )[0].style.visibility = "hidden");
}

function disableQuestions() {
    document.getElementsByClassName("answer-container")[0].style.filter =
        "blur(5px)";
    let btn = (document.getElementsByClassName(
        "button-question-read"
    )[0].style.visibility = "visible");
}

function startQuiz() {
    questionCounter = 0;
    avaibleQuestions = [...questions];
    console.log(avaibleQuestions);
    newQuestion();
}

function newQuestion() {
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * avaibleQuestions.length);
    currentQuestion = avaibleQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    answers.forEach((answer) => {
        const number = answer.dataset["number"];
        answer.innerHTML = currentQuestion["answer" + number];
    });

    avaibleQuestions.splice(questionIndex, 1);
}
answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
        newQuestion();
        disableQuestions();
    });
});

function skipQuestion () {
    skipBtn.disabled = true;
    skipBtn.classList.add('button-skip--disabled');
    newQuestion();
}
skipBtn.addEventListener('click', skipQuestion);

window.onload = function () {
    document
        .getElementById("button-question-read")
        .addEventListener("click", () => {
            enableQuestions();
            addHoverToAnswerButtons();
            new ProgressBar(15);
        });
};

startQuiz(); //Function Test
