const categoriaController = require("../controllers/categoria-controller.js");
const router = require("express").Router();
const authorize = require("../configs/authorization");

router.get("", authorize(), categoriaController.getCategorias);
router.get("/:id", authorize(),categoriaController.getCategoria);
router.post("", authorize(), categoriaController.insertCategoria);
router.put("/:id", authorize(), categoriaController.updateCategoria);
router.delete("/:id", authorize(), categoriaController.removeCategoria);

module.exports = router;