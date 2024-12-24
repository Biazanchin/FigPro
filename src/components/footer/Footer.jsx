import "./Footer.css";
import logo from "../../assets/FIG.svg";
import logofooter from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="first-area">
          <div className="left">
            <img src={logofooter} alt="logofooter" className="logo-footer" />
            <img src={logo} alt="logo" className="logo" />
            <p>
              With over 500,000 active users worldwide, turning creativity into
              collectibles. Unleash your imagination with FigPro!
            </p>
          </div>
          <div className="right">
            <h3>our networks</h3>
            <ul>
              <li>
                <a href="https://www.instagram.com" target="_blank">
                  INSTAGRAM
                </a>
              </li>
              <li>
                <a href="https://x.com" target="_blank">
                  TWITTER
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com" target="_blank">
                  YOUTUBE
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="second-area">
          <p>&copy; 2024 Inc. All rights reserved.</p>
          <p>{`{} Webisite developed by Beatriz Zanchin`}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
