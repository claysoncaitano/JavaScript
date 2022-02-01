function verificar(){
    var ano = new Date().getFullYear()
    var idad = document.getElementById('txtano')
    var idade = ano-Number(idad.value)
    var txt = document.getElementById('res')
    if(idad.value.length==0||idad.value>ano){
        window.alert('Verifique os dados e tente novamente')
    }else{
        var csex = document.getElementsByName('sexo')
        var gen = ''
        var imga= document.createElement('img')
        imga.setAttribute('id','foto')
        if(csex[0].checked){
            genero = 'masculino'
            if(idade>=0 && idade<10){
                imga.setAttribute('src','hbebe.png')
            }else if(idade<21){
                imga.setAttribute('src', 'hjovem.png')
            }else if(idade<50){
                imga.setAttribute('src', 'hadulto.png')
            }else{
                imga.setAttribute('src', 'hvelho.png')
            }
        }else if(csex[1].checked){
            genero = 'feminino'
            if(idade>=0 && idade<10){
                imga.setAttribute('src', 'mbebe.png')
            }else if(idade<21){
                imga.setAttribute('src','mjovem.png')
            }else if(idade<50){
                imga.setAttribute('src', 'madulto.png')
            }else{
                imga.setAttribute('src', 'mvelho.png')
            }
        }
        txt.innerHTML= `Detectamos uma pessoa de ${idade} anos do sexo ${genero}.`
        txt.appendChild(imga)
    }
}