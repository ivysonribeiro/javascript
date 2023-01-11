function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if(fano.value.length == 0 || Number(fano.value) > ano ){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
   }else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked) {
        gênero = 'Homem'
        if(idade >= 0 && idade <10){
            //
            img.src = 'imagens/foto-bebem.jpg'
        }else if(idade < 21){
            //jovem
            img.src = 'imagens/foto-jovemma.jpg'
        }else if(idade < 50){
            //adulto
            img.src = 'imagens/foto-adulto.jpg'
        }else{
            //idoso
            img.src = 'imagens/foto-idoso.jpg'
        }
    }else if(fsex[1].checked) {
        gênero = 'Mulher'
        if(idade >= 0 && idade <10){
            //criança
            img.src = 'imagens/foto-bebef.jpg'
        }else if(idade < 21){
            //jovem
            img.src = 'imagens/foto-jovemf.jpg'
        }else if(idade < 50){
            //adulto
            img.src = 'imagens/foto-adulta.jpg'
        }else{
            //idoso
            img.src = 'imagens/foto-idosa.jpg'
        }
    }
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
    
   }
}
