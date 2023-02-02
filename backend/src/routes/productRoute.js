const express = require("express");

const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.getAll);
router.get("/id", productController.getById);
router.put("/:id", productController.update);
router.post("/:id", productController.create);
router.delete("/:id", productController.delet);

module.exports = router;
