//TESTING LOCALSTORAGE WHETHER IT WORKS OR EXIST 
export function localStorageTest() {                 //to avoid name collisions
    
    try {
        localStorage.setItem("test","test");
        localStorage.removeItem("test");
        console.log('Local Storage Fine')
        return true;
    } 
    catch(e) {
        return false;
    }
}

//LOCKING THE START BUTTON IF LOCAL STORAGE DOESNT WOKR
export const lockStart = () => {
    if (localStorageTest()) {
      return;
    } 
    else {
      document.querySelector("a").remove();
      document.querySelector("main").insertAdjacentHTML("beforeend",'<button class="btn-fail">Start</button>');
      document.querySelector(".btn-fail").addEventListener("mouseover", function () {
      document.querySelector("main").insertAdjacentHTML("beforeend",'<p class="err-p">Fix your local storage</p>');});
      document.querySelector(".btn-fail").addEventListener("mouseout", function () {document.querySelector(".err-p").remove();});
    }
  };

//SAVING TO AND LOADING FROM LOCALSTORAGE - universal function

export function saveToLocalStorage(resource, positionName) {

    const resourceToSave = JSON.stringify(resource);
    localStorage.setItem(positionName, resourceToSave);

} 

export function loadFromLocalStorage(positionName) {

    const resource = localStorage.getItem(positionName);
    const resourceToLoad = JSON.parse(resource);
    return resourceToLoad;
}

//MAIN OBJECTS , GETTERS AND SETTERS METHODS

//============================================================
export const setGame = function () {
const game = {
    questions: [],
    currentQuestion: 0,
    path: "",
    tier: "",
    }
saveToLocalStorage(game,"game");
}

export const getGame = () => {
    return loadFromLocalStorage("game");
};

//============================================================
export const setPlayer = function () {
const player = {
    name:"",
    skipUsed: false, // useSkip przestawia na true
    score: 0,        // increase by 1 after correct answer
    lives: 3,        // decrease by 1 after wrong answer
    };
saveToLocalStorage(player,"player");
}

export const getPlayer = () => {
    return loadFromLocalStorage("player");
};

//============================================================

export const setScoreboard = () => {
    const scoreboard = [{name: '', score: 0}];

saveToLocalStorage(scoreboard, "scoreboard");
}

const getScoreboard = () => {
    return loadFromLocalStorage("scoreboard");
};

//API PARTICULAR FUNCTIONS

const setQuestions = function (...ques){ //ques == questions, could be any type
    const game = getGame();
    localStorage.removeItem("game"); // to prevent bugs
    game.questions = ques;
    saveToLocalStorage(game, "game");
    console.log(ques);
};


const nextQuestion = function () {
    const game = getGame();
    localStorage.removeItem("game");
    game.currentQuestion++;
    saveToLocalStorage(game, "game");
};

const setPath = function (p) {
   const game = getGame();
   localStorage.removeItem("game"); 
   game.path = p;
   saveToLocalStorage(game, "game");
};

const setTier = function (t) {
    const game = getGame();
    localStorage.removeItem("game");
    game.tier = t;
    saveToLocalStorage(game, "game");
};

const setPlayerName = function (n) {
    const player = getPlayer();
    localStorage.removeItem("player");
    player.name = n;
    saveToLocalStorage(player, "player");
};

const useSkip = function () {
    const player = getPlayer();
    localStorage.removeItem("player");
    player.skipUsed = true;
    saveToLocalStorage(player, "player");
};

const addPoint = function () {
    const player = getPlayer();
    localStorage.removeItem("player");
    player.score++;
    saveToLocalStorage(player, "player");
};

const removeLife = function () {
    const player = getPlayer();
    localStorage.removeItem("player");
    player.lives--;
    saveToLocalStorage(player, "player");
};

const addScore = function (n, s) { //n - string, player name, s - number, score
    const objToPush = {
        name: n,
        score: s,
    };
    const scoreboard = getScoreboard();
    localStorage.removeItem("scoreboard");
    scoreboard.push(objToPush);
    saveToLocalStorage(scoreboard, "scoreboard");

};

// OBJECT TO IMPORT ALL FUNCTIONS 

export const ls = {                             
    localStorageTest: localStorageTest,
    lockStart: lockStart,
    saveToLocalStorage: saveToLocalStorage,
    loadFromLocalStorage: loadFromLocalStorage,
    getPlayer: getPlayer,
    getGame: getGame,
    getScoreboard: getScoreboard,
    setQuestions: setQuestions,
    nextQuestion: nextQuestion,
    setPath: setPath,
    setTier: setTier,
    setPlayerName: setPlayerName,
    useSkip: useSkip,
    addPoint: addPoint,
    removeLife: removeLife,
    addScore: addScore
};







