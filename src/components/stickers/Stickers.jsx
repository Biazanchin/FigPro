import ghost from "../../assets/cartoon-ghost.svg";
import Cards from "../cards/Cards";
import "./Stickers.css";

const Stickers = () => {
  return (
    <section className="s-stickers">
      <div className="container">
        <div className="title">
          <span className="subtitle">Some</span>
          <h2>
            <span>Stick</span>
            <img src={ghost} alt="ghost text" />
            <span>rs</span>
          </h2>
        </div>
        <Cards />
      </div>
    </section>
  );
};

export default Stickers;
