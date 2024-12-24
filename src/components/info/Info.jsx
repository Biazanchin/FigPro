import owl from "/owl1.png";
import "./Info.css";

const Info = () => {
  return (
    <section className="s-info">
      <div className="container">
        <p>
          Discover stickers that are true stars in our catalog! Our Featured
          Section showcases the most incredible and enchanting creations, ready
          to bring life to your chats and make your conversations even more
          special.
        </p>
        <div className="box">
          <img src={owl} alt="owl sticker" className="ilustra" />
          <div className="content">
            <ul className="text">
              <li>
                <strong>sticker library</strong>
                <h3>+1000</h3>
              </li>
              <li>
                <strong>free stickers</strong>
                <h3>+293</h3>
              </li>
              <li>
                <strong>stickers created every day</strong>
                <h3>+500</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
