"use strict"

document.addEventListener("DOMContentLoaded", function () {
    const inputNome = document.getElementById("nome");
    const botaoAdicionar = document.getElementById("adicionar-nome");

    // Criar uma lista para exibir os nomes
    const listaNomes = document.createElement("ul");
    document.body.appendChild(listaNomes);

    botaoAdicionar.addEventListener("click", function () {
        const nome = inputNome.value.trim();

        if (nome !== "") {
            const itemLista = document.createElement("li");
            itemLista.textContent = nome;
            listaNomes.appendChild(itemLista);

            inputNome.value = ""; // Limpar o campo de entrada
    
        }
    });
});
