/*

1.

a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9

2.

"SUBI NUM ÔNIBUS EM MIRROCOS" 27

*/

//Exercícios de escrita

//1.
let nomeDoUsuario = prompt("Digite seu nome.")
let emailDoUsuario = prompt("Digite seu e-mail.")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

//2.
let comidasFavoritas = ["filé com fritas", "camarão à milanesa", "cozidão", "pudim", "frango xadrez"]
console.log(`Essas são minhas comidas preferidas:" ${comidasFavoritas}`)
let comidaUsuario = prompt("Qual é a sua comida favorita?")
let i = 0
comidasFavoritas[i+1] = comidaUsuario
console.log(`Esta é a lista das minhas comidas favoritas, porém, com o segundo item substituido por você: ${comidasFavoritas}`)

//3.
let listaDeTarefas
let tarefa1 = prompt("digite aqui sua primeira tarefa do dia")
let tarefa2 = prompt("digite aqui sua segunda tarefa do dia")
let tarefa3 = prompt("digite aqui sua terceira tarefa do dia")

listaDeTarefas = [tarefa1,tarefa2,tarefa3]
console.log(listaDeTarefas)
let indice = Number(prompt("digite aqui o número da tarefa que você já realizou"))
indice = indice-1 //Aqui fiz um arranjo para o usuário digitar a partir do 1, para ficar mais user friendly
listaDeTarefas.splice(indice,1)
console.log(`Estas são as tarefas que ainda restam: ${listaDeTarefas}`)






