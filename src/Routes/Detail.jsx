import React from "react";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;
  const [dentista, setDentista] = useState({});
  const paramsDentist = useParams();

  const getSingleDentist = async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + paramsDentist.id
    ).then((response) => {
      return response.json();
    });
    console.log(data);
    setDentista(data);
  };

  useEffect(() => {
    getSingleDentist();
  }, []);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <div className={`details ${theme}`}>
        <h1>Detalles del dentista</h1>
        <div className="contDetails">
          <div className="detailsInfo">
            <h3>Nombre: {dentista.name}</h3>
            <h3>Username: {dentista.username}</h3>
            <h3>Id : {dentista.id}</h3>
            <h3>website: {dentista.website}</h3>
          </div>
          <img src="../../images/doctor.jpg"></img>
        </div>
      </div>
    </>
  );
};

export default Detail;
