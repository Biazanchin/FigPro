/* eslint-disable react/prop-types */
import arrow from "../../assets/arrow.png";
import "./Button.css";

const Button = ({ children }) => {
  return (
    <a className="btn-primary">
      <span>{children}</span>
      <img src={arrow} alt="arrow" />
    </a>
  );
};

export default Button;
