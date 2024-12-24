import "./HeroHome.css";
import sticker from "../../assets/Animated_Stickers.svg";
import arrow from "../../assets/arrow.svg";
import ghost1 from "../../assets/ghost-fear.svg";
import ghost2 from "../../assets/cartoon-ghost.svg";
import ghost3 from "../../assets/halloween.svg";
import bigGhost from "../../assets/art-destaque.png";

const HeroHome = () => {
  return (
    <section className="s-hero">
      <div className="container">
        <div className="left-text">
          <div className="title">
            <h1>
              Explore the <br /> <span>Enchanted World</span>{" "}
            </h1>
            <img src={sticker} alt="animated stickers" />
          </div>
          <p>
            Welcome to Figpro, your gateway to a universe filled with magic and
            fun! Explore our exclusive sections and dive into an ocean of
            creativity.
          </p>
          <button type="button">
            <span>Lets Go</span>
            <img src={arrow} alt="arrow" />
          </button>
          <div className="users">
            <ul>
              <li>
                <img src={ghost1} alt="ghost 1" />
              </li>
              <li>
                <img src={ghost2} alt="ghost 2" />
              </li>
              <li>
                <img src={ghost3} alt="ghost 3" />
              </li>
            </ul>
            <strong>+339k Active Users</strong>
          </div>
        </div>
        <img src={bigGhost} alt="Ilustration hero" className="ilustra" />
      </div>
    </section>
  );
};

export default HeroHome;
