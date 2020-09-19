const recipeService = require("../services/recipe-service.js");

exports.getRecipes = (req, res) => {
    console.log("hello");
    recipeService.getRecipes()
    .then(result => {res.json(result); console.log(result)})
    .catch(err => {res.status(500).json(err.message);console.log("error" + err.message)});
};

exports.getRecipe = (req, res) => {
    recipeService.getRecipe(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err.message));
};

exports.getUserRecipes = (req, res) => {
    recipeService.getUserRecipes(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err.message));
};

exports.insertRecipe = (req, res) => {
    recipeService.insertRecipe(req.body)
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err.message));
};

exports.updateRecipe = (req, res) => {
    console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    recipeService.updateRecipe(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err.message));
};

exports.removeRecipe = (req, res) => {
    recipeService.removeRecipe(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err.message));
};