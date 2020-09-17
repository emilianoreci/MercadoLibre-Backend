//  @ Package
const { Router } = require("express");
const router = Router();
//  @ Own
const ctrl = require("../controllers");

//********* Route Buscar Productos ********* /
router.get("/items", ctrl.getProducts);

//********* Route Buscar Producto por Id ********* /
router.get("/items/:id", ctrl.getProductById);

module.exports = router;
