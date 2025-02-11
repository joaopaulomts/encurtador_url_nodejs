const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const shortId = require("shortid");
const app = express();

// Configurar SQLite
const db = new sqlite3.Database("./database.sqlite");

// Criar tabela de URLs (se não existir)
db.run(`
  CREATE TABLE IF NOT EXISTS urls (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full TEXT NOT NULL,
    short TEXT NOT NULL UNIQUE,
    clicks INTEGER DEFAULT 0
  )
`);

// Configurar EJS como view engine
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// Servir arquivos estáticos (CSS, JS, imagens)
app.use(express.static("public"));

// Configurar body parser para formulários
app.use(express.urlencoded({ extended: false }));

// Rota principal
app.get("/", (req, res) => {
  db.all("SELECT * FROM urls", (err, rows) => {
    if (err) return res.status(500).send("Erro no banco de dados");
    res.render("index", { shortUrls: rows });
  });
});

// Criar nova URL encurtada
app.post("/shortUrls", (req, res) => {
  const fullUrl = req.body.fullUrl;
  const shortUrl = shortId.generate();

  db.run(
    "INSERT INTO urls (full, short) VALUES (?, ?)",
    [fullUrl, shortUrl],
    (err) => {
      if (err) return res.status(400).send("Erro ao criar URL encurtada");
      res.redirect("/");
    }
  );
});

// Redirecionar para URL original
app.get("/:shortUrl", (req, res) => {
  const shortUrl = req.params.shortUrl;

  db.get("SELECT * FROM urls WHERE short = ?", [shortUrl], (err, row) => {
    if (err || !row) return res.sendStatus(404);

    db.run(
      "UPDATE urls SET clicks = clicks + 1 WHERE id = ?",
      [row.id],
      (err) => {
        if (err) return res.status(500).send("Erro ao atualizar cliques");
        res.redirect(row.full);
      }
    );
  });
});

// Iniciar servidor
app.listen(5000, () => {
  console.log("Servidor rodando em http://localhost:5000");
});
