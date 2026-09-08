import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

const terminal = createInterface({ input: stdin, output: stdout });
const nome = await terminal.question("Qual é o seu nome? ");
const idade = await terminal.question("Qual é a sua idade? ");
console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
terminal.close();
