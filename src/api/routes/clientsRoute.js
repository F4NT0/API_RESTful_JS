const express = require("express");
const controller = require("../controllers/clientsController");

const router = express.Router();

router.get('/clients/:id',controller.findOne);

router.get('/clients',controller.findAll);

router.post('/clients',controller.create);

router.put('/clients/:id',controller.update);

router.delete('/clients/:id', controller.delete);

module.exports = router;