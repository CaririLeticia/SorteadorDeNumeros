
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroFinal = parseInt(document.getElementById('ate').value);
    let sorteados = [];

    if (quantidade > (numeroFinal - numeroInicial + 1)) {
        alert('A quantidade de números a serem sorteados é maior que o intervalo de números disponíveis!');
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        let numero;
        do {
            numero = obterNumeroAleatorio(numeroInicial, numeroFinal);
        } while (sorteados.includes(numero));

        sorteados.push(numero);
    }

    let numerosSorteados = document.getElementById('resultado');
    numerosSorteados.innerHTML = `<label class="texto__paragrafo"> Números sorteados: ${sorteados.join(', ')} </label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container_botao-desabilitado')) {
        botao.classList.remove('container_botao-desabilitado');
        botao.classList.add('container_botao');
    } else {
        botao.classList.remove('container_botao');
        botao.classList.add('container_botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}