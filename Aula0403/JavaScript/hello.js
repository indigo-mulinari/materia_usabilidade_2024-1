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
// o pi é constante, não tem pq ser uma variável. Também pode usar "const", mas é antigo. Deixar com maiúsculas pra identificar mais fácil

var raio = 5;
var area = PI * (raio * raio);

console.log ("A área da circunferência é " + area);

