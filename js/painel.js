const imagens = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;



setaAvancar.addEventListener('click', function() {
    imagemAtual++;
    
    imagemAtual.array.forEach(imagem => {
       imagem.classList.remove('mostrar')
    });;

    imagemPainel[0]
})
