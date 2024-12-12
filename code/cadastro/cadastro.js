document.addEventListener('DOMContentLoaded', function () {
  
    const btnVoltar = document.querySelector('.voltar');
    

    btnVoltar.addEventListener('click', function () {
        window.history.back(); 
    });
});


