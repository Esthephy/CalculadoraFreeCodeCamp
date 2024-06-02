import React from "react";
import Logo from "../imagenes/logo.png";

const LogoFreeCodeCamp = () => {
  return (
    <div className="freecodecamp-logo-contenedor">
      <img
        src={Logo}
        className="freecodecamp-logo"
        alt="Logo de freeCodeCamp"
      />
    </div>
  );
};
export default LogoFreeCodeCamp;
