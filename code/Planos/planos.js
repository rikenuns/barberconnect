document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o botão pela classe

    const btnVoltar = document.querySelector('.btn-voltar');
    // Adiciona o evento de clique ao botão

    btnVoltar.addEventListener('click', function () {
        window.history.back(); // Volta para a página anterior
    });
});
