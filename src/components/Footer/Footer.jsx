import React from 'react';

import './Footer.scss';

const Footer = () => {
  return (
    <header className="footer">
      <div className="footer__container container">
        <div className="footer__text">
          <div>&copy; 2024, </div>
          <a
            target="_blank"
            href="https://github.com/dumbus"
            className="footer__link"
            rel="noopener noreferrer"
          >
            dumbus (Дегтярёв Максим)
          </a>
        </div>
      </div>
    </header>
  );
};

export default Footer;
