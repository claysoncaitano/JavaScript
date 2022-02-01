function contar(){
    var pri = Number(document.getElementById('prim').value)
    var seg = Number(document.getElementById('segu').value)
    var pas = Number(document.getElementById('passo').value)
    var contador = document.getElementById('cont')
    var mensagem = document.getElementById('msg')
    if (pri==0 && seg==0){
        window.alert('Escolha onde começa ou termina')
    }else if (pas==0){
        window.alert('Escolha um passo')
    }else if (pri<seg && pas<0){
        window.alert('O passo tem que ser positivo')
    }else if (pri>seg && pas>0){
        window.alert('O passo tem que ser negativo')
    }else if (pri<seg){
    for(pri;pri<=seg;pri=pri+pas){
        contador.innerHTML+=(`${pri}, `)
        mensagem.innerText=''
    }
}else if (pri>seg){
    for(pri;pri>=seg;pri=pri+pas){
        contador.innerHTML+=(`${pri}, `)
        mensagem.innerText=''
    }
}
}
function limpar(){
    var contador = document.getElementById('cont')
    var mensagem = document.getElementById('msg')
    contador.innerText=''
    mensagem.innerText='Vejamos...'
}