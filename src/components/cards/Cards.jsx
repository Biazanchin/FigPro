import { useEffect, useState } from "react";
import dolar from "../../assets/dolar.png";
import heartEmpty from "../../assets/heart.png";
import heartFilled from "../../assets/heart2.png";
import username from "../../assets/username.png";
import "./Cards.css";

const Cards = () => {
  const [stickers, setStickers] = useState([]);
  const [hoveredPriceId, setHoveredPriceId] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchStickers = async () => {
      try {
        const response = await fetch("http://localhost:5000/stickers");
        const data = await response.json();
        setStickers(data);
      } catch (error) {
        console.log("Error fetching stickers: ", error);
      }
    };
    fetchStickers();
  }, []);

  const toggleFavorite = (event, stickerId) => {
    event.preventDefault();
    if (favorites.includes(stickerId)) {
      setFavorites(favorites.filter((id) => id !== stickerId));
    } else {
      setFavorites([...favorites, stickerId]);
    }
  };

  return (
    <div className="all">
      {stickers.map((sticker) => (
        <div key={sticker.id} className="card">
          <div className="content">
            <div className="image">
              <img src={sticker.imgUrl} alt={sticker.name} />
            </div>
            <div className="info">
              <h3>{sticker.name}</h3>
              <p>{sticker.description}</p>
            </div>
            <ul>
              <li>
                <a
                  href="#"
                  onMouseEnter={() => setHoveredPriceId(sticker.id)}
                  onMouseLeave={() => setHoveredPriceId(null)}
                >
                  <img src={dolar} alt="price icon" />
                  {hoveredPriceId === sticker.id && (
                    <span className="tooltip">${sticker.price.toFixed(2)}</span>
                  )}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(event) => toggleFavorite(event, sticker.id)}
                >
                  <img
                    src={
                      favorites.includes(sticker.id) ? heartFilled : heartEmpty
                    }
                    alt="fav icon"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={username} alt="username icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
