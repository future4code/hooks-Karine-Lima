ˋˋˋfunction criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]
     let nomeDosAnimais = animais.map((item) => {
       return item.nome
     })
     return nomeDosAnimais
}ˋˋˋ