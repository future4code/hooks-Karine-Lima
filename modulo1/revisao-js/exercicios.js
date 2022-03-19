// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let par = x => x % 2 === 0
  let pares = array.filter(par)
  return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let par = x => x % 2 === 0
  let quadrado = y => y**2
  let pares = array.filter(par)
  let parQuadrado = pares.map(quadrado)
  return parQuadrado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for (let i = 0; i < array.length; i++) {
      let numeroDoArray = array[i]
      if(numeroDoArray > maiorNumero) {
          maiorNumero = numeroDoArray
      }
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero
    let menorNumero
    if(num1 > num2){
        maiorNumero = num1
        menorNumero = num2
    }
    else { maiorNumero = num2
    menorNumero = num1}

    let maiorDivisivelPorMenor = maiorNumero % menorNumero === 0

    let diferenca = maiorNumero - menorNumero

    let objeto = {
        maiorNumero,
        maiorDivisivelPorMenor,
        diferenca
    }
    return objeto
    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let array = []
    for(let i=0; array.length < n; i++){
        if (i % 2 === 0) {
            array.push(i)
        }
    }
    return array
   }



// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let resultado
    if(ladoA === ladoB && ladoB === ladoC) {
        resultado = "Equilátero"
    }else if(ladoA!==ladoB && ladoB===ladoC){
        resultado = "Isósceles"
    }else if(ladoA===ladoB && ladoB!==ladoC){
        resultado = "Isósceles"
    }else if(ladoA===ladoC && ladoB!==ladoC) {
        resultado = "Isósceles"
    }else {
        resultado = "Escaleno"
    }
    return resultado
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let ordenado = array.sort((a,b) => a-b)
    let indexSegundoMaior = ordenado.length -2
    let segundoMaior = ordenado[indexSegundoMaior]
    let segundoMenor = ordenado[1]
    let segundos = [segundoMaior, segundoMenor]
    
    return segundos
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let novaPessoa = {
       ...pessoa,
       nome: "ANÔNIMO"
   }
   return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let filtraAltura = pessoas.filter((item) => {
        return item.altura > 1.50
    })
    
    let filtraIdade1 = filtraAltura.filter((item) => {
        return item.idade > 14
    })
    
    let filtraIdade2 = filtraIdade1.filter((item) => {
        return item.idade < 60
    })

    return filtraIdade2
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}