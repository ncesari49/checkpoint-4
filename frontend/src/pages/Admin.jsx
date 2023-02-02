import React, { useEffect, useState } from "react";
import axios from "axios";
import "@assets/styles/Admin.css";
import CompanyList from "@components/CompanyList";
import AddCompany from "@components/AddCompany";

function Admin() {
  const [dataCompany, setDataCompany] = useState([]);
  const [componentAdd, setComponentAdd] = useState(false);

  const handlerComponentAdd = () => {
    setComponentAdd(!componentAdd);
  };

  const getAllCompany = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/company`)
      .then((res) => {
        setDataCompany(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAllCompany();
  }, []);
  return (
    <div className="Admin">
      <div className="containerCompany">
        <div className="containerAddCompany">
          <h2>Entreprise</h2>
          <button type="button" onClick={handlerComponentAdd}>
            ajouter
          </button>
        </div>
        <div className="containerList">
          {dataCompany.map((el) => {
            return <CompanyList key={el.id} id={el.id} name={el.companyName} />;
          })}
        </div>
      </div>
      {componentAdd && <AddCompany handlerComponentAdd={handlerComponentAdd} />}
    </div>
  );
}

export default Admin;
