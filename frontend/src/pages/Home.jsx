import imgDesc from "@assets/img/imgDesc.jpg";
import "@assets/styles/Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="imgDescription">
        <img
          src={imgDesc}
          alt="paysage de bambou avec un khern au premier plan"
        />
      </div>
    </div>
  );
}
