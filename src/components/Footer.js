import React from 'react';

const Footer = () => {

   const year = new Date().getFullYear();

  return (
    <div className="footer">
      (c){year} created using React <a href="https://github.com/Longmann94">Long Mann</a>
    </div>
  )
}

export default Footer;
