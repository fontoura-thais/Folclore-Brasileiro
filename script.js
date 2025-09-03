const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
        {
                enunciado: "Quais manifestações culturais brasileiras você considera parte do folclore?",
                alternativas: [
                        {

                                texto: "Comidas típicas",
                                afirmacao: "Agora entendi você só pensa em comida"
                        },
                        {
                                texto: "Festas temáticas",
                                afirmacao: "Estudar não quer né, agora uma festinha"
                        }
                ]
        },
        {
                enunciado: "Você já vivenciou alguma situação que te fez acreditar em alguma lenda do folclore brasileiro? ",
                alternativas: [
                        {
                                texto: "Relatos pessoais",
                                afirmacao: "Histórias de família"
                        },
                        {
                                texto: "Experiências",
                                afirmacao: "Que medo!"
                        }
                ]
        },
        {
                enunciado: "Qual a principal característica do Saci-Pererê?",
                alternativas: [
                        {
                                texto: "Sua travessura",
                                afirmacao: "Parece o menino maluquinho"
                        },
                        {
                                texto: "Sua esperteza",
                                afirmacao: "Parece o Einstein "
                        }
                ]
        },
        {
                enunciado: "Qual a principal diferença entre lenda e mito?",
                alternativas: [
                        {
                                texto: "Uma lenda é baseada em fatos históricos, um mito não.",
                                afirmacao: "Já que sou verdadeiro sou uma lenda"
                        },
                        {
                                texto: "Um mito é uma história sagrada, uma lenda não é.",
                                afirmacao: "Se for sagrado é mito..."
                        }
                ]
        },
        {
                enunciado: "Qual a importância do Dia do Folclore (22 de agosto) para a cultura brasileira?",
                alternativas: [
                        {


                                texto: "É uma data para celebrar e divulgar o folclore",
                                afirmacao: "Só se for divulgar algo em cima do folclore"
                        },
                        {
                                texto: "É uma data para relembrar a história do folclore",
                                afirmacao: "Não lembro nem do meu aniversário"
                        }
                ]
        },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "No fim, entre brincadeiras, medos e reflexões, todos entenderam que o folclore é mais do que lendas: é parte da identidade cultural do Brasil, misturando humor, tradição e memória coletiva.";

function mostraPergunta() {
        if (atual >= perguntas.length) {
                mostraResultado();
                return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent = "";
        mostraAlternativas();
}

function mostraAlternativas() {
        for (const alternativa of perguntaAtual.alternativas) {
                const botaoAlternativas = document.createElement("button");
                botaoAlternativas.textContent = alternativa.texto;
                botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
                caixaAlternativas.appendChild(botaoAlternativas);
        }
}

function respostaSelecionada(opcaoSelecionada) {
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
}

function mostraResultado() {
        caixaPerguntas.textContent = "Em 2049...";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
}

mostraPergunta();
