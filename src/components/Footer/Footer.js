import React from 'react';
import "./Footer.scss";

const Footer = ({listOne, listTwo}) => {
    const itemsListOne = listOne.map((text, i) => <a href="" className="footer-list-first-column" key={i}>{text.name}</a>);
    const itemsListTwo = listTwo.map((text, i) => <a href="" className="footer-list-second-column" key={i}>{text.name}</a>);

    return (
        <div className="footer">
            <section className="container">
                <div className="footer-list">
                    <div className="footer-list-first">
                        <a href="" className="footer-list-first-title">НАВЧАЛЬНО-РЕАБІЛІТАЦІЙНИЙ ЦЕНТР №17 м. КИЄВА</a>
                        {itemsListOne}
                    </div>
                    <div className="footer-list-second">
                        <a href="" className="footer-list-first-title">ПІДРОЗДІЛИ НАВЧАЛЬНОГО ЗАКЛАДУ</a>
                        {itemsListTwo}
                    </div>
                    <div className="footer-list-third">
                        <a href="" className="footer-list-third-title">ОТРИМАТИ КОНСУЛЬТАЦІЮ</a>
                        <a href="" className="footer-list-third-work">ПН — ПТ   08:00 — 18:00</a>
                        <a href="" className="footer-list-third-place">м. Київ, вул.  Ушинського 15,  03151 044  242 0996</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
