// Exercicios de JavaScript: fundamentos, assincronismo e runtime.

// Iniciante 1: early return.
function verificarAcesso(idade) {
  if (idade < 18) return "Acesso negado";
  return "Acesso permitido";
}

// Iniciante 2: rest operator e laço simples.
function somarTudo(...numeros) {
  let total = 0;
  for (const numero of numeros) total += numero;
  return total;
}

// Iniciante 3: pilha LIFO.
const historicoNavegacao = [];
function visitarPagina(url) { historicoNavegacao.push(url); }
function voltarPagina() { return historicoNavegacao.pop(); }

// Iniciante 4: desestruturação no parâmetro.
function exibirResumoPedido({ cliente, valor, cupom }) {
  return { cliente, total: valor - cupom };
}

// Iniciante 5: comparação estrita.
function compararEstritamente(a, b) {
  return {
    mesmoValorEMesmoTipo: a === b,
    tipoA: typeof a,
    tipoB: typeof b
  };
}

// Intermediário 1: filter + map.
const inventario = [
  { id: 1, nome: "Teclado", preco: 120, emEstoque: true },
  { id: 2, nome: "Mouse", preco: 80, emEstoque: false },
  { id: 3, nome: "Monitor", preco: 900, emEstoque: true }
];
const produtosDisponiveis = inventario
  .filter((produto) => produto.emEstoque)
  .map((produto) => `${produto.nome}: R$ ${produto.preco.toFixed(2)}`);

// Intermediário 2: agrupamento com reduce.
const despesas = [
  { categoria: "alimentacao", valor: 30 },
  { categoria: "transporte", valor: 15 }
];
const gastosPorCategoria = despesas.reduce((totais, despesa) => {
  totais[despesa.categoria] = (totais[despesa.categoria] || 0) + despesa.valor;
  return totais;
}, {});

// Intermediário 3: estado privado e histórico.
class ContaBancaria {
  #saldo;
  #historico = [];

  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.#saldo = saldoInicial;
  }

  depositar(valor) {
    if (valor <= 0) return false;
    this.#saldo += valor;
    this.#historico.push({ tipo: "deposito", valor });
    return true;
  }

  sacar(valor) {
    if (valor <= 0 || valor > this.#saldo) return false;
    this.#saldo -= valor;
    this.#historico.push({ tipo: "saque", valor });
    return true;
  }

  consultarSaldo() { return this.#saldo; }
  consultarHistorico() { return structuredClone(this.#historico); }
}

// Intermediário 4: duas buscas executadas em paralelo.
function aguardar(valor, atraso) {
  return new Promise((resolve) => setTimeout(() => resolve(valor), atraso));
}
async function buscarUsuario() { return aguardar({ id: 1, nome: "Ana" }, 1000); }
async function buscarPedidos() { return aguardar([{ id: 10, total: 99 }], 1500); }
async function buscarPainel() {
  const inicio = performance.now();
  const [usuario, pedidos] = await Promise.all([buscarUsuario(), buscarPedidos()]);
  return { usuario, pedidos, tempoMs: Math.round(performance.now() - inicio) };
}

// Intermediário 5: cópia profunda nativa.
function clonarConfiguracao(obj) { return structuredClone(obj); }

// Avançado 1: saída prevista: síncrono 1, síncrono 2, microtask, macrotask.
function demonstrarEventLoop() {
  console.log("1: síncrono");
  setTimeout(() => console.log("4: macrotask"), 0);
  Promise.resolve().then(() => console.log("3: microtask"));
  console.log("2: síncrono");
}

// Avançado 2: Proxy com validação de saldo.
const carteira = { saldo: 0 };
const carteiraVigiada = new Proxy(carteira, {
  set(alvo, propriedade, valor) {
    if (propriedade === "saldo" && (typeof valor !== "number" || valor < 0)) {
      throw new Error("saldo deve ser um número não negativo");
    }
    return Reflect.set(alvo, propriedade, valor);
  }
});

// Avançado 3: currying.
function calcularTaxa(porcentagem) {
  return (valor) => valor * porcentagem;
}
const taxaSP = calcularTaxa(0.18);

// Avançado 4: generator infinito sob demanda.
function* idGenerator() {
  let id = 1;
  while (true) yield id++;
}

// Avançado 5: closure que retém arrays para observar crescimento de memória.
const vazamentoIntencional = (() => {
  const blocosRetidos = [];
  return () => {
    blocosRetidos.push(new Array(250_000).fill("memoria retida"));
    return process.memoryUsage();
  };
})();

if (typeof process !== "undefined" && process.argv[1]?.endsWith("exercicios.js")) {
  visitarPagina("/inicio");
  visitarPagina("/produtos");
  console.log({ acesso: verificarAcesso(18), soma: somarTudo(1, 2, 3) });
  console.log("Página removida:", voltarPagina(), "Estado:", historicoNavegacao);
  console.log(produtosDisponiveis, gastosPorCategoria);
  console.log(exibirResumoPedido({ cliente: "Ana", valor: 100, cupom: 15 }));
  console.log(compararEstritamente(1, "1"));
  const configuracao = { tema: { cor: "azul" } };
  const clone = clonarConfiguracao(configuracao);
  clone.tema.cor = "verde";
  console.log({ original: configuracao.tema.cor, clone: clone.tema.cor });
  carteiraVigiada.saldo = 50;
  console.log("Saldo protegido:", carteiraVigiada.saldo, "Taxa:", taxaSP(100));
  const ids = idGenerator();
  console.log("IDs:", ids.next().value, ids.next().value);
  console.log("Memória retida:", vazamentoIntencional().heapUsed);
  demonstrarEventLoop();
  buscarPainel().then((painel) => console.log("Painel paralelo:", painel));
}

export {
  verificarAcesso, somarTudo, historicoNavegacao, visitarPagina, voltarPagina,
  exibirResumoPedido, compararEstritamente, produtosDisponiveis, gastosPorCategoria,
  ContaBancaria, buscarUsuario, buscarPedidos, buscarPainel, clonarConfiguracao,
  carteiraVigiada, calcularTaxa, taxaSP, idGenerator, vazamentoIntencional
};
