//let nome = "rafael";
//let idade = 25;
//let estaAprovado = true;
//let sobrenome = undefined;
//let corSelecionado = null;

/*let pessoa = {
    nome: "Rafael",
    idade: 25,
    estaAprovado: true,
    sobrenome: 'de Souza',

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
} 

for(let i = 5; i >= 1; i--) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    
}
*/

// While Loop
/*let i = 5;

while (i >= 1){
    if (i % 2 !== 0) {
        console.log(i);
    }
    i--;
}

// Do..while


let i = 0;
do {
    console.log('digitando!',i);
    i++;
} while (i < 10)


const pessoa = {
    nome: 'Johnatas',
    idade: 25
};


for(let chave in pessoa){
    console.log(chave, pessoa['nome'])
}


const cores = ['vermelho','azul','verde'];

for (let indice in cores){
    console.log(indice, cores[indice])
}

// for-of

for (let cor of cores){
    console.log(cor);
}

const pessoa = ['Johnatas', 21, 'Solteiro'];

for (let indice of pessoa){
    console.log(indice)
}


// Escreva uma função que usa 2 número e retorna o maior entre eles

let n1 = 1;
let n2 = 3;

maior = 0
menor = 0
if (n1 > n2){
    maior = n1
}else {
    maior = n2
}
console.log(maior)


 

 let valorMaior = max(10, 6);

 console.log(valorMaior);

 function max(n1, n2){
    if (n1 > n2)
        return n1
    else return n2
    
    return n1 > n2 ? n1: n2;
 }
 */

 /*
 ////// divisivel pro 3 => Fizz
 ////// divisivel por 5 => buzz
 ////// Divisivel por 3 e 5 => FIzzBuzz
 ////// Não divisivel por 3 ou 5 => entrada
 ////// Não é um número => 'Não é um número'

 const resultado = fizzBuzz();

 console.log(resultado);

 function fizzBuzz(valor){
    if (typeof valor !== 'number'){
        return 'Não é um número'
    }else {
        if (valor % 3 == 0 && valor % 5 ==0){
            return 'FizzBuzz'
        }else {
            if ( valor % 3 == 0){
            return 'Fizz'
            }
            if (valor % 5 == 0) {
                return 'Buzz'
            }
            if (valor % 3 != 0 && valor % 5 != 0){
                return valor
            }             
        }    
    }
     
    
 }
*/

//// Velocidade máxima de até 70
//// a cada 5km acima do limite você ganha 1 ponto
//// Math.Floor()
//// caso pontos maior que 12 -> "Carteira Suspensa"

/*const velocidade = verificarVelocidade(81);
console.log(velocidade)


function verificarVelocidade(vel){
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
    if (vel <= velocidadeMaxima){
        return 'Tudo ok'
    }else{ 
        let total = Math.floor((vel - velocidadeMaxima)/ KmPorPonto)
        if (total > 12){
            return `Ultrapassou o limite de pontos, Carteira Suspensa`
        }else{
            return `Acima do limite de velocidade, ${total} pontos na carteira`
        }
        
    }

}
*/
/* 
//// Receber uma quantidade de valores para avaliar
//// Função exibe se cada valor é par ou ímpar

exibirTipo(10);

function exibirTipo(limite){
    for(let lim = 0; lim <= limite; lim++){
        //console.log(`${lim}`)
        if (lim % 2 === 0){
            console.log(`${lim} "PAR"`)
        }else {
            console.log(`${lim} "ÍMPAR"`)
        }
    }
}
*/

// criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto

/*const filme = {
    título : "vingadores",
    ano : 2018,
    diretor : 'Robin',
    personagem : 'Thor'

}
//console.log(filme);

exibirPropriedades(filme);


function exibirPropriedades(obj){
    for (chave in obj){
        if (typeof obj[chave] !== 'number'){
            console.log(chave, obj[chave])
        }
    }
}
*/
/* 
somar(10);

function somar(limite){
    let soma = 0;
    for(  num = 0 ; num <= limite ; num++){          
        if (num % 3 === 0 || num % 5 === 0){
            soma += num;
        } 
    }
    console.log(soma);    
}
*/

// Exercícios Nota Escolar
// Obter a média a partir de um array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A
/*
const array = [70, 70, 80];

console.log(mediaDoAluno(array));


function mediaDoAluno(notas) {
    const media = calcularMedia(notas);

    if ( media < 59) return 'F';
    if ( media < 69) return 'D';
    if ( media < 79) return 'C';
    if ( media < 89) return 'B';
    return 'A'
}

function calcularMedia(array) {
    let soma = 0;
    for (let valor of array){
        soma += valor;
    }
    return soma/ (array.length);
}

function mediaDoAluno(notas){
    let notaMedia = 0;
    let soma = 0;
    let cont = 0;
    for (i in notas){
        soma += notas[i];       
        //console.log(notas[i]);
        cont++;
    }
    notaMedia = soma / cont
    //console.log(Math.floor(notaMedia))
    if ( notaMedia >= 0 && notaMedia <= 59){
        console.log('F');
    }
    if (notaMedia >= 60 && notaMedia <= 69){
        console.log('D');
    }
    if (notaMedia >= 70 && notaMedia <= 79){
        console.log('C');
    }
    if (notaMedia >= 80 && notaMedia <= 89){
        console.log('B');
    }
    if (notaMedia >= 90 && notaMedia <= 100){
        console.log('A');
    }
    
}

// Criar uma função que exibe a quantidade de *
// que aquela linha possui



exibirAsteriscos(10);

function exibirAsteriscos(linhas){
    // let a = '';
    // for (let i = 1; i <= linhas; i++){
    //     a += '*';
    //     console.log(a) 
    // }
    for (let linha = 1; linha <= linhas; linha++){
        let padrao = '';
        for (let i = 0; i < linha; i++){
            padrao += '*';
        }
        console.log(padrao)
    }
    
}
*/

// Criar função para mostrar os números primos

// primos
// Compostos
/*
exibirNumerosPrimos(10);

function exibirNumerosPrimos(limite){
    let cont = 0;  
    let primo = '';  
    for (let i = 0; i <= limite; i++){        
        for (let v = 0; v <= i; v++){
            //console.log(i,v);
            if ( i % v === 0){  
                //console.log(i,v);
                cont++;              
            }                  
        }     
        if (cont === 2){
            primo = i;
        }          
        if(primo !== ''){
            console.log(primo);
        }
        primo = '';
        cont = 0;   
    }
    
    
}
 
exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        

        if (NumeroPrimo(numero)) console.log(numero);
    }
}

function NumeroPrimo(numero){
    for (let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor === 0){
            return false;
        }
    }
    return true;
}


const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical : 155,
        horizontal: 75
    }, 
    capacidadeBateria: 5000,
    ligar: function(){
        console.log("Fazendo ligação...")
    }
}
//Javascript Aula 34 - Factory Functions (função de fábrica)
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...")
        }
    }
    
}

const celular1 = criarCelular('Zenfone', 5.5, 5000);
console.log(celular1);


// Constructor functions - 
// CamelCase umDoisTresQuatro
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log("Fazendo ligação...")
        }
    }
    
}
// Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("Fazendo Ligação...")
    }
}
const celular2 = new Celular('ASUS', 5.5, 5000);
console.log(celular2)

/// TÊNIS

function Tenis(tamanhoTenis, marcaTenis, materialTenis){
    this.tamanhoTenis = tamanhoTenis,
    this.marcaTenis = marcaTenis,
    this.materialTenis = materialTenis,
    this.preço = function(){
        console.log(`Custa R$ ${tamanhoTenis*2} `)
    }
}

const tenis = new Tenis(42, 'NIKE', 'Couro')
console.log(tenis)


// JavaScript Aula 36 - Natureza dinâmica de objetos

const mouse = {
    cor : 'red',
    marca : 'dazz'
}

mouse.velocidade = 5000;
mouse.trocarDPI = function(){
    console.log('Mudando DPI ')
}
console.log(mouse)


/// Clonar objetos

const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical : 155,
        horizontal: 75
    }, 
    capacidadeBateria: 5000,
    ligar: function(){
        console.log("Fazendo ligação...")
    }
}


const novoObjeto = Object.assign({
    bateria : 5000
}, celular);
console.log(novoObjeto);

const objeto2 = {...celular};
console.log(objeto2)

const notebook = {
    marcaNote : 'Asus',
    tamanhoTelaNote : 5.5,
    capacidadeBateriaNote : 5000,

}

const note = {...notebook}
console.log(note);



///MATH 

Math.random()
Math.max()
Math.min()


// string
// Tipo Primitivo
const mensagem = 'minha primeira mensagem';
// tipo objeto
const outraMensagem = new String('bom dia');

outraMensagem.length
outraMensagem[2]
mensagem.includes('primeira') // tem a palavra 'primeira' na mensagem?
mensagem.startsWith('minha') // a mensagem começa com apalavra 'minha'? 
mensagem.endsWith('mensagem') // termina com 'mensagem'?
mensagem.indexOf('primeira') // o indice de algo
mensagem.replace('minha','sua') // substitui o primeiro termo pelo segundo
mensagem.trim() // Remove os espaços extras
mensagem.split(' ') //quebra a frase em função do termo selecionado


// javaScript Aula 39 - Template Literal

//const mensagem = 'Oi isso é a minha\n primeira mensagem'

// Object {}
// Boolean true, false
// string '', ""
// template literal ``

const outra = `Oi isso é a minha "primeira" mensagem`;
const nome = 'rafael';
//const mensagem = 'olá' + nome +  '\n'
const email =
`Olá ${nome}

Obrigado por se inscrever no canal

Para acompanhar os videos não se esqueça de ativar o sino.

Obrigado
Johnatas.`;


// Date

const data1 = new Date();
const data2 = new Date('March 06 2019 09:30')
const data3 = new Date(2019, 03, 06, 9, 30)

data3.setFullYear(2030)
data2.toDateString()
data2.toTimeString()



// JS Objeto Endereço

// Criar um objeto endereço
// Rua
// Cidade
// CEP
// exibirEndereco(endereco)

function Endereco(ruaEndereco, cidadeEndereco, cepEndereco) {
    return {
        ruaEndereco: ruaEndereco, 
        cidadeEndereco: cidadeEndereco,
        cepEndereco: cepEndereco,
    }
}

const endereco1 = Endereco(1, 'brasilia', 71596-241);

console.log(endereco1)

let endereco = {
    rua: 'a',
    cidade: 'b',
    cep: 'c'
}
function exibirEndereco(endereco){
    for(let chave in endereco){
        console.log(chave, endereco[chave])
    }
}

exibirEndereco(endereco);


// Exercicio 43 - Igualdade de Objetos (Exercicio)

function Endereco(rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new Endereco('a', 'b', 'c');
const endereco2 = new Endereco('a', 'b', 'c');
const endereco3 = endereco1
function saoIguais(endereco1, endereco2) {
    // comparar se as propriedades são iguais
    return endereco1.rua === endereco2.rua &&
        endereco1.cidade === endereco2.cidade &&
        endereco1.cep === endereco2.cep 
}
console .log(saoIguais(endereco1, endereco2))

function temEnderecoMemoriaIguais (endereco1, endereco2){
    // Comparando se a referencia do objeto aponta para o mesmo local da memoria
    return endereco1 === endereco3;
}

console.log(temEnderecoMemoriaIguais(endereco1, endereco2));
*/

// JavaScript aula 45 - Objeto Postagem de Blog (exercicio)
// Eu quero que você crie neste exercicio um objeto de postagem de blog que vai conter as seguintes propriedades
// postagem
/*
titulo
mensagem
autor
visualizacoes
comentarios
    (autor, mensagem)
estaAoVivo


let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios : [
        {autor:'a', mensagem: 'b'},
        {autor:'a', mensagem: 'b'}
    ],
    estaAoVivo: true

}

console.log(postagem);


// javascript Aula 46 - Constructor Function (Exercicio)

// Criar um objeto postagem
// titulo, mensagem, autor, visualizacoes, comentarios, estaaovivo

function Postagem(titulo, mensagem, autor) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = []
    this.estaAoVivo = false
}

const post = new Postagem('a', 'b', 'c');
console.log(post);


// JavaScript Aula 47 - Faixa de Preço (Exercicio)
// é que você crie um array de objetos de faixa de preço para que ele possa ser usado em um site igual o mercado livre

// Primeira Opção

let faixas = [
    {tooltip: 'até R$ 700', minimo: 0, maximo: 700},
    {tooltip: 'de R$ 700 até R$ 1000', minimo: 700, maximo: 1000},
    {tooltip: 'R$ 1000 ou mais', minimo: 1000, maximo: 9999999}
];

// Segunda opção

function criaFaixaPreco(tooltip, minimo, maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixa2 = [
    criaFaixaPreco('a', 1, 100),
    criaFaixaPreco('b', 100, 1000),
    criaFaixaPreco('c', 1000, 10000)
]
// Terceira Opção (constructor function)
function FaixaPreco(tooltip , minimo, maximo){
    this.tooltip = tooltip,
    this.maximo = minimo,
    this.maximo = maximo
}
let faixas3 =[
    new FaixaPreco('d', 10, 20),
    new FaixaPreco('e', 20, 30),
    new FaixaPreco('f', 30, 40)
]
console.log(faixas);
console.log(faixa2);
console.log(faixas3);



// JAVASCRIPT AULA 52 INTRODUÇÃO A ARRAYS

// Add novos elementos
// Encontrar Elementos
// Remover elementos
// Dividir elementos
// Dividir Arrays
// Combinar arrays

// JAVASCRIPT AULA 52 ADICIONADO ELEMENTOS
const numeros = [1,2,3];

// Inicio

numeros.unshift(0);
console.log(numeros);

//meio

numeros.splice(1,0, 'a');
console.log(numeros);

//final

numeros.push(5)
console.log(numeros);

/// array

let num = [2,5,6,9,10];

num.unshift(1)
num.splice(2,0, 3)
num.splice(3,0, 4)
num.splice(6,0,7)
num.splice(7,0,8)
num.push(11)
console.log(num)

// JAVASCRIPT AULA 54 ENCONTRANDO ELEMENTOS (PRIMITIVOS)

const numeros1 = [1,2,3,4];

console.log(numeros1.indexOf(1));
console.log(numeros1.lastIndexOf(4));
console.log(numeros1.indexOf(2) !== -1);
console.log(numeros1.includes(2));

// JAVASCRIPT AULA 55 ENCONTRANDO ELEMENTOS (tipos de referencia)

const marcas = [
    {id:1, nome:'a'},
    {id:2, nome:'b'},
    {id:3, nome:'c'},
];

const marca = marcas.find(function(marca){
    return marca.nome == 'a';

});

console.log(marca);

// JAVASCRIPT AULA 56 ARROW FUNCTIONS

const marcas1 = [
    {id:1, nome:'a'},
    {id:2, nome:'b'},
    {id:3, nome:'c'},
];

console.log(marcas1.find(marca => marca.nome === 'a'));

// JAVASCRIPT AULA 57 REMOVENDO ELEMENTOS

const numeros3 = [1,2,3,4,5,6];
numeros3.push();
numeros3.unshift();
numeros3.splice();

//final
const ultimo = numeros3.pop();
console.log(ultimo);
console.log(numeros3);

//inicio

const primeiro = numeros3.shift();
console.log(primeiro);
console.log(numeros3);

// meio

const meio = numeros3.splice(2, 1);
console.log(meio)

// JAVASCRIPT AULA 58 esvaziar um array

let numeros4 = [1,2,3,4,5,6];
let outros = numeros4;
// solucao 1

// numeros4 = [];



// solucao 2

numeros4.length = 0;

console.log(numeros4)
console.log(outros);


// SOlucao 3

// numeros4.splice(0, numeros4.length);
// console.log(numeros4);
// console.log(outros);


// solucao 4
// while (numeros4.length > 0)
//     numeros4.pop();


// JAVASCRIPT AULA 59 CRIANDO E CORTANDO ARRAYS

const prim = [1,2,3];
const seg = [4,5,6];

// Combinar

const combinado = prim.concat(seg);
console.log(combinado);

// DIVIDIR
const cortado = combinado.slice();
console.log(cortado);


// JAVASCRIPT AULA 55 CRIANDO E CORTANDO ARRAYS

const primeiro = [1,2,3];
const segundo = [4,5,6]

// const cobunado = primeiro.concat(segundo)

const combinado = [...primeiro,...segundo];
console.log(combinado);
// const cortado = combinado.slice();

const clonado = [...combinado];
console.log(clonado);



// spread

// JAVASCRIPT AULA 56 ITERANDO UM ARRAYS

const numeros = [1,2,3,4,5];

// foreach 

numeros.forEach((numero, indice) => console.log(numero, indice));

// JAVASCRIPT AULA 57 COMBINANDO UM ARRAYS

const numeros = [1,2,3,4,5];

const combinado = numeros.join('=*');

console.log(combinado);

const frase = 'Ola bem vindo ao curso';
const resultado = frase.split(' ');

console.log(resultado);


console.log(resultado.join('-'));
*/


