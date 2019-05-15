////// Estrategia 1 para gerar valor padrão

function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a+b+c
}

console.log(soma1(),soma1(3),soma1(1,2,3),soma1(0,0,0))

////// Estrategias 2,3,4  para gerar valor padrão
function soma2(a,b,c){

    a = a!== undefined? a:1    ////Se ovalor dos números for indifinido retorna 1
    b = 1 in arguments? b:1   /// verifica se o valor de b está no array se não tiver retorna 1
    c = isNaN(c)? 1:c         //// Verifica se o tipo de dados é um número se não retorna 1

    return a+b+c
}

console.log(soma2(20,3,'P'))

//// Valor padrão ES2015
function soma3(a=1,b=1,c=1){
    return a+b+c
}
console.log(soma3(1),soma3(1,2),soma3(2,0,4), soma3(0,0,0))