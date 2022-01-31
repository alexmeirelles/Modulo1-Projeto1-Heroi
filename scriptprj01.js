var prompt = require('prompt-sync')();

let sim = 0;
const perguntas = [
    // Pergunta 1
    "Seu primeiro passo foi de resistência. Você se deparou com o Pico da Morte, uma montanha antiga e a mais gelada do mundo, que só pessoas extremamente obstinadas, que tem um propósito firme de vida, conseguem ultrapassar e continuar em busca de um grande objetivo. Você conseguiu escalar o pico sem necessitar do tapete magico voador?",
    // Pergunta 2
    "O Dragão Julius é um antigo Rei que era muito perverso e ganacioso. Sua ganancia o consumiu a um ponto quem que foi exilado e tranformado por uma irmandade de magos em um dragão. Julius não é um dragão fácil de abater, nem que seja por uns instantes para se conseguir a poção regenerativa. Você conseguiu transtorná-lo, nem que seja um pouco?",
    // Pergunta 3
    "Independente do Pico gelado e do Dragão, seu caminho o levou a Torma. Torma um Mago nível 7 extremamente hábil pois mantem sua capacidade cognitiva comendo crânios de guerreiros novos deve ter lhe dado trabalho. Porém, eis você aqui! Fale-me você passou por Torma realmente?",
    // Pergunta 4
    "O Labirinto de Syth é uma longa caminhada, com questionamento não de direçoes apenas mas questionamentos de suas decisões em vida. Após tantas reflexões, você conseguiu sair do Syth sem ser resgatados pelos anões do vilarejo vizinho?",
    // Pergunta 5
    "Conhecer Aristidies foi o seu infortúnio final. Ele luta com 4 braços munidos de lâminas extremamentes cortantes. Sei que com ele não foi uma batalha fácil, mas diga-me: Naquela sacola ao canto deste cômodo, está a cabeça de Aristides?"
]

const nome = prompt('Nosso Guerreiro reapareceu, me passe seu nome, por favor: ');
console.log(`Bem-vindo ao final da sua jornada ${nome}, que grande Herói! Sei que não foi fácil passar por tantos obstáculos e experiencias mas, um grande guerreiro como você sabe que é necessário desafios para evoluir e trazer mais beneficios para o mundo!Você, um guerreiro nível 1, apenas com treinamentos da academia, saiu na busca de conseguir sua primeira graduação, de Guerreiro Dan. Para tal, escalou montanhas, batalhou dragões, passou por duelos com Magos, entrou em labirintos cheios de Orcs e visitou o calabouço do Rei Maligno Aristides. Pois bem, agora, responda apenas usando sim ou não para cada evento que se sucedeu em sua caminhada Dan. Tais informações revelarão o seu futuro.`);

console.log();
console.log("-------------------");
console.log("-------------------");
console.log();

for (var i = 0; i < perguntas.length; i++) { 
    console.log(perguntas[i])
    let resposta = prompt("Digite sim ou não: ")

    while (resposta != 'sim' && resposta != 'nao') {
        resposta = prompt("Digite sim ou não: ")
    }

    if (resposta.trim().toLowerCase() === "sim") {
        sim += 1
    }
}

if (sim > 4){
    console.log("Você triunfou de maneira inquestionável e seus feitos serão lembrados por muitas gerações. Sua graduação será com louvor e a próxima expedição será conduzida por você como líder. Uma festa lhe aguarda nas próximas horas no salão Oval de Eros.");
}else if (sim > 3){
    console.log("Quase Perfeito! Se fosse uma prova, seria uma nota 8, não? A Cerimonia de Graduação de Nível será amanha cedo. Não se atrase!")
}else if (sim > 2){
    console.log("Gostei dos dois feitos, algo a ser celebrado e não negligenciado. Porém não há conquista de nível com apenas 2. Acho que você pode inicar uma nova jornada com a Caravana Xiori, veremos na sua volta como será o relatório.");
}else if (sim > 1){
    console.log("Um sucesso em 5 tentativas. Terá sido azar? Enfim, acredito que mais 2 meses na Academia e uma nova Caminhada Dan será a resposta que procuramos. Tente de novo.");
}else {
    console.log("Desculpe. Infelizmente sua Caminhada Dan provou apenas que você não é apto para esta posição em vida. É recomendado você sentar com os conselheo da Vila e buscar uma nova posição na sociedade.");
}

console.log("----------- FIM -----------");