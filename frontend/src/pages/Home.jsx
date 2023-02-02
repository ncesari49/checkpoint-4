import imgDesc from "@assets/img/imgDesc.jpg";
import earth from "@assets/img/earth.png";
import light from "@assets/img/light-bulb-outline.png";
import recycle from "@assets/img/recycle.png";
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
          Fuga, quis ea. Maxime exercitationem consectetur optio! Distinctio
          perspiciatis eos in, cumque placeat porro nesciunt pariatur iste
          laudantium, a non!
        </h2>
      </div>
      <div className="textDescription">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
          voluptas laborum voluptatem ea assumenda asperiores quidem ex a minus
          consequuntur expedita, eos neque dolores officiis? Dolore tempora
          repellat veritatis adipisci! Nesciunt fugiat deleniti nisi sit amet
          natus, voluptas expedita cumque culpa temporibus minus, labore
          cupiditate assumenda cum similique! Hic quisquam nesciunt molestias
          necessitatibus laboriosam nisi deleniti praesentium ratione vitae
          consectetur? Doloribus temporibus facere accusamus debitis
          perspiciatis illo est impedit excepturi eveniet exercitationem eum
          ipsum molestiae, explicabo asperiores deleniti id dolore nihil
          ducimus! Voluptates, pariatur libero fugiat officia at eveniet rerum!
        </p>
      </div>
      <div className="containerIcon">
        <div className="icon">
          <img src={earth} alt="terre ecolo" />
        </div>
        <div className="icon">
          <img src={light} alt="ampoule" />
        </div>
        <div className="icon">
          <img src={recycle} alt="recyclage" />
        </div>
      </div>
      <div className="textDescription">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt magni
          debitis sit ea voluptatum explicabo maxime distinctio incidunt dolor
          quisquam consequuntur a quis, ullam harum ipsum quasi alias vitae
          delectus? Voluptates corrupti possimus, odio, quia facilis atque sequi
          adipisci itaque sit temporibus illo tempora vel, qui recusandae quae
          minus veniam commodi magnam molestiae fugiat voluptatum dignissimos
          consequuntur esse minima? Dolorem. Eos magnam consectetur fugiat
          eveniet, illo libero, aliquid, tempore odio eaque ullam saepe cumque!
          Qui, ipsum maxime, sit pariatur eos inventore laboriosam, sed quisquam
          animi cum consectetur quam perspiciatis dolorem. Exercitationem error
          odit perspiciatis, ea, distinctio ex sit assumenda ipsa facilis
          aperiam repellendus id, quia at voluptates! Iste molestiae maiores
          voluptatibus saepe omnis possimus quam, magnam doloribus cupiditate
          labore officia!
        </p>
      </div>
    </div>
  );
}
