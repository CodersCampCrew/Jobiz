import { ProgressBar } from "./progressBar.js";
import { ls } from "./localstorage.js";

const _GAME_DATA = ls.getGame();

class Game {
    constructor(tier) {
        this.tier = tier; // intern, junior etc...
        const progressBarTimings = {
            Intern: 30,
            Junior: 20,
            Regular: 15,
            Senior: 10,
        };
        this.tierTimings = progressBarTimings[tier]; //determine how much time will be set on progress bar
        this.questions = _GAME_DATA.questions; //get questions from local storage
        this.currentQuestionIndex = _GAME_DATA.currentQuestion; // get current question index from local storage
        this.currentQuestion = this.questions[this.currentQuestionIndex]; //set current question

        this.progressQuestionBar = document.querySelector(".question-count"); //get questions progress bar
        this.progressQuestionBar.value = this.currentQuestionIndex + 1; // set progress bar value to current question index

        this.heart = ls.getPlayer().lives;
        this.skipEnabled = true;
        this.score = 0; //set score to 0
        this.createQuestionPage();
    }

    enableQuestions() {
        document.getElementsByClassName("answer-container")[0].style.filter =
            "blur(0px)";
        document.getElementsByClassName(
            "button-question-read"
        )[0].style.visibility = "hidden";
    }

    disableQuestions() {
        document.getElementsByClassName("answer-container")[0].style.filter =
            "blur(5px)";
        let btn = (document.getElementsByClassName(
            "button-question-read"
        )[0].style.visibility = "visible");
    }

    recreateAnswerContainer() {
        /* delete all old answers and create container again */
        const answerContainer = document.querySelector(".answer-container");
        answerContainer.parentElement.removeChild(answerContainer);
        const newAnswerContainer = document.createElement("section");
        newAnswerContainer.className = "answer-container";
        const main = document.querySelector(".container");
        const btn = document.querySelector(".button-question-read");
        main.insertBefore(newAnswerContainer, btn);
    }

    createQuestionPage() {
        /* 
			change question in question container
			create answer buttons
		*/
        document.querySelector("#question").innerHTML =
            this.currentQuestion.question;

        for (let i = 0; i < this.currentQuestion.answers.length; i++) {
            //create answer buttons

            let answer = document.createElement("div");
            answer.className = "answer";

            let answerButton = document.createElement("button");
            answerButton.className = "answer__button";
            answerButton.setAttribute("data-number", i);
            let answerText = this.currentQuestion.answers[i];
            if (this.currentQuestion.correct_answer == answerText) {
                this.correctAnswerButton = answerButton;
            }

            answerText = answerText.replace("<", "&lt;");
            answerText = answerText.replace(">", "&gt;");
            answerButton.innerHTML = answerText;
            //protection against outputing html tags on site

            answer.appendChild(answerButton);
            document.querySelector(".answer-container").appendChild(answer);
        }
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        this.currentQuestion = this.questions[this.currentQuestionIndex];
        this.progressQuestionBar.value = this.currentQuestionIndex + 1;

        if (this.currentQuestionIndex == 9 || this.heart == 0) {
            ls.setCurrentScore(this.score);
            window.location.href = "./score.html";
        } else {
            this.recreateAnswerContainer();
            this.createQuestionPage();
            this.disableQuestions();
        }
    }

    correctAnswer(answer) {
        /* 
			kills progress bar
			highlights correct answer
			adds 1 to score
			proceedes to next question
		*/
        this.pgBar.killBar();
        answer.classList.add("answer__button--correct");
        this.score++;
        setTimeout(() => {
            this.nextQuestion();
        }, 2000);
    }

    wrongAnswer(answer = null) {
        /* 
			if wrong answer is given as argument it will be highlighted
			if no argument is given it will be highlighted the correct answer only
		*/
        game.deleteHeart();
        this.pgBar.killBar();
        if (answer) {
            answer.classList.add("answer__button--incorrect");
        }
        this.correctAnswerButton.classList.add("answer__button--correct");
        setTimeout(() => {
            this.nextQuestion();
        }, 2000);
    }

    startGame() {
        this.pgBar = new ProgressBar(this.tierTimings);
        const answers = document.querySelectorAll(".answer__button");

        answers.forEach((answer) => {
            //adds event listener to answer buttons
            answer.addEventListener("click", () => {
                if (this.checkAnswer(answer.dataset.number)) {
                    this.correctAnswer(answer);
                } else {
                    this.wrongAnswer(answer);
                }
            });
        });

        document
            .getElementById("progress-bar-text")
            .addEventListener("progressBarEnded", () => {
                //called when progress bar ends
                this.wrongAnswer();
                return;
            });

        document.getElementById('skip-question').addEventListener('click', () => {
            this.skipQuestion();
        })
    }

    checkAnswer(answer) {
        answer = this.currentQuestion.answers[answer];
        if (answer == this.currentQuestion.correct_answer) {
            return true;
        } else {
            return false;
        }
    }

    deleteHeart() {
        this.heart--;
        const hearts = document.querySelectorAll(".fas");
        hearts[this.heart].classList.add("icon--inactive");
        if (this.heart == 0) {
            console.log("game over");
        }
    }
    skipQuestion(){
        const answer = document.querySelector('.answer')
        const skipBtn = document.querySelector('.button-skip');
        const btnQuestionRead = document.querySelector('.button-question-read');
        if (btnQuestionRead.hasAttribute('style')) {
            this.pgBar.killBar(); 
            answer.classList.add("answer__button--correct");
        }
        skipBtn.disabled = true;
        skipBtn.classList.add("button-skip--disabled");
        
        setTimeout(() => {
            this.nextQuestion();
        }, 3000);
    }
}

const game = new Game(_GAME_DATA.tier);

window.onload = function () {
    document
        .getElementById("button-question-read")
        .addEventListener("click", () => {
            game.enableQuestions();
            game.startGame();
        });
    document.querySelector('.button-skip').addEventListener("click", () => {
        game.skipQuestion();
    })
};
