const valor = 'Global'
function minhafuncao(){
    console.log(valor)
}


function execute(){
    const valor='Local'
    minhafuncao()
}
execute() /////Retorna o valor global porque a funçõa minhafuncao() tem em conta o local onde foi declarada
