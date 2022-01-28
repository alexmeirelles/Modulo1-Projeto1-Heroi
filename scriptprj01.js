/*Projeto 1 - A Jornada do Herói
Hoje nós começamos o nosso primeiro projeto entregável! Esse projeto vai avaliar os conteúdos passados durante essa primeira semana, 
e se você consegue desenvolver uma programação utilizando todos eles.
Você poderá usar as aulas de Codelab para trabalhar no seu projeto.
A premissa é a seguinte: O nosso herói chegou ao fim da sua jornada, ao desafio final, e você pode criar um background legal resumindo 
qual foi essa jornada e onde ele chegou. Use sua criatividade! Vale qualquer coisa: Uma guerreira que percorreu um longo caminho para 
enfrentar um bruxo e salvar seu povo, um astronauta que teve que viajar aos confins da galáxia para deter uma anomalia que iria engolir 
seu planeta, ou uma pessoa que está voltando para casa ao fim de um dia cansativo e precisa fazer o jantar.
Dependendo de como foi sua jornada, dos objetivos que foram concluídos no caminho, teremos um resultado final diferente.
Requisitos
Você deve criar um programa que faça 5 perguntas para o usuário, e dependendo das respostas, vai exibir um resultado diferente no final. 
As perguntas devem ser todas de Sim ou Não, e devem ser referentes aos objetivos que ele tiveram que ser cumpridos durante a jornada, 
por exemplo: "Você conseguiu encontrar a Espada Mágica da Chama da Estrela do Inverno?", "Você conseguiu consertar os reatores nucleares 
do motor de dobra?", "Você se lembrou de passar no mercado e comprar óleo?"
No final, o programa deve fazer uma contagem de quantas respostas foram Sim, e exibir o resultado de acordo com esse número:
0 respostas Sim: Você falha miseravelmente.
1 ou 2 respostas Sim: Você falha, mas ainda consegue fugir da situação.
3 respostas Sim: Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.
4 respostas Sim: Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.
5 respostas Sim: Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.
O programa deve contar a história inicial (background), fazer as perguntas, e ao final, exibir o resultado de acordo com as situações acima.
Para hoje
Para hoje você deve:
Construir o rascunho da sua história
Criar as variáveis com o prompt para fazer as perguntas e receber as respostas
Exibir ao final o valor de cada uma das respostas*/


var prompt = require('prompt-sync')();

console.log("Bem-vindo ao final da sua jornada, grande Herói\nSei que não foi fácil passar por tantos obstáculos e experiencias mas, um grande guerreiro como você sabe que é necessário desafios para evoluir e trazer mais beneficios para o mundo!\nVocê, um guerreiro nível 1, apenas com treinamentos da academia, saiu na busca de conseguir sua primeira graduação, de Guerreiro Dan. \nPara tal, escalou montanhas, batalhou dragões, passou por duelos com Magos, entrou em labirintos cheios de Orcs e visitou o calabouço do Rei Maligno Aristides. \nPois bem, agora, responda apenas usando sim ou não para cada evento que se sucedeu em sua caminhada Dan. Tais informações revelarão o seu futuro.");

console.log();
console.log();

var i = 0;
var a = prompt("Seu primeiro passo foi de resistência. Você se deparou com o Pico da Morte, uma montanha antiga e a mais gelada do mundo, que só pessoas extremamente obstinadas,\n que tem um propósito firme de vida, conseguem ultrapassar e continuar em busca de um grande objetivo. Você conseguiu escalar o pico sem necessitar do tapete magico voador?");
if (a.trim().toLowerCase() === "sim"){
    i++;
} 
var a = prompt("O Dragão Julius é um antigo Rei que era muito perverso e ganacioso. Sua ganancia o consumiu a um ponto quem que foi exilado e tranformado por uma irmandade de magos em um dragão.\n Julius não é um dragão fácil de abater, nem que seja por uns instantes para se conseguir a poção regenerativa. Você conseguiu transtorná-lo, nem que seja um pouco?");
if (a.trim().toLowerCase() === "sim"){
    i++;
} 
var a = prompt("Independente do Pico gelado e do Dragão, seu caminho o levou a Torma. Torma um Mago nível 7 extremamente hábil pois mantem sua capacidade cognitiva comendo crânios de guerreiros novos deve ter lhe dado trabalho.\n Porém, eis você aqui! Fale-me você passou por Torma realmente?");
if (a.trim().toLowerCase() === "sim"){
    i++;
} 
var a = prompt("O Labirinto de Syth é uma longa caminhada, com questionamento não de direçoes apenas mas questionamentos de suas decisões em vida. Após tantas reflexões, você conseguiu sair do Syth sem ser resgatados pelos anões do vilarejo vizinho?");
if (a.trim().toLowerCase() === "sim"){
    i++;
} 
var a = prompt("Conhecer Aristidies foi o seu infortúnio final. Ele luta com 4 braços munidos de lâminas extremamentes cortantes. Sei que com ele não foi uma batalha fácil, mas diga-me:\n Naquela sacola ao canto deste cômodo, está a cabeça de Aristides?");
if (a.trim().toLowerCase() === "sim"){
    i++;
} 


if (i > 4){
    console.log("Você triunfou de maneira inquestionável e seus feitos serão lembrados por muitas gerações. Sua graduação será com louvor e a próxima expedição será conduzida por você como líder. Uma festa lhe aguarda nas próximas horas no salão Oval de Eros.");
}else if (i > 3){
    console.log("Quase Perfeito! Se fosse uma prova, seria uma nota 8, não? A Cerimonia de Graduação de Nível será amanha cedo. Não se atrase!")
}else if (i > 2){
    console.log("Gostei dos dois feitos, algo a ser celebrado e não negligenciado. Porém não há conquista de nível com apenas 2. Acho que você pode inicar uma nova jornada com a Caravana Xiori, veremos na sua volta como será o relatório.");
}else if (i > 1){
    console.log("Um sucesso em 5 tentativas. Terá sido azar? Enfim, acredito que mais 2 meses na Academia e uma nova Caminhada Dan será a resposta que procuramos. Tente de novo.");
}else{
    console.log("Desculpe. Infelizmente sua Caminhada Dan provou apenas que você não é apto para esta posição em vida. É recomendado você sentar com os conselheo da Vila e buscar uma nova posição na sociedade.");
}

