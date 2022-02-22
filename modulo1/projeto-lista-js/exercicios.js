// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura) {
  // implemente sua lógica aqui
  altura = Number(prompt("digite a altura"))
  largura = Number(prompt("digite a largura"))
  console.log(altura*largura)
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual,anoNascimento) {
  // implemente sua lógica aqui
anoAtual = Number(prompt("digite o ano atual"))
anoNascimento = Number(prompt("digite o ano de nascimento"))
console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / altura**2
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
nome = prompt("Qual o seu nome?")
idade = prompt("Qual sua idade?")
email = prompt("Digite seu email")
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1,cor2,cor3) {
  // implemente sua lógica aqui
cor1 = prompt("Indique sua 1° cor preferida:")
cor2 = prompt("Indique sua 2° cor preferida:")
cor3 = prompt("Indique sua 3° cor preferida:")
console.log([cor1,cor2,cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
   return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]    
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array [array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiro = array[0]
  let ultimo = array[array.length -1]
  array[0] = ultimo
  array[array.length -1] = primeiro
  return array

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase()===string2.toLowerCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}