function playSound (idElementAudio) {
    const element = document.querySelector(idElementAudio);
    
    if (element && element.localName === 'audio') {
        element.play();
    }        
    else {
        console.log('Elemento não encontrado ou seletor inválido.');
    }
}

const listOfKeys = document.querySelectorAll('.tecla')

for (let count = 0; count < listOfKeys.length; count ++) {
    const key = listOfKeys[count];
    const instrument = key.classList[1];    
    const idAudio = `#som_${instrument}`;//templateString

    key.onclick = function () {
        playSound(idAudio);
    }

    key.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter" || evento.code === "NumpadEnter") {
            key.classList.add('ativa');
        }
        
    }
    key.onkeyup = function () {
        key.classList.remove('ativa');
    }
    
}
