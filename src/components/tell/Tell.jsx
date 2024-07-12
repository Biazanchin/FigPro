import "./Tell.css";
import frog from "/frog.png";

const Tell = () => {
  return (
    <section className="s-tell">
      <div className="container">
        <div className="title">
          <h4>
            Stickers that <strong>Tell</strong>
          </h4>
          <h2>Stories</h2>
        </div>
        <div className="text">
          <img src={frog} alt="frog" />
          <div className="description">
            <p>
              Each sticker is a small visual narrative, conveying fellings and
              emotions in every pixel. From funny expressions to emotional
              moments, our stickers are more than simple images; they are
              stories you can share with the world.
            </p>
            <p>Check out some of our sticker gallery to get even more hyped.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tell;
