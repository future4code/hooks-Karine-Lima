/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
 1. a) Será impresso 3 novos arrays, feito pelos valores dos objetos.

2. a) Será impresso um novo array, somente com os nomes dos usuários.

3. a) Ele vai uma array composta por tudo que não tenha o apelido "chijo"

EXERCÍCIOS DE ESCRITA DE CÓDIGO

 1.*/
 
 
 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

 // a)

 const nomeDosDoguinhos = pets.map((item, index, array) => {
  return item.nome  
})
//console.log(nomeDosDoguinhos)

// b)

 const somenteCachorrosSalsichas = pets.filter((item, index, array) => {
   return item.raca === "Salsicha"
})
//console.log(somenteCachorrosSalsichas)

// c)

 const somentePoodles = pets.filter((item, index, array) => {
    return item.raca === "Poodle"
})

 const menssagemPoodles = somentePoodles.map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
})
// console.log(menssagemPoodles)

// 2.

 const produtos = [
   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
   { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

  // a)
  
 const nomeDosProdutos = produtos.map((item, index, array) => {
    return item.nome  
})
 // console.log(nomeDosProdutos)

// b)

 const produtoComDesconto = produtos.map((item, index, array) => {
 const arrayComDesconto = [item.nome, (95*(item.preco)/100).toFixed(2) ]    
    return arrayComDesconto
})
//console.log(produtoComDesconto)

// c) 

 const somenteBebidas = produtos.filter((item, index, array) => {
    return item.categoria === "Bebidas"
})
//console.log(somenteBebidas)

// d)

 const palavraYpe = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê") 
})
//console.log(palavraYpe)

// e)

 const palavraYpe2 = produtos.filter((item, index, array) => {
    return item.nome.includes("Ypê") 
})

 const menssagemYpe = palavraYpe2.map((item) => {
    return `Compre ${item.nome} por ${item.preco}`
})
//console.log(menssagemYpe)

// DESAFIO 

 const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

// a) 

const nomePokemonOrdemAlfabetica = pokemons.map((item, index, array) => {
const itemNome = [item.nome]
    return itemNome.sort()
})
//console.log(nomePokemonOrdemAlfabetica)

// b)

const tipos = pokemons.map((tipo) => {
    return tipo.tipo
})

const tiposSet = [...new Set(tipos)]

//console.log(tiposSet)
