import { useContext } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ghost from "../../assets/cartoon-ghost.svg";
import Cards from "../cards/Cards";
import { StickerContext } from "../../context/StickerContext";
import "./Stickers.css";

const Stickers = () => {
  const { stickers } = useContext(StickerContext);

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
        <div className="splide-wrapper">
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              perMove: 3,
              arrows: true,
              pagination: false,
              speed: 800,
            }}
          >
            {stickers &&
              stickers.length > 0 &&
              stickers.map((sticker) => (
                <SplideSlide key={sticker.id}>
                  <Cards stickers={[sticker]} />
                </SplideSlide>
              ))}
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Stickers;
