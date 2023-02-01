const categoryModel = require("../models/categoryModel");
/* eslint-disable */
const getAll = async (req, res) => {
  try {
    const [result] = await categoryModel.getAll();
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(400).send("probleme");
  }
};

const getById = async (req, res) => {
  try {
    const [result] = await categoryModel.getById(req.params.id);
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(400).send("not found");
  }
};

const update = async (req, res) => {
  try {
    const { categoryName, product_id, company_id } = req.body;
    const [result] = await categoryModel.update(
      categoryName,
      product_id,
      company_id,
      req.params.id
    );
    if (result.affectedRows) {
      return res.status(200).send(result);
    }
  } catch (error) {
    console.error(error);
    return res.status(400).send("not update");
  }
};

const create = async (req, res) => {
  try {
    const { categoryName, product_id, company_id } = req.body;
    const [result] = await categoryModel.create(
      categoryName,
      product_id,
      company_id
    );
    if (result.affectedRows) {
      return res.status(201).send(result);
    }
  } catch (error) {
    console.error(error);
    return res.status(400).send("not create");
  }
};

const delet = async (req, res) => {
  try {
    const [result] = await categoryModel.delet(req.params.id);
    if (result.affectedRows) {
      return res.status(200).send("result");
    }
  } catch (error) {
    console.error(error);
    return res.status(400).send("not delete");
  }
};
/* eslint-enable */
module.exports = {
  getAll,
  getById,
  update,
  create,
  delet,
};
