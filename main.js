const numero = Math.floor(Math.random() * 101);
let chances = 10;

function mostrarResultado() {
    const resultado = parseInt(document.getElementById('guess').value);

    if (isNaN(resultado) || resultado < 0 || resultado > 100) {
        alert('[ERROR] Coloque um número entre 0 e 100.');
        return;
    }

    chances--;

    if (resultado === numero) {
        showMessage(`Parabéns! Você ganhou, o número era ${numero}.`);
        desativar();
    } else {
        if (chances === 0) {
            showMessage(`Você perdeu! O número correto era ${numero}.`);
            desativar();
        } else {
            const message = resultado < numero ? 'Número mais alto.' : 'Número mais baixo.';
            showMessage(message);
            document.getElementById('chances').textContent = chances;
        }
    }
}

function showMessage(message) {
    document.getElementById('message').textContent = message;
}

function desativar() {
    document.getElementById('guess').disabled = true;
    document.querySelector('button').disabled = true;
}

function jogar() {
    window.location.href = "jogo.html";
}

function recarregarPagina() {
    window.location.href = "jogo.html";
}

function voltarPagina() {
    window.location.href = "index.html";
}


