
class Pessoa{

    constructor(nome){
        this.nome=nome
    }
    falar(){
   console.log(`Olá o meu nome é ${this.nome}`)
    }
}

/////Função nomal
function criarPesssoa(nome){
    return{
        falar(){
            console.log("Olá meu nome é ", nome)
        }
    }
}

const pessoa1 = new criarPesssoa('Pedro')

const pessoa2 = new criarPesssoa('User 2')
pessoa1.falar()
pessoa2.falar()

//////Função construtoras
function criarPesssoa2(nome){
    this.nome = nome
    this.falar= function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p3 = new criarPesssoa2('Adão Pedro')
p3.falar()