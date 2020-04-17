const recipeService = require("../services/recipe-service.js");

exports.getRecipes = (req, res) => {
    recipeService.getRecipes()
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err.message));
};

exports.getRecipe = (req, res) => {
    recipeService.getRecipe(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err.message));
};

exports.insertRecipe = (req, res) => {
    recipeService.insertRecipe(req.body)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err.message));
};

exports.updateRecipe = (req, res) => {
    recipeService.updateRecipe(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err.message));
};

exports.removeRecipe = (req, res) => {
    recipeService.removeRecipe(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err.message));
};