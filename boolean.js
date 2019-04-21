////Tipos Boolean em javascripy

let isActive = true
console.log(isActive)

isActive = 1

console.log(!isActive+" Com a negação")
console.log(!!isActive+" Com a dupla negação")

////Lista de valores verdadeiros
console.log("---------Os valores verdadeiros são--------------")
console.log(!!-3)
console.log(!!4)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive=1))

////Lista de valores Falsos 
console.log("-------Os valores Falsos------------")
console.log(!!0)
console.log(!!null)
console.log(!!NaN)
console.log(!!'')
console.log(!!undefined)

////Logica boolean utilizando o Or
let nome = ""
console.log(nome || "Não definido")

nome = "Teste"
console.log(nome || "Não definido")
