import React from "react";
import Card from "../Components/Card";
import { useContext } from "react";
import { ContextGlobal } from "../context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useContext(ContextGlobal)
  const { data, theme } = state


const deleteFav = () => {
  localStorage.clear();
  window.location.reload()
}

  return (
    <>
    <div className= {theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {data.map((dentist) => {
          return (
          <Card 
          key={dentist.id} 
          name={dentist.name} 
          id={dentist.id} 
          username={dentist.username}/>
          )
        })}
      </div>
      <button onClick={deleteFav} className="favButton">Delete all favorites</button>
    </div>
    </>
  );
};


export default Favs;
