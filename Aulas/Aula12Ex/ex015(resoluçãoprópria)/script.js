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
        if(csex[0].checked){
            genero = 'masculino'
            txt.innerText=`Identificamos uma pessoa com ${idade} ano(s) do sexo ${genero}`
            if(idade>=0 && idade<4){
                imga.src = 'hbebe.png'
            }else if(idade<18){
                imga.src = 'hjovem.png'
            }else if(idade<65){
                imga.src = 'hadulto.png'
            }else{
                imga.src = 'hvelho.png'
            }
        }else{
            genero = 'feminino'
            txt.innerText=`Identificamos uma pessoa com ${idade} ano(s) do sexo ${genero}`
            if(idade>=0 && idade<4){
                imga.src = 'mbebe.png'
            }else if(idade<18){
                imga.src = 'mjovem.png'
            }else if(idade<65){
                imga.src = 'madulto.png'
            }else{
                imga.src = 'mvelho.png'
            }
        }
    }

}