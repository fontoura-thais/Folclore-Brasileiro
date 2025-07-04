const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
        {
                enunciado: "Quais manifestações culturais brasileiras você considera parte do folclore?",
                alternativas: [
                        "Comidas típicas",
                        "Festas temáticas"
                ]
        },
        {
                enunciado: "Você já vivenciou alguma situação que te fez acreditar em alguma lenda do folclore brasileiro? ",
                alternativas: [
                        "Relatos pessoais",
                        "Experiências"
                ]
        },
        {
                enunciado: "Qual a principal característica do Saci-Pererê?",
                alternativas: [
                        "Sua travessura",
                        "Sua esperteza"
                ]
        },
        {
                enunciado: "Qual a principal diferença entre lenda e mito?",
                alternativas: [
                        "Uma lenda é baseada em fatos históricos, um mito não.",
                        "Um mito é uma história sagrada, uma lenda não é."
                ]
        },
        {
                enunciado: "Qual a importância do Dia do Folclore (22 de agosto) para a cultura brasileira?",
                alternativas: [
                        "É uma data para celebrar e divulgar o folclore",
                        "É uma data para relembrar a história do folclore"
                ]
        },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();