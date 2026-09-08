import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { readFile, writeFile } from "node:fs/promises";
import { createReadStream, createWriteStream } from "node:fs";
import { Buffer } from "node:buffer";
import { availableParallelism } from "node:os";

// Iniciante 1: CLI interativo.
async function executarPerguntas() {
  const terminal = createInterface({ input: stdin, output: stdout });
  const nome = await terminal.question("Nome: ");
  const idade = await terminal.question("Idade: ");
  console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
  terminal.close();
}

// Iniciante 2: package.json deve conter type=module e start=node --watch app.js.
// Iniciante 3: conversão por process.argv.
function converterMoeda(valorTexto, cotacaoTexto) {
  const valor = Number(valorTexto);
  const cotacao = Number(cotacaoTexto);
  if (!Number.isFinite(valor) || !Number.isFinite(cotacao)) throw new Error("Informe números válidos");
  return valor * cotacao;
}

// Iniciante 4: Node 20+ executa com node --env-file=.env app.mjs.
const porta = Number(process.env.PORT || 3000);

// Iniciante 5: leitura assíncrona.
async function lerMensagem(caminho = "mensagem.txt") { return readFile(caminho, "utf8"); }

// Intermediário 1 e 2: Express pode importar estas regras em api.mjs.
function statusPayload() { return { online: true, timestamp: new Date().toISOString() }; }
async function buscarCidadesPorDdd(numero) {
  const resposta = await fetch(`https://brasilapi.com.br/api/ddd/v1/${encodeURIComponent(numero)}`);
  if (!resposta.ok) return null;
  const dados = await resposta.json();
  return dados.cities;
}

// Intermediário 3: CRUD em memória.
const tarefas = [];
function criarTarefa(titulo) {
  if (typeof titulo !== "string" || !titulo.trim()) throw new Error("titulo é obrigatório");
  const tarefa = { id: crypto.randomUUID(), titulo: titulo.trim(), concluida: false };
  tarefas.push(tarefa);
  return tarefa;
}

// Intermediário 4: middleware Express.
function autenticar(req, res, next) {
  if (req.headers.authorization !== "token-secreto") return res.status(401).json({ erro: "Não autorizado" });
  next();
}

// Intermediário 5: persistência JSON.
const arquivoBanco = new URL("./banco.json", import.meta.url);
async function salvarEmDisco(dados) { await writeFile(arquivoBanco, JSON.stringify(dados, null, 2)); }
async function carregarDoDisco() {
  try { return JSON.parse(await readFile(arquivoBanco, "utf8")); }
  catch (erro) { if (erro.code === "ENOENT") return []; throw erro; }
}

// Avançado 1: cópia por chunks, sem carregar o arquivo inteiro.
function transferirArquivo(origem, destino) {
  return new Promise((resolve, reject) => {
    const leitura = createReadStream(origem);
    const escrita = createWriteStream(destino);
    leitura.on("error", reject);
    escrita.on("error", reject);
    escrita.on("finish", resolve);
    leitura.pipe(escrita);
  });
}

// Avançado 2: bytes e reconstrução.
function demonstrarBuffer(texto) {
  const buffer = Buffer.from(texto, "utf8");
  return { hex: buffer.toString("hex"), original: Buffer.from(buffer).toString("utf8") };
}

// Avançado 3: middleware global pode usar esta forma.
function middlewareDeErros(err, req, res, next) {
  console.error(err);
  res.status(err.statusCode || 500).json({ erro: err.message || "Erro interno" });
}

// Avançado 4: exatamente cinco requisições por lote.
async function buscarEmLotes(urls, tamanhoLote = 5) {
  const resultados = [];
  for (let inicio = 0; inicio < urls.length; inicio += tamanhoLote) {
    const lote = urls.slice(inicio, inicio + tamanhoLote);
    resultados.push(...await Promise.all(lote.map((url) => fetch(url))));
  }
  return resultados;
}

// Avançado 5: use esta função no worker criado por node:cluster.
function configurarCluster(cluster, iniciarServidor) {
  if (cluster.isPrimary) {
    for (let indice = 0; indice < availableParallelism(); indice += 1) cluster.fork();
    cluster.on("exit", () => cluster.fork());
  } else iniciarServidor();
}

export {
  executarPerguntas, converterMoeda, porta, lerMensagem, statusPayload, buscarCidadesPorDdd,
  tarefas, criarTarefa, autenticar, salvarEmDisco, carregarDoDisco, transferirArquivo,
  demonstrarBuffer, middlewareDeErros, buscarEmLotes, configurarCluster
};

if (process.argv[1]?.endsWith("exercicios.mjs")) {
  console.log({ convertido: converterMoeda("100", "5.20"), porta, buffer: demonstrarBuffer("Olá") });
  console.log("Núcleos disponíveis:", availableParallelism());
}
