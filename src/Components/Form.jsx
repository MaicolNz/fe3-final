import React,  { useState} from "react";
import CardForm from "./CardForm";


const Form = () => {
  const [userNom, setNom] = useState("");
  const [userApe, setApe] = useState("");
  const [userEmail, setEmail] = useState("");
  const [enviar, setEnviar] = useState(false);
  const [error, setError] = useState("");

  
  const onChangeUserName = (event) =>{
    setNom(event.target.value);
  };
  const onChangeUserLastName = (event) =>{
    setApe(event.target.value);
  };
  const onChangeUserMail = (event) =>{
    setEmail(event.target.value);
  };


  const handleSubmit = (event) =>{
    event.preventDefault();

    const validUserName = userNom.trim();
    if(validUserName.length < 5){
      setError("La información no es correcta, debes ingresar un nombre de al menos 5 caracteres");
      return;
    }

    const validEmail = userEmail.trim();
    const regexEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;    
     if (!regexEmail.test(validEmail)) {
      setError("La información no es correcta, debes ingresar un correo electronico valido");
      return;
    }
    
    setEnviar(true);
    setError("");
  };

  return (
    <div className="formCard">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nombre:' value={userNom} onChange={onChangeUserName} />
        <input type="text" placeholder='Apellido:' value={userApe} onChange={onChangeUserLastName} />
        <input type="mail" placeholder='Email:' value={userEmail} onChange={onChangeUserMail} />
        <input type="submit" value="Submit" />
      </form>

    <div className='error'>{error}</div>

      {enviar ? <CardForm userNom={userNom} userApe={userApe} userEmail={userEmail}/>: "" }

    </div>
  );
};

export default Form;
