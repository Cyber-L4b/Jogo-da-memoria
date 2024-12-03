

const emojis = [
    "😺", "😺",
    "🐵", "🐵",
    "🐶", "🐶",
    "🐺", "🐺",
    "🐯", "🐯",
    "🐗", "🐗",
    "🐷", "🐷",
    "🐮", "🐮",
];
let openCards = [];

// Embaralhar os emojis
let shuffleEmojis = emojis.sort(() => Math.random() - 0.5);

// Criar as cartas no tabuleiro
for (let i = 0; i < shuffleEmojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];

    // Associar o evento de clique
    box.addEventListener("click", handleClick);

    document.querySelector(".game").appendChild(box);
}

// Função ao clicar em uma carta
function handleClick() {
    if (openCards.length < 2 && !this.classList.contains("boxOpen")) {
        this.classList.add("boxOpen");
        openCards.push(this);

        // Verificar correspondência quando duas cartas forem abertas
        if (openCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
}

// Função para verificar correspondência
function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        // Deixar as cartas abertas
        openCards.forEach(card => card.classList.add("matched"));
    } else {
        // Fechar as cartas se não combinarem
        openCards.forEach(card => card.classList.remove("boxOpen"));
    }
    // Limpar o array de cartas abertas
    openCards = [];

    if(document.querySelectorAll(".matched").length=== emojis.length){
        alert("Player 1 Wins");
    }
}
