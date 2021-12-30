const progressBarEnded = new CustomEvent('progressBarEnded');

export class ProgressBar {
  constructor(seconds) {
    this.secondsToCount = seconds;
    this.countDownDate = new Date();
    this.countDownDate.setSeconds(
      this.countDownDate.getSeconds() + this.secondsToCount
    );
    this.createProgressBar();
    this.element = document.getElementById('progress-bar-text');

    this.startBar();
    this._status = true;
  }

  createProgressBar() {
    let progressBarElem = document.createElement('div');
    progressBarElem.className = 'round-time-bar';
    progressBarElem.id = 'progress';
    progressBarElem.innerHTML =
      "<div></div><p class='progress-bar-text' id='progress-bar-text'></p>";

    let healthBar = document.querySelector('.health');
    let main = document.querySelector('.container');
    main.insertBefore(progressBarElem, healthBar);
    document.documentElement.style.setProperty(
      '--duration',
      this.secondsToCount
    );
  }

  startBar() {
    this.interval = setInterval(
      (date = this.countDownDate, elem = this.element) => {
        let now = new Date().getTime();
        let distance = date - now;
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        elem.innerHTML = seconds + 's ';
        if (distance < 0) {
          clearInterval(this.interval);
          elem.innerHTML = "You've lost heart";
          this._status = false;

          elem.dispatchEvent(progressBarEnded);
          //dispatches custom event for game class to get the status of the progress bar
        }
      },
      1000
    );
    this.element.innerHTML = this.secondsToCount + 's';
  }

  killBar() {
    try {
      clearInterval(this.interval);
      const bar = document.getElementById('progress');
      bar.parentElement.removeChild(bar);
      this.status = true;
    } catch (e) {}
  }
}
