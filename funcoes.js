/////Funções sem retorno
function imPrimirSoma(a,b){
    console.log("O resultado da soma é "+(a+b))
}
////Passando dois parametros
imPrimirSoma(0.9,34)

///passando três parametros
imPrimirSoma(3,68,9,99)


////Funções com retorno 
function soma(c,d){
    return c+d
}
console.log(soma(7,7))
console.log(soma(7))

////Funções com valores padrões default
function somoComDefaultsValues(e=0,f=1){
    return e+f
}

console.log(somoComDefaultsValues(10))

//// Função anonima  atribuir O valor de função numa variavel
const varsub = function(a,b){

    console.log("o valor é: "+(a-b))
}
varsub(7,3)

////Função Arrow 
const b = (h,g)=>{
     console.log("Resutado da divisão:"+h/g)
}
b(20,4)


//////Função para reti

