var a = 3
let b = 4
const c = 10

console.log(a,b,c)

a="teste"
b=12.3

////Tipos de dados
console.log(typeof(a),typeof(b))

///// Tipo númericos

let d = 12
let H = Number('15.1')

let avaliacaod = 12
let avaliacaoh =15

let total = d*avaliacaod+avaliacaoh*H

let media = total/(d+H)

console.log(media)
console.log(media.toFixed(2)) ///Tofixed() para aredondar para cima neste caso imprime duas casas

console.log(media.toString(2)) /// converte o número para binario

console.log(Number.isInteger(H))

///Cuidados com valores numericos
