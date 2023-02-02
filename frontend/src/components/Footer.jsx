import React from "react";
import "@assets/styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div>
        <div className="contact">
          <h4>Contact</h4>
          <p>4, rue Baron - 44000 Nantes</p>
          <p>lundi au vendredi</p>
          <p>contact@wildcodeschool.fr</p>
          <div>image des reseau</div>
        </div>

        <div className="support">
          <h4>Support</h4>
          <p>politique de confidentialité</p>
          <p>gestion des cookies</p>
          <p>mention légal</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
