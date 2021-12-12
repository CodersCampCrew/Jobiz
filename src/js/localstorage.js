//TESTING LOCALSTORAGE WHETHER IT WORKS OR EXIST 
export default function localStorageTest() {                 //to avoid name collisions
    const test = "test" + String(Math.random());
    try {
        localStorage.setItem("test",test);
        localStorage.removeItem(test);
        console.log('Local Storage Fine')
        return true;
    } 
    catch(e) {
        console.log(e);
        document.querySelector('a').remove();
        document.querySelector('.btn').classList.replace("btn", "btn-fail");
        return false;
    }
}
localStorageTest();

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

//OUTLINE OF AN OBJECT PLAYER:
const player = {            

    choosePath:loadFromLocalStorage("choosePath"),
    selectTier:loadFromLocalStorage("selectTier"),
    enterName: loadFromLocalStorage("enterName"),
    questionSkipped: 3,    //depends on the selected Tier this value can be deminished
    playerLives: 3,        //depends on the selected Tier this value can also be deminished
    currentScore: 0,
    finalScore: 0

}

//OUTLINE OF AN OBJECT QUIZ:
const quiz = {               
    
    currentQuestion:"",
    currentAnswer:"",
    correctAnswer:"",
    numberofQuestion:""
    
}





























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
