const inputNome = document.getElementById("amigo"); // Campo de entrada
const listaNomes = document.getElementById("listaAmigos"); // Lista de amigos
const resultado = document.getElementById("resultado"); // Exibição do sorteado

let nomes = []; // Lista de nomes

// Adicionar nome à lista
function adicionarAmigo() {
    const nome = inputNome.value.trim();
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    nomes.push(nome);
    atualizarLista();
    inputNome.value = ""; // Limpar campo
}

// Atualizar a exibição da lista
function atualizarLista() {
    listaNomes.innerHTML = "";
    nomes.forEach((nome) => {
        const li = document.createElement("li");
        li.textContent = nome;
        listaNomes.appendChild(li);
    });
}

// Sortear um nome aleatório
function sortearAmigo() {
    if (nomes.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }
    const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
    resultado.innerHTML = `<li>Amigo secreto: <strong>${sorteado}</strong></li>`;
}
