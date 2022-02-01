function gerar(){
    var num = document.getElementById('num')
    var tab = document.getElementById('tabuada')
    if (num.value.length==0){
        window.alert('Por favor, digite um número.')
    }else{
        tab.innerHTML=''
        var n = Number(num.value)
        var c = 0
        while (c<=10){
            var item = document.createElement('option')
            item.innerHTML=`${n} x ${c} = ${c*n}`
            item.value=`tab${c}`
            tab.appendChild(item)
            c=c+1
        }
    }
}