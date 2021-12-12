class ProgressBar {
	constructor(seconds, element) {
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
		let e = document.createElement("div");
		e.className = "round-time-bar";
		e.id = "progress";
		e.innerHTML =
			"<div></div><p class='progress-bar-text' id='progress-bar-text'></p>";

		let healthBar = document.querySelector(".health");
		let main = document.querySelector(".container");
		main.insertBefore(e, healthBar);
		document.documentElement.style.setProperty("--duration", 15);
	}

	startBar() {
		this.element.innerHTML = this.secondsToCount + "s";
		var x = setInterval((date = this.countDownDate, elem = this.element) => {
			var now = new Date().getTime();
			var distance = date - now;
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			elem.innerHTML = seconds + "s ";
			if (distance < 0) {
				clearInterval(x);
				elem.innerHTML = "You've lost heart";
				this.status = false;
				//TIMES UP
			}
		}, 1000);
	}
}

function addHoverToAnswerButtons() {
	let answerButtons = document.getElementsByClassName("answer__button");
	console.log(answerButtons);
	for (let i = 0; i < answerButtons.length; i++) {
		answerButtons[i].classList.add("answer__button-hover");
	}
}
function enableQuestions() {
	document.getElementsByClassName("answer-container")[0].style.filter =
		"blur(0px)";
	let btn = document.getElementsByClassName("button-question-read")[0];
	btn.parentElement.removeChild(btn);
}

window.onload = function () {
	document
		.getElementById("button-question-read")
		.addEventListener("click", () => {
			enableQuestions();
			addHoverToAnswerButtons();
			new ProgressBar(15, document.getElementById("progress-bar-text"));
		});
};
