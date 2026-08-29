const TOTAL_PAGINAS = 16;

// Configuração do Firebase com a API Key corrigida
const firebaseConfig = {
  apiKey: "AIzaSyAplepZYqvND7QCwuxn6HQu1g5PALNbYIY",
  authDomain: "manga-29112026.firebaseapp.com",
  projectId: "manga-29112026",
  storageBucket: "manga-29112026.firebasestorage.app",
  messagingSenderId: "697118394892",
  appId: "1:697118394892:web:7a088539d459827459bc29",
  measurementId: "G-JG0XKD8LVP"
};

// Inicialização do Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const textosPaginas = {
  1: "Página 1:\n• A Ginga Começa\nMuito antes de Kewyn se tornar conhecido como um dos mais habilidosos ninjas do Clã Ginga, ele era apenas uma criança.\nUm garoto curioso, inquieto e que nunca conseguia ficar parado.\nEle vivia na Vila da Ginga, uma pequena vila ninja escondida entre enormes montanhas e uma floresta cheia de rios.\nDiferente das outras vilas, a Vila da Ginga tinha uma tradição que fazia parte da vida de todos os seus habitantes: a capoeira.\nPara os membros do Clã Ginga, capoeira não era apenas uma dança.\nEra uma arte de combate.\nEra uma maneira de se movimentar.\nEra uma forma de pensar.\nDesde pequenos, os membros do clã aprendiam a gingar antes mesmo de aprenderem a controlar completamente o chakra.\nA primeira lição era simples: Não fique parado diante do perigo.",
  2: "Página 2:\n• O pequeno Kewyn\nKewyn tinha oito anos.\nNaquela época, seus dois olhos eram completamente normais, castanhos, e ele ainda não havia despertado o verdadeiro poder de sua linhagem.\nEle treinava todos os dias com outras crianças do clã.\nEnquanto algumas crianças preferiam treinar kunais e shurikens, Kewyn gostava mesmo era de lutar usando as pernas.\n— Você nunca vai aprender a lutar direito desse jeito! — reclamou um garoto depois de cair no chão.\nKewyn abriu um sorriso.\n— Mas eu ganhei.\n— Você trapaceou!\n— Capoeira não é trapaça.\nKewyn entrou novamente na posição de ginga.\nO garoto avançou.\nKewyn desviou para o lado, colocou uma das mãos no chão e passou as pernas por cima do adversário.\nO menino perdeu o equilíbrio e caiu novamente.\nAs outras crianças começaram a rir.",
  3: "Página 3:\n— De novo! — gritou Kewyn.\nFoi naquele momento que um dos professores apareceu.\n— Kewyn.\nO garoto parou.\n— Sim, professor?\n— Você é rápido.\nTem equilíbrio e sabe observar seus adversários.\nKewyn sorriu.\n— Então eu sou bom?\nO professor cruzou os braços.\n— Não.\nO sorriso desapareceu.\n— Ainda não.\nKewyn ficou determinado.\n— Então eu vou ficar bom.\nO professor sorriu discretamente.\n— É isso que eu queria ouvir.",
  4: "Página 4:\n• Adriely\nDo outro lado da vila, uma garota também treinava.\nSeu nome era Adriely.\nEla era diferente de Kewyn.\nEnquanto Kewyn era impulsivo e adorava entrar em uma luta sem pensar duas vezes, Adriely era mais tranquila.\nEla gostava de observar.\nGostava de ajudar os outros.\nE tinha uma ligação incomum com a água.\nQuando tinha apenas oito anos, Adriely já conseguia sentir a presença de pequenas quantidades de água ao seu redor.\nDurante um treinamento, o professor colocou uma pequena tigela de água diante dela.\n— Concentre seu chakra.\nAdriely fechou os olhos.\nRespirou profundamente.",
  5: "Página 5:\nA água começou a tremer.\nUma pequena gota se levantou da tigela.\nAs crianças ficaram impressionadas.\n— Ela conseguiu!\nAdriely abriu os olhos.\nA gota caiu.\nEla sorriu.\n— Eu consigo fazer de novo.\nO professor respondeu:\n— Você vai conseguir muito mais do que isso algum dia.\nNaquele momento, ninguém imaginava que aquela pequena habilidade acabaria se transformando em um dos poderes mais raros da história do Clã Ginga.",
  6: "Página 6:\n• Rodrigo\nRodrigo era o mais estudioso dos quatro.\nEle usava óculos desde criança e passava muito tempo lendo livros sobre chakra, técnicas ninja e história dos clãs.\nMas existia uma coisa que ele adorava tanto quanto estudar: capoeira.\nRodrigo não tinha a força de Kewyn.\nNão tinha a afinidade natural de Adriely com a água.\nMas tinha uma inteligência impressionante.\nEle observava os movimentos dos outros e tentava descobrir seus padrões.\nDurante um treinamento, Kewyn tentou acertá-lo com um chute.\nRodrigo desviou.\nKewyn atacou novamente.\nRodrigo desviou outra vez.\n— Para de fugir! — reclamou Kewyn.",
  7: "Página 7:\nRodrigo ajeitou os óculos.\n— Eu não estou fugindo.\n— Então está fazendo o quê?\n— Estudando você.\nKewyn ficou confuso.\nRodrigo sorriu.\n— Você sempre começa os ataques usando a perna direita.\nKewyn arregalou os olhos.\n— Como você sabe?\n— Porque eu prestei atenção.\nKewyn ficou em silêncio.\nEntão começou a sorrir.\n— Então vamos ver se você consegue prever o próximo.\nOs dois começaram a lutar novamente.",
  8: "Página 8:\n• Nicolas\nNicolas era completamente diferente de Rodrigo.\nEle era energético.\nCompetitivo.\nE odiava perder.\nQuando treinava, sempre tentava fazer mais uma repetição, mais um chute, mais uma corrida.\n— Eu vou ser o ninja mais rápido da vila! — dizia.\nOs professores riam.\n— Você ainda precisa aprender a controlar seu chakra.\n— Eu vou aprender!\nNicolas tinha uma afinidade natural com o Raiton, o elemento raio.\nMas naquela idade ele ainda não conseguia produzir eletricidade de verdade.\nÀs vezes, durante seus treinamentos, pequenas faíscas apareciam em seus dedos.\nQuando isso acontecia, Nicolas ficava animado.\n— Vocês viram?!",
  9: "Página 9:\n— Uma faísca que você não consegue fazer!\n— Consigo sim!\n— Então faz!\nKewyn tentava.\nNada acontecia.\nNicolas começava a rir.\n— Hahahaha!\nKewyn ficava irritado.\n— Para de rir!\nAdriely e Rodrigo observavam os dois.\nRodrigo ajeitava os óculos.\n— Vocês dois são crianças.\n— E você também! — responderam Kewyn e Nicolas ao mesmo tempo.",
  10: "Página 10:\n• O dia da Academia\nAlguns anos se passaram.\nOs quatro chegaram à idade de entrar oficialmente na Academia Ninja.\nAquele era o primeiro passo para se tornarem ninjas.\nNa Academia, aprenderiam:\n- Controle de chakra;\n- Técnicas básicas;\n- Arremesso de kunai;\n- Shuriken;\n- Transformação;\n- Clonagem;\n- Combate corpo a corpo;\n- Estratégia;\n- E, principalmente, controle emocional.",
  11: "Página 11:\nMas o Clã Ginga tinha uma matéria especial.\nCombate Ginga.\nEra o treinamento de capoeira usado pelos ninjas do clã.\nO professor entrou na sala.\n— Crianças, hoje vocês começarão o treinamento que decidirá quem está preparado para se tornar um verdadeiro ninja.\nTodos ficaram em silêncio.\nKewyn estava animado.\nNicolas estava sorrindo.\nAdriely estava concentrada.\nRodrigo ajeitou os óculos.\nO professor colocou quatro pequenos objetos sobre a mesa.\n— Cada um de vocês deverá demonstrar controle de chakra.\nKewyn foi o primeiro.\nEle fechou os olhos.\nRespirou.\nTentou concentrar chakra nas mãos.",
  12: "Página 12:\nNada aconteceu.\n— Concentre-se — disse o professor.\nKewyn tentou novamente.\nDessa vez, uma pequena quantidade de chakra apareceu.\nO professor assentiu.\n— Está melhorando.\nDepois foi Adriely.\nEla conseguiu controlar o chakra com facilidade.\nRodrigo também conseguiu.\nNicolas tentou com tanta força que acabou caindo para trás.\nAs crianças começaram a rir.\nNicolas levantou rapidamente.\n— Eu fiz de propósito!\nKewyn começou a rir.\n— Claro que fez.\n— Cala a boca!",
  13: "Página 13:\n• A primeira missão\nDepois de meses de treinamento, os quatro chegaram ao exame final da Academia.\nEles ainda não eram Genin.\nPrecisavam provar que estavam preparados.\nO exame tinha três partes.\nPrimeiro, uma prova escrita.\nRodrigo terminou rapidamente.\nAdriely foi muito bem.\nKewyn ficou olhando para a folha.\n— Professor...\n— O que foi?",
  14: "Página 14:\n— Posso desenhar?\n— Não.\nNicolas começou a rir.\nDepois veio a segunda prova.\nArremesso de kunai.\nNicolas foi excelente.\nRodrigo acertou os alvos com precisão.\nAdriely teve um desempenho equilibrado.\nKewyn não foi o melhor no arremesso, mas conseguiu compensar usando sua movimentação.\nFinalmente veio a terceira prova.\nCombate.",
  15: "Página 15:\nKewyn entrou na arena.\nSeu adversário era maior.\nO garoto avançou.\nKewyn gingou.\nEsquerda.\nDireita.\nEsquerda.\nO adversário tentou agarrá-lo.\nKewyn desviou.\nGirou.\nPassou por baixo do braço do garoto.",
  16: "Página 16:\nE acertou uma rasteira.\nO adversário caiu.\nKewyn ficou parado.\nO professor levantou a mão.\n— Vitória de Kewyn.\nAs crianças comemoraram.\nKewyn sorriu.\nMas o professor não.\nEle estava olhando para os olhos de Kewyn.\nHavia algo diferente naquela linhagem.\nAlgo que ainda estava adormecido."
};

const paginas = [];
for (let i = 1; i <= TOTAL_PAGINAS; i++) {
  paginas.push(`../images/imagens${i}.png`);
}

let usuarioAtual = null;
let indiceAtual = 0;

const imgElement = document.getElementById("manga-page");
const pageNumElement = document.getElementById("page-num");
const totalPagesElement = document.getElementById("total-pages");
const pageTextElement = document.getElementById("page-text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const swipeArea = document.getElementById("swipe-area");

const welcomeModal = document.getElementById("welcome-modal");
const continueModal = document.getElementById("continue-modal");
const googleLoginBtn = document.getElementById("save-user-btn");
const continueBtn = document.getElementById("continue-btn");

if (totalPagesElement) {
  totalPagesElement.textContent = TOTAL_PAGINAS;
}

// 1. LOGIN COM GOOGLE
googleLoginBtn.addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).catch((error) => {
    alert("Erro ao fazer login: " + error.message);
  });
});

// 2. MONITORAMENTO DE LOGIN E BANCO DE DADOS
auth.onAuthStateChanged(async (user) => {
  if (user) {
    usuarioAtual = user;
    welcomeModal.classList.add("hidden");

    const userRef = db.collection("leitores").doc(user.uid);
    const userDoc = await userRef.get();

    let paginaSalva = 1;

    if (userDoc.exists) {
      paginaSalva = userDoc.data().paginaAtual || 1;
    } else {
      await userRef.set({
        nome: user.displayName,
        email: user.email,
        paginaAtual: 1
      });
    }

    indiceAtual = paginaSalva - 1;

    document.getElementById("welcome-user-text").textContent = `OLÁ, ${user.displayName.toUpperCase()}!`;
    document.getElementById("progress-status").textContent = `Página ${paginaSalva} de ${TOTAL_PAGINAS}`;
    continueBtn.textContent = paginaSalva > 1 ? "CONTINUAR LENDO ▶" : "COMEÇAR LEITURA ▶";

    continueModal.classList.remove("hidden");
  } else {
    welcomeModal.classList.remove("hidden");
  }
});

continueBtn.addEventListener("click", () => {
  continueModal.classList.add("hidden");
  atualizarPagina();
});

// 3. SALVAMENTO AUTOMÁTICO NA NUVEM
function salvarProgressoAutomatico(numeroPagina) {
  if (usuarioAtual) {
    db.collection("leitores").doc(usuarioAtual.uid).update({
      paginaAtual: numeroPagina
    });
  }
}

// 4. CONTROLES DE NAVEGAÇÃO
function atualizarPagina() {
  const numeroPaginaAtual = indiceAtual + 1;
  
  imgElement.src = paginas[indiceAtual];
  if (pageNumElement) pageNumElement.textContent = numeroPaginaAtual;
  
  if (pageTextElement) {
    pageTextElement.textContent = textosPaginas[numeroPaginaAtual] || "Sem transcrição de texto para esta página.";
  }

  nextBtn.disabled = indiceAtual === 0;
  prevBtn.disabled = indiceAtual === paginas.length - 1;

  salvarProgressoAutomatico(numeroPaginaAtual);
}

prevBtn.addEventListener("click", () => {
  if (indiceAtual < paginas.length - 1) {
    indiceAtual++;
    atualizarPagina();
  }
});

nextBtn.addEventListener("click", () => {
  if (indiceAtual > 0) {
    indiceAtual--;
    atualizarPagina();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") prevBtn.click();
  if (e.key === "ArrowRight") nextBtn.click();
});

let touchStartX = 0;
let touchEndX = 0;

swipeArea.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, false);

swipeArea.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchStartX - touchEndX > 40) prevBtn.click();
  if (touchEndX - touchStartX > 40) nextBtn.click();
}, false);  