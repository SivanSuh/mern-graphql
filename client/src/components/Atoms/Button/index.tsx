import React from "react";
import ButtonProps from "./props";

const Button: React.FC<ButtonProps> = ({ type, buttonName }) => {
  return (
    <button className="button" type={type}>
      {buttonName}
    </button>
  );
};
export default Button;
