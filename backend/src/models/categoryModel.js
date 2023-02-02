const db = require("../db");
/* eslint-disable */
const getAll = () => {
  return db.query("SELECT * FROM product");
};

const getById = (id) => {
  return db.query("SELECT  FROM product WHERE id=?", [id]);
};

const update = (categoryName, product_id, company_id, id) => {
  return db.query(
    "UPDATE product SET categoryName=?, product_id=?, company_id=? WHERE id=?",
    [categoryName, product_id, company_id, id]
  );
};

const create = (categoryName, product_id, company_id) => {
  return db.query(
    "INSERT INTO product categoryName=?, product_id=?, company_id=? VALUES (?, ?, ?,  )",
    [categoryName, product_id, company_id]
  );
};

const delet = (id) => {
  return db.query("DELETE FROM product WHERE id=?", [id]);
};
/* eslint-enable */
module.exports = {
  getAll,
  getById,
  update,
  create,
  delet,
};
