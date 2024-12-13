document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o botão pela classe

    const btnVoltar = document.querySelector('.btn-voltar');
    // Adiciona o evento de clique ao botão

    btnVoltar.addEventListener('click', function () {
        window.history.back(); // Volta para a página anterior
    });
});

document.getElementById('whatsappButton').onclick = function () {

    const phoneNumber = "5574999407099";
    const message = "Olá! Gostaria de saber mais sobre seus serviços.";


    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
};

