const productModel = require("../models/productModel");
/* eslint-disable */
const getAll = async (req, res) => {
  try {
    const [result] = await productModel.getAll();
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(400).send("probleme");
  }
};

const getById = async (req, res) => {
  try {
    const [result] = await productModel.getById(req.params.id);
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(400).send("not found");
  }
};

const update = async (req, res) => {
  try {
    const { nameProduct, sinceProduct, imgProduct, product_id } = req.body;
    const [result] = await productModel.update(
      nameProduct,
      sinceProduct,
      imgProduct,
      product_id,
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
    const { nameProduct, sinceProduct, imgProduct, product_id } = req.body;
    const [result] = await productModel.create(
      nameProduct,
      sinceProduct,
      imgProduct,
      product_id
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
    const [result] = await productModel.delet(req.params.id);
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
