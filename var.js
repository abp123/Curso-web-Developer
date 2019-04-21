////Var tem scopo global e de função e não de bloco
console.log("-----------------Com Var------------------")
var numero = 1
{
    var numero = 2
    console.log("Dentro =" + numero)
}
console.log("fora =" + numero)

function varEscopo() {
    var numero = 3
    console.log("Dento da função =", numero)
}

varEscopo()

console.log("-----------------Com let------------------")
///// O let tem o scopo global,local e por blocos

let variavel = 2
{
    let variavel = 3
    console.log("Dentro=", variavel)
}
console.log("Fora", variavel)

function imprimirLet() {
    let variavel = 4
    console.log("dentro da função", variavel)
}

imprimirLet()


////// Algumas diferenças usando  var e let no num ciclo for
for(var i=0; i<10;i++){
    
}
console.log("utilizando var =",i)
console.log("---------Com let---------")

for(let i=0;i<10;i++){

}
console.log("utilizando let ",i) /// Da erro 


///// Outro exemplo utilizando let e var num ciclo

const ArrayLet =[] ///Array para Lets
const ArrayVar =[] ///Array Para vars

////For utilizando Var
for(var p= 0;p<10;p++)
{

   ArrayVar.push(function(){
       console.log(p)
   })
}

///// For utilizando Let
for(let p=0;p<10;p++){
    ArrayLet.push(function(){
        console.log(p)
    })
}


////// Imprimindos os valores do let
console.log("Iprimindo alguns valores do let")
ArrayLet[0]()
ArrayLet[4]()

///// Imprimindo os valores do var 
console.log("Imprimindo alguns valores do var ")
ArrayVar[0]()
ArrayVar[4]()
