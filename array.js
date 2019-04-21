///Declarar um array em javascripty
const valores= [10,12,7.9,8.9,5,7.9]

///// Saber o tamanho do array
console.log(valores.length)

//// É possivel atribuir um valor numa posição inexistente no array
valores[70]=20
console.log(valores)

/////// Adicionar valore ao array
console.log("----------Com o array push-------------")
valores.push(10,11,12,{nome:'User 1'},[1,2,5,7])
console.log(valores)


/////Retirar o ultimo valor do array
console.log("--------Depois do Array Pop---------")
valores.pop()
console.log(valores)



const te