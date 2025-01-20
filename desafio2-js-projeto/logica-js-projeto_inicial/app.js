//Exercício 1 - Pergunte ao usuário qual é o dia da semana. 
// Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
alert("Exercício 1");
let escritaErrada = "sabado"
let sabado = "sábado";
let domingo = "domingo"; 
let diaDaSemana = prompt ("Que dia da semana é hoje?");
if(diaDaSemana === sabado|| diaDaSemana === domingo|| diaDaSemana === escritaErrada){
    alert("Bom fim de semana!");
}else {
    alert("Boa semana!");
}

//Exercício 2 - Verifique se um número digitado pelo usuário é positivo ou negativo. 
// Mostre um alerta informando.
alert("Exercício 2");
let jogadas = prompt ("Quantas vezes você vai querer escolher um número?");
while(`${jogadas}` > 0){
    jogadas--
    let numero = prompt("Escolha um número:");
    if(numero < 0){
        alert(`O número escolhido ${numero} é negativo.`);
    } else {
        alert (`O número escolhido ${numero} é positivo.`);

}}


//Exercício 3 - Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre 
// "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.
alert("Exercício 3");
alert("Bem vindo(a) ao quiz de conhecimentos gerais!");
let pontuação = 0;
while( pontuação < 100){
    pontuação = 0
let p1 = prompt ("Qual é cidade de Minas Gerais conhecida como 'A Cidade do Amor'? ");
let p2 = prompt ("Calcule: (27+3-25(99-2)-1000+587+999)*0)");
let p3 = prompt ("Qual é o nome da fobia do mar?");
let p4 = prompt("Qual foi o último país campeão da copa do mundo de futebol masculino?");
let p5 = prompt("Qual é o maior campeão olímpico da história?");
if (p1.toLowerCase()!== "poços de caldas".toLowerCase()){
    alert(" Resposta para pergunta 1 está errada.");
} else{
    alert("A resposta para a pergunta 1 está correta! + 25 pts");
    pontuação = pontuação + 25;
}
if (p2 != 0){
    alert(" Resposta para pergunta 2 está errada.");
} else{
    alert("A resposta para a pergunta 2 está correta! + 25 pts");
    pontuação = pontuação + 25;
}
if (p3.toLowerCase()!== "talassofobia".toLowerCase()){
        alert(" Resposta para pergunta 3 está errada.");
    } else{
        alert("A resposta para a pergunta 3 está correta! + 25 pts");
        pontuação = pontuação + 25;
}
if (p4.toLowerCase()!== "argentina".toLowerCase()){
    alert(" Resposta para pergunta 4 está errada.");
} else{
    alert("A resposta para a pergunta 4 está correta! + 25 pts");
    pontuação = pontuação + 25;
}
if (p5.toLowerCase()!== "michael phelps".toLowerCase()){
    alert(" Resposta para pergunta 5 está errada.");
} else{
    alert("A resposta para a pergunta 5 está correta! + 25 pts");
    pontuação = pontuação + 25;
}
if(pontuação < 100){
    alert(`Sua pontuação final foi ${pontuação}, tente novamente.`);
}else{
    alert(`Parabéns, você venceu! Pontuação = ${pontuação}`);
    break;
}}

//Exercício 4 - Crie uma mensagem que informa o usuário sobre o saldo da conta, 
// usando uma template string para incluir o valor do saldo.
alert("Exercício 4");
let saldo = 2000.97
alert(`Seu saldo é de R$${saldo.toFixed(2)}.`);

//Exercício 5 - Peça ao usuário para inserir seu nome usando prompt.
//Em seguida, mostre um alerta de boas-vindas usando esse nome
let nome = prompt("Insira seu nome:");
alert(`Boas vindas ${nome}`);
