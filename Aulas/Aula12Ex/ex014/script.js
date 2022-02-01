function carregar(){
    var bom = window.document.getElementById('bom')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var hora = new Date().getHours()
    msg.innerText=`Agora são ${hora} horas`
    if (hora>=0 && hora<6){
        //boa madrugada
        bom.innerText='Boa Madrugada!'
        img.src = 'madrugada.png'
        window.document.body.style.background = '#9CADBF'
    }else if(hora<12){
        //bom dia
        bom.innerText='Bom Dia!'
        img.src = 'manha.png'
        window.document.body.style.background = '#FAEBD7'
    }else if (hora<18){
        //boa tarde
        bom.innerText='Boa Tarde!'
        img.src = 'tarde.png'
        window.document.body.style.background = '#BDA394'
    }else{
        bom.innerText='Boa Noite!'
        img.src = 'noite.png'
        window.document.body.style.background = '#423F2C'
    }
}
