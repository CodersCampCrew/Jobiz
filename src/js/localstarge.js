//TESTING LOCALSTORAGE WHETHER IT WORKS OR EXIST - saving the outcome in local storage????
function localStorageTest() {
    const test = "test" + String(Math.random());
    try {
        localStorage.setItem("test",test);
        localStorage.removeItem(test);
        return true;
    } 
    catch(e) {
        console.log(e);
        return false;
    }
}

//OUTLINE OF AN OBJECT PLAYER:
const player = {               //data collected from the user

    choosePath:"",
    selectTier:"",
    enterName: "",
    questionSkipped: 3,    //depends on the selected Tier this value can be deminished
    playerLives: 3,        //depends on the selected Tier this value can also be deminished
    currentScore: 0,
    finalScore: 0

}

//OUTLINE OF AN OBJECT QUIZ:
const quiz = {               //object in which we will keep the question - from Fetch API
    
    currentQuestion:"",
    currentAnswer:"",
    correctAnswer:"",
    numberofQuestion:""
    
}

//SAVING TO LOCALSTORAGE - universal function

function saveToLocalStorage(resource, positionName) {

    const resourceToSave = JSON.parse(resource);
    localStorage.setItem(positionName, resourceToSave);

} 

function loadFromLocalStorage(positionName) {

    const resourceToLoad = JSON.stringify(positionName);
    return resourceToLoad;

}

console.log(localStorageTest());








// //SAVING Players name to LOCALSTORAGE
// function savePlayersName() {
//     var myContent = document.getElementById("nameTextarea").value;
//     localStorage.setItem("myContent", myContent);
// }

// //GETTING Players name from LOCALSTORAGE
// function getPlayersName() {
//     var myContent = localStorage.getItem("myContent")
// document.getElementById("nameTextarea").value = myContent;
// }
