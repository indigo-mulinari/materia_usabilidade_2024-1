// alert ("Olá Mundo no hello.js");

//Ter os arquivos separados ajuda na organização
//variável=um espaço na memória (dado) que é temporário e mutável. 

var nome = "Indi";
var fone = 12345;

/*alert (nome);
alert (fone);
alert (nome + " " + fone);*/

//não é nem necessário colocar o ; mas é boas práticas

console.log (nome);
//uma mensagem console.log não vai aparecer para o usuário, aparece no devtools

//////////////////////////////////////////////////////////////////

var num1 = 75;
var num2 = 15;
var resultado = num1 + num2;

console.log (resultado);
console.log (num1 + " + " + num2 + " = " + resultado);

var resultsub = num1 - num2;

console.log (num1 + " - " + num2 + " = " + resultsub);

/////////////////////////////////////////////////////////////////

console.log ("Meu nome é " + nome);

//calcular a área de um circulo

let PI = 3.14;
//o pi é constante, não tem pq ser uma variável. Também pode usar "const", mas é antigo. Deixar com maiúsculas pra identificar mais fácil

var raio = 5;
var area = PI * (raio * raio);

console.log ("A área da circunferência é " + area);

//////////////////////////////////////////////////////////////////

let cor = "rosa"; //variável global

function mostrarCor() //não coloca o ; no final dela, fazer um bloco de comando com {}
{
    console.log (cor);
}

function mostrarAula()
{
    let aula = "Usabilidade"; //variável local
    console.log (aula);
    console.log (cor);
}

//mostrarCor(); //chamando a função
//mostrarAula();

///////////////////////////////////////////////////////////////

var num1 = 2;
var num2 = 10;
var result = 0;
var opera = 3;

function soma()
{
    result = num1 + num2;
    alert(num1 + " + " + num2 + " = " + result);
}

function sub()
{
    result = num1 - num2;
    console.log(num1 + " - " + num2 + " = " + result);
}

function divi()
{
    result = num1 * num2;
    console.log(num1 + " * " + num2 + " = " + result);
}

function mult()
{
    result = num1 / num2;
    console.log(num1 + " / " + num2 + " = " + result);
}

//soma();
//sub();
//divi();
//mult();

/*if (opera == 1)
{
    soma();
}
else if (opera == 2) 
{
    sub();
}
else if (opera == 3)
{
    divi();
}
else if (opera == 4)
{
    mult();
}
else {}*/

switch (opera)
{
    case 1:
    soma();
    break;

    case 2:
    sub();
    break;

    case 3:
    divi();
    break;

    case 4:
    mult();
    break;

    default:
    alert("ERRO! Essa operação não existe");
    break;
}

//document.getElementById('inicio').addEventListener('click', inicio)

function inicio()
{
    alert("Bem vinde à Super Calculadora TopTM")
}