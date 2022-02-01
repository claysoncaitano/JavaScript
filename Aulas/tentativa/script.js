    var val = document.getElementById("num")
    var lis = document.getElementById("lista")
    var valores = []

function adicionar(){
    
    if (val.value.length == 0 || val.value == 0){
        window.alert('Digite um valor')
    }else if (val.value<0 || val.value>100){
        window.alert('Digite um valor que esteja entre 1 e 100')
    }else{
        valores.push(Number(val.value))
        var lista = document.createElement("option")
        lista.text = (val.value)
        lis.appendChild(lista)


    }
    val.value=""
    val.focus()
}
function finalizar(){
    var tot = valores.length
    var maior = valores[0]
    var menor = valores[0]
    var soma = 0
    for(var pos in valores){
        soma+= valores[pos]
        if (valores[pos] > maior){
            maior = valores[pos]
        }
        if (valores[pos] < menor){
            menor = valores[pos]
        }
    }
    var quantidade = document.getElementById("quant")
    quantidade.innerText=(tot)
    var mais = document.getElementById("maior")
    mais.innerText=(maior)
    var menos = document.getElementById("menor")
    menos.innerText=(menor)
    var total = document.getElementById("soma")
    total.innerText=(soma)
    lista.innerText=""
}
