const texto= "Cod+3r"
////Função para pegar um caracter numa determinda posição charAt
console.log(texto.charAt(1))

////Função para pegar o valor de um caracter na tabela asc  numa determinda posição 
console.log(texto.charCodeAt(3))

////Função para pegar o indice de um determinado valor muma string
console.log(texto.indexOf("3"))


///Imprimir um parte da String
console.log(texto.substring(2))
console.log(texto.substring(0,3))

////Concatenar Strings
console.log("Escola ".concat(texto).concat("!"))

////Substituir Strings
console.log(texto.replace("+","e"))

////Transformar a string num array
console.log("User 1, User 2, User 3".split(","))


////Tirar o caracter de uma String 

const b ="testeFD"
const result =b.split('')
const RemoverBr = a=>{
    a.pop()
    delete a[a.length-1]
    return a.join(",")
}

console.log(RemoverBr(result))
