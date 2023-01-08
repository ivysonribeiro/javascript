function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >=0 && hora < 12) {
        //Bom Dia!!
        img.src = 'imagens/fotomanha.jpg'
        document.body.style.background = '#89CBFB'
    }else if(hora >= 12 && hora < 18 ) {
        //Boa Tarde!
        img.src = 'imagens/fototarde.jpg'
        document.body.style.background = '#EFA866'
    }else{
        //Boa Noite!
        img.src = 'imagens/fotonoite.jpg'
        document.body.style.background = '#2E1C46'
    }



}
