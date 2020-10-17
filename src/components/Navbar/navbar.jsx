import React, { Component } from 'react';
import Mes from './images/MES.png';
import REC from './images/Rec.png';
import "./navbar.css";
import "./js/script.js";

class navbar extends Component {
  // const navbar = () => {

  render() {
    return (

      <nav className="mynav">
        <div className="my-container">


          <ul>
            <li>
              <img src={Mes} />
            </li>
            <li>
              <a href="" id="about-button" onclick="class_change('about')">Про навчально- <br /> реабілітаційний центр</a>
            </li>
            <li>
              <a href="" id="special-button" onclick="class_change('special')">Спеціальна <br /> школа-інтернат</a>
            </li>
            <li>
              <a href="" id="reabilitation-button" onclick="class_change('reabilitation')">Реабілітаційний <br /> центр</a>
            </li>
            <li>
              <a href="" id="before-school-button" onclick="class_change('before-school')">Дошкільний <br /> навчальний  заклад</a>
            </li>
            <li>
              <a href="" id="sponsor-button" className="sponsor" onclick="class_change('sponsor')">Спонсорство</a>
            </li>
            <li>
              <a href="" id="work-button" onclick="class_change('work')">Вакансії</a>
            </li>
            <li>
              <div className="mdropdown" onmouseover="show_contacts()" onmouseout="hide_contacts()">
                <button className="mdropbtn">
                  <i className="fas fa-map-marker-alt market"></i>
                  Контакти
                </button>
              </div>
            </li>
            <div className="m2dropdown">
              <button className="m2dropbtn">Укр
                <i className="fa fa-caret-down caret-custom"></i>
              </button>
              <div className="m2dropdown-content">
                <a href="#">Eng</a>
                <a href="#">De</a>
                <a href="#">Рус</a>
              </div>
            </div>
          </ul>

        </div>

        <div className="my-container">
          <div className="mdropdown-content" id="to-show">
            <div id="contacts">
              <div>
                <img src="images/Map.png" id="map" />
              </div>
              <div id="contacts-text">
                <div id="contacts-text1">
                  <h3>вул. Ушинського 15, Київ </h3><br />
                  <br />
                  <b> Як доїхати </b> <br /> <br />
                    Від метро Шулявська <br />
                    Маршрутний автобус № 239, 477, 223, 227, 463, 550 до зупинки Площа Космонавтів, потім пішки 10 хвилин.
                    <br /> <br /> <br />
                    Від метро Деміївська <br />
                    Маршрутний автобус № 205, 239, 477, тролейбус № 42д до зупинки Площа Космонавтів, потім пішки 10 хвилин.
                </div>
                <div id="contacts-text2">
                  <h3> <b> 044 242 0996 </b>  </h3> <br />
                    Консультації з навчання, <br />
                    пн-пт 09:00 − 18:00 <br /> <br />
                  <b>
                    conact@school.kiev.ua
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>



        <ul id="about" className="nav my-container ul-custom">
          <li className="nav-item" >
            <a className="nav-link link-mision" href="#">Наша місія</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Підхід до навчання</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Викладачі</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Реабілітологи</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Відгуки</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Документи закладу</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Питання - відповіді</a>
          </li>
          <li className="nav-item item-custom">
            <a className="nav-link link-custom" href="#">Отримати консультацію</a>
          </li>
        </ul>
        <ul id="special" className="nav my-container">
          <li className="nav-item">
            <a className="nav-link link-mision" href="#">Наша місія</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Навчальний план</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Корекційні зайняття</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Інтернат</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Питання-відповіді</a>
          </li>
          <li className="nav-item custom-link-1">
            <a className="nav-link custom-link-2" href="#">Отримати консультацію</a>
          </li>
        </ul>
        <ul id="reabilitation" className="nav my-container">
          <li className="nav-item">
            <a className="nav-link link-mision" href="#">Напрямки реабілітації</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Питання-відповіді</a>
          </li>
          <li className="nav-item item-custom">
            <a className="nav-link custom-link-2" href="#">Отримати консультацію</a>
          </li>
        </ul>
        <ul id="before-school" className="nav my-container">
          <li className="nav-item">
            <a className="nav-link link-mission" href="#">Програма підготовки</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Питання-відповіді</a>
          </li>
          <li className="nav-item item-custom">
            <a className="nav-link custom-link-2" href="#">Отримати консультацію</a>
          </li>
        </ul>
        <ul id="sponsor" className="nav my-container">
          <li className="nav-item item-custom">
            <a className="nav-link custom-link-2" href="#">Отримати консультацію</a>
          </li>
        </ul>
        <ul id="work" className="nav my-container">
          <li className="nav-item item-custom">
            <a className="nav-link custom-link-2" href="#">Отримати консультацію</a>
          </li>
        </ul>
        <span className="target"></span>
        <section id="main-image">
          <div id="text">
            <div id="big">
              Готуємо особливих <br /> діток до дорослого <br /> життя
            </div>
            <div id="small">
              Навчально-реабілітаційний <br /> центр №17 міста Києва
            </div>
          </div>
          <img src={REC} id="rect" />
        </section> 
      </nav>
    );
  };
};

export default navbar




















