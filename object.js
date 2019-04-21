//// Criar Objectos de forma dinamina

const proud1 ={}
proud1.nome ="Telemovel"
proud1.preco =300
proud1['Descricao do produto']="Telemovel de teste Node js"

console.log(proud1)

console.log("-------------------------------------")

//// Criar um objecto de forma estaitica

const proud2={
    Telemovel1:{
        nome:"Nokia",
        preco:100,
        categoria:"Top",
        Descricao:{
            loja:'Colombo',
            localizacao:'Benfica',
            nome:'Loja colombo'
        }
    },

    Telemovel2:{
           nome:"Iphone",
           preco:1000,
           categoria:"super top",
           Descricao:{
               loja:"Campo pequeno centro comercial",
               localizacao:"Campo pequeno",
               nome:'Phone House'
           }
        }
}


console.log(proud2)


console.log(Math.floor((Math.random()*6)+1))


const melhorClub = ["Fc Porto","Toupeiras","Largatos","Fc Porto","Belenenses","Boa Vista","Fc Porto","Fc Porto","Fc Porto",,"Fc Porto",,"Fc Porto"]

console.log("O melhor clube é "+melhorClub[Math.floor((Math.random()*9))+1])

