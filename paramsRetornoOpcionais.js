///Parametro em  uma função em javaScripty são opcionais
function area(altura,largura){
    const area= altura*largura

    if(area>20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    }
    else{
        return area
    }
}
console.log(area(3,4))
console.log(area(20,3))
console.log(area())

/////Aplicação para saber quem vai pagar os cafés 

const quemPagaOsCafes = function(nomes){
    let max = nomes.length
    let min = 0
    if(max<2){
        console.log("Adiciona mais participantes")
    }
    else{
        let sorteio = Math.random()*(max-min)+min
        console.log("Quem paga os cafés é o "+nomes[Math.floor(sorteio)])
    }
}
