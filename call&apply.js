function getpreco(imposto=0,moeda='Euro'){

    return `${moeda} ${Math.ceil(this.preco*(1-this.desconto)*(1+imposto))}`
}

const produto ={
    'nome':'Computador',
    'preco':150,
    'desconto':0.1,
    getpreco
}

console.log(produto.getpreco())
////Variaveis globais
global.preco = 90
global.desconto=0,5
console.log(getpreco())

//////Utilizando funçãoi call
const carro ={preco:29000,desconto:0.5}
console.log(getpreco.call(carro,0.24,'Dolares'))


///// função apply
console.log(getpreco.apply(carro,[0.9,'Kwanza']))

