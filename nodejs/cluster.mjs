import cluster from "node:cluster";
import { availableParallelism } from "node:os";
import express from "express";

function iniciarServidor() {
  const app = express();
  app.get("/status", (req, res) => res.json({ online: true, pid: process.pid }));
  app.listen(3000, () => console.log(`Worker ${process.pid} ativo`));
}

if (cluster.isPrimary) {
  const quantidade = availableParallelism();
  console.log(`Primary ${process.pid}: iniciando ${quantidade} workers`);
  for (let indice = 0; indice < quantidade; indice += 1) cluster.fork();
  cluster.on("exit", () => cluster.fork());
} else {
  iniciarServidor();
}
