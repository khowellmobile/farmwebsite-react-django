// src/CardCarousel.js
import classes from "./CardCarousel.module.css";
import React, { useState } from "react";

import BambiImage from "../../images/Bambi.jpg";
import GertrudeImage from "../../images/Gertrude.jpg";
import CatsImage from "../../images/Cats.jpg";

const CardCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cards = [
        {
            id: 1,
            title: "Card 1",
            content: "This is the content of Card 1",
            image: BambiImage,
        },
        {
            id: 2,
            title: "Card 2",
            content: "This is the content of Card 2",
            image: GertrudeImage,
        },
        {
            id: 3,
            title: "Card 3",
            content: "This is the content of Card 3",
            image: CatsImage,
        },
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
        );
    };

    return (
        <div className={classes.mainContainer}>
            <button className={classes.leftButton} onClick={handlePrev}>
                &lt;
            </button>
            <div
                className={classes.card}
                style={{ backgroundImage: `url(${cards[currentIndex].image})` }}
            >
                <div className={classes.carouselCardText}>
                    <h3>{cards[currentIndex].title}</h3>
                    <p>{cards[currentIndex].content}</p>
                </div>
            </div>
            <button className={classes.rightButton} onClick={handleNext}>
                &gt;
            </button>
        </div>
    );
};

export default CardCarousel;
