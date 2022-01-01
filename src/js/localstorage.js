export const localStorageTest = function () {
    try {
        localStorage.setItem("test", "test");
        localStorage.removeItem("test");
        return true;
    } catch (e) {
        return false;
    }
};

export const lockStart = function () {
    if (localStorageTest()) {
        return;
    } else {
        document.querySelector("a").remove();
        document
            .querySelector("main")
            .insertAdjacentHTML(
                "beforeend",
                '<button class="btn-fail">Start</button>'
            );
        document
            .querySelector(".btn-fail")
            .addEventListener("mouseover", function () {
                document
                    .querySelector("main")
                    .insertAdjacentHTML(
                        "beforeend",
                        '<p class="err-p">Fix your local storage</p>'
                    );
            });
        document
            .querySelector(".btn-fail")
            .addEventListener("mouseout", function () {
                document.querySelector(".err-p").remove();
            });
    }
};

export const saveToLocalStorage = function (resource, positionName) {
    const resourceToSave = JSON.stringify(resource);
    localStorage.setItem(positionName, resourceToSave);
};

export const loadFromLocalStorage = function (positionName) {
    const resource = localStorage.getItem(positionName);
    const resourceToLoad = JSON.parse(resource);
    return resourceToLoad;
};

export const setGame = function () {
    const game = {
        questions: [],
        currentQuestion: 0,
        path: "",
        tier: "",
    };
    saveToLocalStorage(game, "game");
};

export const getGame = function () {
    return loadFromLocalStorage("game");
};

export const setPlayer = function () {
    const player = {
        name: "",
        skipUsed: false,
        score: 0,
        lives: 3,
    };
    saveToLocalStorage(player, "player");
};

export const getPlayer = function () {
    return loadFromLocalStorage("player");
};

const getScoreboard = function () {
    return loadFromLocalStorage("scoreboard");
};

export const setScoreboard = function () {
    if (getScoreboard()) {
        return }
    else {
    const scoreboard = [];
    saveToLocalStorage(scoreboard, "scoreboard");
    }
};

const setQuestions = function (gameQuestions) {
    const game = getGame();
    localStorage.removeItem("game");
    game.questions = gameQuestions;
    saveToLocalStorage(game, "game");
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

const addScore = function (nameOfPlayer, scoreOfPlayer) {
    const objToPush = {
        name: nameOfPlayer,
        score: scoreOfPlayer,
    };
    const scoreboard = getScoreboard();
    localStorage.removeItem("scoreboard");
    scoreboard.push(objToPush);
    saveToLocalStorage(scoreboard, "scoreboard");
};

export const getPath = function () {
    return loadFromLocalStorage("game")["path"];
};
const setCurrentScore = function (score) {
    let player = getPlayer();
    player.score = score;
    //localStorage.removeItem("player");
    saveToLocalStorage(player, "player");
};

export const ls = {
    localStorageTest,
    lockStart,
    saveToLocalStorage,
    loadFromLocalStorage,
    getPlayer,
    getGame,
    getScoreboard,
    setScoreboard,
    setPlayer,
    setQuestions,
    nextQuestion,
    setPath,
    setTier,
    setPlayerName,
    useSkip,
    addPoint,
    removeLife,
    addScore,
    getPath,
    setCurrentScore,
};
