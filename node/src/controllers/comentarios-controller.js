const comentariosService = require("../services/comentarios-service.js");

exports.getComentariosRecei = (req, res) => {
    comentariosService.getComentariosRecei(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err.message));
};
/*
exports.getRecipe = (req, res) => {
    recipeService.getRecipe(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err.message));
};*/

exports.insertComentario = (req, res) => {
    comentariosService.insertComentario(req.body)
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err.message));
};
/*
exports.updateRecipe = (req, res) => {
    recipeService.updateRecipe(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err.message));
};

exports.removeRecipe = (req, res) => {
    recipeService.removeRecipe(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(500).json(err.message));
};*/