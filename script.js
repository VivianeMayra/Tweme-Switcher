//Função responsável pela troca de imagens
let minhaImagem= document.querySelector('img');

minhaImagem.onclick= function(){

    let meuSrc = minhaImagem.getAttribute('src');
    if(meuSrc === './image/Switcher (1).png' ) {
        minhaImagem.setAttribute('src', 'image/Switcher.png');

    }
    else{
        minhaImagem.setAttribute('src', 'image/Switcher (1).png');
    }

}

