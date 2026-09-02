const TOTAL_PAGINAS = 164;

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAplepZYqvND7QCwuxn6HQu1g5PALNbYIY",
  authDomain: "manga-28112026.firebaseapp.com",
  projectId: "manga-28112026",
  storageBucket: "manga-28112026.firebasestorage.app",
  messagingSenderId: "697118394892",
  appId: "1:697118394892:web:7a088539d459827459bc29",
  measurementId: "G-JG0XKD8LVP"
};

// Inicialização do Firebase
if (typeof firebase !== "undefined") {
  firebase.initializeApp(firebaseConfig);
}
const auth = typeof firebase !== "undefined" ? firebase.auth() : null;
const db = typeof firebase !== "undefined" ? firebase.firestore() : null;

// Objeto reservado para transcrever o texto de cada página
const textosPaginas = {
  1: "Página 1:\n• A Ginga Começa\nMuito antes de Kewyn se tornar conhecido como um dos mais habilidosos ninjas do Clã Ginga, ele era apenas uma criança.\nUm garoto curioso, inquieto e que nunca conseguia ficar parado.\nEle vivia na Vila da Ginga, uma pequena vila ninja escondida entre enormes montanhas e uma floresta cheia de rios.\nDiferente das outras vilas, a Vila da Ginga tinha uma tradição que fazia parte da vida de todos os seus habitantes: a capoeira.\nPara os membros do Clã Ginga, capoeira não era apenas uma dança.\nEra uma arte de combate.\nEra uma maneira de se movimentar.\nEra uma forma de pensar.\nDesde pequenos, os membros do clã aprendiam a gingar antes mesmo de aprenderem a controlar completamente o chakra.\nA primeira lição era simples: Não fique parado diante do perigo.",
  2: "Página 2:\n• O pequeno Kewyn\nKewyn tinha oito anos.\nNaquela época, seus dois olhos eram completamente normais, castanhos, e ele ainda não havia despertado o verdadeiro poder de sua linhagem.\nEle treinava todos os dias com outras crianças do clã.\nEnquanto algumas crianças preferiam treinar kunais e shurikens, Kewyn gostava mesmo era de lutar usando as pernas.\n— Você nunca vai aprender a lutar direito desse jeito! — reclamou um garoto depois de cair no chão.\nKewyn abriu um sorriso.\n— Mas eu ganhei.\n— Você trapaceou!\n— Capoeira não é trapaça.\nKewyn entrou novamente na posição de ginga.\nO garoto avançou.\nKewyn desviou para o lado, colocou uma das mãos no chão e passou as pernas por cima do adversário.\nO menino perdeu o equilíbrio e caiu novamente.\nAs outras crianças começaram a rir.",
  3: "Página 3:\n— De novo! — gritou Kewyn.\nFoi naquele momento que um dos professores apareceu.\n— Kewyn.\nO garoto parou.\n— Sim, professor?\n— Você é rápido.\nTem equilíbrio e sabe observar seus adversários.\nKewyn sorriu.\n— Então eu sou bom?\nO professor cruzou os braços.\n— Não.\nO sorriso desapareceu.\n— Ainda não.\nKewyn ficou determinado.\n— Então eu vou ficar bom.\nO professor sorriu discretamente.\n— É isso que eu queria ouvir.",
  4: "Página 4:\n• Adriely\nDo outro lado da vila, uma garota também treinava.\nSeu nome era Adriely.\nEla era diferente de Kewyn.\nEnquanto Kewyn era impulsivo e adorava entrar em uma luta sem pensar duas vezes, Adriely era mais tranquila.\nEla gostava de observar.\nGostava de ajudar os outros.\nE tinha uma ligação incomum com a água.\nQuando tinha apenas oito anos, Adriely já conseguia sentir a presença de pequenas quantidades de água ao seu redor.\nDurante um treinamento, o professor colocou uma pequena tigela de água diante dela.\n— Concentre seu chakra.\nAdriely fechou os olhos.\nRespirou profundamente.",
  5: "Página 5:\nA água começou a tremer.\nUma pequena gota se levantou da tigela.\nAs crianças ficaram impressionadas.\n— Ela conseguiu!\nAdriely abriu os olhos.\nA gota caiu.\nEla sorriu.\n— Eu consigo fazer de novo.\nO professor respondeu:\n— Você vai conseguir muito mais do que isso algum dia.\nNaquele momento, ninguém imaginava que aquela pequena habilidade acabaria se transformando em um dos poderes mais raros da história do Clã Ginga.",
  6: "Página 6:\n• Rodrigo\nRodrigo era o mais estudioso dos quatro.\nEle usava óculos desde criança e passava muito tempo lendo livros sobre chakra, técnicas ninja e história dos clãs.\nMas existia uma coisa que ele adorava tanto quanto estudar: capoeira.\nRodrigo não tinha a força de Kewyn.\nNão tinha a afinidade natural de Adriely com a água.\nMas tinha uma inteligência impressionante.\nEle observava os movimentos dos outros e tentava descobrir seus padrões.\nDurante um treinamento, Kewyn tentou acertá-lo com um chute.\nRodrigo desviou.\nKewyn atacou novamente.\nRodrigo desviou outra vez.\n— Para de fugir! — reclamou Kewyn.",
  7: "Página 7:\nRodrigo ajeitou os óculos.\n— Eu não estou fugindo.\n— Então está fazendo o quê?\n— Estudando você.\nKewyn ficou confuso.\nRodrigo sorriu.\n— Você sempre começa os ataques usando a perna direita.\nKewyn arregalou os olhos.\n— Como você sabe?\n— Porque eu prestei atenção.\nKewyn ficou em silêncio.\nEntão começou a sorrir.\n— Então vamos ver se você consegue prever o próximo.\nOs dois começaram a lutar novamente.",
  8: "Página 8:\n• Nicolas\nNicolas era completamente diferente de Rodrigo.\nEle era energético.\nCompetitivo.\nE odiava perder.\nQuando treinava, sempre tentava fazer mais uma repetição, mais um chute, mais uma corrida.\n— Eu vou ser o ninja mais rápido da vila! — dizia.\nOs professores riam.\n— Você ainda precisa aprender a controlar seu chakra.\n— Eu vou aprender!\nNicolas tinha uma afinidade natural com o Raiton, o elemento raio.\nMas naquela idade ele ainda não conseguia produzir eletricidade de verdade.\nÀs vezes, durante seus treinamentos, pequenas faíscas apareciam em seus dedos.\nQuando isso acontecia, Nicolas ficava animado.\n— Vocês viram?!",
  9: "Página 9:\n— Uma faísca que você não consegue fazer!\n— Consigo sim!\n— Então faz!\nKewyn tentava.\nNada aconteceu.\nNicolas começava a rir.\n— Hahahaha!\nKewyn ficava irritado.\n— Para de rir!\nAdriely e Rodrigo observavam os dois.\nRodrigo ajeitava os óculos.\n— Vocês dois são crianças.\n— E você também! — responderam Kewyn e Nicolas ao mesmo tempo.",
  10: "Página 10:\n• O Dia da Academia\nAlguns anos se passaram.\nOs quatro chegaram à idade de entrar oficialmente na Academia Ninja.\nAquele era o primeiro passo para se tornarem ninjas.\nNa Academia, aprenderiam:\n- Controle de chakra;\n- Técnicas básicas;\n- Arremesso de kunai;\n- Shuriken;\n- Transformação;\n- Clonagem;\n- Combate corpo a corpo;\n- Estratégia;\n- E, principalmente, controle emocional.",
  11: "Página 11:\nMas o Clã Ginga tinha uma matéria especial.\nCombate Ginga.\nEra o treinamento de capoeira usado pelos ninjas do clã.\nO professor entrou na sala.\n— Crianças, hoje vocês começarão o treinamento que decidirá quem está preparado para se tornar um verdadeiro ninja.\nTodos ficaram em silêncio.\nKewyn estava animado.\nNicolas estava sorrindo.\nAdriely estava concentrada.\nRodrigo ajeitou os óculos.\nO professor colocou quatro pequenos objetos sobre a mesa.\n— Cada um de vocês deverá demonstrar controle de chakra.\nKewyn foi o primeiro.\nEle fechou os olhos.\nRespirou.\nTentou concentrar chakra nas mãos.",
  12: "Página 12:\nNada aconteceu.\n— Concentre-se — disse o professor.\nKewyn tentou novamente.\nDessa vez, uma pequena quantidade de chakra apareceu.\nO professor assentiu.\n— Está melhorando.\nDepois foi Adriely.\nEla conseguiu controlar o chakra com facilidade.\nRodrigo também conseguiu.\nNicolas tentou com tanta força que acabou caindo para trás.\nAs crianças começaram a rir.\nNicolas levantou rapidamente.\n— Eu fiz de propósito!\nKewyn começou a rir.\n— Claro que fez.\n— Cala a boca!",
  13: "Página 13:\n• O Exame Final\nDepois de meses de treinamento, os quatro chegaram ao exame final da Academia.\nEles ainda não eram Genin.\nPrecisavam provar que estavam preparados.\nO exame tinha três partes.\nPrimeiro, uma prova escrita.\nRodrigo terminou rapidamente.\nAdriely foi muito bem.\nKewyn ficou olhando para a folha.\n— Professor...\n— O que foi?\n— Posso desenhar?\n— Não.\nNicolas começou a rir.",
  14: "Página 14:\nDepois veio a segunda prova.\nArremesso de kunai.\nNicolas foi excelente.\nRodrigo acertou os alvos com precisão.\nAdriely teve um desempenho equilibrado.\nKewyn não foi o melhor no arremesso, mas conseguiu compensar usando sua movimentação.\nFinalmente veio a terceira prova.\nCombate.",
  15: "Página 15:\nKewyn entrou na arena.\nSeu adversário era maior.\nO garoto avançou.\nKewyn gingou.\nEsquerda.\nDireita.\nEsquerda.\nO adversário tentou agarrá-lo.\nKewyn desviou.\nGirou.\nPassou por baixo do braço do garoto.",
  16: "Página 16:\nE acertou uma rasteira.\nO adversário caiu.\nKewyn ficou parado.\nO professor levantou a mão.\n— Vitória de Kewyn.\nAs crianças comemoraram.\nKewyn sorriu.\nMas o professor não.\nEle estava olhando para os olhos de Kewyn.\nHavia algo diferente naquela linhagem.\nAlgo que ainda estava adormecido.",
  17: "Página 17:\n• O Resultado\nNo final do dia, todos os alunos ficaram reunidos.\nO diretor da Academia apareceu.\n— Vocês aprenderam as primeiras lições de um ninja.\nAlguns passaram.\nOutros precisarão treinar mais.\nKewyn estava nervoso.\nAdriely segurava as mãos.\nRodrigo esperava calmamente.\nNicolas não parava de andar de um lado para o outro.\nEntão os nomes começaram a ser chamados.\n— Adriely: Aprovada.\n— Rodrigo: Aprovado.\n— Nicolas: Aprovado.\nNicolas levantou os braços.\n— EU CONSEGUI!",
  18: "Página 18:\nFinalmente:\n— Kewyn: Aprovado.\nKewyn olhou para o professor e sorriu.\nNaquele dia, os quatro receberam suas primeiras bandanas.\nEles ainda não eram grandes ninjas, nem Chunin ou Jounin.\nMas aquele era o começo da história dos Quatro da Ginga.\nNaquela noite, Kewyn colocou sua bandana sobre a mesa e prometeu:\n— Um dia... eu vou me tornar forte o suficiente para proteger todo mundo.\nO destino já havia começado a se mover.\nFim do Capítulo 1.",
  19: "Página 19:\n• Capítulo 2 — Os Quatro Genin\nO dia finalmente havia chegado.\nKewyn, Adriely, Rodrigo e Nicolas não eram mais estudantes da Academia.\nAgora eram Genin.\nPela primeira vez, eles usavam suas bandanas oficialmente como ninjas da Vila da Ginga.\nKewyn caminhava pelas ruas com um sorriso no rosto.\n— Finalmente! — disse ele.\n— Agora começam as missões de verdade!\nNicolas caminhava ao lado dele.\n— Você acha mesmo que vão deixar a gente enfrentar ninjas perigosos logo de cara?\nKewyn colocou as mãos atrás da cabeça.\n— Claro.\nRodrigo, andando alguns passos atrás, ajeitou os óculos.\n— Estatisticamente, não.\nKewyn olhou para ele.\n— Você sempre estraga a diversão.\nAdriely riu.\n— Pelo menos ele está pensando.\n— Eu também penso! — respondeu Kewyn.\nRodrigo olhou para ele.\n— Quando?\nNicolas começou a rir.\n— Essa foi boa!\nKewyn fez uma cara séria.\n— Vocês estão querendo apanhar hoje?\nAdriely entrou no meio dos três.\n— Chega.\nA gente acabou de virar Genin.\nOs quatro continuaram andando.\nNenhum deles sabia que aquele seria o último dia de suas vidas em que seriam apenas crianças brincando de ser ninjas.",
  20: "Página 20:\n• A Formação da Equipe\nNo mesmo dia, todos os novos Genin foram chamados para a sala principal da Academia.\nO responsável pela formação das equipes entrou.\n— A partir de hoje, vocês trabalharão em grupos de quatro.\nOs alunos ficaram animados.\nKewyn olhou para Nicolas.\n— Tomara que a gente fique junto.\nNicolas respondeu:\n— Se eu ficar com você, vou ter que salvar você toda hora.\n— Você não conseguiria.\n— Quer testar?\nAdriely começou a rir.\nRodrigo apenas observava.\nOs nomes começaram a ser chamados.\nAté que o professor anunciou:\n— Equipe Ginga... Kewyn, Adriely, Rodrigo e Nicolas.\nOs quatro ficaram em silêncio por um segundo.\nEntão Kewyn abriu um sorriso enorme.\n— A GENTE FICOU JUNTO!\nNicolas levantou o braço.\n— Sabia!\nAdriely sorriu.\nRodrigo ajeitou os óculos.\n— Isso pode funcionar.\nNaquele momento, os quatro se tornaram oficialmente uma equipe.\nMas ainda faltava uma pessoa.\nO líder.",
  21: "Página 21:\n• O Mestre\nNo dia seguinte, os quatro estavam sentados na sala esperando seu novo mestre.\nPassaram dez minutos.\nDepois vinte.\nDepois quarenta.\nNicolas estava irritado.\n— Esse cara está atrasado.\nKewyn estava sentado em cima da mesa.\n— Talvez ele tenha medo da gente.\nRodrigo respondeu:\n— Ou talvez esteja testando nossa paciência.\nAdriely olhou para a porta.\n— Acho que ele já está aqui.\nOs três olharam para ela.\n— Como assim?\nAdriely apontou para o teto.\nUma sombra apareceu.\nUm homem estava sentado tranquilamente em cima de uma viga.\n— Finalmente perceberam.\nKewyn levantou rapidamente.\n— Quem é você?!\nO homem pulou no chão.\nEle usava uma roupa tradicional do Clã Ginga, mas com algumas modificações.\nTinha uma faixa escura na cintura e várias marcas de treinamento nos braços.\n— Meu nome é Mestre Jairo.\nKewyn cruzou os braços.\n— Você chegou atrasado.\nJairo sorriu.\n— E você é o garoto que fala demais.\nNicolas começou a rir.\nKewyn olhou para ele.\n— Para de rir.\nJairo colocou as mãos na cintura.\n— Amanhã teremos o primeiro teste.\nRodrigo perguntou:\n— Que teste?\n— Vocês descobrirão.",
  22: "Página 22:\n• O Teste da Ginga\nNa manhã seguinte, os quatro chegaram a uma área aberta da floresta.\nJairo colocou quatro pequenos sinos presos à cintura.\nKewyn olhou para eles.\n— É só pegar os sinos?\n— Exatamente.\nNicolas sorriu.\n— Fácil.\nJairo olhou para os quatro.\n— Existe apenas uma regra.\nEle apontou para os sinos.\n— Vocês têm até o meio-dia.\nKewyn perguntou:\n— E se conseguirmos?\nJairo respondeu:\n— Vocês continuam como uma equipe.\nRodrigo percebeu algo.\n— E se não conseguirmos?\nJairo sorriu.\n— Vocês voltarão para a Academia.\nOs quatro ficaram sérios.\nO teste começou.",
  23: "Página 23:\n• Kewyn e Adriely Atacam\nKewyn foi o primeiro.\nEntrou em posição de ginga.\n— Eu vou pegar esse sino.\nEle avançou.\nJairo desapareceu.\nKewyn arregalou os olhos.\n— O quê?!\nJairo apareceu atrás dele.\n— Lento.\nKewyn se virou, tentou uma rasteira e um chute, mas Jairo desviou.\n— Você tem talento — disse o mestre.\n— Mas está atacando sem pensar.\nKewyn recuou para observar.\nAdriely se aproximou devagar e colocou as mãos na direção de um pequeno riacho.\nA água se levantou e circulou pelo seu corpo enquanto ela gingava.\nEla tentou prender Jairo com uma corrente líquida, mas ele escapou.\n— Você controla bem o elemento.\n— Ainda estou aprendendo.\n— Isso é bom.",
  24: "Página 24:\n• Rodrigo Observa\nEnquanto Kewyn e Adriely atacavam, Rodrigo permanecia escondido.\nNicolas perguntou:\n— Você não vai fazer nada?\n— Estou esperando uma oportunidade.\nRodrigo analisou o terreno: árvores, pedras, sombra, distância e a direção do vento.\nPercebeu que Jairo nunca observava os arredores.\n— Agora.\nRodrigo correu e tentou pegar o sino, mas Jairo segurou seu braço.\n— Você é inteligente, mas ainda é previsível.\nJairo o lançou para longe.\nRodrigo caiu no chão.\n— Isso doeu.",
  25: "Página 25:\n• Nicolas e o Primeiro Raio\nNicolas respirou fundo e começou a gingar.\nSeu chakra começou a circular e pequenas faíscas apareceram em suas mãos.\n— Raiton? — percebeu Jairo.\nNicolas concentrou chakra nas pernas e disparou numa pequena descarga elétrica.\nBUM!\nNicolas reapareceu diante de Jairo, que bloqueou o golpe surpreso.\n— Sua velocidade aumentou.\nNicolas girou no ar com o pé coberto por faíscas:\n— Ginga Relâmpago!\nO chute passou raspando.\nJairo sorriu:\n— Você ainda precisa aprender a controlar essa velocidade.",
  26: "Página 26:\n• O Verdadeiro Objetivo\nOs quatro estavam cansados.\nKewyn percebeu que ninguém conseguiria sozinho.\n— Pessoal! Vamos trabalhar juntos.\nKewyn explicou o plano e os quatro avançaram unidos.\nKewyn atacou pela frente, Nicolas pela lateral e Adriely levantou uma parede de água.\nJairo mudou de direção e caiu na armadilha de Rodrigo.\nAo se virar, Adriely congelou uma pequena parte do chão.\nJairo perdeu o equilíbrio por um instante.\nKewyn entrou em ginga, girou e arrancou um dos sinos.\nCLIN!\nJairo começou a rir:\n— O teste nunca foi sobre pegar os sinos.\n— Era sobre trabalho em equipe — entendeu Rodrigo.",
  27: "Página 27:\n• O Começo da Equipe\nJairo retirou os outros três sinos.\n— Nenhum de vocês teria conseguido sozinho.\nKewyn tem talento, mas precisa pensar antes de atacar.\nAdriely possui um chakra extraordinário, mas precisa descobrir o limite do seu poder.\nRodrigo possui uma mente capaz de enxergar detalhes imperceptíveis.\nE Nicolas possui uma velocidade perigosa, mas se não controlar o Raiton, o próprio corpo será destruído.\nJairo olhou para os quatro:\n— A partir de hoje, vocês são oficialmente uma equipe.\nOs quatro colocaram as mãos juntas:\n— Equipe Ginga!",
  28: "Página 28:\n• A Primeira Missão\nAlguns dias depois, receberam a primeira missão oficial: acompanhar o comerciante Senji até uma vila próxima.\nKewyn ficou decepcionado:\n— Só isso?\nJairo respondeu:\n— Todo ninja começa pelas missões simples.\nNicolas perguntou quando enfrentariam inimigos de verdade.\nJairo sorriu:\n— Quando estiverem preparados.\nOs quatro começaram a caminhar.\nNenhum deles sabia que aquela missão mudaria suas vidas.",
  29: "Página 29:\n• A Sombra na Floresta\nNaquela estrada, alguém já estava observando a equipe.\nUma figura escondida entre as árvores manteve os olhos fixos em Kewyn e seus olhos castanhos.\n— Então... — a figura sorriu.\n— O sangue do Clã Ginga ainda existe.\nE desapareceu na floresta.\nContinua...\nFim do Capítulo 2.",
  30: "Página 30:\n• Capítulo 3 — A Primeira Missão\nA manhã estava começando quando Kewyn, Adriely, Rodrigo e Nicolas deixaram a Vila da Ginga.\nEra a primeira missão oficial da Equipe Ginga.\nKewyn caminhava na frente, com as mãos atrás da cabeça.\n— Eu ainda acho essa missão muito fácil.\nNicolas caminhava ao lado dele.\n— Eu também.\nA gente deveria estar enfrentando alguém.\nRodrigo ajeitou os óculos.\n— Vocês dois precisam entender que uma missão não precisa envolver combate para ser importante.\nKewyn olhou para trás.\n— Você fala igual ao Mestre Jairo.\n— Talvez porque ele esteja certo.\nAdriely riu.\n— Vocês vão discutir durante a viagem inteira?\n— Não — responderam Kewyn e Nicolas ao mesmo tempo.\nRodrigo suspirou.\n— Eu sabia.",
  31: "Página 31:\n• A Missão\nMais atrás, o Mestre Jairo observava os quatro em silêncio.\nEle parecia tranquilo, mas seus olhos estavam atentos a tudo.\nO objetivo era simples: um comerciante chamado Senji precisava levar mercadorias até uma pequena vila do outro lado da floresta.\nNão parecia perigoso.\nNenhum criminoso conhecido estava na região.\nSenji caminhava ao lado de Jairo.\n— Obrigado por aceitarem a missão — disse o comerciante.\nKewyn respondeu:\n— Não precisa agradecer.\nNós somos ninjas!\nNicolas perguntou:\n— Tem certeza de que não existe nada perigoso por aqui?\nSenji pensou por alguns segundos:\n— Há alguns dias, alguns comerciantes disseram ter visto pessoas estranhas na floresta.\nJairo imediatamente ficou sério.",
  32: "Página 32:\n• A Floresta\nDepois de algumas horas de caminhada, a equipe entrou em uma região mais fechada da floresta.\nAs árvores eram enormes e a luz do sol quase não chegava ao chão.\nOs sons dos pássaros desapareceram.\nKewyn parou.\n— Está muito quieto.\nAdriely olhou ao redor.\n— Também percebi.\nRodrigo fechou os olhos por alguns segundos.\n— Não estou ouvindo animais.\nNicolas colocou a mão sobre uma kunai.\n— Então tem alguma coisa errada.\nJairo levantou a mão e todos pararam.\n— Ninguém se separa.\nJairo olhou para as árvores:\n— Estamos sendo observados.",
  33: "Página 33:\n• A Emboscada\nUm som veio das árvores.\nTCHAK!\nUma kunai passou perto do rosto de Kewyn.\n— CUIDADO!\nAdriely puxou Kewyn para o lado e a kunai acertou uma árvore.\nNicolas entrou em posição de combate:\n— Finalmente!\nJairo gritou:\n— Formação!\nOs quatro se posicionaram: Kewyn na frente, Adriely ao lado, Rodrigo atrás e Nicolas na lateral.\nTrês homens surgiram entre as árvores usando roupas escuras.\n— Entreguem as mercadorias.\nKewyn deu um passo à frente:\n— E se a gente não entregar?\n— Então vamos pegar.",
  34: "Página 34:\n• A Primeira Luta de Verdade\nKewyn entrou em ginga.\nO inimigo correu diretamente contra ele.\nKewyn desviou para a esquerda, abaixou o corpo e tentou uma rasteira.\nO inimigo pulou.\nKewyn girou no chão e atacou com um chute.\nTUM!\nO homem bloqueou e Kewyn recuou:\n— Ele é forte.\nNicolas apareceu atrás com pequenas faíscas nos braços:\n— Então deixa comigo!\nCRACK!\nNicolas disparou, mas o inimigo desviou e ele passou direto:\n— Droga!\nRodrigo gritou:\n— Nicolas! Ele está esperando você avançar em linha reta!\nNicolas começou a gingar alternando os lados enquanto as faíscas aumentavam.",
  35: "Página 35:\n• A Água de Adriely\nEnquanto Nicolas enfrentava um dos inimigos, outro tentou atacar Adriely.\nEla recuou e colocou a mão na direção de uma pequena poça de água.\nA água se levantou.\nAdriely movimentou o braço e a água se transformou em uma espécie de chicote.\nSHAA!\nO golpe atingiu o chão diante do inimigo, que recuou.\nAdriely entrou em ginga.\nA água acompanhava cada movimento de seu corpo.\nEla girava, a água girava.\nEla avançava, a água avançava.",
  36: "Página 36:\n• O Despertar do Gelo\nO inimigo tentou agarrar Adriely.\nEla desviou e tocou o chão com a mão.\nA água congelou instantaneamente.\nCRAAACK!\nUma camada de gelo surgiu no chão e o homem perdeu o equilíbrio.\nAdriely ficou surpresa ao olhar para o próprio chakra:\n— Eu... consegui congelar.\nJairo observou de longe com olhos sérios:\n— Então o gelo começou a despertar...",
  37: "Página 37:\n• Rodrigo Percebe\nRodrigo percebeu algo estranho: os três inimigos não estavam tentando vencer, mas sim separar a equipe.\nUm atacava Kewyn, outro ocupava Adriely e o terceiro evitava Nicolas.\n— Eles estão fazendo isso de propósito — analisou Rodrigo.\nEle olhou para o mestre:\n— Mestre Jairo! Eles não querem as mercadorias.\nSe quisessem, já teriam atacado o comerciante.\nEles querem alguma outra coisa.\nUm dos inimigos ouviu e mudou de expressão.\nRodrigo confirmou:\n— Eu estava certo.",
  38: "Página 38:\n• O Alvo\nDe repente, um dos homens desapareceu.\nJairo virou imediatamente:\n— Kewyn!\nO inimigo foi direto na direção de Kewyn e agarrou seu braço.\n— Peguei você!\nKewyn tentou escapar.\nO homem olhou diretamente nos olhos de Kewyn e ficou assustado por um instante:\n— Esses olhos...\n— O quê? — perguntou Kewyn.\nO homem soltou seu braço e recuou assustado:\n— Não pode ser... O herdeiro...",
  39: "Página 39:\n• A Fuga dos Inimigos\nJairo apareceu entre os dois.\nBUM!\nO inimigo foi lançado para longe.\nJairo ficou na frente de Kewyn:\n— Não encoste nele.\nO inimigo se levantou e seu companheiro gritou:\n— Vamos embora!\nOs três começaram a fugir.\nNicolas tentou persegui-los, mas Jairo segurou seu ombro:\n— Não.\nNão sabemos quantos existem.\nRodrigo olhou para a floresta:\n— E eles conseguiram o que queriam... Ver você.",
  40: "Página 40:\n• As Dúvidas de Kewyn\nA missão continuou e os inimigos desapareceram.\nAdriely e Nicolas olhavam para Kewyn.\n— Por que todo mundo está olhando para mim? — perguntou Kewyn.\n— Eles falaram alguma coisa sobre você — disse Adriely.\nKewyn ficou pensativo:\n— Eu não entendi.\nJairo interrompeu:\n— Chega.\nA missão ainda não terminou.\nMas a cabeça de Kewyn continuava cheia de perguntas.\nPor que ficaram assustados com seus olhos?\nE o que significava a palavra 'herdeiro'?",
  41: "Página 41:\n• O Retorno\nAo chegarem à vila, Senji agradeceu à equipe:\n— Vocês salvaram minha mercadoria.\nJairo entregou o relatório da missão.\nO responsável pela vila ficou sério ao ler:\n— Vocês encontraram homens desconhecidos? E eles mencionaram o Clã Ginga?\nJairo respondeu em silêncio:\n— Sim.\n— Então essa missão não foi tão simples quanto parecia.\nKewyn, atrás da porta, ouviu tudo e começou a se preocupar.",
  42: "Página 42:\n• A Noite\nNaquela noite, Kewyn não conseguiu dormir.\nEle caminhou até o campo de treinamento e parou diante de um lago.\nOlhou para o próprio reflexo.\nSeus olhos continuavam normais, castanhos.\nSem Byakugan, sem qualquer poder especial aparente.\nEle tocou o próprio rosto:\n— O que tem de tão especial nos meus olhos?",
  43: "Página 43:\n• O Primeiro Sinal\nDe repente, uma pequena dor surgiu atrás de seu olho esquerdo.\nKewyn fechou os olhos:\n— Ai...\nA dor desapareceu rapidamente.\nEle abriu os olhos e tudo estava normal.\n— Deve ser só cansaço — murmurou.\nEle não sabia, mas seu corpo dava os primeiros sinais.",
  44: "Página 44:\n• O Destino se Move\nNa mesma noite, muito longe dali, a figura que havia observado a equipe estava diante de uma fogueira com um homem mais velho.\n— Você encontrou o garoto?\n— Sim. Ele ainda não despertou.\n— Então temos tempo.\n— Quanto tempo?\nO homem levantou os olhos:\n— Até o primeiro sinal do Byakugan.\nA fogueira estalou: CREC.\nO poder de Kewyn ainda estava adormecido, mas não ficaria assim para sempre.\nContinua...\nFim do Capítulo 3.",
  45: "Página 45:\n• Capítulo 4 — A Primeira Tempestade\nA manhã havia chegado silenciosa à Vila da Ginga.\nDepois da primeira missão como Genin, Kewyn, Adriely, Rodrigo e Nicolas estavam começando a entender o que significava fazer parte de uma verdadeira equipe.\nEles ainda eram jovens.\nAinda cometiam erros.\nAinda discutiam por coisas pequenas.\nMas alguma coisa havia mudado.\nEles já não treinavam apenas como quatro crianças.\nAgora treinavam como ninjas.\nE o Mestre Jairo sabia que estava na hora de testar até onde eles realmente poderiam chegar.",
  46: "Página 46:\n• A Notícia\nKewyn estava no campo de treinamento praticando sua ginga.\n— Mais uma vez! — gritou Nicolas.\nOs dois começaram a lutar.\nNicolas avançava rapidamente, enquanto Kewyn usava a ginga para escapar dos ataques.\n— Você está ficando mais rápido! — disse Kewyn.\nPequenas faíscas apareceram nos pés de Nicolas.\n— Você está usando Raiton de novo? — perguntou Kewyn.\n— Só um pouquinho.\nAfonso, Adriely treinava seu controle de água e Rodrigo lia numa pedra.\nJairo apareceu:\n— Temos uma missão.\nJairo entregou um pergaminho a Rodrigo:\n— Uma pequena vila ao norte perdeu contato com alguns comerciantes.\nPrecisamos descobrir o motivo.",
  47: "Página 47:\n• A Estrada do Norte\nHoras depois, os cinco deixaram a Vila da Ginga.\nA floresta era densa e o caminho ficava cada vez mais estreito.\nKewyn caminhava na frente:\n— Eu não estou sentindo nada.\nRodrigo ajeitou os óculos:\n— Esse é justamente o problema.\nSe alguém estivesse nos observando, você provavelmente não perceberia.\nAdriely olhou para os lados:\n— Então vamos ficar atentos.\nNicolas colocou a mão perto da cintura:\n— Se aparecer alguém, eu resolvo.\nJairo alertou:\n— Um ninja que ataca sem pensar pode colocar toda a equipe em perigo.",
  48: "Página 48:\n• A Vila Abandonada\nDepois de algumas horas, chegaram à vila.\nO lugar estava completamente silencioso, sem pessoas nas ruas.\nJairo fez um sinal:\n— Formação.\nOs quatro se posicionaram: Rodrigo atrás, Adriely à esquerda, Nicolas à direita e Kewyn na frente.\nEles encontraram uma carroça destruída e marcas de luta no chão.\nRodrigo observou as pegadas:\n— Três pessoas.\nUma era mais pesada, outra corria e a terceira não deixou pegadas.\nJairo ficou sério:\n— Todos para trás.\nUma kunai passou voando.\nCLANG!\nJairo desviou a arma:\n— Ataque!",
  49: "Página 49:\n• A Batalha Começa\nKewyn entrou imediatamente em ginga.\nUm dos inimigos avançou com uma espada e Kewyn desviou.\nEle colocou uma mão no chão e girou as pernas numa Rasteira da Ginga.\nO inimigo caiu.\nOutro adversário veio por trás:\n— Kewyn! — avisou Adriely.\nEla levantou as mãos e usou o Jutsu da Ginga: Corrente Circular.\nA água de um riacho próximo subiu, atingiu o inimigo e o empurrou para longe.\n— Valeu! — disse Kewyn.\n— Não se distraia! — respondeu Adriely.",
  50: "Página 50:\n• Rodrigo contra Dois\nRodrigo estava cercado por dois inimigos que avançavam ao mesmo tempo.\nEle recuou, desviou de um soco e abaixou de outro golpe.\nRodrigo começou a gingar.\nOs dois inimigos ficaram confusos:\n— O que ele está fazendo?\n— Observando — respondeu Rodrigo.\nEle percebeu o padrão de ataque dos dois.\nEsperou o momento certo, desviou do primeiro e fez o segundo acertar o próprio companheiro.\nRodrigo ajeitou os óculos:\n— Funcionou.\nExatamente como imaginei.",
  51: "Página 51:\n• Nicolas Libera o Raio\nNicolas enfrentava um inimigo muito mais rápido e ficava irritado por não conseguir acertar.\n— Para de fugir!\nNicolas apertou os punhos e o chakra começou a percorrer seu corpo.\nFaíscas surgiram por toda parte.\nCRACK!\nEle avançou com a Ginga Raiton, usando uma velocidade muito maior.\nNicolas passou pelo inimigo, girou e acertou um chute forte, lançando-o contra uma árvore.\nNicolas ficou parado, respirando pesado:\n— Eu consegui...",
  52: "Página 52:\n• O Controle do Chakra\nJairo gritou de longe:\n— Nicolas! Controle o chakra!\nNicolas olhou para as próprias mãos enquanto as faíscas aumentavam descontroladamente:\n— Eu não consigo parar!\nJairo correu até ele:\n— Respire!\nNicolas fechou os olhos, inspirou e expirou até as faíscas diminuírem.\nJairo colocou a mão em seu ombro:\n— Seu Raiton é poderoso, mas primeiro precisa aprender a não ser destruído pelo próprio poder.",
  53: "Página 53:\n• O Inimigo Escondido\nOs quatro inimigos estavam derrotados, mas Rodrigo apontou para as árvores:\n— Tem alguém observando.\nJairo percebeu no mesmo instante:\n— Todos para trás!\nUma presença surgiu no alto de uma árvore: um homem usando uma máscara escura.\nEle apenas olhou fixamente para os olhos de Kewyn.\nKewyn sentiu um arrepio:\n— Quem é você?\n— Então você é o garoto... O último herdeiro — disse o mascarado.\nJairo ficou sério:\n— Não diga mais nada.",
  54: "Página 54:\n• A Fumaça\nO mascarado olhou para Jairo:\n— Você sabe do que estou falando.\nKewyn ficou confuso:\n— Mestre?\nO homem fez alguns selos com as mãos:\n— Nós vamos nos encontrar novamente.\nUma densa fumaça tomou conta da área.\nQuando a fumaça desapareceu, o mascarado havia sumido sem deixar vestígios.",
  55: "Página 55:\n• O Segredo de Jairo\nKewyn virou-se para Jairo:\n— Mestre, o que ele quis dizer?\n— Nada — respondeu Jairo.\nKewyn franziu a testa:\n— Não foi nada.\nEle falou de mim!\nNicolas perguntou quem era aquele cara.\nJairo olhou para os quatro:\n— Ainda não é hora de vocês saberem, porque vocês ainda são Genin.\nKewyn perguntou quando deixariam de ser.\n— Quando estiverem preparados para descobrir coisas que talvez preferissem nunca saber — respondeu o mestre.",
  56: "Página 56:\n• As Perguntas sem Resposta\nA missão terminou e os comerciantes foram encontrados seguros numa casa subterrânea.\nAo voltarem para a Vila da Ginga, todos comemoraram o sucesso da missão.\nMas para Kewyn tudo era diferente.\nNaquela noite, ele sentou-se sozinho no telhado de sua casa olhando o céu.\nSeus olhos continuavam castanhos e normais, sem sinal de poder.\nEle tocou o rosto:\n— Último herdeiro... As palavras não saíam de sua cabeça.",
  57: "Página 57:\n• As Palavras do Mestre\nJairo sentou ao lado de Kewyn no telhado.\n— Tem alguma coisa errada comigo? — perguntou Kewyn.\n— Não.\n— Então por que aquele homem me chamou de herdeiro?\nJairo respirou fundo:\n— Porque existe uma história sobre sua família que você ainda não conhece.\nJairo se levantou para ir embora.\n— E quando vai chegar a hora de saber?! — perguntou Kewyn.\nSem olhar para trás, Jairo respondeu:\n— Quando seus olhos estiverem prontos para enxergar.",
  58: "Página 58:\n• O Acompanhamento nas Sombras\nLonge da vila, o homem mascarado caminhava por uma floresta escura até encontrar outro homem.\n— Você encontrou o garoto?\n— Sim. O poder ainda está adormecido.\n— Então por que não o matou?\nO mascarado sorriu:\n— Porque eu quero ver até onde ele consegue chegar.\n— E quando ele despertar?\nO mascarado olhou para a lua:\n— Então teremos nosso verdadeiro inimigo.",
  59: "Página 59:\n• O Despertar Futuro\nNa Vila da Ginga, Kewyn finalmente fechou os olhos.\nEle ainda era apenas um Genin de oito anos e não possuía o Byakugan nem conhecia o poder de sua família.\nMas uma história antiga estava voltando.\nDentro de seus olhos castanhos, um poder ancestral esperava pelo momento certo para despertar.\nContinua...\nFim do Capítulo 4 — A Primeira Tempestade.",
  60: "Página 60:\n• Capítulo 5 — O Despertar\nDepois da missão na vila abandonada, os quatro Genin voltaram ao treinamento.\nMas Kewyn não conseguia esquecer as palavras daquele homem.\n'O último herdeiro.'\nE, principalmente, as palavras de Jairo:\n'Quando seus olhos estiverem prontos para enxergar.'\nKewyn queria respostas.\nMas, quanto mais perguntava, mais o mestre evitava o assunto.",
  61: "Página 61:\n• Um Novo Treinamento\nNa manhã seguinte, os quatro chegaram ao campo de treinamento.\nJairo já estava esperando.\n— Hoje será diferente — disse o mestre.\nNicolas sorriu:\n— Vamos aprender uma técnica nova?\n— Não.\nAdriely perguntou:\n— Então o que vamos fazer?\nJairo apontou para uma enorme área de areia:\n— Hoje vocês vão aprender a lutar sem depender de nenhuma técnica especial.\nKewyn ficou confuso:\n— Mas eu uso minha ginga.\n— E continuará usando — respondeu Jairo.\n— Mas quero descobrir quem vocês são quando ficam sem chakra.\nRodrigo ajeitou os óculos:\n— Um teste de resistência.\n— Exatamente.",
  62: "Página 62:\n• Kewyn contra Nicolas\nA primeira luta foi entre Kewyn e Nicolas.\nOs dois ficaram frente a frente e Nicolas sorriu:\n— Dessa vez eu vou ganhar.\nKewyn entrou na ginga:\n— Você fala isso toda vez.\n— Porque um dia vai acontecer.\nJairo levantou a mão:\n— Comecem!\nNicolas avançou e Kewyn desviou.\nUm chute passou pelo seu rosto.\nKewyn girou e tentou uma rasteira, mas Nicolas pulou:\n— Quase!\n— Você está ficando melhor — elogiou Kewyn.\nNicolas avançou novamente enquanto Kewyn recuava.\nOs dois começaram a trocar golpes cada vez mais rápidos.",
  63: "Página 63:\n• A Evolução da Luta\nHavia uma diferença clara: Nicolas estava aprendendo a controlar sua velocidade.\nAntes, ele atacava sem pensar.\nAgora, esperava o momento certo.\nKewyn percebeu:\n— Você mudou.\nNicolas sorriu:\n— Eu treinei.\nNicolas avançou e Kewyn tentou desviar, mas Nicolas mudou a direção no último instante.\nTHUMP!\nO golpe acertou Kewyn no ombro e ele caiu de joelhos.\nNicolas levantou os braços:\n— EU GANHEI!\nKewyn olhou para ele e começou a rir:\n— Tá bom.\nDessa vez você ganhou.\nJairo observava em silêncio a evolução dos dois.",
  64: "Página 64:\n• Adriely e o Rio\nEnquanto os garotos treinavam, Adriely estava perto do rio.\nEla fechou os olhos e respirou profundamente.\nA água começou a se mover: primeiro uma pequena onda, depois outra.\nEla levantou a mão e a água começou a subir num enorme arco líquido acima dela.\nAdriely abriu os olhos:\n— Mais.\nEla aumentou a quantidade de chakra e a água subiu ainda mais.\nEntão... CRAAACK!\nUma parte da água começou a congelar.\nAdriely arregalou os olhos:\n— Gelo?\nEla não tinha tentado fazer aquilo.\nA superfície ficou coberta por uma fina camada congelada e Adriely a tocou:\n— Eu consegui...",
  65: "Página 65:\n• O Chakra de Adriely\nJairo apareceu atrás dela:\n— Não.\nAdriely se virou:\n— Não?\n— Você não conseguiu — apontou Jairo para o rio.\n— Seu chakra fez isso sozinho.\nAdriely ficou surpresa:\n— Então...\n— Existe alguma coisa dentro do seu chakra que você ainda não entende.\nAdriely olhou para as próprias mãos:\n— Eu posso controlar água e gelo?\nJairo respondeu:\n— Talvez.\nAinda é cedo para saber qual é o verdadeiro limite do seu poder.\nAdriely sorriu:\n— Então vou descobrir.",
  66: "Página 66:\n• Rodrigo e o Vento\nRodrigo também começou a treinar sua própria habilidade segurando uma folha entre os dedos.\n— Chakra de vento...\nEle concentrou energia e a folha se moveu.\nTentou mais uma vez.\nFWOOSH!\nUma pequena rajada de vento atravessou o campo.\nRodrigo sorriu:\n— Finalmente.\nJairo observou:\n— Seu controle é preciso.\n— Eu prefiro precisão à força — respondeu Rodrigo.\n— Então transforme essa precisão em uma técnica.\nRodrigo combinou movimentos de ginga com o vento e lançou uma pequena lâmina de ar pela grama:\n— Eu posso usar a ginga para controlar o vento.\nJairo sorriu:\n— Agora você está começando a entender.",
  67: "Página 67:\n• Nicolas Acompanha o Raio\nNicolas estava treinando sozinho com faíscas percorrendo seus braços.\n— Mais rápido...\nAo tentar acelerar... CRACK!\nUma descarga percorreu seu corpo e ele caiu de joelhos:\n— Agh!\nJairo apareceu:\n— Pare.\n— Eu consigo! — insistiu Nicolas com mais eletricidade e dor.\nJairo segurou seu braço:\n— Você está tentando dominar o raio usando força.\nAprenda a acompanhar.\nO raio não precisa obedecer você.\nSeu corpo precisa aprender a se mover junto dele.\nNicolas entendeu e entrou na ginga.\nDessa vez, as faíscas não explodiram, mas acompanharam seus movimentos perfeitamente.",
  68: "Página 68:\n• União da Equipe\nNo final do treinamento, os quatro estavam juntos e Kewyn permanecia quieto.\nAdriely percebeu:\n— O que foi?\n— É sobre aquele homem — disse Rodrigo, ajeitando os óculos.\nKewyn ficou surpreso e contou tudo sobre o homem mascarado e o segredo de Jairo.\nNicolas ficou sério:\n— Você acha que sua família tem alguma coisa especial?\n— Não sei — respondeu Kewyn.\nAdriely colocou a mão em seu ombro:\n— Seja o que for, você não está sozinho.\nRodrigo completou:\n— E quando descobrirmos, descobriremos juntos.\nOs quatro encostaram os punhos:\n— Equipe Ginga!",
  69: "Página 69:\n• O Incidente na Montanha\nNa mesma tarde, receberam uma nova missão: proteger uma caravana em uma região montanhosa.\nA missão parecia simples, mas Jairo parou no caminho:\n— Alguma coisa está errada... Chakra.\nRodrigo percebeu:\n— Tem alguém escondido.\nBOOOOM!\nUma explosão destruiu a estrada e pedras começaram a cair.\n— CORRAM! — gritou Jairo.\nKewyn segurou Adriely, Nicolas correu para o outro lado e Rodrigo tentou proteger os civis.\nUma enorme pedra caiu na direção de uma criança.",
  70: "Página 70:\n• O Perigo de Kewyn\nKewyn viu a pedra e correu sem pensar:\n— SAI DAÍ!\nEle empurrou a criança a tempo.\nCRASH!\nA pedra caiu e Kewyn desapareceu atrás de uma nuvem de poeira.\n— KEWYN! — gritou Adriely.\nNicolas correu até lá chamando por ele.\nUma pedra se moveu e Kewyn apareceu ferido, mas de pé:\n— Estou bem.\nAdriely respirou aliviada.\nMas Jairo observava os olhos de Kewyn com atenção.\nPor apenas um instante, uma pequena veia apareceu perto de um dos olhos de Kewyn.\nJairo arregalou os olhos:\n— Não...",
  71: "Página 71:\n• O Primeiro Sinal\nNaquela noite, Kewyn estava sozinho perto do rio.\nEle lavou o rosto e olhou o reflexo na água.\nSeus olhos continuavam castanhos e normais.\nMas então, por um instante, sua visão mudou.\nKewyn conseguiu enxergar através das árvores e viu o fluxo de chakra de um animal escondido na floresta.\nEle piscou e tudo voltou ao normal.\nKewyn ficou parado:\n— O que foi isso?\nAtrás dele, Jairo observava em silêncio e fechou os olhos:\n— Finalmente começou.",
  72: "Página 72:\n• A Revelação de Jairo\nJairo caminhou até Kewyn:\n— Kewyn... Não conte a ninguém ainda.\nKewyn se virou:\n— O que aconteceu comigo?\nJairo olhou diretamente para seus olhos:\n— Seu Byakugan começou a despertar.\nKewyn ficou completamente imóvel:\n— Meu... o quê?\nJairo respirou fundo:\n— O poder que pertence ao seu sangue.\n— Mas eu não sou do clã que possui esse poder!\n— Você é do Clã Ginga — respondeu Jairo.\n— Então como eu tenho isso?\nJairo ficou em silêncio:\n— Essa é uma história que você ainda precisa descobrir.",
  73: "Página 73:\n• A Lição do Mestre\nKewyn apertou os punhos:\n— Eu quero saber agora!\n— Ainda não — respondeu Jairo calmamente.\n— Por quê?!\n— Porque despertar um poder é fácil.\nDifícil é aprender a viver com ele.\nKewyn ficou em silêncio e olhou novamente para o rio.\nSeu reflexo continuava normal, mas agora ele sabia.\nDentro dele havia algo diferente, antigo e que estava apenas começando a despertar.",
  74: "Página 74:\n• A Sombra Distante\nEm algum lugar distante, o homem mascarado abriu um sorriso:\n— Então finalmente começou.\nNa Vila da Ginga, Kewyn encarava o futuro com novos desafios pela frente.\nEle ainda era apenas um Genin, mas seu destino já havia mudado para sempre.\nContinua...\nFim do Capítulo 5 — O Despertar.",
  75: "Página 75:\n• Capítulo 6 — Os Olhos da Ginga\nNaquela noite, Kewyn não conseguiu dormir.\nAs palavras de Jairo continuavam passando pela sua cabeça: 'Seu Byakugan começou a despertar.'\nByakugan: um poder que ele nunca imaginou possuir.\nKewyn se levantou da cama e foi até o espelho olhar para os próprios olhos castanhos e normais.\n— Então é verdade... Tem alguma coisa dentro de mim.\nKewyn fechou os olhos e tentou sentir o chakra, mas nada aconteceu.\n— Como eu faço isso acontecer?\nEle não sabia, mas decidiu descobrir.",
  76: "Página 76:\n• O Treinamento Secreto\nNa manhã seguinte, Kewyn chegou ao campo de treinamento antes dos outros e encontrou Jairo.\n— Quero aprender a controlar o Byakugan.\n— Você ainda não consegue ativá-lo quando quer — disse Jairo.\n— Então me ensina! Eu preciso aprender.\nJairo colocou uma pedra no chão:\n— Sente-se e feche os olhos.\nAgora, não tente enxergar.\nO Byakugan não é apenas uma forma diferente de ver.\nVocê precisa aprender a perceber o chakra antes de tentar vê-lo.",
  77: "Página 77:\n• Percebendo o Chakra\nKewyn respirou fundo e tentou sentir, mas ficou frustrado após alguns minutos:\n— Eu não estou sentindo nada!\n— Então pare de procurar — orientou Jairo.\n— Você está tentando encontrar o chakra.\nEm vez disso, deixe o chakra encontrar você.\nKewyn fechou os olhos novamente e apenas ficou parado sem forçar.\nEntão... tum.\nEle sentiu um fluxo fraco e distante.\nAo tentar de novo, conseguiu sentir o chakra de Jairo, de um pássaro e de pequenos animais na floresta.",
  78: "Página 78:\n• A Equipe Descobre\nMais tarde, Adriely, Rodrigo e Nicolas chegaram ao campo.\nNicolas percebeu algo diferente e Kewyn olhou para Jairo, que assentiu com a cabeça.\n— Na missão passada... alguma coisa aconteceu comigo — revelou Kewyn.\n— Meu Byakugan despertou.\nNicolas arregalou os olhos:\n— Você tem um Byakugan?!\nRodrigo refletiu:\n— Isso explica aquela alteração nos seus olhos.\nAdriely sorriu:\n— É justamente por isso que vamos aprender juntos.",
  79: "Página 79:\n• União Fortalecida\nNicolas levantou o punho animado:\n— E quando você aprender, quero lutar contra você!\nKewyn riu:\n— Você nunca desiste, né?\nRodrigo completou:\n— Só espero que você não fique convencido.\nKewyn colocou as mãos atrás da cabeça:\n— Eu? Convencido?\nTodos riram.\nJairo observava de longe sabendo que, ao revelar seu segredo, Kewyn não afastou os amigos.\nPelo contrário, a equipe estava ficando ainda mais unida.",
  80: "Página 80:\n• O Primeiro Byakugan Consciente\nJairo decidiu testá-lo:\n— Kewyn, tente ativar o Byakugan.\nKewyn respirou, concentrou o chakra e as veias ao redor dos olhos começaram a aparecer.\nByakugan!\nSeus olhos ficaram completamente claros e o mundo ao seu redor mudou.\nEle conseguia enxergar através das árvores, ver a circulação de chakra de Jairo e os pontos de tenketsu dos companheiros:\n— Eu consigo ver... Tudo!\nConsigo ver o chakra de vocês!",
  81: "Página 81:\n• O Chakra de Adriely\nKewyn olhou para Adriely e percebeu algo impressionante:\n— Adriely... Seu chakra é diferente.\nEle está reagindo à água!\nAo ouvir isso, a água do rio próximo começou a se movimentar sozinha.\nJairo ficou sério:\n— Desligue o Byakugan.\nKewyn tentou, mas começou a sentir dor:\n— Eu não consigo! Está queimando!\nJairo segurou seus ombros:\n— Kewyn, respire! Não lute contra o poder!\nKewyn respirou fundo e o Byakugan se desfez.",
  82: "Página 82:\n• O Custo do Poder\nKewyn caiu de joelhos e Adriely correu para ajudá-lo.\n— Esse é o perigo — alertou Jairo.\n— Quanto mais você enxergar, mais chakra será necessário para manter o Byakugan ativo.\nRodrigo entendeu:\n— Se ele usar por muito tempo, vai esgotar o próprio corpo.\nKewyn ficou sério:\n— Então eu preciso aprender rápido.",
  83: "Página 83:\n• Ginga dos Cem Olhares\nJairo decidiu ensinar a Kewyn uma técnica especial do Clã Ginga: Ginga dos Cem Olhares.\n— O Byakugan permite que você veja os movimentos do adversário antes que eles aconteçam.\nKewyn entrou em ginga movimentando-se em todas as direções.\nJairo atacou, mas Kewyn desviou e girou antes mesmo do golpe chegar.\n— Eu consigo prever! — comemorou Kewyn.\n— Não está prevendo — sorriu Jairo.\n— Está enxergando.",
  84: "Página 84:\n• Uma Nova Missão\nPoucos dias depois, receberam uma missão urgente: investigar um grupo de ninjas visto nas fronteiras da Vila da Ginga.\nAntes de partirem, Jairo alertou que a missão seria mais perigosa que as anteriores.\nRodrigo perguntou se seriam os mesmos homens de antes.\nKewyn apertou sua bandana firme.\nDesde que descobriu o Byakugan, queria respostas e esperava encontrá-las nessa missão.",
  85: "Página 85:\n• A Floresta Escura\nA equipe avançou pela floresta e Kewyn ativou o Byakugan por alguns segundos:\n— Esperem.\nTrês pessoas a duzentos metros de distância.\nJairo ficou surpreso com o alcance da visão dele.\nDe repente, uma voz ecoou entre as árvores:\n— Vocês demoraram.\nO homem mascarado apareceu diante deles.",
  86: "Página 86:\n• O Confronto\nO homem olhou para Kewyn:\n— E seus olhos finalmente começaram a despertar.\nKewyn ativou o Byakugan com as veias saltando no rosto e avançou:\n— Quem é você?!\nO mascarado desapareceu e surgiu atrás dele.\nGraças ao Byakugan, Kewyn enxergou o movimento a tempo, desviou, girou e acertou um chute forte:\nBOOM!\nO homem foi lançado para trás e Kewyn pousou em ginga.",
  87: "Página 87:\n• A Revelação do Sangue\nO homem mascarado se levantou lentamente:\n— O sangue realmente escolheu você.\n— O que isso significa? — exigiu Kewyn.\n— Pergunte ao seu mestre — respondeu o inimigo.\nJairo avançou aumentando seu chakra e o mascarado recuou fazendo um selo:\n— Ainda não.\nUma cortina de fumaça cobriu o local e ele sumiu novamente.",
  88: "Página 88:\n• A Confissão de Jairo\nKewyn desativou os olhos e encarou o mestre:\n— Mestre... Você sabe quem ele é.\nJairo ficou em silêncio por alguns segundos e, dessa vez, confirmou:\n— Sim.\nKewyn sentiu o coração acelerar:\n— Então me conte!\nJairo olhou para os quatro Genin sério:\n— Está na hora de vocês conhecerem uma parte da história do Clã Ginga.",
  89: "Página 89:\n• A Origem do Poder\nOs quatro esperaram em absoluto silêncio.\nJairo respirou fundo:\n— Porque o Byakugan de Kewyn não apareceu por acaso.\nAs respostas sobre o passado da vila e a linhagem de Kewyn estavam prestes a ser reveladas.\nContinua...\nFim do Capítulo 6 — Os Olhos da Ginga.",
  90: "Página 90:\n• Capítulo 7 — O Segredo do Clã Ginga\nA floresta ficou em silêncio.\nO homem mascarado havia desaparecido, mas suas palavras continuavam ecoando na cabeça de Kewyn: 'O sangue realmente escolheu você.'\nKewyn olhou para Jairo:\n— Você disse que ia contar.\nJairo permaneceu em silêncio por alguns segundos enquanto Adriely, Rodrigo e Nicolas também esperavam.\nFinalmente, o mestre respirou fundo:\n— Está na hora de vocês conhecerem a verdadeira história do Clã Ginga.",
  91: "Página 91:\n• A Origem\nJairo sentou-se perto de uma árvore e os quatro Genin se acomodaram diante dele.\n— Há muitas gerações, o Clã Ginga não era conhecido apenas pela capoeira.\nRodrigo perguntou:\n— Então o que mais existia?\n— Uma técnica ocular — respondeu Jairo.\nKewyn ficou imóvel:\n— O Byakugan?\n— Não exatamente.\nO Clã Ginga possui uma linhagem muito antiga que, em determinadas famílias, pode despertar habilidades semelhantes às do Byakugan.",
  92: "Página 92:\n• O Antigo Conflito\nJairo continuou:\n— Muitos anos atrás, uma parte do Clã Ginga tentou transformar essa habilidade em uma arma.\nAqueles ninjas começaram a usar seus olhos para enxergar os pontos de chakra dos adversários e ficaram extremamente poderosos.\n— E o que aconteceu? — perguntou Nicolas.\n— O poder começou a consumir seus próprios corpos.\nSe usado sem controle, pode ser devastador.",
  93: "Página 93:\n• O Sangue Perdido\nJairo olhou diretamente para Kewyn:\n— A linhagem responsável por esse poder quase desapareceu, mas uma pequena parte sobreviveu: a sua família.\nKewyn apertou os punhos:\n— Então meus pais sabiam?\n— Seu pai sabia que um dia seus olhos poderiam despertar — respondeu Jairo.\n— Ele queria que você tivesse uma infância normal.\nKewyn ficou emocionado e perguntou onde seu pai estava.\nJairo respondeu que ele havia desaparecido durante uma missão há muitos anos.",
  94: "Página 94:\n• O Homem Mascarado\nRodrigo perguntou sobre o homem mascarado.\nJairo explicou que ele pertence a um grupo que procura membros dessa antiga linhagem para despertar o poder completamente e usá-lo contra a própria vila.\nKewyn levantou-se determinado:\n— Então eu vou impedir!\n— Você ainda não está preparado — alertou Jairo.\n— Então vou ficar preparado!\nJairo sorriu discretamente.",
  95: "Página 95:\n• O Treinamento Intensivo\nNa manhã seguinte, Jairo mudou completamente o treinamento da equipe.\nNada de missões simples ou brincadeiras.\nAgora eles treinariam como verdadeiros ninjas.\nKewyn começou a praticar o Byakugan, Adriely passou a controlar quantidades maiores de água, Rodrigo desenvolveu suas primeiras técnicas de vento e Nicolas começou a dominar o Raiton.",
  96: "Página 96:\n• A Técnica de Adriely\nAdriely estava diante de um lago e levantou os braços.\nA água subiu formando uma enorme serpente líquida:\n— Estilo Ginga: Serpente das Águas!\nA criatura avançou e derrubou uma árvore com um forte BOOOOM!\nLogo depois, Adriely fechou os olhos e a água ao redor começou a congelar, cobrindo todo o lago com uma camada de gelo.",
  97: "Página 97:\n• O Vento de Rodrigo\nRodrigo treinava com vários alvos entrando em ginga e espalhando seu chakra.\nFWOOSH!\nUma lâmina de vento atravessou três alvos de uma vez.\nNicolas arregalou os olhos impressionado.\nRodrigo ajeitou os óculos:\n— Estou apenas reconhecendo minha evolução.\nJairo sorriu ao ver o avanço de Rodrigo.",
  98: "Página 98:\n• Nicolas e o Raio\nNicolas treinava sua velocidade movendo seu corpo junto ao Raiton sem explosões descontroladas.\nCRACK!\nEle desapareceu de um ponto e reapareceu do outro lado do campo.\n— Você ficou rápido — reconheceu Kewyn.\n— Eu avisei! — sorriu Nicolas.\nEle finalmente começava a dominar seu elemento.",
  99: "Página 99:\n• Visão Distante\nKewyn ativou o Byakugan para localizar dezenas de pequenos alvos espalhados pela floresta.\nAo olhar ao longe, percebeu um ponto de chakra estranho e muito distante.\n— Mestre... Tem alguém aqui — avisou Kewyn apontando para uma figura escondida nas árvores.\nJairo ficou sério e, em seguida, a figura desapareceu.",
  100: "Página 100:\n• A Invasão\nNaquela noite, a Vila da Ginga foi atacada e sinos de alerta começaram a tocar: CLANG! CLANG! CLANG!\nExplosões iluminaram o céu.\nA Equipe Ginga se reuniu rapidamente com o Mestre Jairo:\n— Protejam os moradores!\nNicolas usou a Ginga Raiton, Rodrigo criou barreiras de vento e Adriely levantou uma enorme parede de água para conter o ataque.",
  101: "Página 101:\n• O Alvo do Inimigo\nKewyn ativou o Byakugan e viu o homem mascarado parado diante do antigo templo do Clã Ginga.\nJairo explicou que ele estava procurando o segredo que o pai de Kewyn havia protegido.\nKewyn quis impedir o inimigo imediatamente, mas Jairo o orientou a confiar em seus amigos e lutar ao lado deles.",
  102: "Página 102:\n• União dos Poderes\nKewyn fechou os punhos e sorriu para seus amigos:\n— Então vamos juntos!\nOs quatro ficaram lado a lado.\nKewyn ativou o Byakugan, Adriely levantou a água, Rodrigo concentrou o vento e Nicolas carregou o corpo com eletricidade.\nPela primeira vez, os quatro liberaram seus poderes ao mesmo tempo.",
  103: "Página 103:\n• A Revelação do Rosto\nO homem mascarado olhou para eles e disse:\n— Finalmente.\nLentamente, ele tirou a máscara.\nKewyn arregalou os olhos ao ver o rosto do homem:\n— Você...\nO homem sorriu ironicamente.",
  104: "Página 104:\n• O Desafio Final\n— Vamos descobrir se o herdeiro realmente merece esse poder — declarou o homem.\nA verdadeira batalha pela Vila da Ginga estava prestes a começar.\nContinua...\nFim do Capítulo 7 — O Segredo do Clã Ginga.",
  105: "Página 105:\n• Capítulo 8 — O Herdeiro do Clã Ginga\nA Vila da Ginga estava em caos com explosões iluminando o céu e casas danificadas.\nNinjas corriam pelas ruas tentando proteger os moradores.\nNo centro de tudo, diante do antigo templo do Clã Ginga, estavam os quatro Genin.\nKewyn com o Byakugan despertado, Adriely cercada por água, Rodrigo com o vento girando ao redor do corpo e Nicolas coberto por descargas elétricas.\nÀ frente deles estava o homem que havia acabado de retirar a máscara.",
  106: "Página 106:\n• O Confronto com Raizen\nKewyn olhava para ele com atenção:\n— Quem é você?\n— Meu nome é Raizen — sorriu o homem.\nJairo imediatamente ficou sério ao ouvir o nome.\n— Você conhece ele? — perguntou Rodrigo.\nJairo não respondeu.\nRaizen começou a rir:\n— Faz muitos anos, Jairo. Você não deveria ter voltado nem escondido o garoto.",
  107: "Página 107:\n• O Ataque Inimigo\nRaizen fez um selo e o chão começou a tremer.\nBOOM!\nUma enorme onda de chakra atingiu os quatro e Jairo gritou para tomarem cuidado.\nAdriely levantou uma parede de água, mas o impacto atingiu a barreira empurrando-a para trás:\n— É muito forte!\nNicolas avançou com a Ginga Raiton, mas Raizen desviou facilmente do golpe.",
  108: "Página 108:\n• A Luta da Equipe\nRodrigo entrou em movimento e disparou a Ginga do Vendaval, criando uma lâmina de vento que Raizen bloqueou.\nEm seguida, Kewyn apareceu atrás dele ativando o Byakugan:\n— Agora!\nKewyn atacou em sequência e conseguiu acertar um ponto de tenketsu no braço de Raizen, fazendo o inimigo recuar surpreso.",
  109: "Página 109:\n• A Maré Congelante\nRaizen avançou contra Adriely, mas ela fez o rio próximo subir e congelou a água ao seu redor.\nCRAAACK!\nUma parede de gelo surgiu e, ao ser destruída por Raizen, Adriely apareceu atrás dele:\n— Ginga da Maré Congelante!\nUm chute coberto de água e gelo atingiu Raizen, lançando-o contra a parede enquanto o chão ao redor dela começava a congelar.",
  110: "Página 110:\n• A Fraqueza Revelada\nRodrigo observou o inimigo atentamente e alertou Kewyn sobre o braço esquerdo de Raizen.\nKewyn usou o Byakugan e percebeu que o fluxo de chakra no local estava irregular e concentrado para uma técnica perigosa.\nRaizen percebeu a análise dos Genin e ergueu o braço liberando uma grande explosão de energia:\n— Vocês estão ficando inteligentes, mas não o suficiente!",
  111: "Página 111:\n• Ginga dos Cem Olhares\nUma enorme esfera de chakra surgiu e explodiu pela praça.\nNicolas identificou que Raizen estava atacando do alto.\nKewyn ativou o Byakugan, percebeu a trajetória dos golpes no tempo certo e desviou de todos.\nEle colocou a mão no chão, girou e aplicou a Ginga dos Cem Olhares, acertando vários pontos de chakra e fazendo Raizen perder o equilíbrio.",
  112: "Página 112:\n• O Segundo Despertar\nQuando Kewyn preparava o último golpe, Raizen segurou seu braço.\nDe repente, Kewyn sentiu uma dor enorme e seu Byakugan começou a mudar com veias ainda mais fortes.\nEle passou a enxergar a energia de tudo ao redor e avistou uma marca em formato de símbolo antigo no peito de Raizen.\nJairo tentou mandá-lo desativar os olhos, mas o chakra de Kewyn explodiu em uma onda de energia.",
  113: "Página 113:\n• A Fuga do Inimigo\nKewyn caiu de joelhos com o Byakugan desativado, enquanto Raizen olhava para ele assustado.\n— Eu vi uma marca nele, a mesma do templo — revelou Kewyn a Jairo.\nRaizen recuou até o templo antigo e ativou uma fumaça negra para fugir.\nAntes de desaparecer, alertou: 'Quando você despertar completamente, Kewyn... seu próprio clã terá medo de você.'",
  114: "Página 114:\n• O Fim da Batalha\nA invasão terminou e os inimigos restantes fugiram.\nKewyn sentou-se diante do templo acompanhado de Adriely, Rodrigo e Nicolas.\n— Nós salvamos uns aos outros — disse Kewyn olhando para os amigos.\nJairo se aproximou e Kewyn pediu para entrar no templo, mas o mestre afirmou que ele só estaria pronto quando dominasse o Byakugan sem perder o controle.",
  115: "Página 115:\n• Em Algum Lugar Distante\nEm uma caverna distante, Raizen se encontrou com outro homem e relatou o confronto.\nEle explicou que Kewyn havia despertado muito mais do que esperavam.\nAo olhar para a lua, Raizen afirmou que o garoto não era apenas especial, mas muito mais perigoso do que imaginavam e que esperariam pelo próximo despertar.",
  116: "Página 116:\n• O Sonho com a Porta\nNaquela noite, Kewyn adormeceu profundamente e sonhou que estava diante de uma enorme porta que guardava uma luz branca.\nUma voz misteriosa ecoou chamando seu nome e dizendo que ele ainda não estava pronto.\nKewyn tocou a porta afirmando que descobriria quem era.",
  117: "Página 117:\n• Os Olhos Brancos\nA porta tremeu e uma pequena rachadura se abriu.\nDo outro lado, dois olhos brancos e brilhantes se abriram no escuro.\nKewyn acordou assustado na cama, respirando rapidamente e olhando em direção à janela iluminada pela lua.",
  118: "Página 118:\n• A Busca Pela Verdade\nEle tocou os próprios olhos pensando no que estava acontecendo com seu corpo e seu poder.\nMesmo sem entender todas as respostas, Kewyn sabia que seu verdadeiro despertar havia apenas começado e que precisaria ficar mais forte.",
  119: "Página 119:\n• O Destino do Herdeiro\nNa Vila da Ginga, a reconstrução havia começado, mas novos desafios já se aproximavam no horizonte.\nO herdeiro do Clã Ginga estava pronto para encarar seu destino.\nContinua...\nFim do Capítulo 8 — O Herdeiro do Clã Ginga.",
  120: "Página 120:\n• Capítulo 9 — A Porta dos Ancestrais\nA noite havia passado, mas Kewyn não conseguia esquecer o sonho com aquela porta, a voz e os olhos brancos que diziam: 'Você ainda não está pronto.'\nEle olhou para as próprias mãos na cama e sentiu a presença de novo.\n— O que existe atrás daquela porta?\nEu preciso descobrir.",
  121: "Página 121:\n• O Desafio do Mestre\nNa manhã seguinte, Kewyn chegou cedo ao campo de treinamento e encontrou Jairo.\n— Você teve o sonho novamente? — perguntou o mestre.\nKewyn ficou surpreso e soube que Jairo já conhecia aquela porta.\n— Então me conta!\n— Algumas verdades precisam ser descobertas, não contadas — respondeu Jairo.\n— Então me treine — exigiu Kewyn.",
  122: "Página 122:\n• O Treinamento Dividido\nJairo reuniu os quatro Genin para um novo treino dividido em quatro áreas e uma quinta parte fundamental: o trabalho em equipe.\nKewyn focaria na percepção do Byakugan, Adriely no controle de água e gelo, Rodrigo na estratégia com vento e Nicolas na velocidade com Raiton.",
  123: "Página 123:\n• Treino às Cegas\nJairo colocou uma venda nos olhos de Kewyn para que ele dependesse do chakra e não apenas da visão.\nNo início, Kewyn quase foi atingido por pedras lançadas por Jairo.\nApós se acalmar, Kewyn girou, sentiu o chakra e pegou a pedra no ar.\nJairo ensinou que ele devia aprender a lutar bem com ou sem o Byakugan.",
  124: "Página 124:\n• A Arte do Gelo de Adriely\nAdriely treinou no lago fazendo uma enorme onda subir e congelar no ar.\nCRACK!\nEm seguida, construiu uma ponte de gelo e a transformou em dezenas de pequenas lanças congeladas.\nRodrigo e Nicolas ficaram impressionados com a evolução e a periculosidade da técnica.",
  125: "Página 125:\n• A Precisão do Vento\nRodrigo treinou gingando e canalizando seu chakra de vento para criar a Ginga do Vendaval.\nEle fez a corrente de ar mudar de direção no ar e acertar múltiplos alvos em sequência.\nBOOM! BOOM! BOOM!\nEle reforçou que a precisão técnica sempre superava a força bruta.",
  126: "Página 126:\n• O Controle de Nicolas\nNicolas subiu a montanha para acertar múltiplos alvos com Raiton em menos de dez segundos.\nAo tentar acelerar sem controle, acabou tropeçando e caindo no chão.\nKewyn, Adriely e Rodrigo riram da situação enquanto Nicolas prometia demonstrar sua verdadeira velocidade na próxima vez.",
  127: "Página 127:\n• A Nova Missão\nSemanas depois, um mensageiro entregou um pergaminho a Jairo.\nO mestre leu o conteúdo e informou a equipe que iriam investigar o antigo templo do Clã Ginga, pois marcas estranhas de chakra haviam sido detectadas no local.",
  128: "Página 128:\n• Diante do Templo Antigo\nA equipe chegou ao templo ao anoitecer.\nKewyn ativou o Byakugan e encontrou um fluxo de chakra escondido atrás de uma parede congelada.\nAdriely tocou a superfície e confirmou que o gelo não havia sido criado por ela, indicando que alguém esteve ali antes.",
  129: "Página 129:\n• A Inscrição Sagrada\nRodrigo limpou a poeira de uma pedra e leu: 'Somente aquele que enxerga além da própria visão poderá abrir o caminho.'\nKewyn colocou a mão na parede e ativou o Byakugan.\nA pedra tremeu, uma fenda surgiu e uma escadaria abriu-se em direção ao subterrâneo.",
  130: "Página 130:\n• O Salão Subterrâneo\nAo descerem a escadaria, a equipe encontrou uma enorme sala com a estátua de um antigo guerreiro em posição de capoeira e de olhos completamente brancos.\nKewyn reconheceu a figura de seus sonhos.\nNo peito da estátua, havia o mesmo símbolo presente no corpo de Raizen.",
  131: "Página 131:\n• A Armadilha de Raizen\nCLANG!\nA porta de entrada se fechou bruscamente deixando todos presos.\nUma voz ecoou pelo salão e Raizen surgiu de trás da estátua acompanhado por três ninjas misteriosos.\n— Bem-vindos ao lugar onde a história do Clã Ginga começou — declarou Raizen.",
  132: "Página 132:\n• O Teste dos Ancestrais\nKewyn entrou em posição de luta exigindo respostas.\nRaizen afirmou que desejava testar se a nova geração era digna do nome da Equipe Ginga.\nEle fez um selo selando o salão e ordenou que seus subordinados atacassem.",
  133: "Página 133:\n• A Equipe em Posição\nOs três ninjas inimigos avançaram com velocidade.\nAdriely preparou a água, Rodrigo concentrou o vento, Nicolas ativou o Raiton e Kewyn ativou o Byakugan.\nOs quatro Genin formaram uma linha de defesa pronta para o combate.",
  134: "Página 134:\n• O Início da Batalha Subterrânea\nCom seus poderes sincronizados e sob o olhar atento de Jairo e Raizen, a Equipe Ginga iniciou o confronto no coração do antigo templo.\nContinua...\nFim do Capítulo 9 — A Porta dos Ancestrais.",
  135: "Página 135:\n• Capítulo 10 — A Batalha no Templo\nOs três ninjas avançaram ao mesmo tempo.\nKewyn ativou o Byakugan com as veias surgindo no rosto para analisar o chakra dos inimigos.\nRodrigo identificou o mais rápido, Adriely notou o usuário de fogo e Nicolas decidiu enfrentar o velocista enquanto Jairo lembrava a equipe de aplicar tudo o que haviam aprendido.",
  136: "Página 136:\n• Nicolas contra o Relâmpago Negro\nNicolas ativou o Raiton e colidiu de frente contra o ninja mais rápido.\nApós trocarem golpes velozes, o inimigo cobriu seu corpo com uma perigosa eletricidade negra.\nNicolas fechou os olhos, sentiu a aproximação, desviou no último instante e acertou a Ginga Raiton, lançando o adversário contra uma coluna.",
  137: "Página 137:\n• Adriely contra o Fogo\nO segundo inimigo lançou uma enorme bola de fogo e Adriely respondeu erguendo uma barreira de água.\nO vapor cobriu o salão e Adriely foi empurrada.\nSeguindo a orientação de Kewyn para usar o ambiente, ela fez as poças de água flutuarem, envolveu os membros do inimigo e congelou a água, finalizando com a Ginga do Gelo.",
  138: "Página 138:\n• Rodrigo contra a Estratégia\nRodrigo enfrentou o terceiro ninja que observava a distância sem atacar.\nPercebendo que o inimigo tentava empurrá-lo para uma armadilha com kunais, Rodrigo usou a Ginga do Vendaval para redirecionar as lâminas contra o próprio atirador, demonstrando superioridade tática.",
  139: "Página 139:\n• Conexão Revelada\nKewyn usou o Byakugan e percebeu que os fluxos de chakra dos três inimigos estavam conectados entre si.\nRodrigo compreendeu que as energias deles agiam em conjunto e Kewyn questionou Raizen sobre o fenômeno, recebendo como resposta que o próprio templo era a causa daquela reação.",
  140: "Página 140:\n• O Verdadeiro Teste\nAs paredes tremeram e uma grande quantidade de chakra começou a emanar da estátua central.\nUsando a visão do Byakugan, Kewyn enxergou um núcleo de chakra idêntico ao seu.\nJairo revelou que a estátua guardava a energia acumulada dos antigos membros do Clã Ginga para escolher o próximo guardião.",
  141: "Página 141:\n• O Escolhido\nA estátua brilhou e ergueu Kewyn do chão com uma luz branca, isolando-o atrás de uma barreira mágica.\nA voz misteriosa ordenou que ele abrisse os olhos e o Byakugan de Kewyn despertou com ainda mais força, permitindo-lhe enxergar visões do passado.",
  142: "Página 142:\n• A Visão do Passado\nNa visão, Kewyn assistiu a antigos guerreiros do Clã Ginga praticando capoeira e lutando para defender a vila.\nEm seguida, ele avistou um jovem ninja conversando diante daquela mesma estátua e reconheceu imediatamente o próprio pai antes que a visão se dissipasse.",
  143: "Página 143:\n• A Busca Pela Verdade\nKewyn caiu no chão sendo amparado por Adriely e revelou ter visto seu pai.\nJairo confirmou que o pai de Kewyn realmente esteve ali no passado.\nKewyn exigiu respostas sobre os segredos escondidos e Raizen afirmou que a verdade mudaria tudo o que ele acreditava.",
  144: "Página 144:\n• A Fuga de Raizen\nRaizen fez um selo abrindo uma passagem secreta e se preparou para recuar junto com seus três subordinados.\nNicolas tentou avançar para impedi-los, mas Raizen afirmou que ainda não era o momento para o combate definitivo e desapareceu na escuridão.",
  145: "Página 145:\n• O Silêncio no Templo\nCom a partida de Raizen e a dissipação das sombras, a calma voltou ao salão subterrâneo do templo.\nKewyn permaneceu pensativo diante da estátua enquanto Adriely, Rodrigo e Nicolas se aproximavam para prestar apoio ao amigo.",
  146: "Página 146:\n• A Promessa da Equipe\nKewyn olhou para os companheiros e prometeu descobrir toda a verdade sobre seu pai, a linhagem do Clã Ginga e a origem de seus olhos.\nAdriely, Rodrigo e Nicolas confirmaram que estariam ao lado dele em cada etapa da jornada.",
  147: "Página 147:\n• União Fortalecida\nOs quatro Genin uniram os punhos no centro do salão renovando o compromisso da Equipe Ginga.\nJairo observou em silêncio, ciente de que o vínculo entre os quatro jovens havia atingido um novo patamar de confiança.",
  148: "Página 148:\n• Novos Horizontes\nMesmo com tantas perguntas sem respostas, Kewyn sentiu-se fortalecido pela presença de seus amigos e determinado a encarar os desafios que viriam a seguir.",
  149: "Página 149:\n• O Caminho do Guardião\nDiante da estátua dos ancestrais, Kewyn assumiu seu compromisso como futuro guardião.\nSua jornada de descobertas e batalhas estava apenas começando.\nContinua...\nFim do Capítulo 10 — A Batalha no Templo.",
  150: "Página 150:\n• Capítulo 11 — O Caminho do Guardião\nO templo estava silencioso após a batalha, mas Kewyn continuava diante da antiga estátua pensando na visão de seu pai no mesmo local.\nUma dúvida não saía de sua cabeça: por que seu pai havia estado ali no passado?\nA Equipe Ginga iniciou o retorno para a vila ao amanhecer.",
  151: "Página 151:\n• O Retorno à Vila\nA equipe caminhava em silêncio e Nicolas tentou puxar assunto sobre tudo o que havia acontecido.\nAdriely pediu paciência para dar tempo a Kewyn, que permanecia calado.\nNos portões da vila, ninjas locais os receberam e Jairo informou que haviam encontrado informações cruciais sobre o Clã Ginga.",
  152: "Página 152:\n• A Convocação dos Líderes\nÀ tarde, Jairo participou de uma reunião com os líderes da vila enquanto os Genin aguardavam do lado de fora.\nKewyn pensava no sonho, na estátua e na voz que ouvira.\nQuando a porta se abriu, Jairo chamou Kewyn para entrar e ouvir a verdade.",
  153: "Página 153:\n• A História de Kaio\nNo centro da sala, o líder da vila colocou um pergaminho sobre a mesa e revelou que o pai de Kewyn se chamava Kaio.\nEle fora um dos ninjas mais habilidosos do Clã Ginga e também portava o Byakugan.\nKewyn descobriu que seu pai investigava o desaparecimento de documentos sobre o Guardião.",
  154: "Página 154:\n• O Núcleo da Ginga\nO líder explicou que o Guardião era um título passado por gerações com a missão de proteger o Núcleo da Ginga, uma antiga fonte de chakra.\nAdriely, Rodrigo e Nicolas entraram na sala a tempo de ouvir que a estátua do templo estava diretamente conectada a esse poder ancestral.",
  155: "Página 155:\n• O Desaparecimento de Kaio\nJairo explicou que Kaio descobriu a existência de um grupo que pretendia roubar o Núcleo da Ginga.\nDurante uma missão para invadir o esconderijo inimigo, Kaio desapareceu.\nComo o corpo nunca foi encontrado, a possibilidade de ele estar vivo foi confirmada a Kewyn.",
  156: "Página 156:\n• A Nova Missão\nO líder da vila atribuiu à Equipe Ginga a missão especial de investigar o paradeiro de Kaio e descobrir os planos de Raizen.\nKewyn aceitou imediatamente e seus companheiros confirmaram o apoio, prontos para enfrentarem os perigos que viriam.",
  157: "Página 157:\n• Treinamento de Kewyn\nDurante a semana de preparação, Kewyn treinou para manter o Byakugan ativo por mais tempo.\nEle começou a fundir a percepção do Byakugan com o gingado e a fluidez da capoeira, criando um estilo de luta imprevisível.",
  158: "Página 158:\n• Evolução de Adriely\nAdriely aprimorou o controle elementar alternando rapidamente o estado da água entre líquido e sólido.\nEla praticou a criação e o congelamento de esferas aquáticas, focada em dominar a técnica sob qualquer condição ambiental.",
  159: "Página 159:\n• Redemoinho de Rodrigo\nRodrigo desenvolveu a técnica Ginga: Redemoinho Cortante, utilizando o movimento do corpo para projetar correntes de vento em múltiplas direções.\nJairo elogiou a precisão da nova habilidade.",
  160: "Página 160:\n• Velocidade de Nicolas\nNicolas treinou com o Raiton até conseguir cobrir o corpo de eletricidade e se mover em altíssima velocidade.\nEle realizou deslocamentos rápidos e conseguiu parar com estabilidade sem perder o equilíbrio.",
  161: "Página 161:\n• Partida para o Norte\nProntos para a jornada, os quatro Genin se reuniram com o Mestre Jairo nos portões da vila.\nEles definiram o trajeto em direção às regiões montanhosas do norte, onde ficava uma antiga base do Clã Ginga que poderia conter pistas sobre Kaio.",
  162: "Página 162:\n• O Início da Jornada\nKewyn olhou para a Vila da Ginga uma última vez antes de seguir pela estrada ao lado de Adriely, Rodrigo e Nicolas, consciente da responsabilidade que carregava.",
  163: "Página 163:\n• A Sombra nas Montanhas\nNo alto de um pico distante, Raizen e uma figura misteriosa observavam a partida do grupo.\nRaizen decidiu não interceptá-los, preferindo que a Equipe Ginga avançasse até a base antiga.",
  164: "Página 164:\n• A Armadilha do Destino\nRaizen afirmou que na antiga base do norte, Kewyn finalmente descobriria a verdade oculta sobre sua linhagem, sem garantias de que conseguiria retornar.\nContinua...\nFim do Capítulo 11 — O Caminho do Guardião."

};

let usuarioAtual = null;
let modoVisitante = false;
let indiceAtual = 0;

// Referências de Elementos HTML
const pageNumElement = document.getElementById("page-num");
const totalPagesElement = document.getElementById("total-pages");
const pageTextElement = document.getElementById("page-text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const swipeArea = document.getElementById("swipe-area");

const welcomeModal = document.getElementById("welcome-modal");
const continueModal = document.getElementById("continue-modal");
const googleLoginBtn = document.getElementById("save-user-btn");
const guestBtn = document.getElementById("guest-btn");

const continueSection = document.getElementById("continue-reading-section");
const startFromBeginningBtn = document.getElementById("start-from-beginning-btn");
const backToHomeBtn = document.getElementById("back-to-home-btn");

// CONTROLAR SPLASH SCREEN (TELA DE ABERTURA)
window.addEventListener('DOMContentLoaded', () => {
  const splash = document.getElementById('splash-screen');
  setTimeout(() => {
    if (splash) {
      splash.classList.add('hidden');
    }
  }, 2000);
});

if (totalPagesElement) {
  totalPagesElement.textContent = TOTAL_PAGINAS;
}

function obterOuCriarIdDispositivo() {
  let deviceId = localStorage.getItem("leitor_device_id");
  if (!deviceId) {
    deviceId = "guest_" + Math.random().toString(36).substring(2, 15);
    localStorage.setItem("leitor_device_id", deviceId);
  }
  return deviceId;
}

// ATUALIZAR INTERFACE DA TELA DE SELEÇÃO
function atualizarInterfaceSelecao(paginaSalva) {
  const continueBtn = document.getElementById("continue-btn");
  const cap1Status = document.getElementById("progress-status");

  if (paginaSalva > 1) {
    if (continueSection) continueSection.classList.remove("hidden");
    if (cap1Status) cap1Status.textContent = `Parou na Página ${paginaSalva}`;
    if (continueBtn) {
      continueBtn.onclick = () => abrirLeitor(paginaSalva - 1);
    }
  } else {
    if (continueSection) continueSection.classList.add("hidden");
  }
}

// BOTAO COMEÇAR DO INÍCIO
if (startFromBeginningBtn) {
  startFromBeginningBtn.onclick = () => abrirLeitor(0);
}

// BOTAO VOLTAR PARA A SELEÇÃO
if (backToHomeBtn) {
  backToHomeBtn.onclick = () => {
    if (continueModal) continueModal.classList.remove("hidden");
  };
}

// LOGIN GOOGLE
if (googleLoginBtn && typeof auth !== "undefined") {
  googleLoginBtn.onclick = async function (e) {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      if (error.code !== "auth/popup-closed-by-user") {
        console.error("Erro no login Google:", error);
        alert("Erro ao conectar com o Google. Tente novamente.");
      }
    }
  };
}

// ENTRAR COMO VISITANTE
if (guestBtn) {
  guestBtn.onclick = function (e) {
    e.preventDefault();
    modoVisitante = true;
    if (welcomeModal) welcomeModal.classList.add("hidden");

    const deviceId = obterOuCriarIdDispositivo();
    const paginaSalvaLocal = parseInt(localStorage.getItem(`pagina_${deviceId}`)) || 1;

    atualizarInterfaceSelecao(paginaSalvaLocal);

    if (continueModal) continueModal.classList.remove("hidden");
  };
}

// MONITOR DO FIREBASE AUTH
if (typeof auth !== "undefined") {
  auth.onAuthStateChanged(async (user) => {
    if (user) {
      usuarioAtual = user;
      modoVisitante = false;

      if (welcomeModal) welcomeModal.classList.add("hidden");

      let paginaSalva = 1;

      if (typeof db !== "undefined") {
        try {
          const userRef = db.collection("leitores").doc(user.uid);
          const userDoc = await userRef.get();

          if (userDoc.exists) {
            paginaSalva = userDoc.data().paginaAtual || 1;
          } else {
            await userRef.set({
              nome: user.displayName || "Leitor",
              email: user.email || "",
              paginaAtual: 1
            });
          }
        } catch (err) {
          console.error("Erro ao acessar Firestore:", err);
        }
      }

      atualizarInterfaceSelecao(paginaSalva);

      if (continueModal) continueModal.classList.remove("hidden");

    } else if (!modoVisitante) {
      if (welcomeModal) welcomeModal.classList.remove("hidden");
      if (continueModal) continueModal.classList.add("hidden");
    }
  });
}

// ABRIR O LEITOR
function abrirLeitor(indicePagina) {
  indiceAtual = indicePagina;
  if (continueModal) continueModal.classList.add("hidden");
  atualizarPagina();
}

// SALVAR PROGRESSO
function salvarProgressoAutomatico(numeroPagina) {
  if (usuarioAtual && !modoVisitante && typeof db !== "undefined") {
    db.collection("leitores").doc(usuarioAtual.uid).set({
      paginaAtual: numeroPagina
    }, { merge: true }).catch(err => console.error("Erro ao salvar progresso:", err));
  } else {
    const deviceId = obterOuCriarIdDispositivo();
    localStorage.setItem(`pagina_${deviceId}`, numeroPagina);
  }
}

// ATUALIZAR INTERFACE
function atualizarPagina() {
  const numeroPaginaAtual = indiceAtual + 1;

  if (pageNumElement) pageNumElement.textContent = numeroPaginaAtual;

  if (pageTextElement) {
    pageTextElement.innerText = (typeof textosPaginas !== "undefined" && textosPaginas[numeroPaginaAtual]) 
      ? textosPaginas[numeroPaginaAtual] 
      : "Sem texto para esta página.";
  }

  // Atualiza botões
  if (nextBtn) nextBtn.disabled = indiceAtual === 0;
  if (prevBtn) prevBtn.disabled = indiceAtual === TOTAL_PAGINAS - 1;

  salvarProgressoAutomatico(numeroPaginaAtual);
}

// BOTÕES DE NAVEGAÇÃO
if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    if (indiceAtual < TOTAL_PAGINAS - 1) {
      indiceAtual++;
      atualizarPagina();
    }
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    if (indiceAtual > 0) {
      indiceAtual--;
      atualizarPagina();
    }
  });
}

// TECLADO
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && nextBtn) nextBtn.click();
  if (e.key === "ArrowRight" && prevBtn) prevBtn.click();
});

// GESTOS DE SWIPE (TOUCH)
let touchStartX = 0;
let touchEndX = 0;

if (swipeArea) {
  swipeArea.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  swipeArea.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 40 && prevBtn) prevBtn.click();
    if (touchEndX - touchStartX > 40 && nextBtn) nextBtn.click();
  }, false);
}

// ALTERNAR ENTRE MODO CLARO E MODO ESCURO
const themeToggleBtn = document.getElementById('theme-toggle-btn');

if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
      themeToggleBtn.textContent = '🌙 Modo Escuro';
    } else {
      themeToggleBtn.textContent = '☀️ Modo Claro';
    }
  });
}