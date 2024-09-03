const express = require("express");
const app = express();
app.listen("3000");

//GET = Receber
/* res = resposta req = requisição */
// app.route("/").get((req, res) => res.send("Hello World!"));
// app.route("/sobre").get((req, res) => res.send("Hello Sobre!"));

//POST = Enviar
//middleware
// app.use(express.json());

// app.route("/").post((req, res) => res.send(req.body));

//PUT = Editar
// app.use(express.json());

// let author = "Luan";

// app.route("/").get((req, res) => res.send(author));

// app.route("/").put((req, res) => {
//   author = req.body.author;
//   res.send(author);
// });

//DELETE
//params todas as variáveis que vem na rota
app.route("/:identificador").delete((req, res) => {
  res.send(req.params.identificador);
});
