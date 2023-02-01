const companyModel = require("../models/companyModel");
/* eslint-disable */
const getAll = async (req, res) => {
  try {
    const [result] = await companyModel.getAll();
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(400).send("probleme");
  }
};

const getById = async (req, res) => {
  try {
    const [result] = await companyModel.getById(req.params.id);
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(400).send("not found");
  }
};

const update = async (req, res) => {
  try {
    const { companyName, description, localisation, activity, imgCompany } =
      req.body;
    const [result] = await companyModel.update(
      companyName,
      description,
      localisation,
      activity,
      imgCompany,
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
    const { companyName, description, localisation, activity, imgCompany } =
      req.body;
    const [result] = await companyModel.create(
      companyName,
      description,
      localisation,
      activity,
      imgCompany
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
    const [result] = await companyModel.delet(req.params.id);
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
