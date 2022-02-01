let num = document.getElementById("fnum")
let lista = document.getElementById("flista")
let res = document.getElementById("res")
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100 ){
        return true
    }else{
        return false
    }

}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = (num.value)
        lista.appendChild(item)
        res.innerHTML=""
    }else {
        window.alert("Valor inválido ou já encontrado na lista")
    }
    num.value=''
    num.focus()
}

function finalizar(){
    if(valores.length==0){
        window.alert('Adicione valores para começar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let pos in valores){
            soma+= valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        res.innerHTML=""
        res.innerHTML+=`Temos ${tot} elementos</br>`
        res.innerHTML+=`${maior}</br>`
        res.innerHTML+=`${menor}</br>`
        res.innerHTML+=`Soma = ${soma}`

    }
}