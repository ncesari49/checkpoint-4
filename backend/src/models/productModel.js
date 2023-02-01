const db = require("../db");

const getAll = () => {
  return db.query("SELECT * FROM company");
};

const getById = (id) => {
  return db.query("SELECT  FROM company WHERE id=?", [id]);
};

const update = (
  companyName,
  description,
  localisation,
  activity,
  imgCompany,
  id
) => {
  return db.query(
    "UPDATE company SET companyName=?, description=?, localisation=?, activity=?, imgCompany=?, sinceCompany=? WHERE id=?",
    [companyName, description, localisation, activity, imgCompany, id]
  );
};

const create = (
  companyName,
  description,
  localisation,
  activity,
  imgCompany
) => {
  return db.query(
    "INSERT INTO company(companyName, description, localisation, activity, imgCompany) VALUES (?, ?, ?, ?, ?)",
    [companyName, description, localisation, activity, imgCompany]
  );
};

const delet = (id) => {
  return db.query("DELETE FROM company WHERE id=?", [id]);
};

module.exports = {
  getAll,
  getById,
  update,
  create,
  delet,
};
