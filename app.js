function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    console.log(campoPesquisa);

    // se campoPesquisa for uma string vazia, não faça nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Campo de busca vazio. Preencha para continuar!</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // Se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">
                    <img src="${dado.imagem}" alt="${dado.titulo}" class="imagem-produto">
                    ${dado.descricao}
                </p>
                <a href=${dado.link} target="_blank">Mais informações...</a>
            </div>
            `;
        }
        //Se resultados não existir, Faça essa ação
        if (!resultados) {
            resultados = "<p>Nada foi encontrado...</p>"
        }
        //Atribui os resultados gerados à seção HTML
        section.innerHTML = resultados;
    }
}
