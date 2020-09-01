function gameStart() {
    console.log('Inicializando o jogo')
    defineInicialbrowserWindowSize()
    console.log('Inicialização completa')
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
    var positionX = Math.floor(Math.random() * browserWindowWidthInPixels) - 50
    var positionY = Math.floor(Math.random() * browserWindowHeightInPixels) - 50
    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    console.log('Posição definida=' + positionX + ',' + positionY)
}

function newMosquito() {
    console.log('Criando novo mosquito')
    var newMosquito = document.createElement('img')
    newMosquito.src = 'img/mosquito.png'
    newMosquito.className = 'mosquito1'
    defineMosquitoPosition(newMosquito)
    document.body.appendChild(newMosquito)
    console.log('Mosquito criado')
}

var browserWindowWidthInPixels = 0
var browserWindowHeightInPixels = 0
gameStart()