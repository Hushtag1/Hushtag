//                                  <------- Start the program ------->
// <----------------------The main idea is to make a memory game with zodiac cards.---------------------->

// To present the imgs on board
function showCards() {
    let cards = "";
    let count = 0;
    for (let i = 0; i < gameObj.length; i++) {
        for (let [key, val] of Object.entries(gameObj[i])) {
            cards += "<img ";
            cards += `src ="${val}" class="${key}" onclick="GetTheIdImage(event)"`;
            cards += "</img>";
        }
        if(i === 11 && count === 0){
            count++;
            i=-1;
        }
    }
    dqs("#gameBoard").innerHTML = cards;
}
// Shuffle the cards and present the new board
function showShuffle() {
    for (let i = gameObj.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = gameObj[i];
        gameObj[i] = gameObj[j];
        gameObj[j] = temp;
    }
    showCards();
}
function unShowShuffle(){
    for (let i = backCardObj.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = backCardObj[i];
        backCardObj[i] = backCardObj[j];
        backCardObj[j] = temp;
    }
}
// This function cover the real img , for start game 
function changeImage() {
    let count = 0;
    let backCards = "";
    //debugger
    for (let i = 0; i < backCardObj.length; i++) {
        for (let [key, val] of Object.entries(backCardObj[i])) {
            backCards += "<img ";
            backCards += `src ="${val}" class="${key}" onclick="GetTheIdImage(event)">`;
            backCards += "</img>";
        }
        if(i === 11 && count === 0){
            count++;
            i=-1;
        }
    }
    dqs("#gameBoard").innerHTML = backCards;
}
// This function checks if the cards the user choose is the same, if its the same, the cards remain exposed.
// Else the cards will be flipped back
let counter, card1 , card2;
function GetTheIdImage(event){
    if(counter === undefined){
        let GetIdByClick = event.target.getAttribute("class");
        card1 = GetIdByClick;
        console.log("My first click " + card1);
        counter = 0;
        ShowTheChosenCards(GetIdByClick, card1 , card2, event);
    }
    else if(counter === 0){
        let GetIdByClick = event.target.getAttribute("class");
        card2 = GetIdByClick;
        console.log("My Second click " + GetIdByClick);
        ShowTheChosenCards(GetIdByClick, card1 , card2, event);
        counter = undefined;
        card2 = undefined;

    }
}
function ShowTheChosenCards(GetIdByClick, card1 , card2, event) {
    let saveFirstIndex, saveSecondIndex;
    cl(card1)
    for(i=0 ; i<gameObj.length ; i++){
        for (let [key, val] of Object.entries(gameObj[i])) {
            if(GetIdByClick === `${key}`){
                event.target.setAttribute("src" ,val);
                if(card2 !== undefined){
                    if(card1 !== card2){
                        saveSecondIndex = event.target.setAttribute("src" ,val);
                        setTimeout(function delay() { FlipBack(card1, card2, event, saveSecondIndex, saveFirstIndex) }, 3000);
                    }
                }
                else {
                    saveFirstIndex = event.target.getAttribute("src" ,val);
                    cl(saveFirstIndex + " not undefined?")
                }
            }
        }
    }
}
function FlipBack(card1, card2, saveSecondIndex, saveFirstIndex) {
    cl(card1);
    for(i=0 ; i<backCardObj.length ; i++){
        for (let [key, val] of Object.entries(backCardObj[i])) {
            //debugger
            if(card2 === `${key}`){
                saveSecondIndex;
            }
            else if(card1 === `${key}`){
                saveFirstIndex;
            }
        }
    }
}
// hidden the cards on board and shuffle
function startGame() {
    unShowShuffle();
    changeImage();
    
}
// finish the game , intalize the board and show the cards
function scoreList() {
}






function cl(y) {
    console.log(y);
}
//============================

function dqs(theCSSToFindTheElement) {
    return document.querySelector(theCSSToFindTheElement);
}
//============================
function dqsChangeIneerHtml(whichElem, whatInTheInnerHtml) {
    document.querySelector(whichElem).innerHTML = whatInTheInnerHtml;
}