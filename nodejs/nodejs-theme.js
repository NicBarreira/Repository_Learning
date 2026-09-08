const temaSalvo = localStorage.getItem("javascript-docs-theme");
const temaInicial = temaSalvo || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
const botaoTema = document.querySelector("#theme-toggle");

function atualizarTema(tema) {
  document.documentElement.dataset.theme = tema;
  const escuro = tema === "dark";
  botaoTema.textContent = escuro ? "Tema claro" : "Tema escuro";
  botaoTema.setAttribute("aria-label", escuro ? "Ativar tema claro" : "Ativar tema escuro");
}

function explicarLinhaNode(linha) {
  const texto = linha.trim();
  if (!texto) return "Linha em branco separando etapas.";
  if (texto.startsWith("//") || texto.startsWith("#")) return "Comentário ou configuração; não executa uma instrução.";
  if (texto.startsWith("import ")) return "Importa uma API nativa ou biblioteca.";
  if (texto.startsWith("const ") || texto.startsWith("let ")) return "Declara uma variável e inicializa seu valor.";
  if (texto.startsWith("if ")) return "Testa uma condição para escolher o fluxo.";
  if (texto.includes("process.env")) return "Lê uma configuração do ambiente do processo.";
  if (texto.includes("createServer")) return "Cria um servidor HTTP.";
  if (texto.includes("readFile") || texto.includes("writeFile")) return "Lê ou grava dados no sistema de arquivos.";
  if (texto.includes("createReadStream") || texto.includes("createWriteStream")) return "Cria uma stream para processar bytes em partes.";
  if (texto.includes(".pipe(")) return "Conecta uma stream de leitura a uma stream de escrita.";
  if (texto.includes("setTimeout") || texto.includes("Promise")) return "Agenda uma tarefa em uma fila do Event Loop.";
  if (texto.includes("console.")) return "Exibe uma informação no console.";
  if (texto.includes("=>")) return "Define uma função callback.";
  if (texto.includes("{") && !texto.includes("}")) return "Abre um bloco de configuração ou função.";
  if (texto.includes("}")) return "Fecha o bloco anterior.";
  return "Executa uma etapa do exemplo Node.js.";
}

atualizarTema(temaInicial);
botaoTema.addEventListener("click", () => {
  const novoTema = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("javascript-docs-theme", novoTema);
  atualizarTema(novoTema);
});

document.querySelectorAll("pre > code").forEach((codigo) => {
  const painel = document.createElement("div");
  painel.className = "code-explanation";
  painel.innerHTML = "<h5>Leitura linha por linha</h5>";
  const lista = document.createElement("ol");
  codigo.textContent.split("\n").forEach((linha) => {
    const item = document.createElement("li");
    const original = document.createElement("code");
    original.textContent = linha || " ";
    const explicacao = document.createElement("span");
    explicacao.textContent = explicarLinhaNode(linha);
    item.append(original, explicacao);
    lista.appendChild(item);
  });
  painel.appendChild(lista);
  const resumo = document.createElement("p");
  resumo.innerHTML = "<strong>O que o código completo faz:</strong> demonstra um recurso do runtime Node.js e executa as etapas na ordem apresentada.";
  painel.appendChild(resumo);
  codigo.closest("pre").after(painel);
});
