import React from "react";
import "@assets/styles/CompanyList.css";
import PropsTypes from "prop-types";
import axios from "axios";

function CompanyList({ name, id }) {
  const deletCompany = () => {
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/company/${id}`);
  };
  return (
    <div className="companyList">
      <h4>{name}</h4>
      <button
        type="button"
        onClick={() => {
          deletCompany();
        }}
      >
        supp
      </button>
    </div>
  );
}

CompanyList.propTypes = {
  name: PropsTypes.string.isRequired,
  id: PropsTypes.string.isRequired,
};

export default CompanyList;
