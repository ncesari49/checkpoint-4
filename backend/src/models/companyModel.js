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
  sinceCompany,
  id
) => {
  return db.query(
    "UPDATE company SET companyName=?, description=?, localisation=?, activity=?, imgCompany=?, sinceCompany=? WHERE id=?",
    [
      companyName,
      description,
      localisation,
      activity,
      imgCompany,
      sinceCompany,
      id,
    ]
  );
};

const create = (
  companyName,
  description,
  localisation,
  activity,
  imgCompany,
  sinceCompany
) => {
  return db.query(
    "INSERT INTO company (companyName, description, localisation, activity, imgCompany, sinceCompany) VALUES (?, ?, ?, ?, ?, ?)",
    [companyName, description, localisation, activity, imgCompany, sinceCompany]
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
