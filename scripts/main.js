const numberOfMosquitoClasses = 3
const maximumMosquitoWidth = 90
const maximumMosquitoHeight = 90
const mosquitoTimeSpawnInMilliseconds = 2000
const totalOfHeartPoints = 3
var heartPointsLeft = 3
const timeLimitInSeconds = 8
var timeLeftInSeconds = timeLimitInSeconds
var updateIntervalID = null
var browserWindowWidthInPixels = 0
var browserWindowHeightInPixels = 0
var aliveMosquito = null

function gameStart() {
    console.log('Inicializando o jogo')
    defineInicialbrowserWindowSize()
    initializeTimer()
    updateIntervalID = setInterval(update, mosquitoTimeSpawnInMilliseconds)
    newMosquito()
    console.log('Inicialização completa')
}

function update() {
    updateHeartPoints()
    updateTimer()
    newMosquito()
    verifyGameStatus()
}

function stop() {
    clearInterval(updateIntervalID)
}

function verifyGameStatus() {
    console.log('Verificando status do jogo...')
    if (heartPointsLeft == 0) {
        console.log('Game over')
        stop()
        window.location.href = "game-over.html"
    }
    else if (timeLeftInSeconds == 0) {
        console.log('Vitória!')
        stop()
    } else {
        console.log('O jogo continua...')
    }
}

function updateTimer() {
    const timer = document.getElementById('timer')
    const mosquitoTimeSpawnInSeconds = mosquitoTimeSpawnInMilliseconds / 1000
    timeLeftInSeconds -= mosquitoTimeSpawnInSeconds
    timer.innerHTML = timeLeftInSeconds
    console.log('Tempo restante atualizado para ' + timeLeftInSeconds + ' segundos')
}

function initializeTimer() {
    console.log('Inicializando o cronômetro...')
    const timer = document.getElementById('timer')
    timer.innerHTML = timeLimitInSeconds
    console.log('Cronômetro inicializado')
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

function updateHeartPoints() {
    if (isMosquitoAlive()) {
        console.log('Atualizando variáveis relacionadas aos pontos de vida')
        destroyAliveMosquito()
        loseHeartPoint()
        decrementTotalOfHeartPoints()
    } else {
        console.log('Nenhum mosquito vivo, atualização desnecessária')
    }
}

function loseHeartPoint() {
    console.log('Atualizando as vidas do jogador...')
    var heartPointNumberToBeLost = totalOfHeartPoints + 1 - heartPointsLeft
    console.log('O jogador deverá perder o coração de número ' + heartPointNumberToBeLost)
    var heartPointID = 'heart-point-' + heartPointNumberToBeLost
    console.log('ID do coração= ' + heartPointID)
    var heartPointToBeLost = document.getElementById(heartPointID)
    heartPointToBeLost.src = 'img/coracao_vazio.png'
    console.log('Atualização concluída')
}

function decrementTotalOfHeartPoints() {
    console.log('Atualizando número de vidas restantes')
    --heartPointsLeft;
}

function destroyAliveMosquito() {
    if (aliveMosquito) {
        console.log('Destruindo mosquito vivo...')
        aliveMosquito.remove()
        console.log('Mosquito destruído')
    }
}

function isMosquitoAlive() {
    return aliveMosquito != null
}

function newMosquito() {
    console.log('Criando novo mosquito')
    var newMosquito = document.createElement('img')
    newMosquito.src = 'img/mosquito.png'
    newMosquito.className = getMosquitoRandomClassName() + ' ' + getMosquitoRandomSideClassName()
    console.log('Mosquito class name is ' + newMosquito.className)
    newMosquito.id = 'mosquito'
    newMosquito.onclick = function() {
       this.remove()
       aliveMosquito = null
    }
    defineMosquitoPosition(newMosquito)
    document.body.appendChild(newMosquito)
    attAliveMosquito(newMosquito)
    console.log('Mosquito criado')
}

gameStart()