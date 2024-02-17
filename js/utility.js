function hidePageById(pageId) {
    const page = document.getElementById(pageId)
    page.classList.add('hidden')
}

function showPageById(pageId) {
    const page = document.getElementById(pageId)
    page.classList.remove('hidden')
}

function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetArray = alphabetString.split('')

    const randomNum = Math.random() * 25
    const randomNumber = Math.round(randomNum)

    const randomAlphabet = alphabetArray[randomNumber]
    return randomAlphabet
}


function addBgOnCurrentAlphabetKbd(alphabetId){
    const currentAlphabetElement = document.getElementById(alphabetId)
    currentAlphabetElement.setAttribute("class", "bg-orange-400	kbd ");
}

function removeBgOnPreviousAlphabetKbd(alphabetId){
    const currentAlphabetElement = document.getElementById(alphabetId)
    currentAlphabetElement.classList.remove('bg-orange-400')
}

function getValueById(elementId){
    const element = document.getElementById(elementId)
    const elementText =element.innerText
    const elementNumber = parseInt(elementText)
    return elementNumber
}


function growValue(elementNumber){
    const addElementNumberValue = elementNumber + 1
    return addElementNumberValue
}
function losevalue(elementNumber){
    const addElementNumberValue = elementNumber - 1
    return addElementNumberValue
}

function setLastScore(){
    const finalScore = document.getElementById('final-score')
    const score = document.getElementById('score')
    const scoreValue = score.innerText
    finalScore.innerText = scoreValue
    
}