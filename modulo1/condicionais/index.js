/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1.
 a) O código solicita um número ao usuário. Ao receber, ele converte a string em número, para que esse interaja coms as operações a seguir. O código analisa se o número indicado é par. Caso, o resto da divisão dele por dois seja zero, é impresso no console a menssagem "Passa no teste.", caso, não, ele imprime "Não passou no teste, no console"
 
 b) Para números pares.

 c) Para números impares.

2.
 a) O código serve para indicar ao usuário o valor em reais, da fruta que ele procura. Ele solicita que o usuário indique uma fruta e vai mapeando dentro do switch e imprime o seu respectivo valor. Ao encontrar a fruta indicada ele para de rodar o código, pois temos o "break". 

 b) O preço da Maçã é R$ 2,25

 c) O preço da Pêra é R$ 5,5
    O preço da é R$ 5

3.
 a) A primeira linha solicita que o usuário indique o primeiro número, e ao receber a string a converte para número.
 b) Caso, o usuário digitasse 10 apareceria a menssagem, "Esse número passou no teste", pois a condicional diz que se o número for maior de zero, deverá imprimir essa menssagem. Caso, seja digitado -10 dará erro.
 c) Sim.. Pois, a declaração da variável menssagem está dentro da condicional, mas a chamada está fora.

EXERCÍCIOS DE ESCRITA DE CÓDIGO

 1.*/

let idade = Number(prompt("Qual é sua idade?"))

if (idade >= 18) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir!")
}

//2.
let turno = prompt("Em que turno do dia você estuda? Use 'M' para matutino, 'V' para vespertino e 'N' para noturno.")

if (turno.toLowerCase() === "m") {
    console.log("Bom dia!")
} else if(turno.toLowerCase() === "v") {
    console.log("Boa tarde!")
} else if(turno.toLowerCase() === "n"){
    console.log("Boa noite!")
} else {
    console.log("Tem certeza que esse turno existe?")
}

//3.

let turno2 = prompt("De novo, em que turno do dia você estuda? Use 'M' para matutino, 'V' para vespertino e 'N' para noturno.")

switch(turno2.toLowerCase()) {
    case "m":
        console.log("Bom dia!")
        break
    case "v":
        console.log("Boa tarde!")
        break
    case "n":
        console.log("Boa noite!")
        break
    default:
        console.log("Tem certeza que esse turno existe?")
        break        
}

//4.

let genero = prompt("Digite aqui o gênero do filme escolhido:")
let precoIngresso = Number(prompt("Digite aqui o preço do ingresso do filme escolhido:"))

if (genero.toLowerCase() === "fantasia" && precoIngresso < 15) {
    let lanche = prompt("Qual é o lanchinho que vocÊ vai comprar?") //desafio 1
    console.log("Bom filme!")
    console.log(`Aproveite o seu (sua) ${lanche}!`)//desafio 1
} else {
    console.log("Escolha outro filme! :~(")
}

// Desafio 2

let nome = prompt("Qual é seu nome completo?")
let tipoJogo = prompt("Qual é o tipo de jogo? Use 'IN' para internacional e 'DO' para doméstico.")
let etapaJogo = prompt("Qual é a etapa do jogo? Use 'SF' para semi-final, 'DT' para decisão de terceiro lugar e 'FI' para final.")
let categoria = Number(prompt("Qual é a categoria desejada: 1, 2, 3 ou 4?"))
let quantidade = Number(prompt("Qual é a quantidade de ingressos desejada?"))
let valorIngresso




switch(etapaJogo.toLowerCase()) {
    case "sf":
        if(categoria ===1){
            valorIngresso = 1320
        } else if (categoria===2) {
            valorIngresso = 880
        } else if (categoria===3) {
            valorIngresso = 550
        } else if(categoria===4) {
            valorIngresso = 220
        } else {
            console.log("Categoria não existente.")
        }
    break

    case "dt":
        if(categoria ===1){
            valorIngresso = 660
        } else if (categoria===2) {
            valorIngresso = 440
        } else if (categoria===3) {
            valorIngresso = 330
        } else if(categoria===4) {
            valorIngresso = 170
        } else {
            console.log("Categoria não existente.")
        }
    break    

    case "fi":
        if(categoria ===1){
            valorIngresso = 1980
        } else if (categoria===2) {
            valorIngresso = 1320
        } else if (categoria===3) {
            valorIngresso = 880
        } else if(categoria===4) {
            valorIngresso = 330
        } else {
            console.log("Categoria não existente.")
        }
    break  
    default:
        console.log("Etapa não existente.")
}

if(tipoJogo.toLowerCase()==="do") {

    console.log(`---Dados da compra---
Nome do cliente: ${nome}
Tipo do jogo: ${tipoJogo}
Etapa do jogo: ${etapaJogo}
Categoria: ${categoria}
Quantidade de Ingressos: ${quantidade} ingressos
---Valores---
Valor do ingresso: R$${valorIngresso},00
Valor total: R$${valorIngresso*quantidade},00`)
} else if(tipoJogo.toLowerCase()==="in"){
    console.log(`---Dados da compra---
Nome do cliente: ${nome}
Tipo do jogo: ${tipoJogo}
Etapa do jogo: ${etapaJogo}
Categoria: ${categoria}
Quantidade de Ingressos: ${quantidade} ingressos
---Valores---
Valor do ingresso: R$${valorIngresso*4.1},00
Valor total: R$${valorIngresso*quantidade*4.1},00`)
} else {
    console.log("Tipo de jogo não existente.")
}