var realine = readline('readline-sync');
var nome = "";
var n1 =0 ;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var media =0;
//Entrada de dados
console.log("Programa que calcula a media do aluno");
nome = readline.question ('informe a nota 1');
n1 = parseFloat(readline.question('informe a nota 2'));
n2 = parseFloat(readline.question('informe a nota 2'));
n3 = parseFloat(readline.question('informe a nota 2'));
n4 = parseFloat(readline.question('informe a nota 2'));

media = (n1+n2+3+n4) / 4;
console.log("Media:"+ media);
