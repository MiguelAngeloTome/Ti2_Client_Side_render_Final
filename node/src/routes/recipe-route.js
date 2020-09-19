const recipeController = require("../controllers/recipe-controller.js");
const router = require("express").Router();
const authorize = require("../configs/authorization");

router.get("", recipeController.getRecipes);
router.get("/:id",recipeController.getRecipe);
router.get("/user/:id", authorize(),recipeController.getUserRecipes);
router.post("", authorize(), recipeController.insertRecipe);
router.put("/:id", authorize(), recipeController.updateRecipe);
router.delete("/:id", authorize(), recipeController.removeRecipe);

module.exports = router;
