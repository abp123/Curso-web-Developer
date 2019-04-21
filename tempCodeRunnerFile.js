//////// um objecto ou class criado são do tipo funcao quando instanciado são obejctos 

const funcao = function(){}
console.log(typeof funcao)/// Imprime um função
console.log(typeof new funcao) ///Imprime um object

console.log(typeof Object) 
console.log(typeof new Object)

class Carro{}

console.log(typeof Carro)
console.log(typeof new Carro)