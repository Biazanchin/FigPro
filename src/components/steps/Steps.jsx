import bear1 from "/urso1.png";
import bear2 from "/urso2.png";
import bear3 from "/urso3.png";
import "./Steps.css";
import Button from "../button/Button";

const Steps = () => {
  return (
    <section className="s-steps">
      <div className="container">
        <div className="left-container">
          <ul>
            <li>
              <h2>How to Use</h2>
              <h3>1 - Discover the Enchantment:</h3>
              <p>
                Join us in three simple steps! First, explore the Featured
                Section and find stickers that captivate you the most.
              </p>
            </li>
            <li>
              <h3>2 - Connect to the Magic:</h3>
              <p>
                {`Next, click "Explore More" to unveil the story behind the
                project in the About the Project Section. Connect to the magic
                that drives each unique sticker.`}
              </p>
            </li>
            <li>
              <h3>3 - Become Part of the Tale:</h3>
              <p>
                {`Lastly, click "Learn More About Us" and embark on the journey of
                stickers that tell stories. Now, you're ready to become part of
                this enchanting tale. Just follow these steps and register to
                unlock a world of fun!`}
              </p>
            </li>
          </ul>
        </div>
        <div className="right-container">
          <img src={bear2} alt="bear1" className="one" />
          <img src={bear3} alt="bear2" className="two" />
          <img src={bear1} alt="bear3" className="three" />
          <div className="shadow"></div>
        </div>
      </div>
      <Button>Lets Start</Button>
    </section>
  );
};

export default Steps;
