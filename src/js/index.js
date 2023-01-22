/*
Objetivo nº1 quando clicar no botao veja o trailer abrir a modal
    - passo 1 dar um jeito de pegar o elemento que representas o botao na tela usando o js
    - passo 2 dar um jeito de identifica quando o usuario clicar o botao
Objetivo dois quando o usuario clicar no x fechar a modal
*/


//- passo 1 dar um jeito de pegar o elemento que representas o botao na tela usando o js
const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);

});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");

});



