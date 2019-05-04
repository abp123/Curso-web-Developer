///Distruturing com objectos
const pessoa = {

    nome:'Pessoa 1',
    idade:23,
    sexo:'F',
    endereco:{
        rua:'Rua sem nome',
        casa:'Verde',
        bairro:'azul',
    } 
}

const {nome,idade}=pessoa
const {endereco:{casa: biva,bairro:banda}} = pessoa

console.log(nome, idade)
console.log(biva,banda)

bairro ='Casal do rato'
casa='numero 7'

console.log(pessoa.endereco.bairro,pessoa.endereco.casa)


//////Distrutiring com arrays
const [a]= [10]
console.log(a)

const [n1,,n3,,n5,n6=0]=[10,19,18,3]
console.log(n1,n3,n5,n6)

const [,[,p]]=[[1,2,3],[,19,19]]
console.log(p)

///////Destruturing function com objectos

function rand({min=0,max=100}){
     const valor = Math.random()*(max-min)+min
     return Math.floor(valor)
}
console.log(rand({min:10,max:8}))

console.log(Math.random())


///////Destruturing function com arrays

function randArray([min=0,max=10]){
    if(min>max)
    [min,max]=[max,min]

   const valor = Math.random()*(max-min)+min
    return Math.floor(valor)
    ///console.log("valor maximo: "+max, "valor minimo: "+min)
}
console.log(randArray([min=15,max=20]))


