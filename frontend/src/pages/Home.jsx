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
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          accusantium! Fuga, quis ea. Maxime exercitationem consectetur optio!
          Distinctio perspiciatis eos in, cumque placeat porro nesciunt pariatur
          iste laudantium, a non!
        </h2>
      </div>
    </div>
  );
}
