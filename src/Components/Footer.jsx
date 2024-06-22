import React from 'react'
import { useContext } from 'react';
import { ContextGlobal } from '../context/global.context';

const Footer = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;
  return (
    <footer className={`no${theme}`}>
        <p>Powered by</p>
        <img src="../../images/DH.png" alt='DH-logo' />
        <div className="footer-links">  <img src="../../images/ico-instagram.png" alt='instagram-logo' />
        <img src="../../images/ico-whatsapp.png" alt='twitter-logo' /> 
        <img src="../../images/ico-facebook.png" alt='facebook-logo' />
        <img src="../../images/ico-tiktok.png" alt='linkedin-logo' />
</div>
    </footer>
  )
}

export default Footer
