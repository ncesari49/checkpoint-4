import React, { useEffect, useState } from "react";
import axios from "axios";
import CompanyCards from "@components/CompanyCards";
import "@assets/styles/Company.css";

function Company() {
  const [dataCompany, setDataCompany] = useState([]);

  const getAllCompany = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/company`)
      .then((res) => {
        setDataCompany(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllCompany();
  }, []);

  return (
    <div className="Company">
      <div className="descriptionText">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur,
          expedita! Enim quas, libero perspiciatis illo aliquam magni vel animi.
          Non voluptatem itaque quisquam aliquam corporis recusandae at hic
          perferendis dolor. Temporibus, ab doloribus. Ad quisquam fuga
          reiciendis fugiat a cumque itaque dolorum dolorem consequuntur, aut
          libero pariatur eligendi et amet ipsa soluta quaerat saepe? Deserunt
          eaque ullam tempore quam mollitia? Quidem ipsa fugiat est harum.
          Ratione doloribus voluptates, aliquam veniam harum, a eveniet possimus
          sunt repellendus quod itaque illum beatae repellat quos accusantium
          inventore cumque exercitationem numquam id velit dolore? Quos, quis
          tempore quia nostrum tempora soluta animi molestias minima illo in
          laboriosam reiciendis facere quasi culpa accusamus sunt, voluptas
          consequuntur iusto a! Facere architecto debitis voluptates id tenetur!
          Sunt?
        </p>
      </div>
      <div className="containerCompanyCards">
        {dataCompany.map((el) => {
          return (
            <CompanyCards
              key={el.id}
              name={el.companyName}
              desc={el.description}
              loc={el.localisation}
              activity={el.activity}
              since={el.sinceCompany}
              img={el.imgCompany}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Company;
