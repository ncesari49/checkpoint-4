import React, { useState } from "react";
import "@assets/styles/AddCompany.css";
import axios from "axios";

function AddCompany() {
  const [companyName, setCompanyName] = useState();
  const [description, setDescription] = useState();
  const [localisation, setLocalisation] = useState();
  const [activity, setActivity] = useState();
  const [imgCompany, setImgCompany] = useState();
  const [sinceCompany, setSinceCompany] = useState();

  const postCompany = () => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/company`, {
      companyName,
      description,
      localisation,
      activity,
      imgCompany,
      sinceCompany,
    });
  };

  return (
    <form id="addCompany">
      <input
        type="text"
        placeholder="nom"
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <textarea
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="localisation"
        onChange={(e) => {
          setLocalisation(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="activité"
        onChange={(e) => setActivity(e.target.value)}
      />
      <input
        type="text"
        placeholder="img"
        onChange={(e) => setImgCompany(e.target.value)}
      />
      <input
        type="text"
        placeholder="Date de debut de partenaria"
        onChange={(e) => setSinceCompany(e.target.value)}
      />
      <button type="button">Annuler</button>
      <button
        type="button"
        onClick={() => {
          postCompany();
        }}
      >
        Envoyer
      </button>
    </form>
  );
}

export default AddCompany;
