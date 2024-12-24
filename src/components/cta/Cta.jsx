import "./Cta.css";
import Button from "../button/Button";
import hawk from "../../assets/img03.png";
import tiger from "../../assets/img01.png";
import octopus from "../../assets/img04.png";
import owl from "../../assets/img02.png";

const CallTA = () => {
  return (
    <section className="s-cta">
      <div className="container">
        <div className="title">
          <h2>WORLD</h2>
          <span>of possibility</span>
        </div>
        <p>
          Turn your <strong>creativity</strong> into unique stickers!
          <strong> Sign up</strong> now on our website, create, buy, and sell
          your own sticker designs. The {`collector's`} community is{" "}
          <strong>waiting</strong> for you!
        </p>
        <Button>Sign Up</Button>
      </div>
      <img src={hawk} alt="hawk image" className="illustra hawk" />
      <img src={tiger} alt="tiger image" className="illustra tiger" />
      <img src={octopus} alt="octopus image" className="illustra octopus" />
      <img src={owl} alt="owl image" className="illustra owl" />
    </section>
  );
};

export default CallTA;
