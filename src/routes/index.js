const { Router } = require("express");
const formsRoutes = require('../routes/forms.routes');
const routes = Router();

routes.use("/forms", formsRoutes);


module.exports = routes
