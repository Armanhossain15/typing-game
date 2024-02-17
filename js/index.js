function play() {
    hidePageById('home-page')
    showPageById('play-ground')
    continewGame()
}

function playAgain() {
    hidePageById('score-page')
    showPageById('play-ground')
    const screenAlphabet = document.getElementById('screen-alphabet')
    const screenAlphabetId = screenAlphabet.innerText
    removeBgOnPreviousAlphabetKbd(screenAlphabetId)
}
function continewGame() {
    const alphabet = getARandomAlphabet()
    const screenAlphabet = document.getElementById('screen-alphabet')
    screenAlphabet.innerText = alphabet
    addBgOnCurrentAlphabetKbd(alphabet)
}

function stopGame() {
    hidePageById('play-ground')
    showPageById('score-page')
    setLastScore()
}
document.addEventListener('keyup', function (event) {
    const playerPress = event.key
    const screenAlphabet = document.getElementById('screen-alphabet')
    const alphabet = screenAlphabet.innerText
    const lowerAlphabet = alphabet.toLowerCase()
    if (playerPress === lowerAlphabet) {
        const score = getValueById('score')
        const growScore = growValue(score)
        const scoreId = document.getElementById('score')
        scoreId.innerText = growScore
        removeBgOnPreviousAlphabetKbd(playerPress)
        continewGame()
    }
    else {
        const life = getValueById('life')
        const loselife = losevalue(life)
        const lifeId = document.getElementById('life')
        lifeId.innerText = loselife
        if (loselife === 0) {
            stopGame()
        }
    }
})
