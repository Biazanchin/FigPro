import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ghost from "../../assets/cartoon-ghost.svg";
import Cards from "../cards/Cards";
import { sticker } from "../../../db/db";
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
        <div className="splide-wrapper">
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              perMove: 3,
              arrows: true,
              pagination: false,
              speed: 800,
              breakpoints: {
                991: {
                  perPage: 2,
                  perMove: 2,
                },
                560: {
                  perPage: 1,
                  perMove: 1,
                },
              },
            }}
          >
            {sticker &&
              sticker.length > 0 &&
              sticker.map((sticker) => (
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
