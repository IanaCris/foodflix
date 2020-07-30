import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
      <img src={Logo} style={{ width: 250 }} alt="FoodFlix" />
      </a>
      <p>
        Criado por 
        {' '}
        <a href="https://www.linkedin.com/in/ianasousa/" target="_blank">
        IANACRIS
        </a> durante a
        {' '}
        <a href="https://www.alura.com.br/" target="_blank">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
