const categoriaService = require("../services/categoria-service.js");

exports.getCategorias = (req, res) => {
    categoriaService.getCategorias()
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err.message));
};

exports.getCategoria = (req, res) => {
    categoriaService.getCategoria(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err.message));
};

exports.insertCategoria = (req, res) => {
    categoriaService.insertCategoria(req.body)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err.message));
};

exports.updateCategoria = (req, res) => {
    categoriaService.updateCategoria(req.params.id, req.body)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err.message));
};

exports.removeCategoria = (req, res) => {
    categoriaService.removeCategoria(req.params.id)
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err.message));
};