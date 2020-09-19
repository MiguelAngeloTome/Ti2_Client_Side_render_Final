const comentariosController = require("../controllers/comentarios-controller.js");
const router = require("express").Router();
const authorize = require("../configs/authorization");

router.get("/:id", comentariosController.getComentariosRecei);
/*router.get("/:id",comentariosController.getRecipe);
router.get("/user/:id",comentariosController.getUserRecipes);*/
router.post("", authorize(), comentariosController.insertComentario);
//router.put("/:id", comentariosController.updateRecipe);
//router.delete("/:id", comentariosController.removeRecipe);

module.exports = router;