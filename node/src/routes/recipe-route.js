const recipeController = require("../controllers/recipe-controller.js");
const router = require("express").Router();

router.get("", recipeController.getRecipes);
router.get("/:id",recipeController.getRecipe);
router.get("/user/:id",recipeController.getUserRecipes);
router.post("", recipeController.insertRecipe);
router.put("/:id", recipeController.updateRecipe);
router.delete("/:id", recipeController.removeRecipe);

module.exports = router;
