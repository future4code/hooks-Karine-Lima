/* EXERCICIOS DE LEITURA DE CÓDIGO

1.
a) 10
   50
   Não apareceria nada, pois precisamos chamar com o comando console.log

   2.
   a) Essa função recebe a informação do usuário, e imprime um boolean true, caso haja a palavra "cenoura" no string informada. Para garantir que ela seja encontrada indepentende da escrita, usa-se o ToLowerCase para que todas a letras fiquem minúsculas e, assim seja reconhecidas.
   
   b)
   i. TRUE
   ii. TRUE
   iii. FALSE
  
   EXERCÍCIOS DE ESCRITA DE CÓDIGO
  
 1.
 a)*/
 function minhaFrase(){
     console.log("Eu sou Karine, tenho 36 anos, moro em Fortaleza e sou Designer de Moda")
      }
 minhaFrase()

 // b)

 function fraseUser(nome, idade, cidade, profissão) {
     return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`
 }
// TESTANDO: console.log(fraseUser("Karine",36, "Fortaleza", "Designer de moda"))

/* 
2. 
a)*/

function soma (num1, num2){
    return num1 + num2
}
console.log(soma(5, 9))

//b)

function maiorOuigual (num1, num2){
    return num1>=num2
}
console.log(maiorOuigual(9, 4))

//c)

function parOunao (num1){

    return num1 % 2 === 0
}
console.log(parOunao(6))

//d)

function mensagemDouser(mensagemRecebida){
    console.log(mensagemRecebida.length, mensagemRecebida.toUpperCase())
}

//TESTANDO: mensagemDouser("Boa noite, Labenu!")

/* 3.
a)*/


let num1 = Number(prompt("Insira o primeiro número:"))
let num2 = Number(prompt("Insira o segundo número:"))

function somar (){
    return num1 + num2
}

function subtrair (){
    return num1 - num2
}

function multiplicar (){
    return num1 * num2
}

function dividir (){
    return num1 / num2
}


console.log(
    
    
`Números inseridos: ${num1} e ${num2}
Soma: ${somar(num1, num2)}
Diferença: ${subtrair(num1, num2)}
Multiplicação: ${multiplicar(num1, num2)}
Divisão: ${dividir(num1, num2)}`
)

