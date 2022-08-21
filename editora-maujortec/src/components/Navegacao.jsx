import React from "react";
import { NavLink } from "react-router-dom";

let linkCorrent = {
  color: "#02739",
};

function Navegacao() {
  return (
    <ul>
      <li>
        <NavLink exact activeStyle={linkCorrent} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={linkCorrent} to="/frontend">
          Frontend
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={linkCorrent} to="/programacao">
          Programacao
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={linkCorrent} to="/design">
          Design
        </NavLink>
      </li>
      <li>
        <NavLink exact activeStyle={linkCorrent} to="/catalogo">
          Catalogo
        </NavLink>
      </li>
    </ul>
  );
}

export default Navegacao;
