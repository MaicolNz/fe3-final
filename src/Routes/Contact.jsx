import React from 'react'
import Form from '../Components/Form'
import { useContext } from "react";
import { ContextGlobal } from "../context/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const { state } = useContext(ContextGlobal)
  const { theme } = state

  return (
    <div className={`contact ${theme}`} >
      <h2 className="FContacto">Quieres saber mas ?</h2>
      <p className="FContacto">Contactanos con el siguiente formulario</p>
      <Form/>
    </div>
  )
}


export default Contact