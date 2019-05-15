////// This pode variar 

const pessoa = {
    nome: "User",
    falar(){
        return console.log("Olá eu sou o: "+this.nome)
    }
}

const falar = pessoa.falar
falar() /////Retorna Undefined porque o this está aretornar outro objecto

////////////// Exemplo com o bind
const falar2 = pessoa.falar.bind(pessoa)  ///// Retorna o nome porcausa do bind
falar2()


////// pegar o valor de um atributo usando o  this em uma função passando o bind -01

const pessoa1 = function(){
    this.idade = 0
    setInterval(function(){
        this.idade++
        console.log(this.idade)

    }.bind(this),1000)
}
new pessoa1

////// pegar o valor de um atributo usando o  this em uma função -02
const pessoa2 = function(){
    this.idade=0
    self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)

    },1000)
}
new pessoa2