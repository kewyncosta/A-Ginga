const TOTAL_PAGINAS = 8; 

// Cadastre aqui o texto correspondente a cada página
const textosPaginas = {
  1: "Página 1:\n• A Ginga Começa\n Muito antes de Kewyn se tornar conhecido como um dos mais habilidosos ninjas do Clã Ginga, ele era apenas uma criança.\n Um garoto curioso, inquieto e que nunca conseguia ficar parado.\nEle vivia na Vila da Ginga, uma pequena vila ninja escondida entre enormes montanhas e uma floresta cheia de rios.\n Diferente das outras vilas, a Vila da Ginga tinha uma tradição que fazia parte da vida de todos os seus habitantes:a capoeira.\nPara os membros do Clã Ginga, capoeira não era apenas uma dança.\nEra uma arte de combate.Era uma maneira de se movimentar.\nEra uma forma de pensar.\nDesde pequenos, os membros do clã aprendiam a gingar antes mesmo de aprenderem a controlar completamente o chakra.\nA primeira lição era simples: Não fique parado diante do perigo.",
  2: "Página 2:\n• O pequeno Kewyn\nKewyn tinha oito anos.\nNaquela época, seus dois olhos eram completamente normais, castanhos, e ele ainda não havia despertado o verdadeiro poder de sua linhagem.\nEle treinava todos os dias com outras crianças do clã.\nEnquanto algumas crianças preferiam treinar kunais e shurikens, Kewyn gostava mesmo era de lutar usando as pernas.\n— Você nunca vai aprender a lutar direito desse jeito! — reclamou um garoto depois de cair no chão.\nKewyn abriu um sorriso.\n— Mas eu ganhei.\n— Você trapaceou!\n— Capoeira não é trapaça.\nKewyn entrou novamente na posição de ginga.\nO garoto avançou.\nKewyn desviou para o lado, colocou uma das mãos no chão e passou as pernas por cima do adversário.\nO menino perdeu o equilíbrio e caiu novamente.\nAs outras crianças começaram a rir.\n",
  3: "Página 3:\n• — De novo! — gritou Kewyn.\nFoi naquele momento que um dos professores apareceu.\n— Kewyn.\nO garoto parou.\n— Sim, professor?\n— Você é rápido. Tem equilíbrio e sabe observar seus adversários.\nKewyn sorriu.\n— Então eu sou bom?\nO professor cruzou os braços.\n— Não.\nO sorriso desapareceu.\n— Ainda não.\nKewyn ficou determinado.\n— Então eu vou ficar bom.\nO professor sorriu discretamente.\n— É isso que eu queria ouvir.",
  4: "Página 4:\n• Adriely\nDo outro lado da vila, uma garota também treinava.\nSeu nome era Abriely.\nEla era diferente de Kewyn.\nEnquanto Kewyn era impulsivo e adorava entrar em uma luta sem pensar duas vezes, Adriely era mais tranquila.\nEla gostava de observar.\nGostava de ajudar os outros.\nE tinha uma ligação incomum com a água.\nQuando tinha apenas oito anos, Adriely já conseguia sentir a presença de pequenas quantidades de água ao seu redor.\nDurante um treinamento, o professor colocou uma pequena tigela de água diante dela.\n— Concentre seu chakra.\nAdriely fechou os olhos.\nRespirou profundamente.",
  5: "Página 5:\n• A água começou a tremer.\nUma pequena gota se levantou da tigela.\nAs crianças ficaram impressionadas.\n— Ela conseguiu!\nAdriely abriu os olhos.\nA gota caiu.\nEla sorriu.\n— Eu consigo fazer de novo.\nO professor respondeu:\n— Você vai conseguir muito mais do que isso algum dia.\nNaquele momento, ninguém imaginava que aquela pequena habilidade acabaria se transformando em um dos poderes mais raros da história do Clã Ginga.",
  6: "Página 6:\n• Rodrigo\nRodrigo era o mais estudioso dos quatro.\nEle usava óculos desde criança e passava muito tempo lendo livros sobre chakra, técnicas ninja e história dos clãs.\nMas existia uma coisa que ele adorava tanto quanto estudar:\ncapoeira.\nRodrigo não tinha a força de Kewyn.\nNão tinha a afinidade natural de Adriely com a água.\nMas tinha uma inteligência impressionante.\nEle observava os movimentos dos outros e tentava descobrir seus padrões.\nDurante um treinamento, Kewyn tentou acertá-lo com um chute.\nRodrigo desviou.\nKewyn atacou novamente.\nRodrigo desviou outra vez.\n— Para de fugir! — reclamou Kewyn.",
  7: "Página 7:\n• Rodrigo ajeitou os óculos.\n— Eu não estou fugindo.\n— Então está fazendo o quê?\n— Estudando você.\nKewyn ficou confuso.\nRodrigo sorriu.\n— Você sempre começa os ataques usando a perna direita.\nKewyn arregalou os olhos.\n— Como você sabe?\n— Porque eu prestei atenção.\nKewyn ficou em silêncio.\nEntão começou a sorrir.\n— Então vamos ver se você consegue prever o próximo.\nOs dois começaram a lutar novamente.",
  8: "Página 8:\n• Nicolas\nNicolas era completamente diferente de Rodrigo.\nEle era energético.\nCompetitivo.\nE odiava perder.\nQuando treinava, sempre tentava fazer mais uma repetição, mais um chute, mais uma corrida.\n— Eu vou ser o ninja mais rápido da vila! — dizia.\nOs professores riam.\n— Você ainda precisa aprender a controlar seu chakra.\n— Eu vou aprender!\nNicolas tinha uma afinidade natural com o Raiton, o elemento raio.\nMas naquela idade ele ainda não conseguia produzir eletricidade de verdade.\nÀs vezes, durante seus treinamentos, pequenas faíscas apareciam em seus dedos.\nQuando isso acontecia, Nicolas ficava animado.\n— Vocês viram?!\n",
  9: "Página 9:\n•",
  10: "Página 10:\n•",
  11: "Página 11:\n•",
  12: "Página 12:\n•",
  13: "Página 13:\n•",
  14: "Página 14:\n•",

};

const paginas = [];
for (let i = 1; i <= TOTAL_PAGINAS; i++) {
  paginas.push(`../images/imagens${i}.png`);
}

let indiceAtual = 0;

const imgElement = document.getElementById("manga-page");
const pageNumElement = document.getElementById("page-num");
const totalPagesElement = document.getElementById("total-pages");
const pageTextElement = document.getElementById("page-text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const swipeArea = document.getElementById("swipe-area");

if (totalPagesElement) {
  totalPagesElement.textContent = TOTAL_PAGINAS;
}

function atualizarPagina() {
  const numeroPaginaAtual = indiceAtual + 1;
  
  imgElement.src = paginas[indiceAtual];
  if (pageNumElement) pageNumElement.textContent = numeroPaginaAtual;
  
  // Atualiza o texto da página no painel lateral
  if (pageTextElement) {
    pageTextElement.textContent = textosPaginas[numeroPaginaAtual] || "Sem transcrição de texto para esta página.";
  }

  nextBtn.disabled = indiceAtual === 0;
  prevBtn.disabled = indiceAtual === paginas.length - 1;
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

// Suporte para Swipe no celular
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

atualizarPagina();