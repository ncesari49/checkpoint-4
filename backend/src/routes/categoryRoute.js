const express = require("express");

const router = express.Router();
const categoryController = require("../controllers/productController");

router.get("/", categoryController.getAll);
router.get("/id", categoryController.getById);
router.put("/:id", categoryController.update);
router.post("/:id", categoryController.create);
router.delete("/:id", categoryController.delet);

module.exports = router;
