/////Funções construtoras
function Carro(VelocidadeMaxima=200,delta=5){
    let VelocidadeAtual = 0

    this.acelerar = function(){
        if(VelocidadeMaxima+delta<VelocidadeMaxima){
            VelocidadeAtual=VelocidadeMaxima
        }
        else{
            VelocidadeAtual+=delta
        }
    }
    this.getVelocidade = function(){
        console.log(VelocidadeAtual)
    }
}

const uno = new Carro()
uno.getVelocidade()
uno.acelerar()
uno.getVelocidade()
const Ferrari = new Carro(350,20)
console.log("-------------------------------")
Ferrari.getVelocidade()
Ferrari.acelerar()
Ferrari.getVelocidade()