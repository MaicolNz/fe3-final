import React, { useContext } from "react";
import { ContextGlobal } from "../context/global.context";
import { Link } from "react-router-dom";
const Card = ({ name, username, id }) => {
  const { dispatch, state } = useContext(ContextGlobal);
  const { data } = state;
  const { theme } = state;

  const addFav = () => {
    if (!data) {
      return; 
    }

    const isDentistInFavorites = data.some((dentist) => dentist.id === id);

    if (isDentistInFavorites) {
      const updatedFavorites = data.filter((dentist) => dentist.id !== id);
      dispatch({ type: "FAVORITES", payload: updatedFavorites });
    } else {
      const newDentist = { name, username, id };
      dispatch({ type: "FAVORITES", payload: [...data, newDentist] });
    }

    localStorage.setItem("favoritesDentists", JSON.stringify(data));
  };

  return (
    <div className={`card-cont ${theme}`}>
      <Link  to={`/detail/${id}`}>
        <div className="card">
          <img
            className="cardImg"
            src="./images/doctor.jpg"
            alt="doctor-images"
          />
          <h2>{name}</h2>
          <h4>{username}</h4>
          <h4>{id}</h4>
        </div>
      </Link>
      <button onClick={addFav}>Add to Favorites</button>

    </div>
  );
};

export default Card;
