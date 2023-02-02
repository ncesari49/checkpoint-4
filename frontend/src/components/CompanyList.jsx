import React from "react";
import "@assets/styles/CompanyList.css";
import PropsTypes from "prop-types";

function CompanyList({ name }) {
  return (
    <div className="companyList">
      <h4>{name}</h4>
      <button type="button">supp</button>
    </div>
  );
}

CompanyList.propTypes = {
  name: PropsTypes.string.isRequired,
};

export default CompanyList;
