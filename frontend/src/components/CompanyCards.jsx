import React from "react";
import "@assets/styles/Companycards.css";
import PropsTypes from "prop-types";

function CompanyCards({ name, desc, loc, activity, since, img }) {
  return (
    <div className="companyCards">
      <div className="titleActivitySinceDesc">
        <div className="titleActivitySince">
          <div className="titleActivity">
            <h2>{name}</h2>
            <p>,{activity}</p>
          </div>

          <div className="sinceCompany">
            <p>{since}</p>
          </div>
        </div>

        <p>{desc}</p>
        <p>{loc}</p>
      </div>

      <div className="conatainerImgCompanyCard">
        <img src={img} alt="entreprise" />
      </div>
    </div>
  );
}

CompanyCards.propTypes = {
  name: PropsTypes.string.isRequired,
  activity: PropsTypes.string.isRequired,
  loc: PropsTypes.string.isRequired,
  desc: PropsTypes.string.isRequired,
  since: PropsTypes.string.isRequired,
  img: PropsTypes.string,
};

CompanyCards.defaultProps = {
  img: "",
};

export default CompanyCards;
