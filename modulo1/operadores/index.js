// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1. F F V BOOLEAN

// 2. ELA NÃO VAO CONSEGUIR FAZER A OPERAÇÃO SOMA, POIS ELE NÃO TEM VALORES E, SIM, STRINGS.

/* 3. ELE PODERÁ FAZER A CONVERSÃO DOS STRINGS EM NÚMEROS, ASSIM O SISTEMA CONSEGUIRÁ FAZER A OPERAÇÃO QUE ELE DEFINIR.
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
const soma = Number(primeiroNumero) + Number(segundoNumero)*/

// EXERCÍCIO DE ESCRITA DE CÓDIGO

// 1.

/*let idade = Number(prompt("Qual sua idade"))
let idadeMelhoramigue = Number( prompt("Melhor Amigue?! Qual a idade delu?"))
console.log("Sua idade é maior do que a do seu melhor amigue? -", idade>idadeMelhoramigue)
let subtração = (idade - idadeMelhoramigue)
console.log(idade)
console.log(idadeMelhoramigue)
console.log(subtração)*/

//2.

/*let numeroPar = Number(prompt("Insira uma número par, por favor."))
let resto = (numeroPar%2)
console.log(resto)*/
// O padrão de resposta é sempre zero, pois quando dividimos números pares por dois, não terá resto dessa divisão.
// Caso, o usuário preencha um número impar, o resultado sempre será 1,pois esse será sempre o resto em caso de números impares sendo dividido por 2.

//3. 

/*let idadeEmAnos = Number(prompt ("Qual sua idade em anos?"))

let idadeEmMeses = idadeEmAnos*12
console.log(idadeEmMeses)
let idadeEmDias = idadeEmAnos*365
console.log(idadeEmDias)
let idadeEmHoras = idadeEmAnos*((365*24))
console.log(idadeEmHoras)*/

// 4.

let n1 = Number(prompt("Indique um número, por favor."))
let n2 = Number(prompt("Indique mais um número, por favor."))
console.log ("O primeiro numero é maior que segundo?", n1>n2)
console.log ("O primeiro numero é igual ao segundo?", n1===n2)
let resto1 = n1%n2
console.log ("O primeiro numero é divisível pelo segundo?", resto1===0)
let resto2 = n2%n1
console.log ("O segundo numero é divisível pelo primeiro?", resto2===0)

//DESAFIO

// 1.
// a)

let fahrenheit = 77
let conversaoFparaK =((fahrenheit - 32)*(5/9) + 273.15)
console.log("Sua conversão de F° para K é:",conversaoFparaK)

//b)

let celsius = 80
let conversaoCparaF =((celsius)*(9/5) + 32)
console.log("Sua conversão de °C para K é:",conversaoCparaF)

//c)

celsius = 30
conversaoCparaF =((celsius)*(9/5) + 32)

conversaoFparaK =(((conversaoCparaF) - 32)*(5/9) + 273.15)
console.log(conversaoCparaF,conversaoFparaK)

//d)

celsius = Number(prompt("Qual valor em °C você quer converter?"))
conversaoCparaF =((celsius)*(9/5) + 32)

conversaoFparaK =(((conversaoCparaF) - 32)*(5/9) + 273.15)
console.log(conversaoCparaF,conversaoFparaK)

//2.

let consumo = Number(prompt("Quantos Kwh foram consumidos?"))
let valorPago = (consumo*0.05)
console.log("Você irá pagar:",valorPago,"reais")
let percentualDedesconto = Number(prompt("Qual o percentual de desconto"))
let valorComdesconto = (valorPago*(100 - percentualDedesconto)/100)
console.log("Seu valor a pagar com desconto de",percentualDedesconto,"% é de",valorComdesconto,"reais")

//3.

let valorLb = 20
let conversaoLbparaKg = (valorLb*0.453)
console.log("20lb equivalem a",conversaoLbparaKg,"kg")

let valorOz = 10.5
let conversaoOzparaKg = (valorOz*0.028)
console.log("10.5oz equivalem a",conversaoOzparaKg,"kg")

let valorMi = 100
let conversaoMiemM = (valorMi*1609.34)
console.log("100mi equivalem a",conversaoMiemM,"m")

let valorFt = 50
let conversaoFtparaM = (valorFt*0.304)
console.log("50ft equivalem a",conversaoFtparaM,"m")

let valorGal = 103.56
let conversaoGalemL = (valorGal*4.54)
console.log("103.56gal equivalem a",conversaoGalemL,"l")

let valorXic = 450
let conversaoXicparaL = (valorXic*0.24)
console.log("450 xic equivalem a",conversaoXicparaL,"l")


valorXic = Number(prompt("Quantas xicaras você quer converter para l?"))
conversaoXicparaL = (valorXic*0.24)
console.log(valorXic,"xic equivalem a",conversaoXicparaL,"l")



function minhaFuncao(variavel) {return variavel * 5}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


let nome = prompt("Qual o seu nome?")
let nomeNamorade = prompt("Qual o nome do seu respective?")
let sentimento = prompt("O que você sente por elx?")
let intensidadeSentimento = prompt("O quanto você senti isto por elx?")

console.log("Ei", nomeNamorade, "eu tenho",intensidadeSentimento,sentimento,"por ti,ó <3 - ",nome)









