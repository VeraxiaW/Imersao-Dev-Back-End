import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"))
routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

// import express from "express";

// const app = express();
// const PORT = 3000;

// app.listen(PORT, () => {
//     console.log(Servidor escutando na porta ${PORT}...);
// });

// app.get("/api", (_req, res) => {
//     res.status(200).send("Boas vindas à Imersão!");
// });
