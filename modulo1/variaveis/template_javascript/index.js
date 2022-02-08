// EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO
// 1. 10
// 1.2 10 5

// 2. 10 10 10 

/* 3. variável p: CargaHoráriaDiaria
   3.2 variável t: diária*/
   
// EXERCICIO DE ESCRITA DE CÓDIGO

// 1. d) Porque não foi definido nenhum valor para as variaveis.
// 1. f) Antes eles estavam imprimindo o status "indefinido", pois não tinham sido atribuido nenhum valor. Ao colocarmos, os valores eles apareceram como strings, pois a resposta do usuário sempre será impressa nesse status. 
let nome = prompt("Qual seu nome?")
let idade = prompt("Idade")
console.log(typeof nome, typeof idade)
console.log("Olá", nome, "Você tem", idade, "anos.")

//2.
let corDoOlho = prompt("Você tem olhos azuis?")
let gostaDePão = prompt("Você gosta de pão?")
let gostaDeCachorro = prompt("Você gosta de cachorro?")
console.log("Você tem olhos azuis? -", corDoOlho)
console.log("Você gosta de pão? -", gostaDePão)
console.log("Você gosta de cachorro? -", gostaDeCachorro)

//3. 
let a = 10
let b = 25
c = a
d = b
a = d
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

// DESAFIO

let numero1 = Number(prompt("Digite o numero 1"))
let numero2 = Number(prompt("Digite o número 2"))
console.log("O primeiro número somado ao segundo número resulta em:", numero1 + numero2)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", numero1*numero2)


