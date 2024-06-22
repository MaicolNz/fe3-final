import React from "react"

const CardForm = ({userNom,userApe,userEmail}) => {
    return (
    <div className="formCard">
        <h4>Registro existoso:</h4>
        <h5>Contactaremos contigo  {userNom} {userApe},</h5>
        <h5>al email: {userEmail}</h5>
    </div>
    )
}

export default CardForm