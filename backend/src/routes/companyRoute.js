const express = require("express");

const router = express.Router();
const companyController = require("../controllers/companyController");

router.get("/", companyController.getAll);
router.get("/id", companyController.getById);
router.put("/:id", companyController.update);
router.post("/", companyController.create);
router.delete("/:id", companyController.delet);

module.exports = router;
