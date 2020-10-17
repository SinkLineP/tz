import React from 'react';
import "./infoDirector.scss";

const infoDirector = () => {
    return (
        <div>
            <div className="teach">
                <div className="imgDirector">
                </div>
                <h1 className="text-dir">
                    Місія наної команди — <br />підготувати, наскільки це <br />можливо, особивих дітей до <br />самостійного дорослого життя.
                </h1>
                <p className="nameDirector">
                    Остапенко Лариса Іванівна<br/>
                    Директор закладу    
                </p>
                <p className="textDirector">
                    Звернення<br/>
                    Директора
                </p>
                <a href="#">
                <div className="circleButton"></div>
                <div className="triugolnikButton"></div>
                </a>
            </div>
            
        </div>
    )
}

export default infoDirector;
