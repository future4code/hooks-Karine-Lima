/*
<Exercícios de interpretação de código>
1.
     a) Serão impressas no console as seguintes mensagens:
     Matheus Nachtergael
     Virginia Cavendis
     {canal: "Globo", horario: "14h"}

   2.
     a) object {nome: "Juca", idade: 3, raca: "SDR"}
        object {nome: "Juba", idade: 3, raca: "SDR"}
        object {nome: "Jubo", idade: 3, raca: "SDR"}
     b) A sintaxe dos três pontos faz um espelhamento, ou seja,ela serve para repetir as informações de um objeto. 
   3.
      a) false
         undefined
      b) Ele imprime um boolean que é o valor da chave backender. E ele deixa indefinido a chave "altura", pois essa não foi incluida no objeto.   

<Exercícios de escrita de código>

   1.
     a)*/
     const pessoa = {
        nome: "Karine",
        apelidos: ["K", "Teta", "Kasinha"]
     }
      function dadosPessoa(recebePessoa) {
         console.log( `Eu sou ${recebePessoa.nome}, mas pode me chamar de: ${recebePessoa.apelidos[0]}, ${recebePessoa.apelidos[1]}, ou ${recebePessoa.apelidos[2]}`)
      }
      dadosPessoa(pessoa)
   
   // b) 
      const pessoa2 = {
         ...pessoa, apelidos: ["Amok", "Rosamakbra", "Ktrevas"]
      }  
      dadosPessoa(pessoa2)
 
/* 2. 
     a)*/
     const objeto1 = {
        nome: "Alan",
        idade: 40,
        profissao: "Piloto de avião"
     }
      
      const objeto2 = {
         nome: "Alice",
         idade: 35,
         profissao: "Astronauta"
      }   
//    b)
//    Caso o enunciado esteja pedindo para retornar os objetos separadamente: 
      function recebimentoDosObjetoSeparados(recebeDeObjeto) {
         return [recebeDeObjeto.nome, recebeDeObjeto.nome.length, recebeDeObjeto.idade, recebeDeObjeto.profissao, recebeDeObjeto.profissao.length]
      }
      console.log(recebimentoDosObjetoSeparados(objeto1))
      console.log(recebimentoDosObjetoSeparados(objeto2))

//    Caso o enunciado esteja pedindo para retornar os objetos simultaneamente:
function recebimentoDosObjetosJuntos(recebeDeObjeto1, recebeDeObjeto2) {
   return [recebeDeObjeto1.nome, recebeDeObjeto2.nome, recebeDeObjeto1.nome.length,recebeDeObjeto2.nome.length, recebeDeObjeto1.idade,recebeDeObjeto2.idade, recebeDeObjeto1.profissao,
   recebeDeObjeto2.profissao, recebeDeObjeto1.profissao.length, recebeDeObjeto2.profissao.length]
}
console.log( recebimentoDosObjetosJuntos(objeto1,objeto2))

/* 3.
     a)*/
const carrinho = []

//   b)
const fruta1 = {
   nome: "Abacaxi",
   disponibilidade: true 
}

const fruta2 = {
   nome: "Figo",
   disponibilidade: true 
}

const fruta3 = {
   nome: "Melancia",
   disponibilidade: true 
}

// c)
function escolhasDoCliente(recebeFruta1, recebeFruta2, recebeFruta3) {
   return carrinho.push(recebeFruta1, recebeFruta2,recebeFruta3)
   }

escolhasDoCliente(fruta1, fruta2, fruta3)

// d)
   console.log(carrinho)

// < DESAFIOS>

function perguntasAoUsuario() {
   const perguntaNome = prompt("Qual é seu nome?")
   const perguntaIdade = prompt("Qual sua idade?")
   const perguntaProfissao = prompt("Qual sua profissão?") 
  
   const objetoDasPerguntasDoUsuario = {
      nome: perguntaNome,
      idade: perguntaIdade,
      profissao: perguntaProfissao
   }

   console.log(objetoDasPerguntasDoUsuario)
   console.log(typeof objetoDasPerguntasDoUsuario)
  
}

perguntasAoUsuario()

// 2. 

const filme1 = {
   anoDeLancamento: 2002,
   nomeDoFilme1: "Senhor do Aneis"
}
const filme2 = {
   anoDeLancamento: 1988,
   nomeDoFilme2: "Elvira: A Rainha das Trevas"
}

function filmes(recebefilme1,recebefilme2) {
   const lancamentoAnterior = (recebefilme1.anoDeLancamento > recebefilme2.anoDeLancamento)

const lancamentoNoMesmoAno = recebefilme1.anoDeLancamento === recebefilme2.anoDeLancamento

   return ( `O primiro filme foi lançado antes do segundo? ${recebefilme1.anoDeLancamento < recebefilme2.anoDeLancamento} O O primeiro filme foi lançado no mesmo ano do segundo? ${recebefilme1.anoDeLancamento === recebefilme2.anoDeLancamento} `)
      
}
console.log(filmes(filme1,filme2))

// 3.

function controleDeEstoque(recebaFruta) {
   return recebaFruta.disponibilidade = !recebaFruta.disponibilidade
}

controleDeEstoque(fruta1)

console.log(carrinho)