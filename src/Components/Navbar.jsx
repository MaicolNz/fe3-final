import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { ContextGlobal } from "../context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useContext(ContextGlobal);
const { theme } = state;


  const changeTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };
  


  return (
  <div className={theme}>
    <nav>
      <img src="../../DH.ico" alt="logo" />
      <Link to ="/">Home</Link>
      <Link to ="/favorites">Favs</Link>
      <Link to ="/contact">Contact</Link>
      <button className={`hover${theme} `}  onClick={changeTheme}>Theme</button>
    </nav>
  </div>
  )
}

export default Navbar
