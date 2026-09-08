const desafios = {
  "javascript-iniciante": [
    ["Validador de Idade com Early Return", `function verificarAcesso(idade) {
  if (idade < 18) return "Acesso negado";
  return "Acesso permitido";
}`],
    ["Calculadora com Rest Operator", `function somarTudo(...numeros) {
  let total = 0;
  for (const numero of numeros) total += numero;
  return total;
}`],
    ["Simulador de Pilha (LIFO)", `const historicoNavegacao = [];
function visitarPagina(url) { historicoNavegacao.push(url); }
function voltarPagina() { return historicoNavegacao.pop(); }`],
    ["Desestruturação de Parâmetros", `function exibirResumoPedido({ cliente, valor, cupom }) {
  return { cliente, total: valor - cupom };
}`],
    ["Comparador Estrito", `function compararEstritamente(a, b) {
  return { mesmoValorEMesmoTipo: a === b, tipoA: typeof a, tipoB: typeof b };
}`]
  ],
  "javascript-intermediario": [
    ["Filtro e Mapeamento de Inventário", `const resultado = produtos
  .filter((produto) => produto.emEstoque)
  .map((produto) => produto.nome + ": R$ " + produto.preco);`],
    ["Agrupador de Gastos com Reduce", `const totais = despesas.reduce((acumulado, despesa) => {
  acumulado[despesa.categoria] = (acumulado[despesa.categoria] || 0) + despesa.valor;
  return acumulado;
}, {});`],
    ["Classe com Encapsulamento em Memória", `class ContaBancaria {
  #saldo; #historico = [];
  constructor(titular, saldoInicial) { this.titular = titular; this.#saldo = saldoInicial; }
  depositar(valor) { if (valor > 0) { this.#saldo += valor; this.#historico.push({ tipo: "deposito", valor }); } }
  sacar(valor) { if (valor <= 0 || valor > this.#saldo) return false; this.#saldo -= valor; this.#historico.push({ tipo: "saque", valor }); return true; }
}`],
    ["Buscador Paralelo com Promise.all", `const inicio = performance.now();
const [usuario, pedidos] = await Promise.all([buscarUsuario(), buscarPedidos()]);
console.log({ usuario, pedidos, tempoMs: performance.now() - inicio });`],
    ["Clonagem Segura de Objetos", `const clone = structuredClone(configuracao);
clone.tema.cor = "verde";
console.log(configuracao.tema.cor); // permanece inalterado`]
  ],
  "javascript-avancado": [
    ["Previsão de Execução no Event Loop", `console.log("1: síncrono");
Promise.resolve().then(() => console.log("3: microtask"));
setTimeout(() => console.log("4: macrotask"), 0);
console.log("2: síncrono");`],
    ["Guardião de Propriedades com Proxy", `const carteiraVigiada = new Proxy({ saldo: 0 }, {
  set(alvo, propriedade, valor) {
    if (propriedade === "saldo" && (typeof valor !== "number" || valor < 0)) throw new Error("Saldo inválido");
    return Reflect.set(alvo, propriedade, valor);
  }
});`],
    ["Currying de Impostos", `const calcularTaxa = (porcentagem) => (valor) => valor * porcentagem;
const taxaSP = calcularTaxa(0.18);
console.log(taxaSP(100));`],
    ["Gerador de IDs Infinito", `function* idGenerator() {
  let id = 1;
  while (true) yield id++;
}`],
    ["Detector de Vazamento de Memória", `const blocosRetidos = [];
function observarMemoria() {
  blocosRetidos.push(new Array(250_000).fill("memoria retida"));
  console.log(process.memoryUsage().heapUsed);
}`]
  ],
  "typescript-iniciante": [
    ["Anotações Básicas e Funções", `function calcularSalarioLiquido(bruto: number, desconto: number): number {
  return bruto - desconto;
}`],
    ["Lista e Tupla Fixa", `const habilidades: string[] = ["JavaScript", "TypeScript"];
const statusServidor: [number, string] = [200, "OK"];`],
    ["Union Types e Narrowing", `function formatarDocumento(doc: string | number): string {
  return typeof doc === "number" ? doc.toFixed(0) : doc.trim();
}`],
    ["Tipagem com Unknown", `function processarEntrada(dado: unknown): void {
  if (typeof dado === "string") console.log(dado.toUpperCase());
}`],
    ["Primeira Interface", `interface Usuario { id: number; nome: string; email: string; telefone?: string }
const usuario: Usuario = { id: 1, nome: "Ana", email: "ana@example.com" };`]
  ],
  "typescript-intermediario": [
    ["To-Do List Tipado", `function toggleTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task);
}`],
    ["Generics em Respostas de API", `interface ApiResponse<T> { status: number; sucesso: boolean; data: T }
const resposta: ApiResponse<Usuario> = { status: 200, sucesso: true, data: usuario };`],
    ["Modificadores de Acesso", `class ContaBancaria {
  public readonly titular: string;
  private saldo: number;
  consultarSaldo(): number { return this.saldo; }
}`],
    ["Type Aliases com Opções Estritas", `type Role = "ADMIN" | "CLIENTE" | "SUPORTE";
function autorizarAcesso(role: Role): boolean { return role !== "CLIENTE"; }`],
    ["Modelagem de Carrinho de Compras", `function calcularTotal(cart: CartItem[]): number {
  return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
}`]
  ],
  "typescript-avancado": [
    ["Manipulação com Utility Types", `type PerfilPublico = Omit<PerfilCompleto, "senha">;
type AtualizacaoPerfil = Partial<PerfilCompleto>;`],
    ["Validador de Entrada com Zod + TypeScript", `const produtoSchema = z.object({ nome: z.string(), preco: z.number().positive(), tags: z.array(z.string()) });
type ProdutoInput = z.infer<typeof produtoSchema>;`],
    ["Type Guard Customizado", `function ehErroPadrao(erro: unknown): erro is { mensagem: string } {
  return typeof erro === "object" && erro !== null && "mensagem" in erro && typeof erro.mensagem === "string";
}`],
    ["Contratos com Record", `type CacheDeAcesso = Record<string, Date>;
const cache: CacheDeAcesso = { usuario1: new Date() };`],
    ["Mapeamento Condicional de Tipos", `type SoNumeros<T> = {
  [K in keyof T as T[K] extends number ? K : never]: T[K]
};`]
  ],
  "nodejs-iniciante": [
    ["Script CLI de Interação", `import { createInterface } from "node:readline/promises";
const terminal = createInterface({ input: stdin, output: stdout });
const nome = await terminal.question("Nome: ");
terminal.close();`],
    ["Automação com package.json", `{
  "type": "module",
  "scripts": { "start": "node --watch app.js" }
}`],
    ["Conversor de Moedas em Linha de Comando", `const valor = Number(process.argv[2]);
const cotacao = Number(process.argv[3]);
console.log(valor * cotacao);`],
    ["Variáveis de Ambiente Nativas", `// node --env-file=.env app.js
const porta = Number(process.env.PORT || 3000);`],
    ["Leitor de Arquivo de Texto", `import { readFile } from "node:fs/promises";
const mensagem = await readFile("mensagem.txt", "utf8");
console.log(mensagem);`]
  ],
  "nodejs-intermediario": [
    ["Servidor HTTP com Rota de Healthcheck", `app.get("/status", (req, res) => {
  res.status(200).json({ online: true, timestamp: new Date().toISOString() });
});`],
    ["Consulta Externa a CEP/DDD", `const resposta = await fetch(
  "https://brasilapi.com.br/api/ddd/v1/" + numero
);
if (!resposta.ok) return res.sendStatus(404);
res.json((await resposta.json()).cities);`],
    ["CRUD em Memória", `app.post("/tarefas", (req, res) => {
  const tarefa = { id: crypto.randomUUID(), titulo: req.body.titulo };
  tarefas.push(tarefa);
  res.status(201).json(tarefa);
});`],
    ["Middleware de Autenticação Básica", `function autenticar(req, res, next) {
  if (req.headers.authorization !== "token-secreto") return res.sendStatus(401);
  next();
}`],
    ["Persistência Assíncrona em JSON", `async function salvarEmDisco(dados) {
  await writeFile("banco.json", JSON.stringify(dados, null, 2));
}
async function carregarDoDisco() { return JSON.parse(await readFile("banco.json", "utf8")); }`]
  ],
  "nodejs-avancado": [
    ["Transferência de Arquivos com Streams", `createReadStream("origem.bin")
  .pipe(createWriteStream("destino.bin"));`],
    ["Manipulação de Binários com Buffer", `const buffer = Buffer.from("Olá", "utf8");
console.log(buffer.toString("hex"));
console.log(buffer.toString("utf8"));`],
    ["Middleware Global de Erros", `app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ erro: err.message });
});`],
    ["Processamento Concorrente Limitado", `for (let inicio = 0; inicio < urls.length; inicio += 5) {
  const lote = urls.slice(inicio, inicio + 5);
  resultados.push(...await Promise.all(lote.map((url) => fetch(url))));
}`],
    ["Clustering Multi-Core", `if (cluster.isPrimary) {
  for (let i = 0; i < availableParallelism(); i++) cluster.fork();
} else iniciarServidor();`]
  ]
};

const explicacoes = {
  "Validador de Idade com Early Return": "Crie verificarAcesso(idade) e encerre a função imediatamente quando a idade for menor que 18, sem usar else.",
  "Calculadora com Rest Operator": "Crie somarTudo(...numeros) para aceitar vários números e somá-los usando um laço.",
  "Simulador de Pilha (LIFO)": "Use push para visitar páginas e pop para voltar à última página visitada, mostrando o estado final.",
  "Desestruturação de Parâmetros": "Receba cliente, valor e cupom diretamente no parâmetro e devolva o total do pedido.",
  "Comparador Estrito": "Compare dois valores com === e informe se valor e tipo são iguais, incluindo typeof de cada argumento.",
  "Filtro e Mapeamento de Inventário": "Filtre somente produtos em estoque e transforme cada item em uma string com nome e preço.",
  "Agrupador de Gastos com Reduce": "Use reduce para somar as despesas e criar um total separado para cada categoria.",
  "Classe com Encapsulamento em Memória": "Modele uma conta com saldo e histórico privados, permitindo depósitos e saques válidos.",
  "Buscador Paralelo com Promise.all": "Simule duas buscas demoradas, execute-as em paralelo e meça o tempo total da operação.",
  "Clonagem Segura de Objetos": "Clone um objeto aninhado com structuredClone e prove que alterar o clone não altera o original.",
  "Previsão de Execução no Event Loop": "Misture código síncrono, microtask e macrotask; escreva a ordem esperada e confira a saída.",
  "Guardião de Propriedades com Proxy": "Intercepte a alteração de saldo e lance erro quando o valor não for numérico ou for negativo.",
  "Currying de Impostos": "Crie calcularTaxa(porcentagem)(valor) para gerar funções de cálculo reutilizáveis.",
  "Gerador de IDs Infinito": "Implemente um generator que produza IDs sequenciais sob demanda a cada chamada de next().value.",
  "Detector de Vazamento de Memória": "Crie uma closure que retenha arrays e observe o crescimento de heapUsed com process.memoryUsage().",
  "Anotações Básicas e Funções": "Tipar os parâmetros e o retorno de calcularSalarioLiquido usando number.",
  "Lista e Tupla Fixa": "Declare uma lista de strings e uma tupla com número e mensagem de status.",
  "Union Types e Narrowing": "Aceite string ou number e use typeof para escolher a formatação adequada.",
  "Tipagem com Unknown": "Valide unknown antes de chamar métodos de string, garantindo segurança no runtime.",
  "Primeira Interface": "Defina o contrato Usuario e crie objetos válidos com telefone opcional.",
  "To-Do List Tipado": "Crie e altere tarefas sem mutar o array original, usando Task e novas cópias.",
  "Generics em Respostas de API": "Modele uma resposta genérica e use-a tanto para um usuário quanto para uma lista de produtos.",
  "Modificadores de Acesso": "Mantenha saldo privado, titular readonly e ofereça consulta por método público.",
  "Type Aliases com Opções Estritas": "Restrinja a função aos papéis ADMIN, CLIENTE e SUPORTE, rejeitando qualquer outro literal.",
  "Modelagem de Carrinho de Compras": "Modele produtos e itens do carrinho e calcule o total com quantidade e preço.",
  "Manipulação com Utility Types": "Remova senha com Omit e crie um tipo de atualização parcial com Partial.",
  "Validador de Entrada com Zod + TypeScript": "Crie um schema executável para produto e derive seu tipo com z.infer.",
  "Type Guard Customizado": "Valide uma estrutura de erro desconhecida e informe ao TypeScript o tipo refinado.",
  "Contratos com Record": "Crie um cache tipado que associe IDs de usuários a objetos Date.",
  "Mapeamento Condicional de Tipos": "Mantenha somente propriedades numéricas usando chaves mapeadas e tipos condicionais.",
  "Script CLI de Interação": "Leia nome e idade com node:readline/promises, mostre uma mensagem e feche a interface.",
  "Automação com package.json": "Configure ESM e um script start que execute app.js em modo watch.",
  "Conversor de Moedas em Linha de Comando": "Leia valor e cotação em process.argv e mostre o resultado convertido.",
  "Variáveis de Ambiente Nativas": "Carregue PORT de um arquivo .env usando a flag nativa --env-file.",
  "Leitor de Arquivo de Texto": "Leia mensagem.txt com node:fs/promises e async/await, exibindo seu conteúdo.",
  "Servidor HTTP com Rota de Healthcheck": "Crie uma rota GET /status que responda online e timestamp com status 200.",
  "Consulta Externa a CEP/DDD": "Leia o parâmetro da rota, consulte a BrasilAPI e responda cidades ou 404.",
  "CRUD em Memória": "Receba o título de uma tarefa, gere um ID, armazene em memória e responda 201.",
  "Middleware de Autenticação Básica": "Bloqueie requisições sem authorization igual a token-secreto e avance as válidas.",
  "Persistência Assíncrona em JSON": "Implemente funções para salvar e carregar contas usando fs/promises.",
  "Transferência de Arquivos com Streams": "Conecte read stream e write stream com pipe para copiar arquivos sem ocupar toda a RAM.",
  "Manipulação de Binários com Buffer": "Converta texto em Buffer, mostre os bytes em hexadecimal e reconstrua a string.",
  "Middleware Global de Erros": "Capture erros do Express em um middleware central e devolva uma resposta JSON padronizada.",
  "Processamento Concorrente Limitado": "Processe URLs em lotes de cinco com Promise.all, aguardando cada lote antes do próximo.",
  "Clustering Multi-Core": "Use cluster e availableParallelism para distribuir workers do servidor entre os núcleos.",
};

document.querySelectorAll("[data-desafios]").forEach((container) => {
  const lista = desafios[container.dataset.desafios] || [];
  container.innerHTML = lista.map(([titulo, codigo]) => `
    <li class="challenge-item">
      <details>
        <summary>${titulo}</summary>
        <p class="challenge-explanation">${explicacoes[titulo]}</p>
        <details class="challenge-resolution">
          <summary>Ver resolução</summary>
          <pre><code>${codigo.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")}</code></pre>
        </details>
      </details>
    </li>`).join("");
});