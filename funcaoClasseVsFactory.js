////7Exemplo utilizando uma classe

class Pessoa{

    constructor(nome){
        this.nome=nome
    }
    falar(){
   console.log(`Olá o meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()
const Humano = nome =>{ return { falar:()=>console.log(nome)}}

const p2 =  Humano('Humano 2')
p2.falar()