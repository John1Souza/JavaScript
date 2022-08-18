//let nome = "rafael";
//let idade = 25;
//let estaAprovado = true;
//let sobrenome = undefined;
//let corSelecionado = null;

/*let pessoa = {
    nome: "Rafael",
    idade: 25,
    estaAprovado: true,
    sibrenome: 'de Souza',

};*/
//console.log(pessoa)
// Array

/*let familia = [true,45,'johnatas',17]
console.log(familia.length);
console.log(familia[3]);
let nomeDoColega = []*/

// verbo + substantivo
/*let corSite = "azul"
function resetaCor(cor, tonalidade){
    corSite = cor + tonalidade;
};

console.log(corSite);
resetaCor("verde"," claro");
console.log(corSite);*/

// Realizar uma tarefa , não devolve nada

/*function dizerNome(){
    console.log("Johnatas");
}
dizerNome()
// faz um cálculo ou operação e retorna algo
function MultiplicarPorDois(valor){
    return valor * 2;

}

// console.log(MultiplicarPorDois(5))

let resultado = MultiplicarPorDois(5);

console.log(resultado)*/

// Operadoress Aritiméticos (matemáticos)
//let salario = 100;
// + ,- ,* ,/ ,**
//console.log(salario + salario);
//console.log(salario - salario);
//console.log(salario * salario);
//console.log(salario / salario);
//console.log(salario ** 5);

// ++ -- 

//let idade = 19;

//console.log(++idade);
//console.log(idade);
//console.log(--idade);
//console.log(idade)

// Operadores Atribuição

//let valorTecladoGamer = 100;
// valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
// valorTecladoGamer = valorTecladoGamer - valorTecladoGamer;
//valorTecladoGamer -= valorTecladoGamer;
//console.log(valorTecladoGamer)

// Operadores Comparação
    // comparadores de igualdade
    // igualdade restrita
//console.log( 1 === 1);
//console.log( '1' === 1);
    // igualdade solta
//console.log( 1 == 1);
//console.log( '1' == 1)
// Tem um cliente, 100 premium, comum

//let pontos = 200;
//let tipo = pontos > 100 ? 'premium' : 'comum';
//console.log(tipo);


// Operadores Lógicos

// Operador lógico e (&&)
//Retorna TRUE se os dois operandos forem true

//console.log(false && false)


// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

// console.log(podeAplicar)

// Operador Lógico ou ( || )

//// let MaiorDeIdade = false;
//// let PossuiCarteiraDeTrabalho = true;
//// let PodeAplicar = MaiorDeIdade || PossuiCarteiraDeTrabalho;

//// console.log(`Pode aplicar: ${PodeAplicar}`);

// Operador NOT (!)

//// let candidatoRecusado = !PodeAplicar;

//// console.log(`Candidato recusado: ${candidatoRecusado}`)

// Falsy
// undefined
// null
// 0 
// false
// ''
// NaN - no a number

// Truthy

//let corPersonlizada = '';
//let corPadrao = "Azul";
//let corPerfil = corPersonlizada || corPadrao;

//console.log(corPerfil)



// Operadores Bitwise

// if..Else

// se a hora estiver entre 6:00 até 12:00 : Bom dia!
// Se estiver entre 12:00 até 18:00 : boa tarde!
//Caso contrário : Boa noite!
//let hora = 22;

//if (hora > 6 && hora < 12){
    //console.log('Bom dia!')
//}else if (hora > 12 && hora < 18){
    //console.log('Boa tarde!')
    // codigo a ser executado
//}else {
    //console.log('Boa noite!')
    // condição a ser executado
//}

/*let permissao; // comum, gerente, diretor
permissao = 'comum'
switch (permissao){
    case 'comum':
    console.log('Usuário comum');
    break;

    case 'gerente':
    console.log('Usuário gerente');
    break;

    case 'diretor':
    console.log('Usuário diretor');
    break;

    default: 
    console.log('Usuário não reconhecido!');
} */

for(let i = 5; i >= 1; i--) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    
}