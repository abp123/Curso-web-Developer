const fabricantes = ["BMW","MERCEDEZ","AUDI"]

function imprimirNomes(nome,indice){
    
    console.log(`${indice+1}. ${nome}`)

}

fabricantes.forEach(imprimirNomes)



const notas = [10,7.5, 6,4,18,1,3,5,19]

const notasBaixa1=[]

///// Sem o calback
for(i in notas){
    if(notas[i]<7){
        notasBaixa1.push(notas[i])
    }
}
console.log(notasBaixa1)


//// Com callback
const notasBaixa2 = notas.filter(function(nota){
    return nota<7
})

console.log(notasBaixa2)

//// Com callback e arrow function
const notasBaixa3 = notas.filter(a=> a<7)

console.log(notasBaixa3)

////Exmplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function(e){

    console.log("Ocorreu um evento!!")
}