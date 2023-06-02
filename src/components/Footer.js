import React from 'react';
import '../style/Footer.css';

function Footer() {
    const newDate = new Date();
    const year = newDate.getFullYear();

    return (
        <footer className="Footer">
            <div className="Footer_div">
                <p>{year} &copy; Gabriela Gontijo. All rights reserved.</p>
            </div>
        </footer>);

  };

  export default Footer;
