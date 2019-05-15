function avaliacao(){

    let soma =0
    let media =0
   let contador =0
     for(i in arguments){
          /////// Percorre todos argumentos de uma função
          soma +=arguments[i]
          contador++
     }
     media=soma/contador

     if(media>=10){
         console.log(`O aluno aprovou com a media ${Math.ceil(media)}`)
     }
     else{
         console.log(`O aluno reprovou com a media ${Math.ceil(media)}`)
     }
}

avaliacao(18,19,1)






