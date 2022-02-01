function clicar(){
    var voce = document.getElementById('voce')
    var idar = document.getElementById('ida')
    var idade = (idar.value)
    var declaracao = document.getElementById('idade')
    declaracao.innerHTML= `Sua idade é de ${idade} anos.`
    if(idade>=0 && idade<5){
        voce.innerText='Você é um bebe'
        img.src='bebe.jpeg'
    }else if(idade<13){
        voce.innerText='Você é uma criança'
        img.src='crianca.jpg'
    }else if(idade<18){
        voce.innerText='Você é um adolescente'
        img.src='adolescente.png'
    }else if(idade<60){
        voce.innerText='Você é um adulto'
        img.src='adulto.jpg'
    }else{
        voce.innerText='Você é um idoso'
        img.src='velho.jpg'
    }
}