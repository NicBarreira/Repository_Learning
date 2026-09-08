import express from "express";
import { buscarCidadesPorDdd, criarTarefa, autenticar, carregarDoDisco, salvarEmDisco, statusPayload } from "./exercicios.mjs";

const app = express();
const porta = Number(process.env.PORT || 3000);
app.use(express.json());

app.get("/status", (req, res) => res.status(200).json(statusPayload()));

app.get("/ddd/:numero", async (req, res, next) => {
  try {
    const cidades = await buscarCidadesPorDdd(req.params.numero);
    if (!cidades) return res.status(404).json({ erro: "DDD não encontrado" });
    return res.status(200).json({ cidades });
  } catch (erro) {
    return next(erro);
  }
});

app.post("/tarefas", (req, res, next) => {
  try {
    return res.status(201).json(criarTarefa(req.body.titulo));
  } catch (erro) {
    erro.statusCode = 400;
    return next(erro);
  }
});

app.get("/contas", autenticar, async (req, res, next) => {
  try { return res.status(200).json(await carregarDoDisco()); }
  catch (erro) { return next(erro); }
});

app.put("/contas", autenticar, async (req, res, next) => {
  try { await salvarEmDisco(req.body); return res.status(200).json(req.body); }
  catch (erro) { return next(erro); }
});

app.use((erro, req, res, next) => {
  console.error(erro);
  res.status(erro.statusCode || 500).json({ erro: erro.message || "Erro interno" });
});

app.listen(porta, () => console.log(`API em http://localhost:${porta}`));
