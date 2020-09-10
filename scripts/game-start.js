function gameStart() {
    console.log('Tentando iniciar o jogo')
    const levelsForm = document.getElementById('levels-form')
    const selectedLevel = levelsForm.value
    if (selectedLevel === '') {
        console.log('Nível não foi selecionado')
        alert('Selecione um nível para começar o jogo')
        return
    }
    console.log('Nível selecionado=' + selectedLevel)
    const gameURLWithParameters = 'jogo.html?' + selectedLevel
    window.location.href = gameURLWithParameters
}