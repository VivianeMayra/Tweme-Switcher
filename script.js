//Função responsável pela troca de imagens

let minhaImagem= document.querySelector('img');
let body= document.querySelector('body');

minhaImagem.addEventListener('click', () => {
    if(body.getAttribute('class') === 'light') {
        minhaImagem.setAttribute('src', './image/dark.png')
        body.setAttribute('class', 'dark')
    } else {
        minhaImagem.setAttribute('src', './image/light.png')
        body.setAttribute('class', 'light')
    }
})

/*JEITO ANTIGO

minhaImagem.onclick= function(e){
    if(meuSrc === './image/light.png' ) {
         console.log("oii")
         minhaImagem.setAttribute('src', 'image/dark.png');
        body.setAttribute('class', 'dark');
    }
    else{
        console.log("teteu")
        minhaImagem.setAttribute('src', 'image/light.png');
        body.setAttribute('class', 'light');
     }
}
*/




