import { z } from "zod";

// Iniciante 1.
function calcularSalarioLiquido(bruto: number, desconto: number): number {
  return bruto - desconto;
}

// Iniciante 2.
const habilidades: string[] = ["JavaScript", "TypeScript"];
const statusServidor: [number, string] = [200, "OK"];

// Iniciante 3.
function formatarDocumento(doc: string | number): string {
  return typeof doc === "number" ? `CPF: ${doc.toString().padStart(11, "0")}` : `Documento: ${doc.trim()}`;
}

// Iniciante 4.
function processarEntrada(dado: unknown): void {
  if (typeof dado === "string") console.log(dado.toUpperCase());
}

// Iniciante 5.
interface Usuario { id: number; nome: string; email: string; telefone?: string }
const usuarioA: Usuario = { id: 1, nome: "Ana", email: "ana@example.com" };
const usuarioB: Usuario = { id: 2, nome: "Caio", email: "caio@example.com", telefone: "11999999999" };

// Intermediário 1: funções imutáveis.
interface Task { id: number; title: string; completed: boolean }
function addTask(tasks: Task[], title: string): Task[] {
  const id = tasks.length === 0 ? 1 : Math.max(...tasks.map((task) => task.id)) + 1;
  return [...tasks, { id, title, completed: false }];
}
function toggleTask(tasks: Task[], id: number): Task[] {
  return tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task);
}

// Intermediário 2.
interface ApiResponse<T> { status: number; sucesso: boolean; data: T }
interface Produto { id: number; nome: string; preco: number }
const respostaUsuario: ApiResponse<Usuario> = { status: 200, sucesso: true, data: usuarioA };
const respostaProdutos: ApiResponse<Produto[]> = { status: 200, sucesso: true, data: [{ id: 1, nome: "Livro", preco: 40 }] };

// Intermediário 3.
class ContaBancaria {
  public readonly titular: string;
  private saldo: number;
  constructor(titular: string, saldoInicial: number) { this.titular = titular; this.saldo = saldoInicial; }
  depositar(valor: number): void { if (valor > 0) this.saldo += valor; }
  sacar(valor: number): boolean { if (valor <= 0 || valor > this.saldo) return false; this.saldo -= valor; return true; }
  consultarSaldo(): number { return this.saldo; }
}

// Intermediário 4.
type Role = "ADMIN" | "CLIENTE" | "SUPORTE";
function autorizarAcesso(role: Role): boolean { return role === "ADMIN" || role === "SUPORTE"; }

// Intermediário 5.
interface Product { id: number; name: string; price: number }
interface CartItem { product: Product; quantity: number }
function calcularTotal(cart: CartItem[]): number { return cart.reduce((total, item) => total + item.product.price * item.quantity, 0); }

// Avançado 1.
interface PerfilCompleto { id: number; nome: string; email: string; senha: string; telefone: string }
type PerfilPublico = Omit<PerfilCompleto, "senha">;
type AtualizacaoPerfil = Partial<PerfilCompleto>;

// Avançado 2: o tipo nasce do schema, sem duplicação.
const produtoSchema = z.object({ nome: z.string().min(1), preco: z.number().positive(), tags: z.array(z.string()) });
type ProdutoInput = z.infer<typeof produtoSchema>;
function validarProduto(valor: unknown): ProdutoInput { return produtoSchema.parse(valor); }

// Avançado 3.
function ehErroPadrao(erro: unknown): erro is { mensagem: string } {
  return typeof erro === "object" && erro !== null && "mensagem" in erro && typeof erro.mensagem === "string";
}
function mensagemDoErro(erro: unknown): string { return ehErroPadrao(erro) ? erro.mensagem : "Erro desconhecido"; }

// Avançado 4.
type CacheDeAcesso = Record<string, Date>;
const cacheDeAcesso: CacheDeAcesso = { usuario1: new Date() };

// Avançado 5: propriedades que não são numéricas são removidas do tipo.
type SoNumeros<T> = { [K in keyof T as T[K] extends number ? K : never]: T[K] };
type Metricas = SoNumeros<{ tentativas: number; ativo: boolean; taxa: number }>;
const metricas: Metricas = { tentativas: 3, taxa: 0.18 };

export {
  calcularSalarioLiquido, habilidades, statusServidor, formatarDocumento, processarEntrada,
  Usuario, usuarioA, usuarioB, Task, addTask, toggleTask, ApiResponse, Produto,
  respostaUsuario, respostaProdutos, ContaBancaria, Role, autorizarAcesso, Product,
  CartItem, calcularTotal, PerfilPublico, AtualizacaoPerfil, produtoSchema, ProdutoInput,
  validarProduto, ehErroPadrao, mensagemDoErro, CacheDeAcesso, cacheDeAcesso, SoNumeros, metricas
};
