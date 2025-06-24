const { Router } = require("express");
const formsRoutes = Router();

const formsController = require("../controllers/formsController")

// Rotas para os formulários usando POST para envio de dados
formsRoutes.post("/form1", formsController.form1);
formsRoutes.post("/form2", formsController.form2);
formsRoutes.post("/form3", formsController.form3);

// Rota para liberação de acesso à internet
formsRoutes.post("/release-access", formsController.releaseAccess);

module.exports = formsRoutes