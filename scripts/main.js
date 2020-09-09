const numberOfMosquitoClasses = 3
const maximumMosquitoWidth = 90
const maximumMosquitoHeight = 90
const mosquitoTimeSpawnInMilliseconds = 1000

function gameStart() {
    console.log('Inicializando o jogo')
    defineInicialbrowserWindowSize()
    setInterval(update, mosquitoTimeSpawnInMilliseconds)
    console.log('Inicialização completa')
}

function update() {
    destroyAliveMosquito()
    newMosquito()
}

function defineInicialbrowserWindowSize() {
    console.log('Inicializando tamanho da janela do browser')
    browserWindowWidthInPixels = window.innerWidth
    browserWindowHeightInPixels = window.innerHeight
    console.log('Posição inicial=' + browserWindowWidthInPixels + ',' + browserWindowHeightInPixels)
}

function updateBrowserWindowSize() {
    console.log('Atualizando tamanho da janela')
    browserWindowWidthInPixels = window.innerWidth
    browserWindowHeightInPixels = window.innerHeight
    console.log('Novo tamanho da janela ' + browserWindowWidthInPixels + ',' + browserWindowHeightInPixels)
}

function defineMosquitoPosition(mosquito) {
    console.log('Definindo posição aleatória para o novo mosquito')
    var positionX = Math.floor(Math.random() * browserWindowWidthInPixels) - maximumMosquitoWidth
    var positionY = Math.floor(Math.random() * browserWindowHeightInPixels) - maximumMosquitoHeight
    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    console.log('Posição definida=' + positionX + ',' + positionY)
}

function getMosquitoRandomClassName() {
    var classNumber = Math.floor(Math.random() * numberOfMosquitoClasses)
    console.log('The class number is '+ classNumber)
    switch(classNumber) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function getMosquitoRandomSideClassName() {
    var sideNumber = Math.floor(Math.random() * 2)
    console.log('The side number is '+ sideNumber)
    switch(sideNumber) {
        case 0:
            return 'leftSide'
        case 1:
            return 'rightSide'
    }
}

function attAliveMosquito(newMosquito) {
    console.log('Atualizando mosquito vivo...')
    aliveMosquito = newMosquito
    console.log('Novo mosquito vivo definido')
}

function destroyAliveMosquito() {
    console.log('Destruindo mosquito vivo...')
    if (aliveMosquito)
        aliveMosquito.remove()
    console.log('Mosquito destruído')
}

function newMosquito() {
    console.log('Criando novo mosquito')
    var newMosquito = document.createElement('img')
    newMosquito.src = 'img/mosquito.png'
    newMosquito.className = getMosquitoRandomClassName() + ' ' + getMosquitoRandomSideClassName()
    console.log('Mosquito class name is ' + newMosquito.className)
    newMosquito.id = 'mosquito'
    defineMosquitoPosition(newMosquito)
    document.body.appendChild(newMosquito)
    attAliveMosquito(newMosquito)
    console.log('Mosquito criado')
}

var browserWindowWidthInPixels = 0
var browserWindowHeightInPixels = 0
var aliveMosquito = null
gameStart()