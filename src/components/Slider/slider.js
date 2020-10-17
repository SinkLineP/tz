import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.scss";
import "./slick.css";
import "./slick-theme.css";

export default class SimpleSlider extends Component {



    render() {
        const photos = [
            {
                name: 'Photo 1',
                url: "https://img01.rl0.ru/2e82b0cc123b3190ef59715c6292c6be/c615x400i/https/news.rambler.ru/img/2018/05/31090404.928837.6250.jpeg"
            },
            {
                name: 'Photo 2',
                url: "https://klike.net/uploads/posts/2019-03/1551772531_1.jpg"
            },
            {
                name: 'Photo 3',
                url: "https://millionstatusov.ru/pic/statpic/all8/5e04c21a52a39.jpg"
            },
            {
                name: 'Photo 4',
                url: "https://www.davno.ru/assets/images/cards/big/love-34.jpg"
            },
            {
                name: 'Photo 5',
                url: "https://s1.1zoom.ru/big0/235/Poppies_Summer_Grasslands_Trees_562184_1270x1024.jpg"
            },
        ];

        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            arrows: false,
            adaptiveHeight: true,
            className: "slides",
        };
        return (
            <div>
                {/* <h2> Single Item</h2> */}
                <Slider {...settings}>
                    {photos.map((photo) => {
                        return (
                            <div className="size-slider">

                                <div className="otziv">
                                    <p> Відгуки батьків</p>
                                </div>
                                <div className="name-otziv">
                                    <p> ДЕРЕВ’ЯНКО         <br />     Олексій</p>
                                </div>
                                <div className="img-otziv">
                                    
                                </div>
                                <div className="text-otziv">
                                    <p>У школі працюють фахівці з великим досвідом<br /> роботи. До кожного особливій дитині знаходять<br /> підхід. Після закінчення школи діток приймають в <br />швейне і взуттєве училище, так як з 5-го класу їх <br />навчають спеціальності обувшіка або швачки або<br /> вишивальниць. З дітками працюють логопеди, <br />реабілітологи, дефектологи.</p>
                                </div>



                            </div>
                        )
                    })}
                </Slider>   
            </div>
        );
    }
}