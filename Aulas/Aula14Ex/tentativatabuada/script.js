function gerar(){
    var cont = -1
    var numero = document.getElementById('num')
    var texto = document.getElementById('tab')
    if (numero.value.length==0){
        window.alert('Favor digitar um número')
    }else{
        var n = Number(numero.value)
    texto.innerHTML=''//COLOCAR UMA MENSAGEM AQUI ZERA O TEXTO QUANDO CLICA PRA INICIAR A OPERAÇÃO
    while(cont<10){
        cont=cont+1
        texto.innerHTML+=`${n} X ${cont} = ${cont*n}</br>`
    }
    }
}