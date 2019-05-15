/////Função de forma literal
function fun1(){}

////Armazenar função em uma variavel
const fun2 = function(){}

//// Armazenar função em um array
const array = [function(a,b){return a+b},fun1,fun2]
console.log(array[0](2,3))

///Armazenar uma função em atributo dentro de um objecto
const obj ={}
obj.falar = function(nome){ return 'Olá boa noite '+nome}
console.log(obj.falar("Pedro"))

///// Passar uma função como parametro dentro de outra
 function run(fun){
     return fun()
 }
 console.log(run(function(){ return 'Programar é bom'}))

 //// Retornar uma função dentro de oura função
 function avaliacao(a,b,c){
    return function(d=3){
        return console.log("O resultado da valiação é: "+((a+b+c)/d))
    }
 }
 avaliacao(19,18,17)(4)



 



